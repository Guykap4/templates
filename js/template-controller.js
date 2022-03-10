import { templateService } from './template-service.js'

// making sure body is loaded before running the script
(function() {
    console.log('here!');
    document.body.onload = onInit;
})()


function onInit() {
    templateService.getTamplates(renderTemplates);
}

function renderTemplates(templates) {
    console.log(JSON.parse(templates));
}