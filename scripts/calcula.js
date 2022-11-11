let recursos = document.getElementsByClassName("inlineIconList resourceWrapper");
let madeira = 0, barro = 0, ferro = 0, cereal = 0;
for (let i = 0; i < recursos.length; i++) {
    let r = recursos[i].innerText.split("\n");
    madeira += parseInt(r[0]);
    barro += parseInt(r[1]);
    ferro += parseInt(r[2]);
    cereal += parseInt(r[3]);
}
let titulo = document.getElementsByClassName("spacer")[0];
titulo.innerHTML += `<br><br>Madeira = ${madeira}<br>Barro = ${barro}<br>Ferro = ${ferro}<br>Cereal = ${cereal}<br>`
