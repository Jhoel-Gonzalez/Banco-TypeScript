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
exports.ContaPoupanca = void 0;
var conta_js_1 = require("./conta.js");
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca(numero, saldo, variacao) {
        var _this = _super.call(this, numero, saldo) || this;
        /* Duvidas em relação a esses ultimos dois atributos atributos*/
        _this._dataSaque = new Date(9);
        _this._saldoAniversario = [];
        _this._variacao = variacao;
        return _this;
    }
    Object.defineProperty(ContaPoupanca.prototype, "variacao", {
        get: function () {
            return this._variacao;
        },
        set: function (value) {
            this._variacao = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContaPoupanca.prototype, "cliente", {
        get: function () {
            return this._cliente;
        },
        set: function (value) {
            this._cliente = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContaPoupanca.prototype, "saldoAniversario", {
        get: function () {
            return this._saldoAniversario;
        },
        set: function (value) {
            this._saldoAniversario = value;
        },
        enumerable: false,
        configurable: true
    });
    ContaPoupanca.prototype.depositar = function (valor, data) {
        this.saldo += valor;
        console.log("\n            Deposito no valor de R$: ".concat(valor, " realizado com sucesso \n            no dia ").concat(data, "\n\n            Valor disponivel na sua conta poupan\u00E7a:\n            R$ ").concat(this.saldo, "\n            -----------------------------------------------------------\n            "));
    };
    /* Em relação a esses dois métodos, a regra de saque deve ser a mesma, ou, somente a
    regra aplica-se ao metodo "resgatar" especificamente..? */
    ContaPoupanca.prototype.sacar = function (valor) {
    };
    ContaPoupanca.prototype.resgatar = function (conta, contaCorrenteDestino, valor, data) {
    };
    ContaPoupanca.prototype.addCliente = function (cliente) {
        this._cliente = cliente;
    };
    return ContaPoupanca;
}(conta_js_1.Conta));
exports.ContaPoupanca = ContaPoupanca;
