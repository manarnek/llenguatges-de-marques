//seleccionem els elemenets <h1> amb id= titol i <p> amb class="paragraf"

const titol = document.querySelector("titol")
const paragraf = document.querySelector ("paragraf")

//modifiquem el contingut 

document.querySelector('h1').textContent = 'Anem a fer la Practica01'
document.querySelector('p').textContent = "Acompanya'm a fer la pràctica"

//apliquem estils del css

document.querySelector('p').classList.add('colorParraf') //text en  negreta 
document.querySelector('h1').classList.add('colorText') //color del text lila
document.querySelector('h1').classList.add('sizeText') // mida de la lletra 90px

//Ara afegirem esdeveniments al botó 

btnCanviarText = document.getElementById('canviarText'); // seleccionem el botó amg getElementById

document.getElementById("canviarText").addEventListener("click", function() {
    let titol = document.getElementById("titol");
    titol.textContent = "SORPRESA!";
    titol.style.color = "yellow"; // Canvia el color del text
});

btnCanviarText = document.getElementById('canviarText'); // seleccionem el botó amg getElementById



//Ara afegirem i eliminarem elements

//** el nostre objectiu es premer un botó i un cop realitzada l'acció es modifiqui la llista */

//1r pas. Seleccionar els botons 

const btnAfegirElement = document.getElementById('afegirElement')
const btnEliminarElement = document.getElementById('eliminarElement')
const llista = document.getElementById('llista')

//2n pas. Afegir un element a la llista 

btnAfegirElement.addEventListener('click', function() {
    const nouElement = document.createElement('li');
    nouElement.textContent = "Nou element afegit!";
    llista.appendChild(nouElement);
});

//3r pas. ELiminar l'últim element de la llista 

btnEliminarElement.addEventListener('click', function() {
    if (llista.children.length > 0) {
        llista.removeChild(llista.lastElementChild);
    }
});

//**la mida del text també es pot fer pel script.js i pel css, al no especificar ho he fet a través del css**


