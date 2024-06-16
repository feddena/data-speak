import { ANALITIC_ROLE_PROMPT } from './prompts.js';
import { INSTRUCTIONS_PROMPT } from './prompts.js';
import { CHAIN_OF_THOUGHTS_PROMPT } from './prompts.js';
import { WAHT_NOT_TO_DO_PROMPT } from './prompts.js';
import { EXAMPLE_CONFIRMATION } from './prompts.js';
import { DB_SCHEMA } from './prompts.js';

export async function askChatGPT(apiToken, chatModel, chatHistory, customPrompt) {
  const systemPrompt = `
  ${ANALITIC_ROLE_PROMPT}
  ${INSTRUCTIONS_PROMPT}
  ${customPrompt}
  ${CHAIN_OF_THOUGHTS_PROMPT}
  ${WAHT_NOT_TO_DO_PROMPT}
  ${customPrompt}
  ${EXAMPLE_CONFIRMATION}
  ${DB_SCHEMA}`


    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiToken}`
        },
        body: JSON.stringify({
          model: chatModel,
          messages: [
            {
              role: "system",
              content: systemPrompt,
            },
            ...chatHistory
          ],
          max_tokens: 500
        })
      });
  
      const data = await response.json();
      if (response.ok) {
        return data.choices[0].message.content.trim();
        //chatHistory.push({ role: "assistant", content: botMessage });
        //return botMessage;
      } else {
        console.error('Error from OpenAI API:', data);
        return "An error occurred while fetching the response";
      }
    } catch (error) {
      console.error('Fetch error:', error);
      return "An error occurred while fetching the response.";
    }
  }
