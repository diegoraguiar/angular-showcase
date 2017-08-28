import { InscricaoEstadual } from './inscricao-estadual.interface';

export class RioGrandeDoNorte implements InscricaoEstadual {

    /**
     * Formato: NNNNNNN[N]-DD
     * @param inscricaoEstadual
     */
    validar(inscricaoEstadual: string): boolean {
        if (!inscricaoEstadual || (inscricaoEstadual.length !== 9 && inscricaoEstadual.length !== 10)) {
            return false;
        } else {
            const ultimo_digito = inscricaoEstadual.substring(inscricaoEstadual.length - 1, inscricaoEstadual.length);
            const digitos = inscricaoEstadual.substring(0, inscricaoEstadual.length - 1);
            return Number(ultimo_digito) === this.calcula_digito_verificador(digitos, inscricaoEstadual.length);
        }
    }

    private calcula_digito_verificador(digitos: string, peso: number): number {
        let acc = 0;
        for (let i = 0; i < digitos.length; i++) {
            acc += (peso * Number(digitos[i]));
            peso--;
        }
        acc *= 10;
        let digito_verificador = acc % 11;
        if (digito_verificador === 10) {
            digito_verificador = 0;
        }
        return digito_verificador;
    }
}
