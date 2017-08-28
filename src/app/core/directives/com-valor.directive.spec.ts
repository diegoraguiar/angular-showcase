import { element } from 'protractor';
import { By } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, ViewChild, DebugElement } from '@angular/core';
import { ComValorDirective } from './com-valor.directive';

@Component({
  template: `
    <input
      type="text"
      id="valor"
      name="valor"
      nsvComValor>
  `
})
class TestComponent {

}

describe('directive: ComValorDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestComponent, ComValorDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.directive(ComValorDirective));

    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('componente deve ter a instancia criada', () => {
    expect(component).toBeTruthy();
    expect(element).toBeTruthy();
  });

  it('elemento html com valor deve ter a classe de css nsv-com-valor', async(() => {
    element.nativeElement.value = 'teste';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      element.nativeElement.dispatchEvent(new Event('input'));
      expect(element).toBeTruthy();
      expect(element.classes['nsv-com-valor']).toBeTruthy();
    });
  }));

  it('elemento html sem valor não deve ter a classe de css nsv-com-valor', async(() => {
    element.nativeElement.value = '';
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      element.nativeElement.dispatchEvent(new Event('input'));
      expect(element).toBeTruthy();
      expect(element.classes['nsv-com-valor']).toBeFalsy();
    });
  }));

});
