export const api = (
    path,
    method = "GET",
    body = null,
    credentials = null
    ) => {
    const url = `http://localhost:5000/api` + path;

    const options = {
        method,
        headers: {}
    }

    if (body) {
        options.body = JSON.stringify(body);
        // bracket notation needed because Content-Tyoe is a string
        options.headers["Content-Type"] = "application/json; charset=utf-8";
    }

    // encoding user credentials following the basic authentication scheme requirement
    // btoa() creates a base 64 endoded ASCII string from a string of data
    // basic authentication requires the username and password to be separated by a colon :  
    if (credentials) {
        const encodedCredentials = btoa(`${credentials.emailAddress}:${credentials.password}`);

        options.headers["Authorization"] = `Basic ${encodedCredentials}`
    }

    return fetch (url, options);

};