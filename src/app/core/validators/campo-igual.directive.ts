import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Directive({
  selector: '[nsvValidaIgualdade][ngModel],[nsvValidaIgualdade][formControlName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ValidaIgualdadeValidatorDirective),
      multi: true
    }
  ]
})
export class ValidaIgualdadeValidatorDirective implements Validator {

  private _onChange: () => void;

  // tslint:disable-next-line:no-input-rename
  @Input('nsvValidaIgualdade')
  controleRepetido: string;

  valorAngigo: string;

  registerOnValidatorChange(fn: () => void) {
    this._onChange = fn;
  }

  validate(control: AbstractControl) {
    const elemento = control.value;
    const elementoRepetido = control.root.get(this.controleRepetido);

    if (elementoRepetido) {
      this.valorAngigo = elementoRepetido.value;
    }
    control.root.valueChanges.subscribe(changes => {
      if (this.valorAngigo !== changes[this.controleRepetido]) {
        this._onChange();
      }
    });

    if (elementoRepetido && elemento !== elementoRepetido.value) {
      return {
        validaIgualdade: false
      };
    }

    return null;
  }

}
