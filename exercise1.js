let listaClientes = [];
var idadesAcumuladas = 0;
function registroClientes() {
    let anoAtual = parseInt(prompt('Digite o ano atual'));

    if (anoAtual <= 0) {
        return alert("Ano inválido");
    } else {
        for (i = 0; i < 3; i++) {
            let user = {
                nome: prompt('Digite seu nome'),
                mesNascimento: prompt('Digite seu mês de nascimento'),
                anoNascimento: 2023 - prompt('Digite seu ano de nascimento')
            }
            listaClientes.push(user);
            idadesAcumuladas += user.anoNascimento;
        }
    }
}

function listarClientes() {
    for (let i = 0; i < listaClientes.length; i++) {
        let cliente = listaClientes[i];
        document.write(`<h2> - Código ${i + 1} </h2>`);
        document.write(`<p> Nome: ${cliente.nome} </p>`);
        document.write(`<p> Mês de Nascimento: ${cliente.mesNascimento} </p>`);
        document.write(`<p> Ano de nascimento: ${cliente.anoNascimento} </p>`);
    }
}

function mostrarEstatisticas() {
    document.write(" *** Estatísticas ***");
    pulaLinha();
    document.write(`Soma das idades: ${idadesAcumuladas}`);
}


function somaDasIdades() {
    document.write(`O resultado das idades acumuladas são: ${idadesAcumuladas}`);
}

function mediaDasIdades() {
    let res;
    res = Math.round(idadesAcumuladas / 3);
    document.write(`A  média das idades é: ${res}`);
}
registroClientes();
listarClientes();
mostrarEstatisticas();