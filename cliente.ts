import { Conta } from "./conta.js";
import { Endereco } from "./endereço.js";
import { Pessoa } from "./pessoa.js";

export class Cliente extends Pessoa {
    private _vip: Boolean;
    private _enderecos: Endereco[] = [];
    private _contas: Conta[] = [];
    
    constructor(cpf: String, nome: String, telefone: String, vip: Boolean) {
        super(cpf, nome, telefone);
        this._vip = vip;
    }

    public get vip(): Boolean {
        return this._vip;
    }
    public set vip(value: Boolean) {
        this._vip = value;
    }

    public get enderecos(): Endereco[] {
        return this._enderecos;
    }
    public set enderecos(value: Endereco[]) {
        this._enderecos = value;
    }

    public listarEnderecos(): void {
        this._enderecos.forEach(endereco => {
            console.log(`
            Cep: ${endereco.cep}
            Lougradouro: ${endereco.logradouro}
            Numero: ${endereco.numero}
            Complemento: ${endereco.complemeto}
            Cidade: ${endereco.cidade}
            Uf: ${endereco.uf}
            
            -------------------------------
            `)
        })
    }

    public listarContas(): void {
        this._contas.forEach(conta => {

           /*Definí a modo de facilidade para eu conseguir identificar
           os tipos de conta, que os numero de contas que terminarem em "5" são Contas Correntes,
           e os que terminarem em "2" são contas poupanca*/

            if (conta.numero.charAt(7) === '5') {

                console.log(
                    `
                    -- CONTAS CORRENTES --
                    
                    Numero: ${conta.numero}
                    Saldo: R$ ${conta.saldo}
                    limite: 
                    ------------------------
                    `
                    //OBS: estou querendo pegar o limite, da conta mas, não consigo do jeito que eu estou fazendo.
                )
            } else if (conta.numero.charAt(7) === '2') {

                console.log(
                    `
                    -- CONTAS POUPANÇA --
                    
                    Numero: ${conta.numero}
                    Saldo: R$ ${conta.saldo}
        
                    ------------------------
                    `
                )
            }
           
        })

        
    } 

    public addContas(conta): void {
        this._contas.push(conta)
    }

    public addEnderecos(endereco): void {
        this._enderecos.push(endereco)
    }
   
    
}