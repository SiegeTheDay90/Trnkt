
export const restoreCSRF = async () => {
  const response = await csrfFetch('/api/session');
  if(response.ok){
    storeCSRF(response);
  }

  return response;
}

export const storeCSRF = (response) => {
  const token = response.headers.get('X-CSRF-Token');

  if(token){
    sessionStorage.setItem('X-CSRF-Token', token);
  } else {
    sessionStorage.removeItem('X-CSRF-Token');
  }
}

async function csrfFetch(url, options = {}) {

  options.method = options.method || "GET";
  options.headers = options.headers || {};

  if (options.method.toUpperCase() !== "GET") {
    options.headers["Content-Type"] = options.headers["Content-Type"] || "application/json";
    options.headers["X-CSRF-Token"] = sessionStorage.getItem('X-CSRF-Token');
  }

  const res = await fetch(url, options);

  if (res.status >= 400) throw res;

  return res;
}
export default csrfFetch;