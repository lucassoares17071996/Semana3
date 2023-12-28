let input = document.getElementById('txtname');
let button = document.getElementById('create');
let div = document.querySelector('div');

let codeCustumer = 0;
function addCategories() {
    let createParagraph = document.createElement('p');
    codeCustumer ++;
    let text = `code ${codeCustumer} nome: ${input.value}`;
    createParagrph.innerText = text;
    div.appendChild(createParagraph)
}
button.addEventListener("click",addCategories);