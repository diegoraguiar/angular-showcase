import { Amazonas } from './amazonas.validator';
import { InscricaoEstadualFactory } from './inscricao-estadual.factory';

describe('classe validacao: Inscricao Estadual Amazonas', () => {

  const estado = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.AMAZONAS);

  it('instancia deve estar criada', () => {
    expect(estado).toBeTruthy();
  });

  it('inscricao estadual deve estar valida', () => {
    expect(estado.validar('191716553')).toBe(true);
    expect(estado.validar('642474001')).toBe(true);
    expect(estado.validar('727713345')).toBe(true);
    expect(estado.validar('693933356')).toBe(true);
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
