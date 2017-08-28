import { Directive, Input, forwardRef, OnDestroy } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[nsvValidaDiferenca][ngModel],[nsvValidaDiferenca][formControlName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ValidaDiferencaValidatorDirective),
      multi: true
    }
  ]
})
export class ValidaDiferencaValidatorDirective implements Validator {

  private _onChange: () => void;

  // tslint:disable-next-line:no-input-rename
  @Input('nsvValidaDiferenca')
  controlRepetido: string;

  valorAngigo: string;

  registerOnValidatorChange(fn: () => void) {
    this._onChange = fn;
  }

  validate(control: AbstractControl) {
    const elemento = control.value;
    const elementoRepetido = control.root.get(this.controlRepetido);

    if (elementoRepetido) {
      this.valorAngigo = elementoRepetido.value;
    }
    control.root.valueChanges.subscribe(changes => {
      if (this.valorAngigo !== changes[this.controlRepetido]) {
        this._onChange();
      }
    });

    if (elementoRepetido && elemento === elementoRepetido.value) {
      return {
        validaDiferenca: false
      }
    }

    return null;
  }

}
