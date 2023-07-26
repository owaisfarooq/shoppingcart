const url = "http://erpsystems2.ddns.net:6079";
/**
 * @param {api} string
 * @param {payload} object
 * @param {callBack} function
 */
async function apiCall(api, payload, callBack) {
    fetch(url + api, payload)
        .then((response) => response.json())
        .then((json) => {
            if (json.status.code !== 0) {
                showNotification(json.status.message, "alert-danger");
                return 0;
            }
            callBack(json);
        })
        
}