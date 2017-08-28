import { InscricaoEstadual } from './inscricao-estadual.interface';

export class Alagoas implements InscricaoEstadual {

    private pesosDigito = [9, 8, 7, 6, 5, 4, 3, 2];
    private terceiroDigito = [0, 3, 5, 7, 8];

    validar(inscricaoEstadual: string): boolean {
        if (inscricaoEstadual &&
            inscricaoEstadual.length === 9
            && inscricaoEstadual.charAt(0) === '2'
            && inscricaoEstadual.charAt(1) === '4'
            && this.terceiroDigito.includes(Number(inscricaoEstadual.charAt(2)))) {

            let soma = 0;
            this.pesosDigito.forEach((elemento, posicao, array) => {
                soma += elemento * Number(inscricaoEstadual.charAt(posicao));
            });
            const produto = soma * 10;
            const digitoVerificador = produto % 11 < 10 ? produto % 11 : 0;

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
