const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso Inválido', false);
        return;
    }

    if(!altura){
        setResultado('Altura Inválida', false);
        return;
    }

    const imc = getIMC(peso, altura);
    const casoIMC = getCasoIMC(imc);

    console.log(imc, casoIMC);

    const msg = `Seu IMC é ${imc} (${casoIMC})`;

    setResultado(msg, true);

});

function getCasoIMC(imc){
    const caso = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
                  'Obesidade grau 2', 'Obesidade grau 3'];

    if(imc >= 39.9){
        return caso[5];
    }
    
    if(imc >= 34.9){
        return caso[4];
    }
    
    if(imc >= 29.9){
        return caso[3];
    }
    
    if(imc >= 24.9){
        return caso[2];
    }
    
    if(imc >= 18.5){
        return caso[1];
    }
    
    if(imc < 18.5){
        return caso[0];
    }
}


function getIMC(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if(isValid){
        p.classList.add('p-resultado');
    } else {
        p.classList.add('invalido');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}