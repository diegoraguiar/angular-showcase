import { InscricaoEstadual } from './inscricao-estadual.interface';

export class Pernambuco implements InscricaoEstadual {

    validar(inscricaoEstadual: string): boolean {
        if (!inscricaoEstadual || (inscricaoEstadual.length !== 9 && inscricaoEstadual.length !== 14)) {
            return false;
        } else {
            return inscricaoEstadual.length === 9 ? this.validaCom9Digitos(inscricaoEstadual) : this.validaCom14Digitos(inscricaoEstadual);
        }
    }

    private validaCom9Digitos(inscricaoEstadual): boolean {
        const digitos = inscricaoEstadual.substring(0, inscricaoEstadual.length - 2);
        const digitoVerificador = inscricaoEstadual.substring(inscricaoEstadual.length - 2, inscricaoEstadual.length);

        const primeiroDigito = this.calcularDigitoCom9Digitos(digitos, [8, 7, 6, 5, 4, 3, 2]);
        const segundoDigito = this.calcularDigitoCom9Digitos(digitos.concat(primeiroDigito.toString()), [9, 8, 7, 6, 5, 4, 3, 2]);

        return digitoVerificador === primeiroDigito.toString() + segundoDigito.toString();
    }

    private validaCom14Digitos(inscricaoEstadual): boolean {
        const digitos = inscricaoEstadual.substring(0, inscricaoEstadual.length - 1);
        const digitoVerificador = inscricaoEstadual.substring(inscricaoEstadual.length - 1, inscricaoEstadual.length);

        const primeiroDigito = this.calcularDigitoVerificadorCom14Digitos(digitos, [5, 4, 3, 2, 1, 9, 8, 7, 6, 5, 4, 3, 2]);

        return digitoVerificador === primeiroDigito.toString();
    }

    private calcularDigitoVerificadorCom14Digitos(inscricaoEstadual: string, pesos: Array<number>): number {

        let soma = 0;
        pesos.forEach((item, posicao, array) => {
            soma += item * Number(inscricaoEstadual.charAt(posicao));
        });

        const restoDivisao = soma % 11;
        let digitoVerificador = 11 - restoDivisao;
        if (digitoVerificador > 9) {
            digitoVerificador -= 10;
        }

        return digitoVerificador;
    }

    private calcularDigitoCom9Digitos(inscricaoEstadual: string, pesos: Array<number>) {

        let soma = 0;
        pesos.forEach((item, posicao, array) => {
            soma += item * Number(inscricaoEstadual.charAt(posicao));
        });

        const restoDivisao = soma % 11;
        let digitoVerificador = 0;
        if (restoDivisao !== 1 && restoDivisao !== 0) {
            digitoVerificador = 11 - restoDivisao;
        }

        return digitoVerificador;
    }

}
