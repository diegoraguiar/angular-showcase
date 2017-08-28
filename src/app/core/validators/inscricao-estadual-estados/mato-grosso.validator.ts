import { InscricaoEstadual } from './inscricao-estadual.interface';

export class MatoGrosso implements InscricaoEstadual {

    private pesosDigito = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    /**
     * Formato: NNNNNNNNNND
     * @param inscricaoEstadual
     */
    validar(inscricaoEstadual: string): boolean {
        if (inscricaoEstadual && inscricaoEstadual.length === 11) {
            let soma = 0;
            this.pesosDigito.forEach((elemento, posicao, array) => {
                soma += elemento * Number(inscricaoEstadual.charAt(posicao));
            });

            const digitoVerificador = soma % 11 > 1 ? 11 - soma % 11 : 0;

            if (digitoVerificador === Number(inscricaoEstadual.charAt(10))) {
                return true;
            } else {
                return false;
            }

        } else {
            return false;
        }
    }
}
