import { RioDeJaneiro } from './rio-de-janeiro.validator';
import { InscricaoEstadualFactory } from './inscricao-estadual.factory';

describe('classe validacao: Inscricao Estadual RioDeJaneiro', () => {

  const estado = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.RIO_DE_JANEIRO);

  it('instancia deve estar criada', () => {
    expect(estado).toBeTruthy();
  });

  it('inscricao estadual deve estar valida', () => {
    expect(estado.validar('64060988')).toBe(true);
    expect(estado.validar('23633264')).toBe(true);
    expect(estado.validar('23633264')).toBe(true);
    expect(estado.validar('54080336')).toBe(true);
    expect(estado.validar('94873150')).toBe(true);
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
