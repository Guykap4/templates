import { templateService } from './services/template-service.js';

export const mainJS = {
    onInit,
    onGetTemplates,
    renderTemplates,
    renderError,
};

// making sure body is loaded before running the script
(function () {
    document.body.onload = onInit;
})();

function onInit() {
    onGetTemplates();
}

function onGetTemplates() {
    templateService.getTamplates(renderTemplates);
}

function renderTemplates(res) {
    if (!res.data && !res.err) return
    else if (res.err) {
        renderError();
        return;
    }
    document.querySelector('.error-container').style.display = 'none'
    const templates = res.data.list
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

function renderError() {
    const elErrContainer = document.querySelector('.error-container');
    const elBtn = elErrContainer.querySelector('button');
    elBtn.onclick = onGetTemplates;
    elErrContainer.style.display = 'flex'
}