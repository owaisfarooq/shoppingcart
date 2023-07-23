const url = "http://erpsystems2.ddns.net:6079";
/**
 * @param {api} string
 * @param {payload} object
 * @param {callBack} function
 */
async function apiCall(api, payload, callBack) {
    fetch(url + api, payload)
        .then((response) => response.json())
        .then((json) => callBack(json))
}