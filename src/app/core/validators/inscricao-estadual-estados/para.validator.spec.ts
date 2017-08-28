import { Para } from './para.validator';
import { InscricaoEstadualFactory } from './inscricao-estadual.factory';

describe('classe validacao: Inscricao Estadual Para', () => {

  const estado = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.PARA);

  it('instancia deve estar criada', () => {
    expect(estado).toBeTruthy();
  });

  it('inscricao estadual deve estar valida', () => {
    expect(estado.validar('150832281')).toBe(true);
    expect(estado.validar('159854091')).toBe(true);
    expect(estado.validar('159270430')).toBe(true);
    expect(estado.validar('151823499')).toBe(true);
    expect(estado.validar('156390850')).toBe(true);
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
