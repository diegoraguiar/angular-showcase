import { DOCUMENT } from '@angular/platform-browser';
import { Directive, ElementRef, forwardRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const resolvedPromise: Promise<null> = Promise.resolve(null);

@Directive({
  selector: '[nsvMascara][ngModel], [nsvMascara][formControlName]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MascaraDirective),
      multi: true
    }
  ]
})
export class MascaraDirective implements OnInit, ControlValueAccessor {
  private _modeloComCaracteresEspeciais: boolean;
  private _limparSeNaoIgualar: boolean;
  private _mascaraExpressao: string;
  private _mascaraCaracteresEspeciais: string[] = ['/', '(', ')', '.', ':', '-', ' ', '+'];
  private _mascaraPadroesDisponiveis: { [key: string]: RegExp } = {
    '0': /\d/,
    '9': /\d/,
    'A': /[a-zA-Z0-9]/,
    'S': /[a-zA-Z]/
  };

  private _onChange = (_: any) => { };

  private _onTouch = () => { };

  public constructor(private _elementRef: ElementRef, private _renderer: Renderer2, @Inject(DOCUMENT) private document: any) {
    this._modeloComCaracteresEspeciais = false;
    this._limparSeNaoIgualar = false;
  }

  public ngOnInit(): void {
    resolvedPromise.then(() => this._aplicarMudancaDeValores());
  }

  @Input('nsvMascara')
  public set mascaraExpressao(valor: string) {
    if (!valor) {
      return;
    }
    this._mascaraExpressao = valor;
  }

  public get modeloComCaracteresEspeciais(): boolean {
    return this._modeloComCaracteresEspeciais;
  }

  @Input('nsvManterCaracteres')
  public set modeloComCaracteresEspeciais(value: boolean) {
    this._modeloComCaracteresEspeciais = value;
  }

  public get limparSeNaoIgualar(): boolean {
    return this._limparSeNaoIgualar;
  }

  @Input('nsvLimparSenaoAtigirMascara')
  public set limparSeNaoIgualar(value: boolean) {
    this._limparSeNaoIgualar = value;
  }

  @HostListener('input')
  public onInput(): void {
    this._aplicarMudancaDeValores();
  }

  @HostListener('blur')
  public onBlur(): void {
    this._limparElementoSeNaoIgualar();
    this._aplicarMudancaDeValores();
    this._onTouch();
  }

  public writeValue(inputValue: string): void {
    this._elementRef.nativeElement.value = this._aplicarMascara(inputValue, this._mascaraExpressao);
  }

  public registerOnChange(fn: any): void {
    this._onChange = fn;
    return;
  }

  public registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this._renderer.setAttribute(this._elementRef.nativeElement, 'disabled', 'true');
      return;
    }
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'disabled');
  }

  private _aplicarMascara(inputValor: string, mascaraExpressao: string): string {
    if (inputValor === undefined || inputValor === null) {
      return '';
    }

    let cursor = 0;
    let resultado = '';
    const inputArray: string[] = inputValor.toString().split('');

    for (let i = 0, inputSimbolos: string = inputArray[0]; i < inputArray.length; i++ , inputSimbolos = inputArray[i]) {
      if (resultado.length === mascaraExpressao.length) {
        break;
      }

      if (this._validarSimbolosMascara(inputSimbolos, mascaraExpressao[cursor])) {
        resultado += inputSimbolos;
        cursor++;
      } else if (this._mascaraCaracteresEspeciais.indexOf(mascaraExpressao[cursor]) !== -1) {
        resultado += mascaraExpressao[cursor];
        cursor++;
        i--;
      } else if (mascaraExpressao[cursor] === '9') {
        cursor++;
        i--;
      }
    }
    if (resultado.length + 1 === mascaraExpressao.length
      && this._mascaraCaracteresEspeciais.indexOf(mascaraExpressao[mascaraExpressao.length - 1]) !== -1) {
      resultado += mascaraExpressao[mascaraExpressao.length - 1];
    }
    return resultado;
  }

  private _removerMascara(valor: string): string {
    if (!valor) {
      return valor;
    }
    return valor.replace(/(\/|\.|-|\(|\)|:| |\+)/gi, '');
  }

  private _validarSimbolosMascara(inputSimbolos: string, simbolosMascaras: string): boolean {
    return inputSimbolos === simbolosMascaras
      || this._mascaraPadroesDisponiveis[simbolosMascaras]
      && this._mascaraPadroesDisponiveis[simbolosMascaras].test(inputSimbolos);
  }

  private _limparElementoSeNaoIgualar(): void {
    if (this.limparSeNaoIgualar === true && this._mascaraExpressao.length
      !== this._elementRef.nativeElement.value.length) {
      this._elementRef.nativeElement.value = '';
    }
  }

  private _aplicarMudancaDeValores(): void {
    const valor: string = this._elementRef.nativeElement.value;
    const valorMascarado: string = this._aplicarMascara(valor, this._mascaraExpressao);

    this._elementRef.nativeElement.value = valorMascarado;

    if (this._modeloComCaracteresEspeciais === true) {
      this._onChange(valorMascarado);
    } else {
      this._onChange(this._removerMascara(valorMascarado));
    }

    if (this._elementRef.nativeElement !== this.document.activeElement) {
      this._limparElementoSeNaoIgualar();
    }
  }

}
