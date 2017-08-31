import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, FormControl } from '@angular/forms';
import * as moment from 'moment';

@Directive({
    selector: '[nsvIdadeMinima][ngModel],[nsvIdadeMinima][formControlName]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: IdadeMinimaValidatorDirective,
            multi: true
        }
    ]
})
export class IdadeMinimaValidatorDirective implements Validator {

    private _formatoData = 'DD/MM/YYYY';
    private _idadeMinima;

    public get formatoData(): string {
        return this._formatoData;
    }

    @Input('nsvFormatoData')
    public set formatoData(value: string) {
        this._formatoData = value;
    }

    @Input('nsvIdadeMinima')
    public set idadeMinima(value: number) {
        this._idadeMinima = value;
    }

    validate(control: AbstractControl) {

        if (!control.value) {
            return null;
        }

        const dataIdadeMinima = moment().subtract(this._idadeMinima === '' ? 16 : this._idadeMinima, 'years');
        const dataRecebida = moment(control.value, this._formatoData);

        if (dataRecebida.isValid() && dataRecebida.isBefore(dataIdadeMinima)) {
            return null;
        } else {
            return {
                idadeMinima: {
                    valid: false
                }
            };
        }
    }

}
