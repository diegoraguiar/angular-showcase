import { Directive, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, FormControl } from '@angular/forms';
import { InscricaoEstadualFactory } from './inscricao-estadual-estados/inscricao-estadual.factory';

@Directive({
    selector: '[nsvInscricaoEstadual][ngModel],[nsvInscricaoEstadual][formControlName]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: InscricaoEstadualValidatorDirective,
            multi: true
        }
    ]
})
export class InscricaoEstadualValidatorDirective implements Validator {

    private _uf;

    @Input('nsvInscricaoEstadual')
    public set inscricaoEstadual(value: string) {
        this._uf = value;
    }

    validate(control: AbstractControl) {
        if (!control.value || this.validaInscricaoEstadual(control.value)) {
            return null;
        } else {
            return {
                inscricaoEstadual: {
                    valid: false
                }
            };
        }
    }

    private validaInscricaoEstadual(inscricaoEstadual: string): boolean {
        const instancia = InscricaoEstadualFactory.criaInstancia(this._uf);

        if (instancia) {
            return instancia.validar(inscricaoEstadual);
        } else {
            return false;
        }
    }

}
