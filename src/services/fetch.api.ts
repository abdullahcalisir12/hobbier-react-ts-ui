export function get(url: string) {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
  .then((response) => {
    return response.json();
  })
  .catch(error => {
    console.error(error);
  });
}

export function post(url: string, data: object = {}) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((response) => {
    return response.json();
  })
  .catch(error => {
    console.error(error);
  });
}