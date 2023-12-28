let input = document.getElementById('txtname');
let button = document.getElementById('create');
let buttonShow = document.getElementById('showcategories');
let codeCustumer = 0;
button.addEventListener('click', function() {
    addCategories();
});
buttonShow.addEventListener("click", function() {
    if (buttonShow.innerHTML === "Show categories") {
        div.style.display = "block";
        buttonListar.innerHTML = "Hide categories";

    } else {
        div.style.display = "none";
        buttonShow.innerHTML = "Show categories";
    }
});
function addCategories() {
    let createParagraph = document.createElement('p');
    codeCustumer ++;
    let txt = `<p>Code ${codeCustumer} name: ${input.value}`
    createParagraph.innerHTML = txt;
    alert(`Categoria ${input.value} foi criada com sucesso`);
}