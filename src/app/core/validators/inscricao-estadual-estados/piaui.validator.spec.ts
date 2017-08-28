import { Piaui } from './piaui.validator';
import { InscricaoEstadualFactory } from './inscricao-estadual.factory';

describe('classe validacao: Inscricao Estadual Piaui', () => {

  const estado = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.PIAUI);

  it('instancia deve estar criada', () => {
    expect(estado).toBeTruthy();
  });

  it('inscricao estadual deve estar valida', () => {
    expect(estado.validar('538552450')).toBe(true);
    expect(estado.validar('107926253')).toBe(true);
    expect(estado.validar('096049367')).toBe(true);
    expect(estado.validar('570635713')).toBe(true);
    expect(estado.validar('852773358')).toBe(true);
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

