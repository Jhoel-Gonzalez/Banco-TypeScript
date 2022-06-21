import { Cliente } from "./cliente.js";
import { Conta } from "./conta.js";
import { ContaPoupanca } from "./contaPoupança.js";

export class ContaCorrente extends Conta {

    private _limite: number;
    private _cliente: Cliente;
    

    constructor(numero: string, saldo: number, limite: number) {
        super(numero, saldo);
        this._limite = limite;
    }

    public get limite(): number {
        return this._limite;
    }
    public set limite(value: number) {
        this._limite = value;
    }

    public get cliente(): Cliente {
        return this._cliente;
    }
    public set cliente(value: Cliente) {
        this._cliente = value;
    }

    public depositar(valor: number) {
        this.saldo += valor;
        console.log(
            `
            Deposito realizado com sucesso no valor de R$ ${valor}

            Valor disponivel na sua conta Corrente: 
            R$ ${this.saldo}
            ------------------------------------------------------
            `
        );
    }

    public transferir(contaDestino: ContaPoupanca, valor: number, data: Date) {

        if (this.saldo >= valor) {

            this.saldo -= valor;
            contaDestino.saldo += valor

            console.log(
                `
                Transferencia realizada com sucesso da conta corrente ${this.numero}
                para a conta poupança: ${contaDestino.numero} 
                no valor de R$ ${valor}
                no dia ${data}

                Valor disponivel para saque: R$ ${this.saldo}
                -----------------------------------------------------------------------------
                `
            );
        } 
    }

    public sacar(valor: number) {

        if (this.saldo >= valor) {

            this.saldo -= valor;

            console.log(
                `
                Saque da conta corrente no valor de R$ ${valor} realizado com sucesso

                valor disponivel para saque: R$ ${this.saldo.toFixed(2)}
                -----------------------------------------------------------------------------------------
                `
            );

        } else if (this._limite >= valor) {

            this._limite -= valor;

            console.log(
                `
                Saque da conta conta corrente no valor de R$ ${valor} realizado com sucesso
                valor do seu limite disponivel para saque: ${this._limite.toFixed(2)}
                ----------------------------------------------------------------------------------------
                `
            );

        } else if (valor <= (this.saldo + this._limite)) {

            this._limite += this.saldo;
            this.saldo -= this.saldo;
            this._limite -= valor;

            console.log(
                `
                Saque da conta conta corrente no valor de R$ ${valor} realizado com sucesso.

                Saldo da sua conta corrente disponivel para saque: R$ ${this.saldo.toFixed(2)}

                valor do seu limite disponivel para saque: R$ ${this._limite.toFixed(2)}
                ----------------------------------------------------------------------------------------
                `
            );

        } else {

            console.log(
                `
                Saque não pode ser realizado devido a Saldo Insuficiente
                ----------------------------------------------------------------------
                `
            );
        }
    }

    public addCliente(cliente: Cliente) {
        this._cliente = cliente;
    }
}