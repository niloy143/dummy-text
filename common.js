const consonent = 'bcdfghjklmnpqrstvwxyz'.split('');
const vowel = 'aeiou'.split('');

let checked = false;
const toggle = element => {
    if(!checked){
        element.checked = true;
        checked = true;
    }
    else {
        element.checked = false;
        checked = false;
    }
}

const getValue = id => {
    const input = document.getElementById(id);
    return parseInt(input.value);
}

const random = (from, to) => Math.floor(Math.random() * ((to - from) + 1)) + from;

const word = () => {
    const length = random(2, 9);
    const builtWord = [];
    for (let i = 0; i < length; i++) {
        i % 2 === 0 ? builtWord.push(consonent[random(0, consonent.length - 1)]) : builtWord.push(vowel[random(0, vowel.length - 1)]);
    }

    return builtWord.join('');
}

const generate = (l, p) => {

    if (l > 1000000 || l < 1 || !l) {
        l = 500;
    }

    let container = [];
    const words = l;
    for (let i = 0; i < words; i++) {
        if (!l) {
            break;
        }
        container[i] = [];

        let sentenceLength = random(4, 12);

        if (sentenceLength > l) {
            sentenceLength = l;
        }

        for (let j = 0; j < sentenceLength; j++) {
            container[i].push(word());
        }

        l = l - sentenceLength;
    }

    container = container.map(x => x.join(' ')[0].toUpperCase() + x.join(' ').slice(1) + '.');

    if (!p) {
        return container.join(' ');
    }
    else {
        let paragraphContainer = [];
        let sentences = container.length;
        const loopLength = sentences;

        for (let i = 0; i < loopLength; i++) {
            if (sentences === 0) { break; }
            let paragraphLength = random(7, 30);
            if (paragraphLength > sentences) {
                paragraphLength = sentences;
            }
            paragraphContainer.push(container.splice(0, paragraphLength));
            sentences = sentences - paragraphLength;
        }

        paragraphContainer = paragraphContainer.map(x => x.join(' '))

        return paragraphContainer;
    }
}