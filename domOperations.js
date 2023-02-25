function showResultInDomKvadrat() {
    let sideLengthSquare = document.getElementById("dlinaStoroniKvadrata").value;
    let note = document.querySelector("#ploschadKvadrata");
    return note.innerHTML = squareArea(+sideLengthSquare);
}

function showResultInDomPriamougolnika() {
    let firstSideOfTheRectangle = document.getElementById("pervayaStoronaPriamougolnika").value;
    let secondSideOfTheRectangle = document.getElementById("drugayaStoronaPriamougolnika").value;
    let note = document.querySelector("#ploschadPriamougolnika");
    return note.innerHTML = squareRectangle(firstSideOfTheRectangle, secondSideOfTheRectangle);
}

function showResultInDomParalelograma() {
    let sideLengthParallelogram = document.getElementById("dlinaStoronyParalelograma").value;
    let heightLengthParallelogram = document.getElementById("dlinaVisotyParalelograma").value;
    let note = document.querySelector("#ploschadParalelograma");
    return note.innerHTML = squareParallelogram(sideLengthParallelogram, heightLengthParallelogram);
}

function showResultInDomRomba() {
    let rhombusSideLength = document.getElementById("dlinaStoronyRomba").value;
    let rhombusHeightLength = document.getElementById("dlinaVisotyRomba").value;
    let note = document.querySelector("#ploschadRomba");
    return note.innerHTML = squareRhombus(rhombusSideLength, rhombusHeightLength);
}