document.getElementById("icon").addEventListener("click", buyut);
document.getElementById("icon1").addEventListener("click", kucult);

var boyut = 15;
function buyut(){
    boyut = boyut+1;
    document.getElementById("icerik").style.fontSize = boyut + "px";
}

function kucult(){
    boyut = boyut-1;
    document.getElementById("icerik").style.fontSize = boyut + "px";
}
