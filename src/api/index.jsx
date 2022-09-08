
export const getApiCustomers = (url) => () => fetch(url).then(res => res.json());