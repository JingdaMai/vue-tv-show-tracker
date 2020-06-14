const baseUrl = 'https://api.tvmaze.com/';

export default {
  get(params) {
    const url = baseUrl + params;
    return fetch(url).then(resp => resp.json());
  }
}