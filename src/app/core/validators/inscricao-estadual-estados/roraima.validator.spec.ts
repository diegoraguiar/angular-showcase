import { Roraima } from './roraima.validator';
import { InscricaoEstadualFactory } from './inscricao-estadual.factory';

describe('classe validacao: Inscricao Estadual Roraima', () => {

  const estado = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.RORAIMA);

  it('instancia deve estar criada', () => {
    expect(estado).toBeTruthy();
  });

  it('inscricao estadual deve estar valida', () => {
    expect(estado.validar('248941176')).toBe(true);
    expect(estado.validar('242898345')).toBe(true);
    expect(estado.validar('243235357')).toBe(true);
    expect(estado.validar('240812023')).toBe(true);
    expect(estado.validar('244781621')).toBe(true);
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
