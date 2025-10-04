document.querySelector('.seu-nome').textContent = "João Vitor";

const PRECO_POR_PAGINA = 500;
const PRECO_DESIGN_ADICIONAL = 1000;

const inputPaginas = document.querySelector("#qtd-paginas");
const inputDesconto = document.querySelector("#desconto");
const checkboxDesign = document.querySelector("#inclui-design");
const inputPrazo = document.querySelector("#prazo-entrega");
///////
const resumoSubTotal = document.querySelector("#resumo-subtotal");
const resumoAdicional = document.querySelector("#resumo-adicional");
const resumoUrgencia = document.querySelector("#resumo-urgencia");
const resumoDesconto = document.querySelector("#resumo-desconto");
const resumoTotal = document.querySelector("#resumo-total");

const calcularSubtotal = (quantidade) => quantidade * PRECO_POR_PAGINA;

const calcularValorDesconto = (valor, porcentagem) => valor * (porcentagem/100) 

function calcularTaxaDeUrgencia(valor, prazo) {
    if (prazo > 0 && prazo < 5)
       return valor * 0.10; //taxa de 10%                   

    else if (prazor >= 5 && prazo < 15)
        return valor * 0.05;  //taxa de 5% 

    return valor;

     
}

function atualizarOrcamento(){

    const qtdPaginas = Number(inputPaginas.value);
    const porcentamgemDesconto = Number(inputDesconto.value);
    const prazo = Number(inputPrazo.value);
    const designIncluido = checkboxDesign.checked; //true ou false;

    const subtotal = calcularSubtotal(qtdPaginas);
    const adicionalDesign = designIncluido ? PRECO_DESIGN_ADICIONAL : 0;
}