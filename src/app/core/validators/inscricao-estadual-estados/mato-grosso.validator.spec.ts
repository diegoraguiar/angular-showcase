import { MatoGrosso } from './mato-grosso.validator';
import { InscricaoEstadualFactory } from './inscricao-estadual.factory';

describe('classe validacao: Inscricao Estadual MatoGrosso', () => {

  const estado = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.MATO_GROSSO);

  it('instancia deve estar criada', () => {
    expect(estado).toBeTruthy();
  });

  it('inscricao estadual deve estar valida', () => {
    expect(estado.validar('66118195819')).toBe(true);
    expect(estado.validar('67258419661')).toBe(true);
    expect(estado.validar('46396343315')).toBe(true);
    expect(estado.validar('10722433520')).toBe(true);
    expect(estado.validar('14423160737')).toBe(true);
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
