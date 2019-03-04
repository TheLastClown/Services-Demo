/* eslint-disable no-dupe-keys */
class Api {
  auth = null;

  static headers() {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    };
  }

  static setAuth(auth) {
    this.auth = auth;
  }

  static get(URL_SERVER, route) {
    return this.xhr(URL_SERVER, route, null, "GET");
  }

  static xhr(URL_SERVER, route, params, verb) {
    const host = URL_SERVER;
    const url = `${host}${route}`;
    const options = Object.assign(
      { method: verb },
      params ? { body: JSON.stringify(params) } : null,
    );
    return fetch(url, options).then(resp => {
      const json = resp.json();
      if (resp.ok) {
        return json;
      }
      return json.then(err => {
        throw err;
      });
    });
  }
}

export default Api;
