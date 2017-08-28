import { InscricaoEstadual } from './inscricao-estadual.interface';

export class Bahia implements InscricaoEstadual {

    /**
     * Formato: Formato XXXXXXDD ou XXXXXXXDD(6 ou 7 digitos e 2 digitos verificadores)
     * @param inscricaoEstadual
     */
    validar(inscricaoEstadual: string): boolean {
        if (inscricaoEstadual && (inscricaoEstadual.length === 9 || inscricaoEstadual.length === 8)) {
            if (inscricaoEstadual.length === 8) {
                return this.validarInscricaoOitoDigitos(inscricaoEstadual);
            } else {
                return this.validarInscricaoNoveDigitos(inscricaoEstadual);
            }
        } else {
            return false;
        }
    }

    private validarInscricaoOitoDigitos(inscricao: string): boolean {
        const pesosSegundoDigito = [7, 6, 5, 4, 3, 2];
        const pesosPrimeiroDigito = [8, 7, 6, 5, 4, 3, 2];

        let mod = 11;
        if (Number(inscricao.charAt(0)) !== 6 && Number(inscricao.charAt(0)) !== 7 && Number(inscricao.charAt(0)) !== 9) {
            mod = 10;
        }

        let soma = 0;
        pesosSegundoDigito.forEach((elemento, posicao, array) => {
            soma += elemento * Number(inscricao.charAt(posicao));
        });
        let digitoVerificador = mod - soma % mod;
        if (digitoVerificador >= 10) {
            digitoVerificador = 0;
        }
        if (Number(inscricao.charAt(7)) === digitoVerificador) {
            soma = 0;
            pesosPrimeiroDigito.forEach((elemento, posicao, array) => {
                if (posicao !== 6) {
                    soma += elemento * Number(inscricao.charAt(posicao));
                } else {
                    soma += elemento * Number(inscricao.charAt(7));
                }
            });
            digitoVerificador = mod - soma % mod;
            if (digitoVerificador >= 10) {
                digitoVerificador = 0;
            }

            if (Number(inscricao.charAt(6)) === digitoVerificador) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    private validarInscricaoNoveDigitos(inscricao: string): boolean {
        const pesosSegundoDigito = [8, 7, 6, 5, 4, 3, 2];
        const pesosPrimeiroDigito = [9, 8, 7, 6, 5, 4, 3, 2];

        let mod = 11;
        if (Number(inscricao.charAt(1)) !== 6 && Number(inscricao.charAt(1)) !== 7 && Number(inscricao.charAt(1)) !== 9) {
            mod = 10;
        }

        let soma = 0;
        pesosSegundoDigito.forEach((elemento, posicao, array) => {
            soma += elemento * Number(inscricao.charAt(posicao));
        });
        let digitoVerificador = mod - soma % mod;
        if (digitoVerificador >= 10) {
            digitoVerificador = 0;
        }
        if (Number(inscricao.charAt(8)) === digitoVerificador) {
            soma = 0;
            pesosPrimeiroDigito.forEach((elemento, posicao, array) => {
                if (posicao !== 7) {
                    soma += elemento * Number(inscricao.charAt(posicao));
                } else {
                    soma += elemento * Number(inscricao.charAt(8));
                }
            });
            digitoVerificador = mod - soma % mod;
            if (digitoVerificador >= 10) {
                digitoVerificador = 0;
            }

            if (Number(inscricao.charAt(7)) === digitoVerificador) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}
