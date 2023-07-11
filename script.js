let capureELementGridContainerI;

let containerPixelBoard = document.getElementById('pixel-board');
let containerBoxInfo = document.getElementById('box-info');
let containerPaletteColor;
let captureClassColor = document.getElementsByClassName('color');
let captureClassPixels = document.getElementsByClassName('pixel');
let captureBottom = document.getElementById('clear-board');
let input = document.getElementById('generate-board');


window.onload = function () {

    createPalette();
    addListeningMainReed();
    addListeningMainReedDivsPixels();
    startupPixels();
}

const createPalette = () => {

    let line = 4;
    containerPaletteColor = document.getElementById('color-palette');

    for (let i = 0; i < line; i++) {
        if (i === 0) {
            const div = document.createElement('div');
            div.classList.add("color", "black", "selected");
            containerPaletteColor.appendChild(div);
        } else if (i === 1) {
            const div = document.createElement('div');
            div.classList.add("color", "blue");
            containerPaletteColor.appendChild(div);
        } else if (i === 2) {
            const div = document.createElement('div');
            div.classList.add("color", "yellow");
            containerPaletteColor.appendChild(div);
        } else {
            const div = document.createElement('div');
            div.classList.add("color", "green");
            containerPaletteColor.appendChild(div);
        }
    }

}

const addSelectedEvent = (event) => {

    let handleSelected = document.querySelector('.selected');
    handleSelected.classList.remove('selected');
    event.target.classList.add('selected');
}

const addListeningMainReed = () => {

    for (let i = 0; i < captureClassColor.length; i += 1) {
        captureClassColor[i].addEventListener("click", addSelectedEvent);
    }
}


const addListeningMainReedDivsPixels = () => {

    for (let i = 0; i < captureClassPixels.length; i += 1) {
        captureClassPixels[i].addEventListener("click", selectSquarePixels);

    }
}

const clearBottom = () => {

    let clearPixels = document.querySelectorAll('.pixel');

    for (let i = 0; i < clearPixels.length; i++) {
        clearPixels[i].classList.remove('black');
        clearPixels[i].classList.remove('yellow');
        clearPixels[i].classList.remove('blue');
        clearPixels[i].classList.remove('green');
        clearPixels[i].classList.add('white');
    }
}

captureBottom.addEventListener("click", clearBottom);


let buttonVqv = document.querySelector('#generate-board');

buttonVqv.addEventListener("click", function () {

    let theAmount = document.getElementById('board-size');

    if (theAmount.value !== "") {

        validateProhibited(theAmount);


        let lineAndCollum = theAmount.value;

        let containerPrincipalI = document.getElementById('pixel-board');
        containerPrincipalI.innerHTML = "";

        for (let i = 0; i < lineAndCollum; i += 1) {

            let recipienteDivsForJ = document.createElement('div');
            containerPrincipalI.appendChild(recipienteDivsForJ);

            for (let j = 0; j < lineAndCollum; j += 1) {
                let objectCreateDiv = document.createElement('div');
                objectCreateDiv.setAttribute("class", "pixel");
                objectCreateDiv.className += " white";
                objectCreateDiv.addEventListener("click", selectSquarePixels);
                recipienteDivsForJ.appendChild(objectCreateDiv);
            }
        }

    } else {
        return alert('Board inválido!');
    }




});

const validateProhibited = (nubmer) => {

    let valuePattern = document.getElementById('board-size');
    let convertingNumber = parseInt(nubmer.value);

    if(convertingNumber<5 || convertingNumber>50){
        valuePattern.value=5;
        return alert('Valor Inválido!! Setando valor Inicial Padrao')
    }
}

const selectSquarePixels = (event) => {

    let handleSelected = document.querySelector('.selected');
    let pixelRemove = document.querySelectorAll('.white');

    for (let i = 0; i < pixelRemove.length; i++) {
        pixelRemove[i].classList.remove('white');
    }
    if (handleSelected.classList.contains('black')) {
        event.target.classList.add("black");
    } else if (handleSelected.classList.contains('blue')) {
        event.target.classList.add("blue");
    } else if (handleSelected.classList.contains('yellow')) {
        event.target.classList.add("yellow");
    } else {
        event.target.classList.add("green");
    }
}

const startupPixels = () => {

    let lineAndCollum = 5;
    let containerPrincipalI = document.getElementById('pixel-board');
    containerPrincipalI.innerHTML = "";

    for (let i = 0; i < lineAndCollum; i += 1) {

        let recipienteDivsForJ = document.createElement('div');
        containerPrincipalI.appendChild(recipienteDivsForJ);

        for (let j = 0; j < lineAndCollum; j += 1) {
            let objectCreateDiv = document.createElement('div');
            objectCreateDiv.setAttribute("class", "pixel");
            objectCreateDiv.className += " white";
            objectCreateDiv.addEventListener("click", selectSquarePixels);
            recipienteDivsForJ.appendChild(objectCreateDiv);
        }
    }

}

// By EdgarAF7
