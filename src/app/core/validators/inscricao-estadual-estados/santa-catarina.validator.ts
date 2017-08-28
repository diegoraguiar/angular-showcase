import { InscricaoEstadual } from './inscricao-estadual.interface';

export class SantaCatarina implements InscricaoEstadual {

    validar(inscricaoEstadual: string): boolean {
        if (!inscricaoEstadual || inscricaoEstadual.length !== 9) {
            return false;
        } else {
            const ultimo_digito = inscricaoEstadual.substring(inscricaoEstadual.length - 1, inscricaoEstadual.length);
            const digitos = inscricaoEstadual.substring(0, inscricaoEstadual.length - 1);

            let acc = 0;
            let peso = 9;
            for (let i = 0; i < digitos.length; i++) {
                acc += (peso * Number(digitos[i]));
                peso--;
            }
            const resto_divisao = acc % 11;
            let digito_verificador = 11 - resto_divisao;
            if (digito_verificador === 10 || digito_verificador === 11) {
                digito_verificador = 0;
            }
            return Number(ultimo_digito) === digito_verificador;
        }
    }

}
