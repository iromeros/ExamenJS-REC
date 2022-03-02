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
        resultatTime = ((h * 60) + m)
    }
    else{
        resultatTime = ((h * 60) + m) * 60
    } 
    _id("resultatTime").innerHTML;

}

function calculaCapital() {
}

function canviaEstil(tipus) {
    let Colorfons = "";
    let borderColor = "";
    if (tipus == "random"){
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        Colorfons = "rgb(" + red + "," + green + "," + blue + ")";
    } else{
        borderColor = "black";
        Colorfons = "white";
    }

    let cos = _id("principal");
    principal.style.borderColor = borderColor;
    principal.style.backgroundColor = Colorfons;
}