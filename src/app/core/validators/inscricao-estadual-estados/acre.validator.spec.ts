import { Acre } from './acre.validator';
import { InscricaoEstadualFactory } from './inscricao-estadual.factory';

describe('classe validacao: Inscricao Estadual Acre', () => {

    const estado = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.ACRE);

    it('instancia deve estar criada', () => {
        expect(estado).toBeTruthy();
    });

    it('inscricao estadual deve estar valida', () => {
        expect(estado.validar('0109070380074')).toBe(true);
        expect(estado.validar('0110281450254')).toBe(true);
    });

    it('inscricao estadual deve estar invalida', () => {
        expect(estado.validar('010907')).toBe(false);
    });

    it('inscricao estadual deve estar invalida quando valor for nulo', () => {
        expect(estado.validar(null)).toBe(false);
    });

    it('inscricao estadual deve estar invalida quando valor for undefined', () => {
        expect(estado.validar(undefined)).toBe(false);
    });

});
