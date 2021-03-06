import { Maranhao } from './maranhao.validator';
import { InscricaoEstadualFactory } from './inscricao-estadual.factory';

describe('classe validacao: Inscricao Estadual Maranhao', () => {

  const estado = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.MARANHAO);

  it('instancia deve estar criada', () => {
    expect(estado).toBeTruthy();
  });

  it('inscricao estadual deve estar valida', () => {
    expect(estado.validar('125395957')).toBe(true);
    expect(estado.validar('129215996')).toBe(true);
    expect(estado.validar('122794443')).toBe(true);
    expect(estado.validar('129550272')).toBe(true);
    expect(estado.validar('125230036')).toBe(true);
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

