import { InscricaoEstadual } from './inscricao-estadual.interface';

export class SaoPaulo implements InscricaoEstadual {

    private pesos = [1, 3, 4, 5, 6, 7, 8, 10];

    /**
     * Formato: 12 dígitos sendo que o 9º e o 12º são dígitos verificadores
     * Formato: 13 caracteres dos quais o 10º caracter contado a partir da esquerda ("D") é o dac
     * @param inscricaoEstadual
     */
    validar(inscricaoEstadual: string): boolean {
        if (!inscricaoEstadual || (inscricaoEstadual.length !== 12 && inscricaoEstadual.length !== 14)) {
            return false;
        } else {
            if (inscricaoEstadual[0] === 'P') {
                return this.calcula_rural(inscricaoEstadual);
            } else {
                return this.calcula_industrial_comercio(inscricaoEstadual);
            }
        }
    }

    private calcula_industrial_comercio(inscricaoEstadual: string): boolean {
        const digito_9 = inscricaoEstadual.substring(8, 9);
        const primeiros_9_digitos = inscricaoEstadual.substring(0, 8);

        let acc = 0;
        for (let i = 0; i < 8; i++) {
            acc += (this.pesos[i] * Number(primeiros_9_digitos[i]));
        }

        const resto_divisao = acc % 11;
        if (Number(digito_9) !== resto_divisao % 10) {
            return false;
        }

        const digito_12 = inscricaoEstadual.substring(inscricaoEstadual.length - 1, inscricaoEstadual.length);
        const primeiros_11_digitos = inscricaoEstadual.substring(0, inscricaoEstadual.length - 1);
        let peso = 3;
        acc = 0;
        for (let i = 0; i < 11; i++) {
            acc += (peso * Number(primeiros_11_digitos[i]));
            peso--;
            if (peso < 2) {
                peso = 10;
            }
        }
        return Number(digito_12) === acc % 11;
    }

    private calcula_rural(inscricaoEstadual: string): boolean {
        const digitos = inscricaoEstadual.substring(1, 9);
        const digito_verificador = inscricaoEstadual.substring(9, 10);
        let acc = 0;
        for (let i = 0; i < 8; i++) {
            acc += (this.pesos[i] * Number(digitos[i]));
        }

        const resto_divisao = acc % 11;
        const dac_9 = resto_divisao % 10;
        return Number(digito_verificador) === dac_9 && inscricaoEstadual.length === 14;
    }
}
