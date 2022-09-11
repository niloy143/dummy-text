document.getElementById('generate-button').addEventListener('click', show);

function show() {
    const showContainer = document.getElementById('show-container');
    const paragraph = document.getElementById('paragraph').checked;
    const wordCount = getValue('word-count');

    if (!paragraph) {
        showContainer.innerHTML = generate(wordCount, false);
    }
    else {
        showContainer.innerHTML = '';
        generate(wordCount, true).forEach(x => {
            const p = document.createElement('p');
            p.innerText = x;
            p.classList.add('mb-5')
            showContainer.appendChild(p);
        })
    }
}

show();