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
exports.ContaCorrente = void 0;
var conta_js_1 = require("./conta.js");
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente(numero, saldo, limite) {
        var _this = _super.call(this, numero, saldo) || this;
        _this._limite = limite;
        return _this;
    }
    Object.defineProperty(ContaCorrente.prototype, "limite", {
        get: function () {
            return this._limite;
        },
        set: function (value) {
            this._limite = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContaCorrente.prototype, "cliente", {
        get: function () {
            return this._cliente;
        },
        set: function (value) {
            this._cliente = value;
        },
        enumerable: false,
        configurable: true
    });
    ContaCorrente.prototype.depositar = function (valor) {
        this.saldo += valor;
        console.log("\n            Deposito realizado com sucesso no valor de R$ ".concat(valor, "\n\n            Valor disponivel na sua conta Corrente: \n            R$ ").concat(this.saldo, "\n            ------------------------------------------------------\n            "));
    };
    ContaCorrente.prototype.transferir = function (contaDestino, valor, data) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            contaDestino.saldo += valor;
            console.log("\n                Transferencia realizada com sucesso da conta corrente ".concat(this.numero, "\n                para a conta poupan\u00E7a: ").concat(contaDestino.numero, " \n                no valor de R$ ").concat(valor, "\n                no dia ").concat(data, "\n\n                Valor disponivel para saque: R$ ").concat(this.saldo, "\n                -----------------------------------------------------------------------------\n                "));
        }
    };
    ContaCorrente.prototype.sacar = function (valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log("\n                Saque da conta corrente no valor de R$ ".concat(valor, " realizado com sucesso\n\n                valor disponivel para saque: R$ ").concat(this.saldo.toFixed(2), "\n                -----------------------------------------------------------------------------------------\n                "));
        }
        else if (this._limite >= valor) {
            this._limite -= valor;
            console.log("\n                Saque da conta conta corrente no valor de R$ ".concat(valor, " realizado com sucesso\n                valor do seu limite disponivel para saque: ").concat(this._limite.toFixed(2), "\n                ----------------------------------------------------------------------------------------\n                "));
        }
        else if (valor <= (this.saldo + this._limite)) {
            this._limite += this.saldo;
            this.saldo -= this.saldo;
            this._limite -= valor;
            console.log("\n                Saque da conta conta corrente no valor de R$ ".concat(valor, " realizado com sucesso.\n\n                Saldo da sua conta corrente disponivel para saque: R$ ").concat(this.saldo.toFixed(2), "\n\n                valor do seu limite disponivel para saque: R$ ").concat(this._limite.toFixed(2), "\n                ----------------------------------------------------------------------------------------\n                "));
        }
        else {
            console.log("\n                Saque n\u00E3o pode ser realizado devido a Saldo Insuficiente\n                ----------------------------------------------------------------------\n                ");
        }
    };
    ContaCorrente.prototype.addCliente = function (cliente) {
        this._cliente = cliente;
    };
    return ContaCorrente;
}(conta_js_1.Conta));
exports.ContaCorrente = ContaCorrente;
