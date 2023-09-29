const nome = `Blah`;
const idade = 27;
const peso = 68;
const alturaEmMetros = 1.60;

document.getElementById("calculate-button").addEventListener("click", calculateIMC);

function classificarIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        return 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        return 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        return 'Obesidade Grau I';
    } else if (imc >= 35 && imc <= 39.9) {
        return 'Obesidade Grau II';
    } else {
        return 'Obesidade Grau III';
    }
}

function calculateIMC() {
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    
    if (isNaN(age) || isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
        document.getElementById("result").textContent = "Por favor, insira valores válidos para idade, peso e altura.";
        return;
    }
    
    const userImc = weight / (height * height);
    const userCategory = classificarIMC(userImc);

    document.getElementById("result").textContent = `${name}, de ${age} anos, seu IMC é ${userImc.toFixed(2)} (${userCategory}).`;
}

