import { By } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, ViewChild, DebugElement } from '@angular/core';
import { DataValidatorDirective } from './data.directive';
import { IdadeMinimaValidatorDirective } from './idade-minima.directive';

@Component({
  template: `
    <form #formData="ngForm">
        <input
          type="text"
          id="data"
          name="data"
          [(ngModel)]="data"
          nsvData
          nsvIdadeMinima>
    </form>
  `
})
class TestIdadeMinimaPadraoComponent {
  @ViewChild('formData')
  formData: NgForm;

  data: string;
}

describe('directive: IdadeMinimaValidatorDirective - Idade Padrao: 16 anos', () => {

  let component: TestIdadeMinimaPadraoComponent;
  let fixture: ComponentFixture<TestIdadeMinimaPadraoComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestIdadeMinimaPadraoComponent, DataValidatorDirective, IdadeMinimaValidatorDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIdadeMinimaPadraoComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.directive(IdadeMinimaValidatorDirective));

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
    expect(component.formData.valid).toBe(true);
    expect(component.formData.invalid).toBe(false);
    expect(element).toBeTruthy();
  });

  it('formulario deve estar invalido quando data não atingir idade minima', async(() => {

    const today: any = new Date();
    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1;
    const yyyy: any = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }

    component.data = `${dd}/${mm}/${yyyy}`;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formData.invalid).toBe(true);
      expect(component.formData.valid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando data atingir idade minima', async(() => {

    const today: any = new Date();
    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1;
    const yyyy: any = today.getFullYear() - 17;

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }

    component.data = `${dd}/${mm}/${yyyy}`;

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formData.valid).toBe(true);
      expect(component.formData.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

});


@Component({
  template: `
    <form #formData="ngForm">
        <input
          type="text"
          id="data"
          name="data"
          [(ngModel)]="data"
          nsvData
          nsvIdadeMinima="18">
    </form>
  `
})
class TestIdadeMinimaComponent {
  @ViewChild('formData')
  formData: NgForm;

  data: string;
}

describe('directive: IdadeMinimaValidatorDirective - Idade Como Parametro: 18 anos', () => {

  let component: TestIdadeMinimaComponent;
  let fixture: ComponentFixture<TestIdadeMinimaComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestIdadeMinimaComponent, DataValidatorDirective, IdadeMinimaValidatorDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIdadeMinimaComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.directive(IdadeMinimaValidatorDirective));

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
    expect(component.formData.valid).toBe(true);
    expect(component.formData.invalid).toBe(false);
    expect(element).toBeTruthy();
  });

  it('formulario deve estar invalido quando data não atingir idade minima', async(() => {

    const today: any = new Date();
    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1;
    const yyyy: any = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }

    component.data = `${dd}/${mm}/${yyyy}`;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formData.invalid).toBe(true);
      expect(component.formData.valid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando data atingir idade minima', async(() => {

    const today: any = new Date();
    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1;
    const yyyy: any = today.getFullYear() - 20;

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }

    component.data = `${dd}/${mm}/${yyyy}`;

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formData.valid).toBe(true);
      expect(component.formData.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

});
