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
    console.log('params', urlParams);
    const url = `${BASE_URL}/${endpoint}?${urlParams}`
    const reqInfo = { data: null, err: null }
    
    req.onreadystatechange = () => {
        if (req.readyState === XMLHttpRequest.DONE) {
            if (req.status === 200) {
                reqInfo.data = JSON.parse(req.responseText);
            } else {
                console.log(`error in ${method} to ${url}`);
                // reqInfo.err = req.;
            }
        }
        cb(reqInfo);
    }
    req.open(method, url);
    req.send();
}