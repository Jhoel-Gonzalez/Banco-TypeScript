import { Cargo } from "./cargo.js";
import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./contaCorrente.js";
import { ContaPoupanca } from "./contaPoupança.js";
import { Endereco } from "./endereço.js";
import { Funcionario } from "./funcionario.js";

//Crie dois funcionários do banco, um gerente e um atendente.

const cargoGerente = new Cargo("Gerente");
const cargoAtendente = new Cargo("Atendente");
const gerente = new Funcionario('706.509.702-17', 'Jhoel Gonzalez', '11991563455', 5000 , [cargoGerente]);
const atendente = new Funcionario('706.509.702-17', 'Francisco Ortega', '11991563455', 1500,  [cargoAtendente]);

/* Crie uma conta corrente e uma conta poupança para 2 clientes (um vip e um não vip)
do banco, um deles com um endereço apenas e outro com dois endereços
cadastrados. */

const enderecoClienteVip1 = new Endereco('79170-000','Rua Santa Catarina', '1983', 'casa', 'Sidrolandia', 'MS');
const enderecoClienteVip2 = new Endereco('63939-783', 'Rua Altair Pereira De Melo','1492', 'Kitnet', 'Boa Vista', 'RR');
const enderecoClienteComun = new Endereco('63939-783', 'Rua Altair Pereira De Melo','1492', 'Kitnet', 'Boa Vista', 'RR');

const contaCorrenteVip = new ContaCorrente('785679-5', 0.00, 30000);
const contaPoupancaVip = new ContaPoupanca('725152-2', 0.00, 0.00);

const contaCorrenteComun = new ContaCorrente('51665-5', 0.00, 50);
const contaPoupancaComun = new ContaPoupanca('16316-2', 0.00, 0.00);

const clienteVip = new Cliente('723.840.050-22', 'Bernardo Ian Assunção', '(73) 98778-7300', true);
clienteVip.addContas(contaCorrenteVip)
clienteVip.addContas(contaPoupancaVip)
clienteVip.addEnderecos(enderecoClienteVip1)
clienteVip.addEnderecos(enderecoClienteVip2)

const clienteComun = new Cliente('776.296.027-90','Augusto Bernardo Antonio Monteiro', '(85) 99359-0405', false);
clienteComun.addContas(contaCorrenteComun)
clienteComun.addContas(contaPoupancaComun)
clienteComun.addEnderecos(enderecoClienteComun)

contaCorrenteVip.addCliente(clienteVip)
contaPoupancaVip.addCliente(clienteVip)


console.log('--CLIENTE COMÚN--')

// Faça um depósito de um salário mínimo na conta corrente do cliente não vip.
contaCorrenteComun.depositar(1212);

/* Faça uma transferência de 5% de um salário mínimo da conta corrente do
cliente não vip para a sua conta poupança no dia 04/06/2022.*/
let transferencia = 0.05 * 1212;
contaCorrenteComun.transferir(contaPoupancaComun, transferencia, new Date(2022,5,4));

/* Faça um saque de 50% de um salário mínimo da conta corrente do cliente
não vip e exiba o saldo em conta após a ação. */
let valorDeSaque = 0.50 * 1212;
contaCorrenteComun.sacar(valorDeSaque);

/* Tente fazer outro saque de 50% de um salário mínimo da conta corrente do
cliente não vip. */

contaCorrenteComun.sacar(valorDeSaque);

//Faça um depósito de 50 reais na conta poupança do cliente não vip no dia 09/06/2022.

contaPoupancaComun.depositar(50, new Date(2022,5,9));

//Faça um resgate de 60 reais da conta poupança no dia 09/07/2022.



console.log(
    `
    -------------------------------- 

    --CLIENTE VIP--
    `
);

//Faça um depósito de 50 salários mínimos na conta corrente do cliente vip.

contaCorrenteVip.depositar(1212 * 50);

/* Faça uma transferência de 20 salários mínimos da conta corrente do cliente
vip para a sua conta poupança no dia 05/06/2022. */
let transferenciaClienteVip =  1212 * 20;
contaCorrenteVip.transferir(contaPoupancaVip, transferenciaClienteVip, new Date(2022, 5, 5));

/* Faça um saque de 50000 reais da conta corrente do cliente vip e exiba o
saldo em conta após a ação. */

contaCorrenteVip.sacar(50000);

//Tente fazer outro saque de 50000 reais da conta corrente do cliente vip.

contaCorrenteVip.sacar(50000)

console.log(
    `
    ------------------------------------------

    --RELATORIO DOS CLIENTES--
    `
);

console.log(
    `
    --CLIENTES--

    Cliente Vip: 

    Cpf: ${clienteVip.cpf}
    Nome: ${clienteVip.nome}
    Telefone: ${clienteVip.telefone}
    Vip: ${clienteVip.vip}
    Endereços:`
)
clienteVip.listarEnderecos();

console.log(
    `
    Contas:`
)
clienteVip.listarContas()

console.log(
    `
    Cliente Común:

    Cpf: ${clienteComun.cpf}
    Nome: ${clienteComun.nome}
    Telefone: ${clienteComun.telefone}
    Vip: ${clienteComun.vip}
    Endereços:`
);
clienteComun.listarEnderecos();
console.log(
    `
    Contas:`
);
clienteComun.listarContas();

console.log (
    `
    --FUNCIONARIOS--

    Cpf: ${gerente.cpf}
    Nome: ${gerente.nome}
    Telefone: ${gerente.telefone}
    Salario: R$ ${gerente.salario}
    Cargo: ${gerente.cargo[0].nome}

    ------------------------------------

    Cpf: ${atendente.cpf}
    Nome: ${atendente.nome}
    Telefone: ${atendente.telefone}
    Salario: R$ ${atendente.salario}
    Cargo: ${atendente.cargo[0].nome}

    -----------------------------------------------------
    `
); 