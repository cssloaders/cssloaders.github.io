import { BUBBLE } from './loaders/bubble.js';
import { CIRCLE } from './loaders/circle.js';
import { RECT } from './loaders/rect.js';
import { LINE } from './loaders/line.js';
import { PROGRESS } from './loaders/progress.js';
import { TEXT } from './loaders/text.js';
import { GRAPH } from './loaders/graph.js';
import { OBJECTS } from './loaders/objects.js';
import { SKELETON } from './loaders/skeleton.js';

const LOADERS = [...CIRCLE, ...BUBBLE, ...RECT, ...LINE, ...PROGRESS, ...TEXT, ...OBJECTS, ...GRAPH , ...SKELETON ];
const main = document.getElementById('main');
let currentLoaderIndex = 0;

const codePopupOverlay = document.querySelector('.overlay');
const editorOverlay = document.getElementById('editor-overlay');
const editorHtml = document.getElementById('editor-html');
const editorCss = document.getElementById('editor-css');
const editorPreview = document.getElementById('editor-preview');

function createLoader(i) {
    const loader = LOADERS[i];
    const sectionEl = document.createElement('div');
    sectionEl.className = 'section';
    sectionEl.dataset.id = loader.id;
    sectionEl.dataset.index = i;
    sectionEl.style.setProperty('--order', i);
    const shadowRoot = sectionEl.attachShadow({ mode: 'open' });
    
    const loaderEl = document.createElement('span');
    loaderEl.className = 'loader';
    loaderEl.innerHTML = loader.content || '';
    shadowRoot.appendChild(loaderEl);

    const loaderStyles = document.createElement('style');
    loaderStyles.type = 'text/css';
    loaderStyles.innerHTML = loader.css;
    shadowRoot.appendChild(loaderStyles);

    return sectionEl;
}

function showFeedback(button, message) {
    const originalText = button.textContent;
    button.disabled = true;
    button.classList.add('copied');
    button.textContent = message;

    setTimeout(() => {
        button.disabled = false;
        button.classList.remove('copied');
        button.textContent = originalText;
    }, 2000);
}

function updateEditorPreview() {
    const htmlContent = editorHtml.value;
    const cssContent = editorCss.value;

    editorPreview.innerHTML = '';

    const shadowHost = document.createElement('div');
    shadowHost.style.width = '100%';
    shadowHost.style.height = '100%';

    const shadowRoot = shadowHost.attachShadow({ mode: 'open' });

    shadowRoot.innerHTML = `
        <style>
            :host {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
            }
            ${cssContent}
        </style>
        ${htmlContent}
    `;
    
    editorPreview.appendChild(shadowHost);
}

LOADERS.forEach((_, i) => {
    main.appendChild(createLoader(i));
});

document.querySelectorAll('#main .section').forEach(elm => {
    elm.addEventListener('click', (e) => {
        currentLoaderIndex = parseInt(e.currentTarget.dataset.index);
        const loader = LOADERS[currentLoaderIndex];
        const showCase = document.querySelector('.showcase');

        showCase.replaceChildren(createLoader(currentLoaderIndex));
        document.querySelector('#markup').textContent = loader.html;
        document.querySelector('#css').textContent = loader.css;
        
        document.body.classList.add('pop');
        codePopupOverlay.classList.add('in');
    });
});

function closePopup(overlay) {
    document.body.classList.remove('pop');
    overlay.classList.remove('in');
}

document.querySelector('.btn-close').addEventListener('click', () => closePopup(codePopupOverlay));
codePopupOverlay.addEventListener('click', (e) => {
    if (e.target === codePopupOverlay) closePopup(codePopupOverlay);
});

document.getElementById('editor-close').addEventListener('click', () => closePopup(editorOverlay));
editorOverlay.addEventListener('click', (e) => {
    if (e.target === editorOverlay) closePopup(editorOverlay);
});

document.querySelectorAll('.copy').forEach(copyBtn => {
    copyBtn.addEventListener('click', (e) => {
        const button = e.currentTarget;
        const id = button.dataset.id;
        const textToCopy = document.getElementById(id).textContent;

        navigator.clipboard.writeText(textToCopy).then(() => {
            const textSpan = button.querySelector('span') || button;
            const originalText = textSpan.textContent;
            button.disabled = true;
            button.classList.add('copied');
            textSpan.textContent = 'Copié!';
            setTimeout(() => {
                button.disabled = false;
                button.classList.remove('copied');
                textSpan.textContent = originalText;
            }, 3000);
        }).catch(err => console.error('Erreur de copie:', err));
    });
});

document.querySelectorAll('.btn-edit').forEach(editBtn => {
    editBtn.addEventListener('click', () => {
        const loader = LOADERS[currentLoaderIndex];
        editorHtml.value = loader.html;
        editorCss.value = loader.css;
        updateEditorPreview();
        editorOverlay.classList.add('in');
    });
});

editorHtml.addEventListener('input', updateEditorPreview);
editorCss.addEventListener('input', updateEditorPreview);

document.getElementById('copy-html-edited').addEventListener('click', (e) => {
    navigator.clipboard.writeText(editorHtml.value).then(() => showFeedback(e.currentTarget, 'HTML Copié!'));
});

document.getElementById('copy-css-edited').addEventListener('click', (e) => {
    navigator.clipboard.writeText(editorCss.value).then(() => showFeedback(e.currentTarget, 'CSS Copié!'));
});

document.getElementById('download-css').addEventListener('click', (e) => {
    const blob = new Blob([editorCss.value], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'loader.css';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showFeedback(e.currentTarget, 'Téléchargé!');
});

document.getElementById('download-zip').addEventListener('click', (e) => {
    if (typeof JSZip === 'undefined') {
        alert("La bibliothèque de ZIP n'a pas pu être chargée.");
        return;
    }
    const zip = new JSZip();
    zip.file("index.html", `<style>\n${editorCss.value}\n</style>\n${editorHtml.value}`);
    zip.file("loader.css", editorCss.value);

    zip.generateAsync({ type: "blob" }).then(function(content) {
        const url = URL.createObjectURL(content);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'custom-loader.zip';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showFeedback(e.currentTarget, 'ZIP Créé!');
    });
});