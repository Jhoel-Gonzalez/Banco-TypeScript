export class Cargo {
    private _nome: String;
   
    constructor(nome: String) {
        this.nome = nome;

    }

    public get nome(): String {
        return this._nome;
    }
    public set nome(value: String) {
        this._nome = value;
    }

}