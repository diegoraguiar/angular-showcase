import { InscricaoEstadual } from './inscricao-estadual.interface';

export class Tocantins implements InscricaoEstadual {

    validar(inscricaoEstadual: string): boolean {
        if (!inscricaoEstadual || inscricaoEstadual.length !== 11) {
            return false;
        } else {
            const ultimo_digito = inscricaoEstadual.substring(inscricaoEstadual.length - 1, inscricaoEstadual.length);
            let digitos = inscricaoEstadual.substring(0, 2);
            digitos = digitos.concat(inscricaoEstadual.substring(4, inscricaoEstadual.length - 1));

            let acc = 0;
            let peso = 9;
            for (let i = 0; i < digitos.length; i++) {
                acc += (peso * Number(digitos[i]));
                peso--;
            }
            const resto_divisao = acc % 11;
            let digito_verificador = 11 - resto_divisao;
            if (resto_divisao < 2) {
                digito_verificador = 0;
            }

            return Number(ultimo_digito) === digito_verificador;
        }
    }

}
