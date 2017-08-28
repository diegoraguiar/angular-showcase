import { EspiritoSanto } from './espirito-santo.validator';
import { InscricaoEstadualFactory } from './inscricao-estadual.factory';

describe('classe validacao: Inscricao Estadual Espirito Santo', () => {

  const estado = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.ESPIRITO_SANTO);

  it('instancia deve estar criada', () => {
    expect(estado).toBeTruthy();
  });

  it('inscricao estadual deve estar valida', () => {
    expect(estado.validar('123992842')).toBe(true);
    expect(estado.validar('315163186')).toBe(true);
    expect(estado.validar('132878968')).toBe(true);
    expect(estado.validar('315163186')).toBe(true);
    expect(estado.validar('041676297')).toBe(true);
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
