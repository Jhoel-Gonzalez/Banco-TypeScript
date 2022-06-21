"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cargo_js_1 = require("./cargo.js");
var cliente_js_1 = require("./cliente.js");
var contaCorrente_js_1 = require("./contaCorrente.js");
var contaPoupan_a_js_1 = require("./contaPoupan\u00E7a.js");
var endere_o_js_1 = require("./endere\u00E7o.js");
var funcionario_js_1 = require("./funcionario.js");
//Crie dois funcionários do banco, um gerente e um atendente.
var cargoGerente = new cargo_js_1.Cargo("Gerente");
var cargoAtendente = new cargo_js_1.Cargo("Atendente");
var gerente = new funcionario_js_1.Funcionario('706.509.702-17', 'Jhoel Gonzalez', '11991563455', 5000, [cargoGerente]);
var atendente = new funcionario_js_1.Funcionario('706.509.702-17', 'Francisco Ortega', '11991563455', 1500, [cargoAtendente]);
/* Crie uma conta corrente e uma conta poupança para 2 clientes (um vip e um não vip)
do banco, um deles com um endereço apenas e outro com dois endereços
cadastrados. */
var enderecoClienteVip1 = new endere_o_js_1.Endereco('79170-000', 'Rua Santa Catarina', '1983', 'casa', 'Sidrolandia', 'MS');
var enderecoClienteVip2 = new endere_o_js_1.Endereco('63939-783', 'Rua Altair Pereira De Melo', '1492', 'Kitnet', 'Boa Vista', 'RR');
var enderecoClienteComun = new endere_o_js_1.Endereco('63939-783', 'Rua Altair Pereira De Melo', '1492', 'Kitnet', 'Boa Vista', 'RR');
var contaCorrenteVip = new contaCorrente_js_1.ContaCorrente('785679-5', 0.00, 30000);
var contaPoupancaVip = new contaPoupan_a_js_1.ContaPoupanca('725152-2', 0.00, 0.00);
var contaCorrenteComun = new contaCorrente_js_1.ContaCorrente('51665-5', 0.00, 50);
var contaPoupancaComun = new contaPoupan_a_js_1.ContaPoupanca('16316-2', 0.00, 0.00);
var clienteVip = new cliente_js_1.Cliente('723.840.050-22', 'Bernardo Ian Assunção', '(73) 98778-7300', true);
clienteVip.addContas(contaCorrenteVip);
clienteVip.addContas(contaPoupancaVip);
clienteVip.addEnderecos(enderecoClienteVip1);
clienteVip.addEnderecos(enderecoClienteVip2);
var clienteComun = new cliente_js_1.Cliente('776.296.027-90', 'Augusto Bernardo Antonio Monteiro', '(85) 99359-0405', false);
clienteComun.addContas(contaCorrenteComun);
clienteComun.addContas(contaPoupancaComun);
clienteComun.addEnderecos(enderecoClienteComun);
contaCorrenteVip.addCliente(clienteVip);
contaPoupancaVip.addCliente(clienteVip);
console.log('--CLIENTE COMÚN--');
// Faça um depósito de um salário mínimo na conta corrente do cliente não vip.
contaCorrenteComun.depositar(1212);
/* Faça uma transferência de 5% de um salário mínimo da conta corrente do
cliente não vip para a sua conta poupança no dia 04/06/2022.*/
var transferencia = 0.05 * 1212;
contaCorrenteComun.transferir(contaPoupancaComun, transferencia, new Date(2022, 5, 4));
/* Faça um saque de 50% de um salário mínimo da conta corrente do cliente
não vip e exiba o saldo em conta após a ação. */
var valorDeSaque = 0.50 * 1212;
contaCorrenteComun.sacar(valorDeSaque);
/* Tente fazer outro saque de 50% de um salário mínimo da conta corrente do
cliente não vip. */
contaCorrenteComun.sacar(valorDeSaque);
//Faça um depósito de 50 reais na conta poupança do cliente não vip no dia 09/06/2022.
contaPoupancaComun.depositar(50, new Date(2022, 5, 9));
//Faça um resgate de 60 reais da conta poupança no dia 09/07/2022.
console.log("\n    -------------------------------- \n\n    --CLIENTE VIP--\n    ");
//Faça um depósito de 50 salários mínimos na conta corrente do cliente vip.
contaCorrenteVip.depositar(1212 * 50);
/* Faça uma transferência de 20 salários mínimos da conta corrente do cliente
vip para a sua conta poupança no dia 05/06/2022. */
var transferenciaClienteVip = 1212 * 20;
contaCorrenteVip.transferir(contaPoupancaVip, transferenciaClienteVip, new Date(2022, 5, 5));
/* Faça um saque de 50000 reais da conta corrente do cliente vip e exiba o
saldo em conta após a ação. */
contaCorrenteVip.sacar(50000);
//Tente fazer outro saque de 50000 reais da conta corrente do cliente vip.
contaCorrenteVip.sacar(50000);
console.log("\n    ------------------------------------------\n\n    --RELATORIO DOS CLIENTES--\n    ");
console.log("\n    --CLIENTES--\n\n    Cliente Vip: \n\n    Cpf: ".concat(clienteVip.cpf, "\n    Nome: ").concat(clienteVip.nome, "\n    Telefone: ").concat(clienteVip.telefone, "\n    Vip: ").concat(clienteVip.vip, "\n    Endere\u00E7os:"));
clienteVip.listarEnderecos();
console.log("\n    Contas:");
clienteVip.listarContas();
console.log("\n    Cliente Com\u00FAn:\n\n    Cpf: ".concat(clienteComun.cpf, "\n    Nome: ").concat(clienteComun.nome, "\n    Telefone: ").concat(clienteComun.telefone, "\n    Vip: ").concat(clienteComun.vip, "\n    Endere\u00E7os:"));
clienteComun.listarEnderecos();
console.log("\n    Contas:");
clienteComun.listarContas();
console.log("\n    --FUNCIONARIOS--\n\n    Cpf: ".concat(gerente.cpf, "\n    Nome: ").concat(gerente.nome, "\n    Telefone: ").concat(gerente.telefone, "\n    Salario: R$ ").concat(gerente.salario, "\n    Cargo: ").concat(gerente.cargo[0].nome, "\n\n    ------------------------------------\n\n    Cpf: ").concat(atendente.cpf, "\n    Nome: ").concat(atendente.nome, "\n    Telefone: ").concat(atendente.telefone, "\n    Salario: R$ ").concat(atendente.salario, "\n    Cargo: ").concat(atendente.cargo[0].nome, "\n\n    -----------------------------------------------------\n    "));
