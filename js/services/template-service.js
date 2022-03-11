import { httpService } from "./http-service.js";

export const templateService = {
    getTamplates,
}

const appType = 'desktop'
const apiKey = 'f9040ab1b9c802857aa783c469d0e0ff7e7366e4'
const sourceType = 'video'
const sourceId = '214321562187'
const sourceUrl = 'http://www.site.com/videos/214321562187.html'

function getTamplates(cb, count = 8) {
    const queryParams = {
        'app.type': appType,
        'app.apikey': apiKey,
        'source.type': sourceType,
        'source.id': sourceId,
        'source.url': sourceUrl,
        count,
    }
    httpService.get('1.0/json/taboola-templates/recommendations.get', queryParams, cb)
}