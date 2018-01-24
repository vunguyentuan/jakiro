const BASE_URL = 'https://api.github.com'

const fetchJSON = (url, options) => fetch(url, options).then(response => response.json())

export const getUserInfo = (username) => {
  return fetchJSON(`${BASE_URL}/users/${username}`)
}

export default {
  getUserInfo
}