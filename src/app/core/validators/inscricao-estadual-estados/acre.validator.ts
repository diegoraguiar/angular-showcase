import { InscricaoEstadual } from './inscricao-estadual.interface';

export class Acre implements InscricaoEstadual {

    private pesosPrimeiroDigito = [4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    private pesosSegundoDigito = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    /**
     * Formato: 01XXXXXXXXXDD (13 números - 11 identificadores 2 digitos verificadores)
     */
    validar(inscricaoEstadual: string): boolean {
        if (inscricaoEstadual && inscricaoEstadual.length === 13 && inscricaoEstadual.charAt(0) === '0'
            && inscricaoEstadual.charAt(1) === '1') {

            let soma = 0;
            this.pesosPrimeiroDigito.forEach((item, posicao, array) => {
                soma += item * Number(inscricaoEstadual.charAt(posicao));
            });
            const primeiroDigitoVerificador = soma % 11 > 1 ? 11 - (soma % 11) : 0;

            if (primeiroDigitoVerificador === Number(inscricaoEstadual.charAt(11))) {
                soma = 0;
                this.pesosSegundoDigito.forEach((item, posicao, array) => {
                    soma += item * Number(inscricaoEstadual.charAt(posicao));
                });
                const segundoDigitoVerificador = soma % 11 > 1 ? 11 - (soma % 11) : 0;
                if (segundoDigitoVerificador === Number(inscricaoEstadual.charAt(12))) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}
