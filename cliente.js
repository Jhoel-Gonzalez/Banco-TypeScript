"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var pessoa_js_1 = require("./pessoa.js");
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(cpf, nome, telefone, vip) {
        var _this = _super.call(this, cpf, nome, telefone) || this;
        _this._enderecos = [];
        _this._contas = [];
        _this._vip = vip;
        return _this;
    }
    Object.defineProperty(Cliente.prototype, "vip", {
        get: function () {
            return this._vip;
        },
        set: function (value) {
            this._vip = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "enderecos", {
        get: function () {
            return this._enderecos;
        },
        set: function (value) {
            this._enderecos = value;
        },
        enumerable: false,
        configurable: true
    });
    Cliente.prototype.listarEnderecos = function () {
        this._enderecos.forEach(function (endereco) {
            console.log("\n            Cep: ".concat(endereco.cep, "\n            Lougradouro: ").concat(endereco.logradouro, "\n            Numero: ").concat(endereco.numero, "\n            Complemento: ").concat(endereco.complemeto, "\n            Cidade: ").concat(endereco.cidade, "\n            Uf: ").concat(endereco.uf, "\n            \n            -------------------------------\n            "));
        });
    };
    Cliente.prototype.listarContas = function () {
        this._contas.forEach(function (conta) {
            /*Definí a modo de facilidade para eu conseguir identificar
            os tipos de conta, que os numero de contas que terminarem em "5" são Contas Correntes,
            e os que terminarem em "2" são contas poupanca*/
            if (conta.numero.charAt(7) === '5') {
                console.log("\n                    -- CONTAS CORRENTES --\n                    \n                    Numero: ".concat(conta.numero, "\n                    Saldo: R$ ").concat(conta.saldo, "\n                    limite: \n                    ------------------------\n                    ")
                //OBS: estou querendo pegar o limite, da conta mas, não consigo do jeito que eu estou fazendo.
                );
            }
            else if (conta.numero.charAt(7) === '2') {
                console.log("\n                    -- CONTAS POUPAN\u00C7A --\n                    \n                    Numero: ".concat(conta.numero, "\n                    Saldo: R$ ").concat(conta.saldo, "\n        \n                    ------------------------\n                    "));
            }
        });
    };
    Cliente.prototype.addContas = function (conta) {
        this._contas.push(conta);
    };
    Cliente.prototype.addEnderecos = function (endereco) {
        this._enderecos.push(endereco);
    };
    return Cliente;
}(pessoa_js_1.Pessoa));
exports.Cliente = Cliente;
