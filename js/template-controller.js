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
    templateService.getTemplates(renderTemplates);
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

    // maybe rell?
    // request status
    // oneMouseEnter
    
    let htmlStr = ''
    templates.map((temp) => {
        htmlStr += `<a href="${temp.url}" target="_blank">
                    <article class="recommendation">
                        <div>
                            <img onerror="() => this.onerror = null; this.src='assets/imgs/default.jpg'" src="${temp.thumbnail[0].url}">
                            </div>
                            <div class="info">
                                <span>${temp.name}</span>
                                <span class="publisher">${temp.branding}<span>
                            </div>
                        </div>
                        </article>
                    </a>`
    });
    elContainer.innerHTML = htmlStr;
}

function renderError() {
    const elErrContainer = document.querySelector('.error-container');
    const elBtn = elErrContainer.querySelector('button');
    elBtn.onclick = onGetTemplates;
    elErrContainer.style.display = 'flex'
}