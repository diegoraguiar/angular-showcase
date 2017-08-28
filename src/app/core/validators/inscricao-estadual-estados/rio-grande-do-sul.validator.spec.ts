import { RioGrandeDoSul } from './rio-grande-do-sul.validator';
import { InscricaoEstadualFactory } from './inscricao-estadual.factory';

describe('classe validacao: Inscricao Estadual RioGrandeDoSul', () => {

  const estado = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.RIO_GRANDE_DO_SUL);

  it('instancia deve estar criada', () => {
    expect(estado).toBeTruthy();
  });

  it('inscricao estadual deve estar valida', () => {
    expect(estado.validar('6966154575')).toBe(true);
    expect(estado.validar('2853124597')).toBe(true);
    expect(estado.validar('0746866461')).toBe(true);
    expect(estado.validar('3841859064')).toBe(true);
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
