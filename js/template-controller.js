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
    // object containing the success and failure
    templateService.getTemplates({ onSuccess: renderTemplates, onFail: renderError });
}

function renderTemplates(res) {
    document.querySelector('.error-container').style.display = 'none'
    const templates = res.data.list
    const elContainer = document.querySelector('.recommendations');

    let htmlStr = ''
    templates.map((temp) => {
        const categories = temp.categories?.[0] || null;
        console.log(categories);
        htmlStr += `<a href="${temp.url}" target="_blank">
                    <article data-categories="${categories}" class="recommendation">
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

    // optional - register users article prefs
    assignArticleMouseEv();
}

function renderError() {
    const elErrContainer = document.querySelector('.error-container');
    const elBtn = elErrContainer.querySelector('button');
    elBtn.onclick = onGetTemplates;
    elErrContainer.style.display = 'flex'
}

function assignArticleMouseEv() {
    let timeoutId;

    document.querySelectorAll('.recommendations article').forEach(template => {
        template.onmouseenter = () => {
            timeoutId = setTimeout(() => {
                let userPrefs = JSON.parse(sessionStorage.getItem('userPrefs'));
                userPrefs ? userPrefs.push(template.dataset.categories) : userPrefs = [template.dataset.categories]
                sessionStorage.setItem('userPrefs', JSON.stringify(userPrefs));
            }, 5000)
        }

        template.onmouseleave = () => {
            clearTimeout(timeoutId);
        }
    })
}