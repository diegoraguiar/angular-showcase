import { Directive, HostListener, forwardRef, ElementRef, Renderer2, OnInit, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
    selector: '[nsvRestringeCaracter][ngModel], [nsvRestringeCaracter][formGroupName]',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RestringeCaracterDirective),
            multi: true
        }
    ]
})
export class RestringeCaracterDirective implements OnInit, ControlValueAccessor {

    @Input() nsvRestringeCaracter: string;

    private regex: RegExp;

    private estadoAnterior: { cursorInicio: number, cursorFinal: number, valor: any } = {
        cursorInicio: 0,
        cursorFinal: 0,
        valor: null
    };

    private regexpPadrao = '^[a-z\\s]*$';

    private _onChange = (_: any) => { };

    private _onTouch = () => { };

    constructor(private element: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        this.estadoAnterior.valor = this.element.nativeElement.value;
        this.regex = new RegExp(this.nsvRestringeCaracter ? this.nsvRestringeCaracter : this.regexpPadrao, 'i');
    }

    @HostListener('keydown')
    onKeyDown() {
        this.estadoAnterior.cursorInicio = <number>this.element.nativeElement.selectionStart;
        this.estadoAnterior.cursorFinal = <number>this.element.nativeElement.selectionEnd;
    }

    @HostListener('input', ['$event'])
    public onInput(event): void {

        const valorReal = this.substituiAcentos(event.target.value.toUpperCase());
        if (this.regex.test(valorReal)) {
            const posicaoInicialCursor = this.element.nativeElement.selectionStart;
            this._onChange(valorReal);
            this.writeValue(valorReal);
            this.estadoAnterior.valor = valorReal;
            this.element.nativeElement.selectionStart = posicaoInicialCursor;
            this.element.nativeElement.selectionEnd = posicaoInicialCursor;
            return;
        }

        this._onChange(this.estadoAnterior.valor);
        this.writeValue(this.estadoAnterior.valor);
        this.element.nativeElement.selectionStart = this.estadoAnterior.cursorInicio;
        this.element.nativeElement.selectionEnd = this.estadoAnterior.cursorFinal;
    }

    writeValue(value: any): void {
        const normalizedValue = value == null ? '' : value;
        this.renderer.setProperty(this.element.nativeElement, 'value', normalizedValue);
    }

    registerOnChange(fn: any): void {
        this._onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this._onTouch = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
    }

    private substituiAcentos(valor: string): string {
        let val = valor;
        if (val.match(/[ÁÃÂÄÀÊÉÈËÍÌÎÏÓÒÕÔÖÛÚÙÜÑÇ]/)) {
            val = val.replace(/[ÁÃÂÄÀ]/g, 'A')
                .replace(/[ÊÉÈË]/g, 'E')
                .replace(/[ÍÌÎÏ]/g, 'I')
                .replace(/[ÓÒÕÔÖ]/g, 'O')
                .replace(/[ÛÚÙÜ]/g, 'U')
                .replace(/[Ñ]/g, 'N')
                .replace(/[Ç]/g, 'C');
        }
        return val;
    }

}
