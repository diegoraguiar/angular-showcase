import { element } from 'protractor';
import { By } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, ViewChild, DebugElement } from '@angular/core';
import { MascaraDirective } from './mascara.directive';

@Component({
  template: `
    <form #form="ngForm">
        <input
          type="text"
          id="cpf"
          name="cpf"
          [(ngModel)]="cpf"
          nsvMascara="000.000.000-00">
    </form>
  `
})
class TestComponent {
  @ViewChild('form')
  form: NgForm;

  cpf: string;
}

describe('directive: MascaraDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestComponent, MascaraDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.directive(MascaraDirective));

    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('componente deve ter a instancia criada', () => {
    expect(component).toBeTruthy();
    expect(element).toBeTruthy();
  });

  it('elemento html deve estar com mascara e o model não', async(() => {
    component.cpf = '62111367656';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(element).toBeTruthy();
      expect(element.nativeElement.value).toBe('621.113.676-56');
      expect(component.cpf).toBe('62111367656');
    });
  }));

});
