import { httpService } from "./http-service.js";
import { config } from "../config.js";

export const templateService = {
    getTemplates,
}

function getTemplates(cb, count = 8) {
    const queryParams = {
        'app.type': config.appType,
        'app.apikey': config.apiKey,
        'source.type': config.sourceType,
        'source.id': config.sourceId,
        'source.url': config.sourceUrl,
        count,
    }
    httpService.get('1.0/json/taboola-templates/recommendations.get', queryParams, cb)
}