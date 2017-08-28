import { InscricaoEstadual } from './inscricao-estadual.interface';

export class Parana implements InscricaoEstadual {

    /**
     * Formato: NNNNNNNN-DD
     * @param inscricaoEstadual
     */
    validar(inscricaoEstadual: string): boolean {
        if (!inscricaoEstadual || inscricaoEstadual.length !== 10) {
            return false;
        } else {
            const ultimo_digito = inscricaoEstadual.substring(inscricaoEstadual.length - 1, inscricaoEstadual.length);
            const penultimo_digito = inscricaoEstadual.substring(inscricaoEstadual.length - 2, inscricaoEstadual.length - 1);
            let digitos = inscricaoEstadual.substring(0, inscricaoEstadual.length - 2);

            const digito_verificador1 = this.calcula_digito_verificador(digitos);
            if (Number(penultimo_digito) !== digito_verificador1) {
                return false;
            }

            digitos = digitos.concat(digito_verificador1.toString());

            const digito_verificador2 = this.calcula_digito_verificador(digitos);

            return Number(ultimo_digito) === digito_verificador2;
        }
    }

    private calcula_digito_verificador(digitos): number {
        let peso = 2;
        let acc = 0;
        for (let i = digitos.length - 1; i >= 0; i--) {
            acc += (peso * Number(digitos[i]));
            peso++;
            if (peso > 7) {
                peso = 2;
            }
        }
        const resto_divisao = acc % 11;
        let digito_verificador = 11 - resto_divisao;
        if (digito_verificador === 10 || digito_verificador === 11) {
            digito_verificador = 0;
        }

        return digito_verificador;
    }

}
