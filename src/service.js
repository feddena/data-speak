const { ipcRenderer } = require('electron');

// ---------------- UI ----------------
import { addMessageToUI } from './ui.js';
// ----------------INTEGRATIONS--------------
import { askChatGPT } from './src/openai-api.js';
import { postNewQueryToRedash, runQueryInRedash, editQueryInRedash } from './src/redash-api.js';
// ---------------- STATE ----------------
import { saveState } from './state.js';
import { currentQueryId } from './state.js';
import { chatHistory } from './state.js';

export async function fetchResponse(chatHistory) {
    const apiToken = await ipcRenderer.invoke('get-store-data', 'apiToken');
    const chatModel = await ipcRenderer.invoke('get-store-data', 'chatModel');
    const customInstructionsPrompt = await ipcRenderer.invoke('get-store-data', 'customInstructionsPrompt')
    const customNotToDoPrompt = await ipcRenderer.invoke('get-store-data', 'customNotToDoPrompt')
    const selectedChatModel = chatModel || 'gpt-4o';
    return new Promise((resolve, reject) => {
        if (!apiToken) {
            const missingChatTokenMessage = "Set up the ChatGPT token first in the settings.";
            resolve(missingChatTokenMessage);
        }
        try {
            askChatGPT(apiToken, selectedChatModel, chatHistory, customInstructionsPrompt, customNotToDoPrompt)
            .then(botMessage => { resolve(botMessage) });
        } catch (error) {
            console.error('Fetch error:', error);
            resolve("An error occurred while fetching the response.");
        }
    });
}

export async function handleSqlResponse(botSqlCode, redashToken) {
    if (!redashToken) {
        const missingRedashTokenMessage = "To automatically validate query in Redash add its API key in the settings.";
        chatHistory.push({ role: "assistant", type: 'service-message', content: missingRedashTokenMessage });
        addMessageToUI('bot-message', missingRedashTokenMessage, true);
        return;
    }

    if (!currentQueryId) {
        chatHistory.push({ role: "assistant", content: "Creating query in Redash...", type: "service-message" });
        addMessageToUI('bot-message', "Creating query in Redash...", true);

        const id = await createQuery({ query: botSqlCode, apiKey: redashToken });
        currentQueryId = id;
    } else {
        await updateQuery({ query: botSqlCode, queryId: currentQueryId, apiKey: redashToken });
    }
    const result = await runQueryInRedash(currentQueryId, redashToken, {});
    const queryUrl = `https://dashboard.superside.com/queries/${currentQueryId}/source`;
    processResult(result, queryUrl, botSqlCode);
}

async function updateQuery({ query, queryId, apiKey }) {
    try {
        await editQueryInRedash({ query, queryId, apiKey });
        const queryUrl = `https://dashboard.superside.com/queries/${queryId}/source`;
        const createdQueryMessage = `Updated query <a target="_blank" href="${queryUrl}">${queryUrl}</a> executing...`;
        chatHistory.push({ role: "assistant", content: createdQueryMessage, type: "service-message" });
        addMessageToUI('bot-message', createdQueryMessage, true);
    } catch (error) {
        console.error("Error updating query in Redash:", error);
        throw new Error("Failed to update query in Redash.");
    }
}

async function createQuery({ query, apiKey }) {
    try {
        const response = await postNewQueryToRedash({ query, apiKey });
        const { id } = response;

        const queryUrl = `https://dashboard.superside.com/queries/${id}/source`;
        const createdQueryMessage = `Created query <a target="_blank" href="${queryUrl}">${queryUrl}</a> executing...`;
        chatHistory.push({ role: "user", content: createdQueryMessage, type: "service-message" });
        addMessageToUI('bot-message', createdQueryMessage, true);

        return id;
    } catch (error) {
        console.error("Error creating query in Redash:", error);
        throw new Error("Failed to create query in Redash.");
    }
}

function processResult(result, queryUrl, botSqlCode) {
    console.log("Starting processing result:", result);
    if (!result.query_result) {
        const errorMessage = `The query "${botSqlCode}" failed with error: ${result.job.error}`;
        chatHistory.push({ role: "assistant", content: errorMessage, type: "service-message"});
        addMessageToUI('bot-message', errorMessage, true, true);
        saveState();
    } else {
        const columnsLength = result?.query_result?.data?.columns?.length ?? 0;
        const rowsLength = result?.query_result?.data?.rows?.length ?? 0;
        const runtime = result?.query_result?.runtime?.toFixed(2) ?? 0;
        const successQueryMessage = `Query ran successfully <a target="_blank" href="${queryUrl}">${queryUrl}</a> Result: ${columnsLength} columns, ${rowsLength} rows, query took ${runtime} seconds`;
        chatHistory.push({ role: "assistant", content: successQueryMessage, type: "service-message" });
        addMessageToUI('bot-message', successQueryMessage, true);
        saveState();
    }
}
