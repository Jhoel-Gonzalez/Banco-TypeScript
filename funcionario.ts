import { Cargo } from "./cargo.js";
import { Pessoa } from "./pessoa.js";

export class Funcionario extends Pessoa {
    private _salario: Number;
    private _cargo: Cargo[] = [];


    constructor(cpf: String, nome: String, telefone: String, salario: Number, cargo: Cargo[]) {
        super(cpf, nome, telefone);
        this.salario = salario;
        this._cargo = cargo;
    }

    public get salario(): Number {
        return this._salario;
    }
    public set salario(value: Number) {
        this._salario = value;
    }

    public get cargo(): Cargo[] {
        return this._cargo;
    }
    public set cargo(value: Cargo[]) {
        this._cargo = value;
    }
}