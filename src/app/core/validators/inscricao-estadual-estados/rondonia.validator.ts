import { InscricaoEstadual } from './inscricao-estadual.interface';

export class Rondonia implements InscricaoEstadual {

    /**
     * Formato: 3 dígitos (município) + 5 dígitos (empresa) +1 dígito verificador
     * Formato: 13 dígitos (empresa) + 1 dígito verificador
     * @param inscricaoEstadual
     */
    validar(inscricaoEstadual: string): boolean {
        if (!inscricaoEstadual || (inscricaoEstadual.length !== 9 && inscricaoEstadual.length !== 14)) {
            return false;
        } else {
            return this['valida_' + inscricaoEstadual.length + '_digitos'](inscricaoEstadual);
        }
    }

    private valida_9_digitos(inscricaoEstadual): boolean {
        const ultimo_digito = inscricaoEstadual.substring(inscricaoEstadual.length - 1, inscricaoEstadual.length);
        const digitos = inscricaoEstadual.substring(3, inscricaoEstadual.length - 1);

        return Number(ultimo_digito) === this.calcula_digito_verificador(digitos);
    }

    private valida_14_digitos(inscricaoEstadual): boolean {
        const ultimo_digito = inscricaoEstadual.substring(inscricaoEstadual.length - 1, inscricaoEstadual.length);
        const digitos = inscricaoEstadual.substring(0, inscricaoEstadual.length - 1);

        return Number(ultimo_digito) === this.calcula_digito_verificador(digitos)
    }

    private calcula_digito_verificador(digitos: string, peso = 6): number {
        let acc = 0;
        for (let i = 0; i < digitos.length; i++) {
            acc += (peso * Number(digitos[i]));
            peso--;
            if (peso < 2) {
                peso = 9;
            }
        }
        const resto_divisao = acc % 11;
        let digito_verificador = 11 - resto_divisao;
        if (digito_verificador === 10 || digito_verificador === 11) {
            digito_verificador -= 10;
        }
        return digito_verificador;
    }

}
