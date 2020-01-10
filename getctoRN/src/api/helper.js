import axios from 'axios';

export const configureInterceptor = () => {};

// general token
const baseToken = 'QzIhhBBE3HBws/rLiKCYqPOmlzd0IHKC';

export const getHeader = () => {
  return {
    Authorization: `Bearer ${baseToken}`,
    'Content-type': 'application/json',
  };
};

export const getFullUrl = endpoint => {
  return 'http://api.api.com' + endpoint;
};

const fetchApi = (method, endpoint, params, headers) =>
  axios({
    method,
    headers: headers || getHeader(),
    url: getFullUrl(endpoint),
    data: params,
    timeout: 10000,
  })
    .then(response => ({response}))
    .catch(error => ({error}));

export default fetchApi;
