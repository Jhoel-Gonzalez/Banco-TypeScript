export abstract class Pessoa {
    private _cpf: String;
    private _nome: String;
    private _telefone: String;

    constructor(cpf: String, nome: String, telefone: String) {
        this._cpf = cpf;
        this._nome = nome;
        this._telefone = telefone;
    }

    public get cpf(): String {
        return this._cpf;
    }
    public set cpf(value: String) {
        this._cpf = value;
    }

    public get nome(): String {
        return this._nome;
    }
    public set nome(value: String) {
        this._nome = value;
    }

    public get telefone(): String {
        return this._telefone;
    }
    public set telefone(value: String) {
        this._telefone = value;
    }

}