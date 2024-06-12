let inputMostrado = false;
window.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
    }
}, false);

window.onload = function () {
    document.querySelector("#valorAbs").addEventListener("click", valorAbs);
    document.querySelector("#redondeoSup").addEventListener("click", redondeoSup);
    document.querySelector("#exponente").addEventListener("click", exponente);
    document.querySelector("#max").addEventListener("click", max);
    document.querySelector("#min").addEventListener("click", min);
    document.querySelector("#redondeo").addEventListener("click", redondeo);
    document.querySelector("#raizC").addEventListener("click", raizC);
    document.querySelector("#truncar").addEventListener("click", truncar);
}

function crearBoton () {
    let formulario = document.querySelector("form");
    let boton = document.createElement("button");
    boton.setAttribute("type", "button");
    boton.setAttribute("id", "calculo1");
    boton.classList.add("boton");
    boton.textContent = "Calcular";
    formulario.appendChild(boton);
}

function eliminarBoton () {
    document.querySelector("#calculo1").remove();
}

function crearInput1 () {
   let formulario = document.querySelector("form");
   let entrada = document.createElement("input");
   entrada.setAttribute("id", "numero1");
   entrada.setAttribute("type", "text");
   entrada.setAttribute("placeholder", "Escribe un número");
   formulario.appendChild(entrada);
}

function crearInput2 () {
    let formulario = document.querySelector("form");
    let entrada2 = document.createElement("input");
    entrada2.setAttribute("id", "numero2");
    entrada2.setAttribute("type", "text");
    entrada2.setAttribute("placeholder", "Escribe un número");
    formulario.appendChild(entrada2);
}

//crear los inputs para 1 entrada de datos y 2 entradas de datos
function crearInput(numeroDeInputs) {
    let formulario = document.querySelector("form");
    if (inputMostrado) {
        document.querySelector("#salida").innerHTML = "";
        document.querySelector("#numero1").remove();
        document.querySelector("#calculo1").remove();
        if (document.querySelector("#numero2")) {
            document.querySelector("#numero2").remove();
        }
        inputMostrado = false;
    }
    if (!inputMostrado) {
        //muestro el formulario
        formulario.style.visibility = "visible";
        crearInput1();
        if (numeroDeInputs === 2) {
            crearInput2();
        }
        crearBoton();
        inputMostrado = true;
    }
}

function valorAbs() {
    crearInput(1);
    document.querySelector("#calculo1").addEventListener("click", function (){
        let numero = document.querySelector(" #numero1").value;
        document.querySelector("#salida").innerHTML = "El valor absoluto de " + numero + " es " + Math.abs(numero);
    })
}
function redondeoSup() {
    crearInput(1);
    document.querySelector("#calculo1").addEventListener("click", function (){
        let numero = document.querySelector(" #numero1").value;
        document.querySelector("#salida").innerHTML = "El entero superior de " + numero + " es " + Math.ceil(numero);
        //lo redondea a su entero superior
    })
}
function exponente() {
    crearInput(2);
    document.querySelector("#calculo1").addEventListener("click", function (){
        let base = document.querySelector(" #numero1").value;
        let exponente = document.querySelector(" #numero2").value;
        document.querySelector("#salida").innerHTML = "El resultado de " + base + "<sup>" + exponente + "</sup> es "
            + Math.pow(base, exponente);
    });
}
function max() {
    crearInput(2);
    document.querySelector("#calculo1").addEventListener("click", function (){
        let numero1 = document.querySelector(" #numero1").value;
        let numero2 = document.querySelector(" #numero2").value;
        document.querySelector("#salida").innerHTML = "El mayor de los dos números es "
            + Math.max(numero1, numero2);
    });
}
function min() {
    crearInput(2);
    document.querySelector("#calculo1").addEventListener("click", function (){
        let numero1 = document.querySelector(" #numero1").value;
        let numero2 = document.querySelector(" #numero2").value;
        document.querySelector("#salida").innerHTML = "El menor de los dos números es "
            + Math.min(numero1, numero2);
    });
}
function redondeo() {
    crearInput(1);
    document.querySelector("#calculo1").addEventListener("click", function () {
        let numero1 = document.querySelector("#numero1").value;
        document.querySelector("#salida").innerHTML = "El resultado de redondeo del número" + numero1 + " es "
            + Math.round(numero1);
    })
}
function raizC () {
    crearInput(1);
    document.querySelector("#calculo1").addEventListener("click", function () {
        let numero1 = document.querySelector("#numero1").value;
        document.querySelector("#salida").innerHTML = "El resultado de la raíz cuadrada de " +numero1 + " es "
            + Math.sqrt(numero1);
    })
}
function truncar () {
    crearInput(1);
    document.querySelector("#calculo1").addEventListener("click", function () {
        let numero1 = document.querySelector("#numero1").value;
        document.querySelector("#salida").innerHTML = "La parte entera del " + numero1 + " es "
            + Math.trunc(numero1);
    })
}