import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, FormControl } from '@angular/forms';
import * as moment from 'moment';

@Directive({
    selector: '[nsvData][ngModel],[nsvData][formControlName]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: DataValidatorDirective,
            multi: true
        }
    ]
})
export class DataValidatorDirective implements Validator {

    private _formatoData = 'DD/MM/YYYY';

    public get formatoData(): string {
        return this._formatoData;
    }

    @Input('nsvFormatoData')
    public set formatoData(value: string) {
        this._formatoData = value;
    }

    validate(control: AbstractControl) {
        if (!control.value || moment(control.value, this._formatoData).isValid()) {
            return null;
        }

        return {
            data: false
        };
    }

}
