export const httpService = {
    get,
}

const BASE_URL = 'https://api.taboola.com'

function get(endpoint, params, cbs) {
    XMLReq(endpoint, 'GET', params, cbs)
}

function XMLReq(endpoint, method = 'GET', params, cbs, body) {

    const req = new XMLHttpRequest();
    const urlParams = new URLSearchParams(params).toString();
    const url = `${BASE_URL}/${endpoint}?${urlParams}`
    // const url = 'making an error'
    const reqInfo = { data: null, err: null }

    req.onreadystatechange = () => {
        if (req.readyState === XMLHttpRequest.DONE) {
            if (req.status === 200) {
                reqInfo.data = JSON.parse(req.responseText);
                cbs.onSuccess(reqInfo);
            } else if (new RegExp(/(4|5)\d\d/).test(req.status)) {
                console.log(`error in ${method} to ${url}`);
                reqInfo.err = req.statusText;
                cbs.onFail(reqInfo)
            }
        }
    }
    req.open(method, url);
    method === 'GET' ? req.send() : req.send(JSON.stringify(body))
}