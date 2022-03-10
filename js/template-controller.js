import { templateService } from './template-service.js'

// making sure body is loaded before running the script
(function () {
    document.body.onload = onInit;
})()

async function onInit() {
    try {
        const templates = await templateService.getTamplates();
        console.log(templates);
        renderTemplates(templates);
    } catch (err) {
        console.log(err);
    }
}

function renderTemplates(templates) {
    document.querySelector('.recommendations').innerHTML = templates.map((temp) => {
        return `<article class="recommendation">
                    <div>
                        <div class="img" style="background-image: url(${temp.thumbnail[0].url})">
                        </div>
                        <div class="name">${temp.name}</div>
                    </div>
                </article>`
    }).join('');
}