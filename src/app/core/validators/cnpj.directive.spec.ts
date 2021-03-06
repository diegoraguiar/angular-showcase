import { By } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, ViewChild, DebugElement } from '@angular/core';
import { CnpjValidatorDirective } from './cnpj.directive';

@Component({
  template: `
    <form #formCnpj="ngForm">
        <input
          type="text"
          id="cnpj"
          name="cnpj"
          [(ngModel)]="cnpj"
          nsvCnpj>
    </form>
  `
})
class TestComponent {
  @ViewChild('formCnpj')
  formCnpj: NgForm;

  cnpj: string;
}

describe('directive: CnpjValidatorDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestComponent, CnpjValidatorDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.directive(CnpjValidatorDirective));

    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('componente deve ter a instancia criada', () => {
    expect(component).toBeTruthy();
    expect(element).toBeTruthy();
  });

  it('formulario deve estar valido assim que inicia', () => {
    expect(component.formCnpj.valid).toBe(true);
    expect(component.formCnpj.invalid).toBe(false);
    expect(element).toBeTruthy();
  });

  it('formulario deve estar invalido quando cnpj está incorreto', async(() => {
    component.cnpj = '123456';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formCnpj.invalid).toBe(true);
      expect(component.formCnpj.valid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando cnpj está correto', async(() => {
    component.cnpj = '63578536000109';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formCnpj.valid).toBe(true);
      expect(component.formCnpj.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando cnpj não foi informado', async(() => {
    component.cnpj = '';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formCnpj.valid).toBe(true);
      expect(component.formCnpj.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando cnpj for nulo', async(() => {
    component.cnpj = null;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formCnpj.valid).toBe(true);
      expect(component.formCnpj.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando cnpj for undefined', async(() => {
    component.cnpj = undefined;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formCnpj.valid).toBe(true);
      expect(component.formCnpj.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

});
