function aleatorio(){
    return Math.random() < 0.5 ? "Si" : "No";
}

let lukas = [" Lukas Santo"," Lukas Telefonear", " Lukas Almuerzo", " Lukas Festival", " Lukas Comprar", " Lukas Pala", "Lukas Casar", "Lukas Disfraz", "Lukas vaca", "Lucas Good boy", "Lukas Puerta", "Lukas Tabla de surf", "Lukas Barra"];

let resultado = aleatorio();  
let randomLukas = "";      
if (resultado == "Si") {
    randomLukas = lukas[Math.floor(Math.random() * lukas.length)];
}

document.getElementById("Aleatorio").textContent = resultado;
document.getElementById("Lukas").textContent = randomLukas;
