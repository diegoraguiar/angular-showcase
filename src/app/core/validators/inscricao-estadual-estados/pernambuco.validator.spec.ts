import { Pernambuco } from './pernambuco.validator';
import { InscricaoEstadualFactory } from './inscricao-estadual.factory';

describe('classe validacao: Inscricao Estadual Pernambuco', () => {

  const estado = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.PERNAMBUCO);

  it('instancia deve estar criada', () => {
    expect(estado).toBeTruthy();
  });

  it('inscricao estadual deve estar valida', () => {
    expect(estado.validar('032141840')).toBe(true);
    expect(estado.validar('661707458')).toBe(true);
    expect(estado.validar('206729260')).toBe(true);
    expect(estado.validar('699521599')).toBe(true);
    expect(estado.validar('157961087')).toBe(true);
    expect(estado.validar('18100100000049')).toBe(true);
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

