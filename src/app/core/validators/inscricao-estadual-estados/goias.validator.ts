import { InscricaoEstadual } from './inscricao-estadual.interface';

export class Goias implements InscricaoEstadual {
    private pesosDigito = [9, 8, 7, 6, 5, 4, 3, 2];

    /**
     * Formato: XXXXXXXXD (8 dígitos (empresa) +1 dígito verificador)
     * @param inscricaoEstadual
     */
    validar(inscricaoEstadual: string): boolean {
        if (inscricaoEstadual && inscricaoEstadual.length === 9) {
            let soma = 0;
            this.pesosDigito.forEach((elemento, posicao, array) => {
                soma += elemento * Number(inscricaoEstadual.charAt(posicao));
            });

            let digitoVerificador = 11 - soma % 11;
            if (soma % 11 === 0) {
                digitoVerificador = 0;
            }

            const numeroInscricao = Number(inscricaoEstadual.substr(0, 8));
            if (soma % 11 === 1) {
                if (numeroInscricao >= 10103105 && numeroInscricao <= 10119997) {
                    digitoVerificador = 1;
                } else {
                    digitoVerificador = 0;
                }
            }

            if (numeroInscricao === 11094402) {
                if (Number(inscricaoEstadual.charAt(8)) === 0 || Number(inscricaoEstadual.charAt(8)) === 1) {
                    return true;
                } else {
                    return false;
                }
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
