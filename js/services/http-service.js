export const httpService = {
    get,
}

const BASE_URL = 'http://api.taboola.com'

function get(endpoint, params, cb) {
    XMLReq(endpoint, 'GET', params, cb)
}

function XMLReq(endpoint, method = 'GET', params, cb) {

    const req = new XMLHttpRequest();
    const urlParams = new URLSearchParams(params).toString();
    const url = `${BASE_URL}/${endpoint}?${urlParams}`
    // const url = 'make an error'
    const reqInfo = { data: null, err: null }

    req.onreadystatechange = () => {
        if (req.readyState === XMLHttpRequest.DONE) {
            if (req.status === 200) {
                reqInfo.data = JSON.parse(req.responseText);
            } else {
                console.log(`error in ${method} to ${url}`);
                reqInfo.err = req.statusText;
            }
        }
        cb(reqInfo);
    }
    req.open(method, url);
    req.send();
}