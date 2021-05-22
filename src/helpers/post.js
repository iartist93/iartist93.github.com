/**
 * Helper to API async request.
 * @param {*} url end point
 * @param {*} data object to send
 * @param {*} method `GET`, `POST`, `DELETE`, `PUT`, ....
 * @returns resonse object
 */
export async function postData(url = '', data = {}, method = 'POST') {
  const response = await fetch(url, {
    method,
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });
  return response.json();
}
