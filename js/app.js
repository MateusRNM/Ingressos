const qtdInput = document.getElementById('qtd');
const tipoIngressoInput = document.getElementById('tipo-ingresso');

function comprar(){
    const tipoIngresso = tipoIngressoInput.value;
    const listEl = document.getElementById(`qtd-${tipoIngresso}`);
    const qtdAtual = parseInt(listEl.innerHTML);
    const qtdDesejada = parseInt(qtdInput.value);
    if(qtdAtual < qtdDesejada){
        alert('Quantidade de ingressos insuficientes!');
        return;
    } else if(qtdDesejada <= 0){
        alert('Digite uma quantidade de ingressos válida!');
        return;
    }
    listEl.innerHTML = qtdAtual - qtdDesejada;
}