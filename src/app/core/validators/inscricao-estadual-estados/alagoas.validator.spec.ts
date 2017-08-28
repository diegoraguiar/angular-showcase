import { Alagoas } from './alagoas.validator';
import { InscricaoEstadualFactory } from './inscricao-estadual.factory';

describe('classe validacao: Inscricao Estadual Alagoas', () => {

    const estado = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.ALAGOAS);

    it('instancia deve estar criada', () => {
        expect(estado).toBeTruthy();
    });

    it('inscricao estadual deve estar valida', () => {
        expect(estado.validar('248812769')).toBe(true);
        expect(estado.validar('248580043')).toBe(true);
        expect(estado.validar('248720171')).toBe(true);
        expect(estado.validar('243576390')).toBe(true);
    });

    it('inscricao estadual deve estar invalida', () => {
        expect(estado.validar('316354652')).toBe(false);
        expect(estado.validar('31632')).toBe(false);
        expect(estado.validar('1346123461')).toBe(false);
    });

    it('inscricao estadual deve estar invalida quando valor for nulo', () => {
        expect(estado.validar(null)).toBe(false);
    });

    it('inscricao estadual deve estar invalida quando valor for undefined', () => {
        expect(estado.validar(undefined)).toBe(false);
    });

});
