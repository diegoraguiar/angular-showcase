import { SaoPaulo } from './sao-paulo.validator';
import { InscricaoEstadualFactory } from './inscricao-estadual.factory';

describe('classe validacao: Inscricao Estadual Sao Paulo', () => {

  const estado = InscricaoEstadualFactory.criaInstancia(InscricaoEstadualFactory.SAO_PAULO);

  it('instancia deve estar criada', () => {
    expect(estado).toBeTruthy();
  });

  it('inscricao estadual deve estar valida', () => {
    expect(estado.validar('881981760679')).toBe(true);
    expect(estado.validar('712253518476')).toBe(true);
    expect(estado.validar('547314130591')).toBe(true);
    expect(estado.validar('246764032108')).toBe(true);
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
