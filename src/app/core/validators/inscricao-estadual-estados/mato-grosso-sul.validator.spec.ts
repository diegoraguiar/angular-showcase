import { MatoGrossoSul } from './mato-grosso-sul.validator';
import { InscricaoEstadualFactory } from './inscricao-estadual.factory';

describe('classe validacao: Inscricao Estadual MatoGrossoSul', () => {

  const estado = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.MATO_GROSSO_DO_SUL);

  it('instancia deve estar criada', () => {
    expect(estado).toBeTruthy();
  });

  it('inscricao estadual deve estar valida', () => {
    expect(estado.validar('282423427')).toBe(true);
    expect(estado.validar('287962377')).toBe(true);
    expect(estado.validar('286099152')).toBe(true);
    expect(estado.validar('285517937')).toBe(true);
    expect(estado.validar('289243793')).toBe(true);
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



