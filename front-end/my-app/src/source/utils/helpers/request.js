import 'whatwg-fetch';
import Promise from 'bluebird';
import Auth from 'helpers/auth';

export function request(url, options) {
    return httpRequest(("http://localhost:1000/" + url), addAuthorizationHeader(options))
}

export function httpRequest(url, options) {

    try {

        return new Promise((resolve, reject) => {

            fetch(url, options)
                .then((response) => {

                    if (response.status == 200 || response.status == 201) {

                        parseJSON(response).then((data) => {

                            let result = { completed: true, response, data };
                            resolve(result);
                        });   

                    } else if (response.status == 401) {

                        alert("Unauthorized access ! Please login again");
                        let result = { completed: false, response, data: null };
                        resolve(result);

                    } else {

                        let result = { completed: false, response };
                        resolve(response);
                    }
                })
                .catch((err, a) => {

                    let result = { completed: false, error: err };
                    resolve(result);
                })
        })
    }
    catch (e) { 

        alert("REQUEST FAILED");
    }
}

function parseJSON(response) {
    
    return new Promise((resolve) => {

        response.json().then((data) => {

            resolve(data);
        });
    })
}

function checkStatus(response) {

    if (response.status >= 200 && response.status < 300) {

        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

function addAuthorizationHeader(options) {

    options = options || {};
    if (options.headers) {

        options.headers.Authorization = Auth.getToken();
    } else {

        options.headers = {

            Authorization: Auth.getToken()
        }
    }

    return options;
}