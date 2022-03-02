function _id(ident) {
    return document.getElementById(ident);
}

function calculaHora() {
    var inputTime = _id("inputTime").value;
    var horayminutos = inputTime.split(":");
    var h = horayminutos[0]
    var m = horayminutos[1]
    let resultatTime;
    if (inputTime = "m") {
        h = "m" / 60
    }
    else 
        resultatTime = ((h * 60) + m) * 60
    

}

function calculaCapital() {
    let capitalInicial = _id("capitalInicial").value;
    let capitalInicial = parseFloat(_id("capitalInicial").value);

    let number = temps / (3 * number / 100);
    let number = temps - capitalFinal;
    _id("number").innerHTML = number.toFixed(2);
    _id("temps").innerHTML = temps.toFixed(2);
}


function canviaEstil(tipus) {
    var simbolos, color;
        simbolos = "0123456789ABCDEF";
        color = "#";
    
        for(var i = 0; i < 6; i++){
            color = color + simbolos[Math.floor(Math.random() * 16)];
        }
    
        document.body.style.border = color;
        document.body.style.background = color;
        document.getElementById("random").innerHTML = color;
        document.getElementById("clear").innerHTML = "Copiar Color";
    }

}