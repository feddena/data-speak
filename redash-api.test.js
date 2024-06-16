import fetchMock from 'fetch-mock';
const { postNewQueryToRedash, editQueryInRedash, runQueryInRedash } = require('./redash-api');

// Sample data
const apiKey = 'fakeApiKey';
const query = 'SELECT * FROM table;';
const queryId = 123;
const baseURL = 'https://dashboard.superside.com';

fetchMock.config.overwriteRoutes = true;

describe('Redash API functions', () => {

  afterEach(() => {
    fetchMock.restore();
  });

  test('postNewQueryToRedash should post a new query and return query ID', async () => {
    const responseData = { id: 1, name: 'DataSpeak Query' };

    fetchMock.post(`${baseURL}/api/queries`, {
      body: responseData,
      headers: { 'content-type': 'application/json' },
    });

    const response = await postNewQueryToRedash({ query, apiKey });

    expect(response).toEqual(responseData);
    expect(fetchMock.called()).toBeTruthy();
  });

  test('editQueryInRedash should edit a query and return response', async () => {
    const responseData = { id: queryId, name: 'Updated DataSpeak Query' };

    fetchMock.post(`${baseURL}/api/queries/${queryId}`, {
      body: responseData,
      headers: { 'content-type': 'application/json' },
    });

    const response = await editQueryInRedash({ query, queryId, apiKey });

    expect(response).toEqual(responseData);
    expect(fetchMock.called()).toBeTruthy();
  });

  test('runQueryInRedash should run a query and return result', async () => {
    const initialResponse = { job: { id: 'jobId', status: 2 } };
    const pollingResponse = { job: { id: 'jobId', status: 3 } };
    const finalResponse = { result: 'query result' };

    // Mock the initial POST request to start the query job
    fetchMock.postOnce(`${baseURL}/api/queries/${queryId}/results`, {
      body: initialResponse,
      headers: { 'content-type': 'application/json' },
    });

    // Mock the GET request to poll the job status
    fetchMock.getOnce(`${baseURL}/api/queries/${queryId}/jobs/jobId`, {
      body: pollingResponse,
      headers: { 'content-type': 'application/json' },
    });

    // Mock the final POST request to get the query result
    fetchMock.postOnce(`${baseURL}/api/queries/${queryId}/results`, {
      body: finalResponse,
      headers: { 'content-type': 'application/json' },
    });

    const response = await runQueryInRedash(queryId, apiKey);

    expect(response).toEqual(finalResponse);
    expect(fetchMock.called()).toBeTruthy();
  });
});
