const calcular = document.getElementById('calcular');


function poupar () {
    const nome = document.getElementById('nome').value;
    const valor = document.getElementById('valor').value;
    const juros = document.getElementById('juros').value;
    const parcelas = document.getElementById('parcelas').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && valor !== '' && juros !== '' && parcelas !== ''){

        const taxa = (juros/100);
        const vf = (valor*((((1+taxa)**parcelas)-1)/taxa)).toFixed(2);

        resultado.textContent = `Olá ${nome}, se você aplicar ${valor}, à taxa de juros de ${juros} ao mês, durante ${parcelas}, acumulará uma poupança de R$ ${vf}.`;

    }else{
        resultado.textContent = 'Preencha todos os campos.';
    }
}
calcular.addEventListener('click', poupar);