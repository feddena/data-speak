const redashURL = "https://dashboard.superside.com";

// create query from SQL and return query id
export async function postNewQueryToRedash({ query, apiKey}) {
  const headers = {
    Authorization: `Key ${apiKey}`,
    "Content-Type": "application/json",
    "origin": "https://dadsfsdfshboard.superside.com",
  };
  const url = `/api/queries`;

  const baseURL = redashURL;

  try {
    let response = await fetch(`${baseURL}${url}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        query,
        data_source_id: 11,
        name: "DataSpeak Query",
      }),
    });

    response = await response.json();
    if (!response.id) {
      throw new Error("Failed to retrieve query ID from Redash.");
    }

    return response;
  } catch (error) {
    console.error("Error posting new query to Redash:", error);
    throw error;
  }
}

// edit query from SQL with specified query id
export async function editQueryInRedash({ query, queryId, apiKey}) {
  const headers = {
    Authorization: `Key ${apiKey}`,
    "Content-Type": "application/json",
    origin: "https://dadsfsdfshboard.superside.com",
  };
  const url = `/api/queries/${queryId}`;
  const baseURL = redashURL;
  let response = await fetch(`${baseURL}${url}`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      query,
      data_source_id: 11,
    }),
  });
  const textResponse = await response.text();
  return JSON.parse(textResponse);
}

export async function runQueryInRedash(queryId, apiKey, options = {}) {
  const headers = {
    Authorization: `Key ${apiKey}`,
    "Content-Type": "application/json", // Ensure the content type is set if needed
  };

  const url = `/api/queries/${queryId}/results`;
  const baseURL = redashURL;
  let response = await fetch(`${baseURL}${url}`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(options),
  });

  response = await response.json();
  // console.log({ response });

  if ("job" in response) {
    const jobUrl = `/api/queries/${queryId}/jobs/${response.job.id}`;
    // 1 == PENDING (waiting to be executed)
    // 2 == STARTED (executing)
    // 3 == SUCCESS
    // 4 == FAILURE
    // 5 == CANCELLED
    while (response.job.status < 3) {
      // While query isn't ready (pending or executing), poll for results every 100ms.
      // Polling time can be updated if you know that the query might take longer.
      response = await fetch(`${baseURL}${jobUrl}`, {
        method: "GET",
        headers: headers,
      });
      response = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    if (response.job.status === 4) {
      const dataResponse = await fetch(`${baseURL}${jobUrl}`, {
        method: "GET",
        headers: headers,
      });
      const data = await dataResponse.json();
      return data;
    }

    if (response.job.status === 3) {
      const dataResponse = await fetch(`${baseURL}${url}`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(options),
      });
      const data = await dataResponse.json();
      return data;
    } else {
      throw Error("Failed loading result");
    }
  } else {
    return response;
  }
}
