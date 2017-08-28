import { InscricaoEstadual } from './inscricao-estadual.interface';

export class Amapa implements InscricaoEstadual {

    private pesosDigito = [9, 8, 7, 6, 5, 4, 3, 2];

    /**
     * Formato: 03XXXXXXD (2 dígitos constantes (03) + 6 dígitos (empresa) +1 dígito verificador)
     * @param inscricaoEstadual
     */
    validar(inscricaoEstadual: string): boolean {
        if (inscricaoEstadual && inscricaoEstadual.length === 9
            && inscricaoEstadual.charAt(0) === '0'
            && inscricaoEstadual.charAt(1) === '3'
            && inscricaoEstadual.charAt(7) !== '0') {
            let p = 0;
            let d = 0;
            const faixa = Number(inscricaoEstadual.substr(0, 8));
            if (faixa >= 3000001 && faixa <= 3017000) {
                p = 5; d = 0;
            }
            if (faixa >= 3017001 && faixa <= 3019022) {
                p = 9; d = 1;
            }

            let soma = p;
            this.pesosDigito.forEach((elemento, posicao, array) => {
                soma += elemento * Number(inscricaoEstadual.charAt(posicao));
            });

            let digitoVerificador = 11 - soma % 11;
            if (digitoVerificador === 10) {
                digitoVerificador = 0;
            }
            if (digitoVerificador === 11) {
                digitoVerificador = d;
            }
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
