export const templateService = {
    getTamplates,
}

const BASE_URL = `http://api.taboola.com/1.0/json/taboola-templates/recommendations.get?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&count=8&source.type=video&source.id=214321562187&source.url=http://www.site.com/videos/214321562187.html`

function getTamplates() {
    // "promisifying" the native request
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open('GET', BASE_URL)
        req.onload = () => {
            resolve(JSON.parse(req.response).list);
        }
        req.onerror = (err) => {
            reject('err in get templates', err)
        }
        req.send();
    })
}
