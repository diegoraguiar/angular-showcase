import { DistritoFederal } from './distrito-federal.validator';
import { InscricaoEstadualFactory } from './inscricao-estadual.factory';

describe('classe validacao: Inscricao Estadual Distrito Federal', () => {

  const estado = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.DISTRITO_FEDERAL);

  it('instancia deve estar criada', () => {
    expect(estado).toBeTruthy();
  });

  it('inscricao estadual deve estar valida', () => {
    expect(estado.validar('0787987300105')).toBe(true);
    expect(estado.validar('0784334200100')).toBe(true);
    expect(estado.validar('0753305800103')).toBe(true);
    expect(estado.validar('0735486500184')).toBe(true);
    expect(estado.validar('0749345200150')).toBe(true);
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

