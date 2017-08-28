import { element } from 'protractor';
import { By } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, ViewChild, DebugElement } from '@angular/core';
import { RestringeCaracterDirective } from './restringe-caracteres.directive';

@Component({
    template: `
    <form #form="ngForm">
        <input
          type="text"
          id="nome"
          name="nome"
          [(ngModel)]="nome"
          nsvRestringeCaracter="^[a-z\s]*$">
    </form>
  `
})
class TestComponent {
    @ViewChild('form')
    form: NgForm;

    nome: string;
}

describe('directive: RestringeCaracterDirective', () => {

    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let element: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [TestComponent, RestringeCaracterDirective]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement.query(By.directive(RestringeCaracterDirective));

        fixture.detectChanges();
    });

    afterEach(() => {
        fixture.destroy();
    });

    it('componente deve ter a instancia criada', () => {
        expect(component).toBeTruthy();
        expect(element).toBeTruthy();
    });

    it('elemento html deve estar vazio', async(() => {
        component.nome = '62111367656';
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            element.nativeElement.dispatchEvent(new Event('input'));
            expect(element).toBeTruthy();
            expect(element.nativeElement.value).toBe('');
        });
    }));

    it('elemento html deve estar com valor', async(() => {
        component.nome = 'teste';
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            element.nativeElement.dispatchEvent(new Event('input'));
            expect(element).toBeTruthy();
            expect(element.nativeElement.value).toBe('TESTE');
        });
    }));

});
