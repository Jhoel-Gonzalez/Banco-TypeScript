export abstract class Conta {
    private _numero: string;
    private _saldo: number;
    

    constructor(numero: string, saldo: number) {
        this._numero = numero;
        this._saldo = saldo;
    }

    public get numero(): string {
        return this._numero;
    }
    public set numero(value: string) {
        this._numero = value;
    }

    public get saldo(): number {
        return this._saldo;
    }
    public set saldo(value: number) {
        this._saldo = value;
    }

    public abstract depositar(valor: number, data: Date): void;
    public abstract sacar(valor: number): void;
}