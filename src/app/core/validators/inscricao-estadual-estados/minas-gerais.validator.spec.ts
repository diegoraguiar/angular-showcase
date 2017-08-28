import { MinasGerais } from './minas-gerais.validator';
import { InscricaoEstadualFactory } from './inscricao-estadual.factory';

describe('classe validacao: Inscricao Estadual Minas Gerais', () => {

  const estado = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.MINAS_GERAIS);

  it('instancia deve estar criada', () => {
    expect(estado).toBeTruthy();
  });

  it('inscricao estadual deve estar valida', () => {
    expect(estado.validar('0212502019156')).toBe(true);
    expect(estado.validar('7964991175458')).toBe(true);
    expect(estado.validar('3798906381939')).toBe(true);
    expect(estado.validar('9269707799490')).toBe(true);
    expect(estado.validar('0091008074209')).toBe(true);
  });

  it('inscricao estadual deve estar invalida', () => {
    expect(estado.validar('123461')).toBe(false);
    expect(estado.validar('31632')).toBe(false);
    expect(estado.validar('13461123462423461')).toBe(false);
  });

  it('inscricao estadual deve estar invalida quando valor for nulo', () => {
    expect(estado.validar(null)).toBe(false);
  });

  it('inscricao estadual deve estar invalida quando valor for undefined', () => {
    expect(estado.validar(undefined)).toBe(false);
  });

});


