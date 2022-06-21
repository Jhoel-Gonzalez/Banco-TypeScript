"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
var Endereco = /** @class */ (function () {
    function Endereco(cep, logradouro, numero, complemento, cidade, uf) {
        this._cep = cep;
        this._logradouro = logradouro;
        this._numero = numero;
        this._complemeto = complemento;
        this._cidade = cidade;
        this._uf = uf;
    }
    Object.defineProperty(Endereco.prototype, "cep", {
        get: function () {
            return this._cep;
        },
        set: function (value) {
            this._cep = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Endereco.prototype, "logradouro", {
        get: function () {
            return this._logradouro;
        },
        set: function (value) {
            this._logradouro = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Endereco.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (value) {
            this._numero = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Endereco.prototype, "complemeto", {
        get: function () {
            return this._complemeto;
        },
        set: function (value) {
            this._complemeto = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Endereco.prototype, "cidade", {
        get: function () {
            return this._cidade;
        },
        set: function (value) {
            this._cidade = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Endereco.prototype, "uf", {
        get: function () {
            return this._uf;
        },
        set: function (value) {
            this._uf = value;
        },
        enumerable: false,
        configurable: true
    });
    return Endereco;
}());
exports.Endereco = Endereco;
