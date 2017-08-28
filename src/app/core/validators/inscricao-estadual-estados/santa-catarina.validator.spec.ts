import { SantaCatarina } from './santa-catarina.validator';
import { InscricaoEstadualFactory } from './inscricao-estadual.factory';

describe('classe validacao: Inscricao Estadual Santa Catarina', () => {

  const estado = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.SANTA_CATARINA);

  it('instancia deve estar criada', () => {
    expect(estado).toBeTruthy();
  });

  it('inscricao estadual deve estar valida', () => {
    expect(estado.validar('951604384')).toBe(true);
    expect(estado.validar('690095112')).toBe(true);
    expect(estado.validar('624182959')).toBe(true);
    expect(estado.validar('869947796')).toBe(true);
    expect(estado.validar('486151999')).toBe(true);
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

