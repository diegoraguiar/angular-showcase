import { InscricaoEstadualValidatorDirective } from './validators/inscricao-estadual.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascaraDirective } from './directives/mascara.directive';
import { RestringeCaracterDirective } from './directives/restringe-caracteres.directive';

import { DataValidatorDirective } from './validators/data.directive';
import { CpfValidatorDirective } from './validators/cpf.directive';
import { CnpjValidatorDirective } from './validators/cnpj.directive';
import { ValidaIgualdadeValidatorDirective } from './validators/campo-igual.directive';
import { ValidaDiferencaValidatorDirective } from './validators/campo-diferente.directive';
import { IdadeMinimaValidatorDirective } from './validators/idade-minima.directive';
import { ComValorDirective } from './directives/com-valor.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DataValidatorDirective,
    ValidaIgualdadeValidatorDirective,
    ValidaDiferencaValidatorDirective,
    CpfValidatorDirective,
    CnpjValidatorDirective,
    IdadeMinimaValidatorDirective,
    InscricaoEstadualValidatorDirective,

    RestringeCaracterDirective,
    MascaraDirective,
    ComValorDirective
  ],
  exports: [
    DataValidatorDirective,
    ValidaIgualdadeValidatorDirective,
    ValidaDiferencaValidatorDirective,
    CpfValidatorDirective,
    CnpjValidatorDirective,
    IdadeMinimaValidatorDirective,
    InscricaoEstadualValidatorDirective,

    RestringeCaracterDirective,
    MascaraDirective,
    ComValorDirective
  ]
})
export class CoreModule { }
