let recursos = [0,0,0,0,0]; //Ultimo é a capacidade total das tropas
let tropas = [0,0,0,0,0,0,0,0,0,0,0];
//Calcula a quantidade de cada recurso
calculaRecursos(recursos);

calculaTropas(tropas);

let tabela = criaTabela();

if(tabela == null) throw 'Erro ao criar tabela';

montaTitulo(tabela);

//Montando Estrutura resumida de recursos
montaRecursosTotal(recursos, tabela);

montaTropasTotal(tropas, tabela);

//Inclui na página
incluiTabelaNaPagina(tabela);



function calculaRecursos(recursos)
{   
    let html = document.getElementsByClassName("inlineIconList resourceWrapper");
    for (let i = 0; i < html.length; i++) {
        let r = html[i].innerText.split("\n");
        recursos[0] += parseInt(r[0]);
        recursos[1] += parseInt(r[1]);
        recursos[2] += parseInt(r[2]);
        recursos[3] += parseInt(r[3]);
    }
    let listaCapUnidadesHtml = document.getElementsByClassName("carry resourceWrapper");
    let parte = 0;
    for(let i = 0; i < listaCapUnidadesHtml.length; i++)
    {
        let parteTotal = listaCapUnidadesHtml[i].children[0].children[1].innerText.split("/");
        parte += parseInt(parteTotal[0].toString());
        recursos[4] += parseInt(parteTotal[1].toString());
    }
    console.log(recursos);
}

function calculaTropas(tropas)
{
    let tropasRetorno = document.getElementsByClassName("troop_details inReturn");
    for(let k = 0; k< tropasRetorno.length; k++)
    {
        let html = tropasRetorno[k].getElementsByClassName("units last");
        for(let i=0;i< html.length;i++)
        {
            let unidades = html[i].children[0].children;
            for(let j = 1; j < unidades.length; j++)
            {
                tropas[j-1] += parseInt(unidades[j].innerText);
            }
        }
    }
    
    console.log(tropas);
}

function criaTabela()
{
    let tropasRetornando = document.getElementsByClassName("troop_details inReturn");
    for(let i = 0; i < tropasRetornando.length; i++)
    {
        if(tropasRetornando[i].getElementsByClassName("inlineIconList resourceWrapper").length > 0)
        {
            return tropasRetornando[i].cloneNode(true);
        }
    }
}

function montaTitulo(tabela)
{
    tabela.getElementsByClassName("troopHeadline")[0].innerText = "Total de tropas Regressando";
}

function montaRecursosTotal(recursos, tabela)
{    
    
    //let resumoHtml = document.getElementsByClassName("troop_details inReturn")[0].cloneNode(true);
    let dadosRecursos = tabela.getElementsByClassName("inlineIconList resourceWrapper")[0];
    let r = dadosRecursos.getElementsByClassName("value");
    r[0].innerText = recursos[0];
    r[1].innerText = recursos[1];
    r[2].innerText = recursos[2];
    r[3].innerText = recursos[3];

    
    
    
}

function montaTropasTotal(tropas, tabela)
{
    let tropasRetorno = tabela.getElementsByClassName("units last");
    let unidades = tropasRetorno[0].children[0].children;
    for(let j = 1; j < unidades.length; j++)
    {
        unidades[j].innerText = tropas[j-1];
    }
}

function incluiTabelaNaPagina(tabela)
{
    let local = document.getElementsByClassName("spacer")[0];
    local.append(tabela);
}