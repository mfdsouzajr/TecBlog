function btnLeiaMais1() {
    var reticencias1 = document.getElementById("reticencias1");
    var textoOculto1 = document.getElementById("textoOculto1");
    var btnLeiaMais1 = document.getElementById("btnLeiaMais1");

    if (reticencias1.style.display == "none") {
        reticencias1.style.display = "inline";
        textoOculto1.style.display = "none";
        btnLeiaMais1.innerHTML = "Leia mais";
    }
    else {
        reticencias1.style.display = "none";
        textoOculto1.style.display = "inline";
        btnLeiaMais1.innerHTML = "Leia menos";
    }
}

function btnLeiaMais2() {
    var reticencias2 = document.getElementById("reticencias2");
    var textoOculto2 = document.getElementById("textoOculto2");
    var btnLeiaMais2 = document.getElementById("btnLeiaMais2");

    if (reticencias2.style.display == "none") {
        reticencias2.style.display = "inline";
        textoOculto2.style.display = "none";
        btnLeiaMais2.innerHTML = "Leia mais";
    }
    else {
        reticencias2.style.display = "none";
        textoOculto2.style.display = "inline";
        btnLeiaMais2.innerHTML = "Leia menos";
    }
}