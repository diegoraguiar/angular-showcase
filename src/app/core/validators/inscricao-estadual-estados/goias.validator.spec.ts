import { Goias } from './goias.validator';
import { InscricaoEstadualFactory } from './inscricao-estadual.factory';

describe('classe validacao: Inscricao Estadual Goias', () => {

  const estado = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.GOIAS);

  it('instancia deve estar criada', () => {
    expect(estado).toBeTruthy();
  });

  it('inscricao estadual deve estar valida', () => {
    expect(estado.validar('107977486')).toBe(true);
    expect(estado.validar('102267170')).toBe(true);
    expect(estado.validar('155141902')).toBe(true);
    expect(estado.validar('110402340')).toBe(true);
    expect(estado.validar('100545998')).toBe(true);
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

