function aleatorio(){
    return Math.random() < 0.5 ? "Si" : "No";
}

document.getElementById("Aleatorio").textContent = aleatorio();