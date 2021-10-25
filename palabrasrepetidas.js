//document.addEventListener("DOMContentLoaded", function(e){
    //console.log(findDupLetter(clearText(document.getElementById("texto-entrada").textContent)));
    //console.log(findDupWord(clearText(document.getElementById("texto-entrada").textContent)));
//})

window.onload = () => {
    //Obtener nodes/IDs
    const inputText = document.querySelector('#texto-entrada');
    const resultParent = document.querySelector('#resultados');

    //Limpiar texto
    function clearText(text) {
        text = text.replaceAll("\n", "");
        text = text.replaceAll("\s", "");
        text = text.replaceAll(",", "");
        text = text.replaceAll(".", "");
        text = text.replaceAll('        ', '');
    return text
    }

    //1. Retornar la cantidad de veces que se repite una letra dentro del texto.
    function addLettersToArray(text) {
        return text = text.split("")
    }
    function findDupLetter(text) {
        let arrayLetters = addLettersToArray(text)
        let matchedLetters = [];
        let dupLetters = [];
        for (let i = 0; i < arrayLetters.length; i++) {
            let letter = 0;
            for (let j = 0; j < arrayLetters.length; j++) {
                if (arrayLetters[i] === arrayLetters[j] && !matchedLetters.includes(arrayLetters[i])) {
                    letter = letter + 1 //letter++
                }
            }
            matchedLetters.push(arrayLetters[i]);
            if (letter > 1) {
                dupLetters.push(`${arrayLetters[i]}: ${letter}`)
            }
        }
        return dupLetters
    }
    //Resultado letras
    const setResult1 = (results, node) => {
        for (const result in results) {
            node.insertAdjacentHTML('beforeend',
                `<p>
                <strong>Letra#${result} </strong>
                <span> Cantidad || ${results[result]}</span>
            </p>`)
        }
    }
    const letters = clearText(inputText.textContent);
    setResult1(findDupLetter(letters), resultParent);

    //2. Retornar la cantidad de veces que se repite una palabra dentro del texto.
    function addWordsToArray(text) {
        return text = text.split(" ")
    }
    function findDupWord(text) {
        let arrayWords = addWordsToArray(text)
        let matchedWords = [];
        let dupWords = [];
        for (let i = 0; i < arrayWords.length; i++) {
            let word = 0;
            for (let j = 0; j < arrayWords.length; j++) {
                if (arrayWords[i] === arrayWords[j] && !matchedWords.includes(arrayWords[i])) {
                    word = word + 1
                }
            }
            matchedWords.push(arrayWords[i]);
            if (word > 1) {
                dupWords.push(`${arrayWords[i]}: ${word} `)
            }
        }
        return dupWords
    }
    //Resultado palabras
    const setResult2 = (results, node) => {
        for (const result in results) {
            node.insertAdjacentHTML('beforeend',
                `<p>
                <strong>Palabra#${result} </strong>
                <span> Cantidad || ${results[result]}</span>
            </p>`)
        }
    }
    const words = clearText(inputText.textContent);
    setResult2(findDupWord(words), resultParent);
}