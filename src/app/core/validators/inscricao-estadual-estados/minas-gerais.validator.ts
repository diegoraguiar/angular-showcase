import { InscricaoEstadual } from './inscricao-estadual.interface';

export class MinasGerais implements InscricaoEstadual {
    private pesosSegundoDigito = [3, 2, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    private pesosPrimeiroDigito = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];

    /**
     * Formato: MMMNNNNNNCCDD (13 digitos (3 codigo municipio - 6 numero inscrição - 2 codigo de orde - 2 digitos verificadores )
     * @param inscricaoEstadual
     */
    validar(inscricaoEstadual: string): boolean {
        if (inscricaoEstadual && inscricaoEstadual.length === 13) {
            const arrayComZero = this.arrayDigitosComZero(inscricaoEstadual);
            let soma = 0;
            arrayComZero.forEach((elemento, posicao, array) => {
                soma += this.somaAlgarismos(elemento * this.pesosPrimeiroDigito[posicao]);
            });
            const primeitroDigitoVerificador = soma % 10 > 0 ? 10 - soma % 10 : 0;

            if (Number(inscricaoEstadual.charAt(11)) === primeitroDigitoVerificador) {
                soma = 0;
                this.pesosSegundoDigito.forEach((elemento, posicao, array) => {
                    soma += elemento * Number(inscricaoEstadual.charAt(posicao));
                });

                const segundoDigitoVerificador = soma % 11 > 1 ? 11 - soma % 11 : 0;
                if (Number(inscricaoEstadual.charAt(12)) === segundoDigitoVerificador) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    private somaAlgarismos(numero: number): number {
        if (numero < 10) {
            return numero;
        } else {
            return Math.floor(numero / 10) + numero % 10;
        }
    }

    private arrayDigitosComZero(inscricao: string): number[] {
        const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        array.forEach((elemento, posicao) => {
            if (posicao < 3) {
                array[posicao] = Number(inscricao.charAt(posicao));
            } else if (posicao > 3) {
                array[posicao] = Number(inscricao.charAt(posicao - 1));
            }
        });
        return array;
    }
}
