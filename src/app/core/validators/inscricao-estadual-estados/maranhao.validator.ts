import { InscricaoEstadual } from './inscricao-estadual.interface';

export class Maranhao implements InscricaoEstadual {
    private pesosDigito = [9, 8, 7, 6, 5, 4, 3, 2];

    /**
     * Formato: 12NNNNNND
     * @param inscricaoEstadual
     */
    validar(inscricaoEstadual: string): boolean {
        if (inscricaoEstadual &&
            inscricaoEstadual.length === 9
            && inscricaoEstadual.charAt(0) === '1'
            && inscricaoEstadual.charAt(1) === '2') {
            let soma = 0;
            this.pesosDigito.forEach((elemento, posicao, array) => {
                soma += elemento * Number(inscricaoEstadual.charAt(posicao));
            });
            const digitoVerificador = soma % 11 > 1 ? 11 - soma % 11 : 0;
            if (digitoVerificador === Number(inscricaoEstadual.charAt(8))) {
                return true;
            } else {
                return false;
            }

        } else {
            return false;
        }
    }
}
