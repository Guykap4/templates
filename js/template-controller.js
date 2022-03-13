import { templateService } from './services/template-service.js';

export const mainJs = {
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
    const elContainer = document.querySelector('.recommendations');
    elContainer.innerHTML = templates.map((temp) => {
        return `<a href="${temp.url}" target="_blank">
                    <article class="recommendation">
                        <div>
                            <img src="${temp.thumbnail[0].url}">
                            </div>
                            <div class="info">
                                <span>${temp.name}</span>
                                <span class="publisher">${temp.branding}<span>
                            </div>
                        </div>
                        </article>
                    </a>`
    }).join('');
    elContainer.querySelectorAll('img').forEach(elImg => {
        elImg.onerror = () => { onImgError(elImg) }
    })
}

function renderError() {
    const elErrContainer = document.querySelector('.error-container');
    const elBtn = elErrContainer.querySelector('button');
    elBtn.onclick = onGetTemplates;
    elErrContainer.style.display = 'flex'
}

function onImgError(elImg) {
    elImg.src = "../assets/imgs/default.jpg"
}