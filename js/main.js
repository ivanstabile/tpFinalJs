let userName = document.getElementById("userName");
let greetings = document.getElementById("greetings");
let greetingsButton = document.getElementById("greetingsButton");
let search = document.querySelector("#search");
let gryffindorCheckboxes = [
    document.getElementById("gryffindorOne"),
    document.getElementById("gryffindorTwo"),
    document.getElementById("gryffindorThree"),
    document.getElementById("gryffindorFour"),
];
let gryffindorBtns = [
    document.getElementById("gryffindorBtnOne"),
    document.getElementById("gryffindorBtnTwo"),
    document.getElementById("gryffindorBtnThree"),
    document.getElementById("gryffindorBtnFour"),
];
let slytherinCheckboxes = [
    document.getElementById("slytherinOne"),
    document.getElementById("slytherinTwo"),
    document.getElementById("slytherinThree"),
    document.getElementById("slytherinFour"),
];
let slytherinBtns = [
    document.getElementById("slytherinBtnOne"),
    document.getElementById("slytherinBtnTwo"),
    document.getElementById("slytherinBtnThree"),
    document.getElementById("slytherinBtnFour"),
];
let hufflepuffCheckboxes = [
    document.getElementById("hufflepuffOne"),
    document.getElementById("hufflepuffTwo"),
    document.getElementById("hufflepuffThree"),
    document.getElementById("hufflepuffFour"),
];
let hufflepuffBtns = [
    document.getElementById("hufflepuffBtnOne"),
    document.getElementById("hufflepuffBtnTwo"),
    document.getElementById("hufflepuffBtnThree"),
    document.getElementById("hufflepuffBtnFour"),
];
let ravenclawCheckboxes = [
    document.getElementById("ravenclawOne"),
    document.getElementById("ravenclawTwo"),
    document.getElementById("ravenclawThree"),
    document.getElementById("ravenclawFour"),
];
let ravenclawBtns = [
    document.getElementById("ravenclawBtnOne"),
    document.getElementById("ravenclawBtnTwo"),
    document.getElementById("ravenclawBtnThree"),
    document.getElementById("ravenclawBtnFour"),
];

let gryffindorRavenclawCheckbox = document.getElementById("gryffindorRavenclaw");
let gryffindorRavenclawBtn = document.getElementById("btnGryffindorRavenclaw");
let slytherinHufflepuffCheckbox = document.getElementById("slytherinHufflepuff");
let slytherinHufflepuffBtn = document.getElementById("btnSlytherinHufflepuff");

let btnNext = [
    document.getElementById("btnNextOne"),
    document.getElementById("btnNextTwo"),
    document.getElementById("btnNextThree"),
    document.getElementById("btnNextFour"),
    document.getElementById("btnNextFive"),
    document.getElementById("btnNextSix"),
];
let btnBack = [
    document.getElementById("btnBackOne"),
    document.getElementById("btnBackTwo"),
    document.getElementById("btnBackThree"),
    document.getElementById("btnBackFour"),
    document.getElementById("btnBackFive"),
    document.getElementById("btnBackSix"),
];
let blocks = [
    document.getElementById("main"),
    document.querySelector("#blockOne"),
    document.querySelector("#blockTwo"),
    document.querySelector("#blockThree"),
    document.querySelector("#blockFour"),
    document.querySelector("#blockFive"),
    document.querySelector("#blockSix"),
    document.querySelector("#blockGryffindor"),
    document.querySelector("#blockSlytherin"),
    document.querySelector("#blockHufflepuff"),
    document.querySelector("#blockRavenclaw"),
    document.querySelector("#blockMuggles"),
    document.querySelector("#quiz"),
    document.querySelector("#casas"),
    document.querySelector("#blockSpinner"),
];
let btnCalculate = document.querySelector("#btnCalculate");

let puntosCasas = [
    { casa: "gryffindor", puntos: 0 },
    { casa: "slytherin", puntos: 0 },
    { casa: "hufflepuff", puntos: 0 },
    { casa: "ravenclaw", puntos: 0 },
];

// constructor de magos
class MagosCelebres {
    constructor(nombre, casa) {
        this.nombre = nombre;
        this.casa = casa;
    }
}
let newMagician = new MagosCelebres();

//Comprobar si hay items en localStorage
window.onload = function () {
    if (JSON.parse(localStorage.getItem("nombre")) === null) {
        greetings.innerHTML = "Ingresa un nombre para comenzar";
    } else if (localStorage) {
        greetings.innerHTML =
            JSON.parse(localStorage.getItem("nombre")) +
            " has sido seleccionado en " +
            JSON.parse(localStorage.getItem("casa")) +
            ", para hacer el quiz nuevamente vuelve a ingresar un nombre";
    }
};

let createdWizard = greetingsButton.addEventListener("click", function () {
    let newWizard = userName.value;
    if (newWizard == "") {
        greetings.innerHTML = "Ingresa tu nombre para comenzar...";
    } else if (newWizard) {
        greetings.innerHTML = "";
        greetings.innerHTML = `<h5 id="saludo">Bienvenido ${userName.value} comenzamos? <button id="createButton" class="btn">Si</button></h5>`;
        newMagician.nombre = userName.value;

        createButton.addEventListener("click", function () {
            blocks[0].style.display = "none";
            blocks[12].style.display = "flex";
            blocks[1].style.display = "flex";
        });
    }
});

//Function points
function points(checkBoxOne, points, checkBoxTwo, checkBoxThree, checkBoxFour, btnOne, btnTwo, btnThree, btnFour) {
    if (checkBoxOne.checked) {
        points.puntos++;
        checkBoxTwo.disabled = true;
        checkBoxThree.disabled = true;
        checkBoxFour.disabled = true;
        btnOne.classList.add("selected");
        btnTwo.classList.add("not_selected");
        btnThree.classList.add("not_selected");
        btnFour.classList.add("not_selected");
    } else {
        points.puntos--;
        checkBoxTwo.disabled = false;
        checkBoxThree.disabled = false;
        checkBoxFour.disabled = false;
        btnOne.classList.remove("selected");
        btnTwo.classList.remove("not_selected");
        btnThree.classList.remove("not_selected");
        btnFour.classList.remove("not_selected");
    }
}
//Functions gryffindor
const gryffindor = gryffindorCheckboxes.forEach((btn, i) => {
    btn.addEventListener("click", function () {
        points(
            gryffindorCheckboxes[i],
            puntosCasas[0],
            slytherinCheckboxes[i],
            hufflepuffCheckboxes[i],
            ravenclawCheckboxes[i],
            gryffindorBtns[i],
            slytherinBtns[i],
            hufflepuffBtns[i],
            ravenclawBtns[i]
        );
        console.log(puntosCasas[0].puntos + " gryffindor");
    });
});

//Functions slytherin
const slytherin = slytherinCheckboxes.forEach((btn, i) => {
    btn.addEventListener("click", function () {
        points(
            slytherinCheckboxes[i],
            puntosCasas[1],
            gryffindorCheckboxes[i],
            hufflepuffCheckboxes[i],
            ravenclawCheckboxes[i],
            slytherinBtns[i],
            gryffindorBtns[i],
            hufflepuffBtns[i],
            ravenclawBtns[i]
        );
        console.log(puntosCasas[1].puntos + " slytherin");
    });
});

//functions hufflepuff
const hufflepuff = hufflepuffCheckboxes.forEach((btn, i) => {
    btn.addEventListener("click", function () {
        points(
            hufflepuffCheckboxes[i],
            puntosCasas[2],
            gryffindorCheckboxes[i],
            slytherinCheckboxes[i],
            ravenclawCheckboxes[i],
            hufflepuffBtns[i],
            gryffindorBtns[i],
            slytherinBtns[i],
            ravenclawBtns[i]
        );
        console.log(puntosCasas[2].puntos + " hufflepuff");
    });
});

//functions ravenclaw
const ravenclaw = ravenclawCheckboxes.forEach((btn, i) => {
    btn.addEventListener("click", function () {
        points(
            ravenclawCheckboxes[i],
            puntosCasas[3],
            gryffindorCheckboxes[i],
            slytherinCheckboxes[i],
            hufflepuffCheckboxes[i],
            ravenclawBtns[i],
            gryffindorBtns[i],
            slytherinBtns[i],
            hufflepuffBtns[i]
        );
        console.log(puntosCasas[3].puntos + " ravenclaw");
    });
});

gryffindorRavenclawCheckbox.addEventListener("click", function () {
    if (gryffindorRavenclawCheckbox.checked) {
        puntosCasas[0].puntos++;
        puntosCasas[3].puntos++;
        slytherinHufflepuffBtn.disabled = true;
        gryffindorRavenclawBtn.classList.add("selected");
        slytherinHufflepuffBtn.classList.add("not_selected");
    } else {
        puntosCasas[0].puntos--;
        puntosCasas[3].puntos--;
        slytherinHufflepuffBtn.disabled = false;
        gryffindorRavenclawBtn.classList.remove("selected");
        slytherinHufflepuffBtn.classList.remove("not_selected");
    }
    console.log(puntosCasas[0].puntos + " gryffindor");
    console.log(puntosCasas[3].puntos + " ravenclaw");
});

slytherinHufflepuffCheckbox.addEventListener("click", function () {
    if (slytherinHufflepuffCheckbox.checked) {
        puntosCasas[1].puntos++;
        puntosCasas[2].puntos++;
        gryffindorRavenclawBtn.disabled = true;
        slytherinHufflepuffBtn.classList.add("selected");
        gryffindorRavenclawBtn.classList.add("not_selected");
    } else {
        puntosCasas[1].puntos--;
        puntosCasas[2].puntos--;
        gryffindorRavenclawBtn.disabled = false;
        slytherinHufflepuffBtn.classList.remove("selected");
        gryffindorRavenclawBtn.classList.remove("not_selected");
    }
    console.log(puntosCasas[1].puntos + " slytherin");
    console.log(puntosCasas[2].puntos + " hufflepuff");
});

//Next Button
function next(blockOne, blockTwo) {
    blockOne.style.display = "none";
    blockTwo.style.display = "flex";
}
for (let i = 0; i < 5; i++) {
    btnNext[i].addEventListener("click", () => next(blocks[i + 1], blocks[i + 2]));
}

//Back button
function back(blockOne, blockTwo) {
    blockOne.style.display = "none";
    blockTwo.style.display = "flex";
}
for (let i = 0; i <= 5; i++) {
    btnBack[i].addEventListener("click", () => back(blocks[i + 1], blocks[i]));
}

//End
function hideAndShow(blockOne, blockTwo, blockThree, blockFour, blockFive, blockSix, blockSeven, blockEight, blockNine) {
    blockOne.style.display = "flex";
    blockTwo.style.display = "flex";
    blockThree.style.display = "none";
    blockFour.style.display = "none";
    blockFive.style.display = "none";
    blockSix.style.display = "none";
    blockSeven.style.display = "none";
    blockEight.style.display = "none";
    blockNine.style.display = "none";
}
// function finalizar
btnCalculate.addEventListener("click", function () {
    hideAndShow(blocks[13], blocks[14], blocks[6], blocks[8], blocks[9], blocks[10], blocks[11], blocks[12], blocks[7]);
    var maximo = 0;
    var casaGanadora = 0;
    puntosCasas.forEach((casa) => {
        if (maximo < casa.puntos) {
            maximo = casa.puntos;
            casaGanadora = casa.casa;
        }
    });

    function findHouse() {
        if (casaGanadora == "gryffindor") {
            hideAndShow(blocks[13], blocks[7], blocks[6], blocks[8], blocks[9], blocks[10], blocks[11], blocks[12], blocks[14]);
            newMagician.nombre = userName.value;
            newMagician.casa = "gryffindor";
            $.ajax({
                method: "GET",
                url: "https://hp-api.herokuapp.com/api/characters/house/gryffindor",
            })
                .done((data) => {
                    apiImages(data);
                })
                .fail((error) => {
                    console.log(error);
                });

            function apiImages(data) {
                console.log(data);
                $(data).each(function (index, personaje) {
                    $("#gryffindor__imgs").append(`
                     <div class="casas_imgs">
                            <div class="wizards">
                            <img src="${personaje.image}" alt="" />
                            <h5>${personaje.name}</h5>
                           </div>
                    </div>
                    `);
                });
            }
            saveLocal("nombre", JSON.stringify(newMagician.nombre));
            saveLocal("casa", JSON.stringify(newMagician.casa));
        } else if (casaGanadora == "slytherin") {
            hideAndShow(blocks[13], blocks[8], blocks[6], blocks[7], blocks[9], blocks[10], blocks[11], blocks[12], blocks[14]);
            newMagician.nombre = userName.value;
            newMagician.casa = "slytherin";
            $.ajax({
                method: "GET",
                url: "https://hp-api.herokuapp.com/api/characters/house/slytherin",
            })
                .done((data) => {
                    apiImages(data);
                })
                .fail((error) => {
                    console.log(error);
                });

            function apiImages(data) {
                console.log(data);
                $(data).each(function (index, personaje) {
                    $("#slytherin__imgs").append(`
                     <div class="casas_imgs">
                            <div class="wizards">
                            <img src="${personaje.image}" alt="" />
                            <h5>${personaje.name}</h5>
                           </div>
                    </div>
                    `);
                });
            }
            saveLocal("nombre", JSON.stringify(newMagician.nombre));
            saveLocal("casa", JSON.stringify(newMagician.casa));
        } else if (casaGanadora == "hufflepuff") {
            hideAndShow(blocks[13], blocks[9], blocks[6], blocks[7], blocks[8], blocks[10], blocks[11], blocks[12], blocks[14]);
            newMagician.nombre = userName.value;
            newMagician.casa = "hufflepuff";
            $.ajax({
                method: "GET",
                url: "https://hp-api.herokuapp.com/api/characters/house/hufflepuff",
            })
                .done((data) => {
                    apiImages(data);
                })
                .fail((error) => {
                    console.log(error);
                });

            function apiImages(data) {
                console.log(data);
                $(data).each(function (index, personaje) {
                    $("#hufflepuff__imgs").append(`
                     <div class="casas_imgs">
                            <div class="wizards">
                            <img src="${personaje.image}" alt="" />
                            <h5>${personaje.name}</h5>
                           </div>
                    </div>
                    `);
                });
            }
            saveLocal("nombre", JSON.stringify(newMagician.nombre));
            saveLocal("casa", JSON.stringify(newMagician.casa));
        } else if (casaGanadora == "ravenclaw") {
            hideAndShow(blocks[13], blocks[10], blocks[6], blocks[7], blocks[8], blocks[9], blocks[11], blocks[12], blocks[14]);
            newMagician.nombre = userName.value;
            newMagician.casa = "ravenclaw";
            $.ajax({
                method: "GET",
                url: "https://hp-api.herokuapp.com/api/characters/house/ravenclaw",
            })
                .done((data) => {
                    apiImages(data);
                })
                .fail((error) => {
                    console.log(error);
                });

            function apiImages(data) {
                console.log(data);
                $(data).each(function (index, personaje) {
                    $("#ravenclaw__imgs").append(`
                     <div class="casas_imgs">
                            <div class="wizards">
                            <img src="${personaje.image}" alt="" />
                            <h5>${personaje.name}</h5>
                           </div>
                    </div>
                    `);
                });
            }
            saveLocal("nombre", JSON.stringify(newMagician.nombre));
            saveLocal("casa", JSON.stringify(newMagician.casa));
        } else {
            blocks[6].style.display = "none";
            blocks[12].style.display = "none";
            blocks[7].style.display = "none";
            blocks[9].style.display = "none";
            blocks[10].style.display = "none";
            blocks[8].style.display = "none";
            blocks[13].style.display = "flex";
            blocks[11].style.display = "flex";
            blocks[14].style.display = "none";
        }
    }
    setTimeout(findHouse, 2000);
});

//save local
function saveLocal(key, name) {
    localStorage.setItem(key, name);
}

$("#main__title").animate({ opacity: 1 }, 2500);
