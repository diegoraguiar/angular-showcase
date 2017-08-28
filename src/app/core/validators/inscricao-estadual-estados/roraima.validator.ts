import { InscricaoEstadual } from './inscricao-estadual.interface';

export class Roraima implements InscricaoEstadual {

    /**
     * Formato: 2 dígitos + 6 dígitos + 1 dígito verificador
     * @param inscricaoEstadual
     */
    validar(inscricaoEstadual: string): boolean {
        if (!inscricaoEstadual || inscricaoEstadual.length !== 9) {
            return false;
        } else {
            const ultimo_digito = inscricaoEstadual.substring(inscricaoEstadual.length - 1, inscricaoEstadual.length);
            const digitos = inscricaoEstadual.substring(0, inscricaoEstadual.length - 1);

            let acc = 0;
            for (let i = 0; i < digitos.length; i++) {
                acc += ((i + 1) * Number(digitos[i]));
            }
            return Number(ultimo_digito) === acc % 9;
        }
    }

}
