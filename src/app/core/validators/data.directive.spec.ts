import { By } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, ViewChild, DebugElement } from '@angular/core';
import { DataValidatorDirective } from './data.directive';

@Component({
  template: `
    <form #formData="ngForm">
        <input
          type="text"
          id="data"
          name="data"
          [(ngModel)]="data"
          nsvData>
    </form>
  `
})
class TestFormatoPadraoComponent {
  @ViewChild('formData')
  formData: NgForm;

  data: string;
}

describe('directive: DataValidatorDirective - Formato DD/MM/YYYY', () => {

  let component: TestFormatoPadraoComponent;
  let fixture: ComponentFixture<TestFormatoPadraoComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestFormatoPadraoComponent, DataValidatorDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFormatoPadraoComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.directive(DataValidatorDirective));

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

  it('formulario deve estar invalido quando data está incorreta', async(() => {
    component.data = '123456';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formData.invalid).toBe(true);
      expect(component.formData.valid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar invalido quando formato da data está incorreta', async(() => {
    component.data = '08/23/2017';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formData.invalid).toBe(true);
      expect(component.formData.valid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando data está correto', async(() => {
    component.data = '23/08/2017';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formData.valid).toBe(true);
      expect(component.formData.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido para a data 29 de fereveiro de ano bissexto', async(() => {
    component.data = '29/02/2016';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formData.valid).toBe(true);
      expect(component.formData.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar invalido para a data 29 de fereveiro de ano que não é bissexto', async(() => {
    component.data = '29/02/2017';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formData.valid).toBe(false);
      expect(component.formData.invalid).toBe(true);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando data não foi informado', async(() => {
    component.data = '';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formData.valid).toBe(true);
      expect(component.formData.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando data for nulo', async(() => {
    component.data = null;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formData.valid).toBe(true);
      expect(component.formData.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando data for undefined', async(() => {
    component.data = undefined;
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
          nsvFormatoData="MM/DD/YYYY">
    </form>
  `
})
class TestComFormatoComponent {
  @ViewChild('formData')
  formData: NgForm;

  data: string;
}

describe('directive: DataValidatorDirective - Formato MM/DD/YYYY', () => {

  let component: TestComFormatoComponent;
  let fixture: ComponentFixture<TestComFormatoComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestComFormatoComponent, DataValidatorDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComFormatoComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.directive(DataValidatorDirective));

    fixture.detectChanges();
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

  it('formulario deve estar invalido quando data está incorreta', async(() => {
    component.data = '123456';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formData.invalid).toBe(true);
      expect(component.formData.valid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar invalido quando formato da data está incorreta', async(() => {
    component.data = '23/08/2017';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formData.invalid).toBe(true);
      expect(component.formData.valid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando data está correto', async(() => {
    component.data = '08/23/2017';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formData.valid).toBe(true);
      expect(component.formData.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido para a data 29 de fereveiro de ano bissexto', async(() => {
    component.data = '02/29/2016';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formData.valid).toBe(true);
      expect(component.formData.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar invalido para a data 29 de fereveiro de ano que não é bissexto', async(() => {
    component.data = '02/29/2017';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formData.valid).toBe(false);
      expect(component.formData.invalid).toBe(true);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando data não foi informado', async(() => {
    component.data = '';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formData.valid).toBe(true);
      expect(component.formData.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando data for nulo', async(() => {
    component.data = null;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formData.valid).toBe(true);
      expect(component.formData.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

  it('formulario deve estar valido quando data for undefined', async(() => {
    component.data = undefined;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.formData.valid).toBe(true);
      expect(component.formData.invalid).toBe(false);
      expect(element).toBeTruthy();
    });
  }));

});
