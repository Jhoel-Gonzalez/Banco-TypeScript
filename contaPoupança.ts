import { Cliente } from "./cliente.js";
import { Conta } from "./conta.js";
import { ContaCorrente } from "./contaCorrente.js";
import { SaldoAniversario } from "./saldoAniversario.js";

export class ContaPoupanca extends Conta {

    private _variacao: number;
    private _cliente: Cliente;

    /* Duvidas em relação a esses ultimos dois atributos atributos*/
    private _dataSaque: Date = new Date(9);
    private _saldoAniversario: SaldoAniversario[] = [];

    constructor(numero: string, saldo: number, variacao: number) {
        super(numero, saldo);
        this._variacao = variacao;
    }
   
    public get variacao(): number {
        return this._variacao;
    }
    public set variacao(value: number) {
        this._variacao = value;
    }

    public get cliente(): Cliente {
        return this._cliente;
    }
    public set cliente(value: Cliente) {
        this._cliente = value;
    }

    public get saldoAniversario(): SaldoAniversario[] {
        return this._saldoAniversario;
    }
    public set saldoAniversario(value: SaldoAniversario[]) {
        this._saldoAniversario = value;
    }

    public depositar(valor: number, data: Date): void {
        this.saldo += valor;
        console.log(
            `
            Deposito no valor de R$: ${valor} realizado com sucesso 
            no dia ${data}

            Valor disponivel na sua conta poupança:
            R$ ${this.saldo}
            -----------------------------------------------------------
            `
        );
    }

    /* Em relação a esses dois métodos, a regra de saque deve ser a mesma, ou, somente a 
    regra aplica-se ao metodo "resgatar" especificamente..? */

    public sacar(valor: number): void {
        
    }

    public resgatar(conta: string, contaCorrenteDestino: ContaCorrente, valor: number, data: Date) {
      
    }

    public addCliente(cliente: Cliente) {
        this._cliente = cliente;
    }
}