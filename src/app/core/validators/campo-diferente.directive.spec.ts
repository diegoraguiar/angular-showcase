import { By } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, ViewChild, DebugElement } from '@angular/core';
import { ValidaDiferencaValidatorDirective } from './campo-diferente.directive';

@Component({
  template: `
    <form #form="ngForm" novalidate>
      <input
        #inputNome="ngModel"
        type="text"
        id="nome"
        name="nome"
        [(ngModel)]="nome">
      <input
        #inputNomeSocial="ngModel"
        type="text"
        id="nomeSocial"
        name="nomeSocial"
        [(ngModel)]="nomeSocial"
        nsvValidaDiferenca="nome">
    </form>
  `
})
class TestComponent {
  @ViewChild('form')
  form: NgForm;

  nome: string;
  nomeSocial: string;
}

describe('directive: ValidaDiferencaValidatorDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestComponent, ValidaDiferencaValidatorDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.directive(ValidaDiferencaValidatorDirective));

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
    expect(component.form.valid).toBe(true);
    expect(component.form.invalid).toBe(false);
    expect(element).toBeTruthy();
  });

  it('formulario deve estar valido quando os campos estão com valores iguais', async(() => {
    component.nome = 'Teste Nome';
    component.nomeSocial = 'Teste Nome';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.form.invalid).toBe(true);
      expect(component.form.valid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando os campos estão com valores diferentes', async(() => {
    component.nome = 'Teste Nome';
    component.nomeSocial = 'Teste Nome Social';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.form.valid).toBe(true);
      expect(component.form.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando os campos estão com valores diferentes - null', async(() => {
    component.nome = null;
    component.nomeSocial = 'Teste Nome Social';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.form.valid).toBe(true);
      expect(component.form.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

});
