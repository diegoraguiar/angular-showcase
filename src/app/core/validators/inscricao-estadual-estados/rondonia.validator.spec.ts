import { Rondonia } from './rondonia.validator';
import { InscricaoEstadualFactory } from './inscricao-estadual.factory';

describe('classe validacao: Inscricao Estadual Rondonia', () => {

  const estado = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.RONDONIA);

  it('instancia deve estar criada', () => {
    expect(estado).toBeTruthy();
  });

  it('inscricao estadual deve estar valida', () => {
    expect(estado.validar('25427987449374')).toBe(true);
    expect(estado.validar('51499234586888')).toBe(true);
    expect(estado.validar('63288770153038')).toBe(true);
    expect(estado.validar('09352912090767')).toBe(true);
    expect(estado.validar('97634509396480')).toBe(true);
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

