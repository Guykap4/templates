import { templateService } from './services/template-service.js'

// making sure body is loaded before running the script
(function () {
    document.body.onload = onInit;
})()

function onInit() {
    templateService.getTamplates(renderTemplates);
}

function renderTemplates(res) {
    if (!res.data) return
    const templates = res.data?.list
    console.log(templates);
    document.querySelector('.recommendations').innerHTML = templates.map((temp) => {
        return `<a href="${temp.url}" target="_blank">
                    <article class="recommendation">
                        <div>
                            <div class="img" style="background-image: url(${temp.thumbnail[0].url}), url(../../assets/imgs/default.jpg)">
                            </div>
                            <div class="info">
                                <span>${temp.name}</span>
                                <span class="publisher">${temp.branding}<span>
                            </div>
                        </div>
                        </article>
                    </a>`
    }).join('');
}