var botonEn = document.querySelector(".botonEn");
var botonDes = document.querySelector(".botonDes");
var textoI = document.querySelector(".textoI");
var textoD = document.querySelector(".textoD");

botonEn.onclick = encriptarT;
botonDes.onclick = desencriptarT;
botonCop.onclick = copiarTexto;

function recuperarTexto() {
    return textoI.value;
}

function validarTexto(texto) {
    var reject = /^[a-z\s]+$/;
    return reject.test(texto);
}

function encriptarT() {
    var mensaje = recuperarTexto();
    var txt = mensaje;
    var txtfinal = "";
    if (!validarTexto(mensaje)) {
        alert("El texto debe contener solo letras minúsculas y sin caracteres especiales ni acentos.");
        return;
    }

    for (var x = 0; x < txt.length; x++) {
        if (txt[x] == "a") {
            txtfinal = txtfinal + "ai";
        } else if (txt[x] == "e") {
            txtfinal = txtfinal + "enter";
        } else if (txt[x] == "i") {
            txtfinal = txtfinal + "imes";
        } else if (txt[x] == "o") {
            txtfinal = txtfinal + "ober";
        } else if (txt[x] == "u") {
            txtfinal = txtfinal + "ufat";
        } else {
            txtfinal = txtfinal + txt[x];
        }
    }
    textoD.value = txtfinal;
}

function desencriptarT() {
    let mensaje = recuperarTexto();
    let txt = mensaje;
    let txtfinal = "";
    if (!validarTexto(mensaje)) {
        alert("El texto debe contener solo letras minúsculas y sin caracteres especiales ni acentos.");
        return;
    }

    for (let x = 0; x < txt.length;) {
        if (txt.substring(x, x + 2) == "ai") {
            txtfinal += "a";
            x += 2;
        } else if (txt.substring(x, x + 5) == "enter") {
            txtfinal += "e";
            x += 5;
        } else if (txt.substring(x, x + 4) == "imes") {
            txtfinal += "i";
            x += 4;
        } else if (txt.substring(x, x + 4) == "ober") {
            txtfinal += "o";
            x += 4;
        } else if (txt.substring(x, x + 4) == "ufat") {
            txtfinal += "u";
            x += 4;
        } else {
            txtfinal += txt[x];
            x++;
        }
    }
    textoD.value = txtfinal;
}

function copiarTexto() {
    var textoDevuelto = document.querySelector(".textoD");
    var mensaje = textoDevuelto.value;
    if (!validarTexto(mensaje)) {
        alert("El texto debe contener solo letras minúsculas y sin caracteres especiales ni acentos.");
        return;
    }
    textoDevuelto.select();
    textoDevuelto.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(textoDevuelto.value)
        .then(() => {
            alert("¡Texto copiado!");
        })
        .catch(err => {
            console.error("Error al copiar el texto:", err);
            alert("Error al copiar el texto");
        });
}



