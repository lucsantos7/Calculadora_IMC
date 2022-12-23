const form = document.querySelector('#formulario');
const resultado = document.querySelector('.resultado');

function resultadoFormulario(event){     

     event.preventDefault();

const peso = document.querySelector('#peso').value;
const altura = document.querySelector('#altura').value;

const alturaInserida = altura/100;

const calcularImc = peso / (alturaInserida * alturaInserida).toFixed(2);

if (calcularImc <= 18.5) {
     resultado.innerHTML = `Seu IMC é <p> ${calcularImc. toFixed(2)} </p>  Baixo peso &#128533`;
} else if (calcularImc >= 18.5 && calcularImc < 25) {
     resultado.innerHTML = `Seu IMC é <strong> ${calcularImc. toFixed(2)} </strong> - Peso adequado &#128516`;
} else if (calcularImc >= 25 && calcularImc < 30) {
     resultado.innerHTML = `Seu IMC é <h3> ${calcularImc. toFixed(2)} </h3>  Sobrepeso!! &#128556`;
} else if (calcularImc >= 30 && calcularImc < 35){
     resultado.innerHTML = `Seu IMC é <h4> ${calcularImc. toFixed(2)} </h4>  Obesidade grau 1!! &#128562`;
}else if (calcularImc >= 35 && calcularImc < 40){
     resultado.innerHTML = `Seu IMC é <h4> ${calcularImc. toFixed(2)} </h4>  Obesidade grau 2!! &#128562`;
}else{
     resultado.innerHTML = `Seu IMC é <h4> ${calcularImc. toFixed(2)} </h4>  Obesidade extrema!! &#128562`;
}
}

form.addEventListener('submit', resultadoFormulario);
