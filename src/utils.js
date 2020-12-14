import axios from 'axios';

const resources = {};

const makeRequest = () => {
  let cancel;

  return async query => {
    if (cancel) {
      // Cancel the previous request before making a new request
      cancel.cancel();
    }
    // Create a new CancelToken
    cancel = axios.CancelToken.source();
    try {
      if (resources[query]) {
        // Return result if it exists
        return resources[query];
      }
      const res = await axios(query, { cancelToken: cancel.token });

      const result = res.data.results;
      // Store response
      resources[query] = result;
      return result;
    } catch (error) {
      console.log(error)
    }
  };
};

export const search = makeRequest();