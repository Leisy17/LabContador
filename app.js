const aumentar = document.getElementById("aumentar");
const disminuir = document.getElementById("disminuir");
const numberElement = document.getElementById("number");

let valor = 0;

function actualizarColor() {
    if (valor >= 10) {
        numberElement.style.color = "red";
    } else {
        numberElement.style.color = "#1d00fc";
    }
}

aumentar.addEventListener("click", function() {
    valor++;
    numberElement.textContent = valor;
    actualizarColor();
});

disminuir.addEventListener("click", function() {
    valor--;
    numberElement.textContent = valor;
    actualizarColor();
});
