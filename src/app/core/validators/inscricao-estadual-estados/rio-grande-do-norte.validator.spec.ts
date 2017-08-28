import { RioGrandeDoNorte } from './rio-grande-do-norte.validator';
import { InscricaoEstadualFactory } from './inscricao-estadual.factory';

describe('classe validacao: Inscricao Estadual RioGrandeDoNorte', () => {

  const estado = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.RIO_GRANDE_DO_NORTE);

  it('instancia deve estar criada', () => {
    expect(estado).toBeTruthy();
  });

  it('inscricao estadual deve estar valida', () => {
    expect(estado.validar('202807908')).toBe(true);
    expect(estado.validar('209307978')).toBe(true);
    expect(estado.validar('201736020')).toBe(true);
    expect(estado.validar('206237537')).toBe(true);
    expect(estado.validar('2036400531')).toBe(true);
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

