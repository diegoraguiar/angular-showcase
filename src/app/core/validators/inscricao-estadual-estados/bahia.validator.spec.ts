import { Bahia } from './bahia.validator';
import { InscricaoEstadualFactory } from './inscricao-estadual.factory';

describe('classe validacao: Inscricao Estadual Bahia', () => {

  const estado = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.BAHIA);

  it('instancia deve estar criada', () => {
    expect(estado).toBeTruthy();
  });

  it('inscricao estadual deve estar valida', () => {
    expect(estado.validar('18157215')).toBe(true);
    expect(estado.validar('22783774')).toBe(true);
    expect(estado.validar('98274329')).toBe(true);
    expect(estado.validar('60668396')).toBe(true);
    expect(estado.validar('01911738')).toBe(true);
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
