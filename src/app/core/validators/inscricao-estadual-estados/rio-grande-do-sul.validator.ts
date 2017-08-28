import { InscricaoEstadual } from './inscricao-estadual.interface';

export class RioGrandeDoSul implements InscricaoEstadual {

    /**
     * Formato: 3 dígitos (município) + 6 dígitos (empresa) + 1 dígito verificador
     * @param inscricaoEstadual
     */
    validar(inscricaoEstadual: string): boolean {
        if (!inscricaoEstadual || inscricaoEstadual.length !== 10) {
            return false;
        } else {
            const ultimo_digito = inscricaoEstadual.substring(inscricaoEstadual.length - 1, inscricaoEstadual.length);
            const digitos = inscricaoEstadual.substring(0, inscricaoEstadual.length - 1);
            return Number(ultimo_digito) === this.calcula_digito_verificador(digitos);
        }
    }

    private calcula_digito_verificador(digitos: string, peso = 2): number {
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
        if (digito_verificador === 10) {
            digito_verificador = 0;
        }
        return digito_verificador;
    }
}
