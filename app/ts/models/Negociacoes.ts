import { Negociacao } from './Negociacao';

export class Negociacoes {

    private _negociacoes: Negociacao[] = [];

    adiciona(Negociacao: Negociacao) {
        this._negociacoes.push(Negociacao);
    }

    paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

}
