import { Piaui } from './piaui.validator';
import { Roraima } from './roraima.validator';
import { Rondonia } from './rondonia.validator';
import { RioDeJaneiro } from './rio-de-janeiro.validator';
import { RioGrandeDoNorte } from './rio-grande-do-norte.validator';
import { RioGrandeDoSul } from './rio-grande-do-sul.validator';
import { SantaCatarina } from './santa-catarina.validator';
import { SaoPaulo } from './sao-paulo.validator';
import { Sergipe } from './sergipe.validator';
import { Tocantins } from './tocantins.validator';
import { Pernambuco } from './pernambuco.validator';
import { Parana } from './parana.validator';
import { Paraiba } from './paraiba.validator';
import { Para } from './para.validator';
import { MinasGerais } from './minas-gerais.validator';
import { MatoGrossoSul } from './mato-grosso-sul.validator';
import { MatoGrosso } from './mato-grosso.validator';
import { Maranhao } from './maranhao.validator';
import { Goias } from './goias.validator';
import { EspiritoSanto } from './espirito-santo.validator';
import { DistritoFederal } from './distrito-federal.validator';
import { Ceara } from './ceara.validator';
import { Bahia } from './bahia.validator';
import { Amazonas } from './amazonas.validator';
import { Amapa } from './amapa.validator';
import { Acre } from './acre.validator';
import { Alagoas } from './alagoas.validator';

import { InscricaoEstadual } from './inscricao-estadual.interface';

export class InscricaoEstadualFactory {

    static readonly ACRE = 'AC';
    static readonly ALAGOAS = 'AL';
    static readonly AMAPA = 'AP';
    static readonly AMAZONAS = 'AM';
    static readonly BAHIA = 'BA';
    static readonly CEARA = 'CE';
    static readonly DISTRITO_FEDERAL = 'DF';
    static readonly ESPIRITO_SANTO = 'ES';
    static readonly GOIAS = 'GO';
    static readonly MARANHAO = 'MA';
    static readonly MATO_GROSSO = 'MT';
    static readonly MATO_GROSSO_DO_SUL = 'MS';
    static readonly MINAS_GERAIS = 'MG';
    static readonly PARA = 'PA';
    static readonly PARAIBA = 'PB';
    static readonly PARANA = 'PR';
    static readonly PERNAMBUCO = 'PE';
    static readonly PIAUI = 'PI';
    static readonly RORAIMA = 'RR';
    static readonly RONDONIA = 'RO';
    static readonly RIO_DE_JANEIRO = 'RJ';
    static readonly RIO_GRANDE_DO_NORTE = 'RN';
    static readonly RIO_GRANDE_DO_SUL = 'RS';
    static readonly SANTA_CATARINA = 'SC';
    static readonly SAO_PAULO = 'SP';
    static readonly SERGIPE = 'SE';
    static readonly TOCANTINS = 'TO';

    static criaInstancia(sigla: string): InscricaoEstadual {
        switch (sigla) {
            case InscricaoEstadualFactory.ACRE:
                return new Acre();
            case InscricaoEstadualFactory.ALAGOAS:
                return new Alagoas();
            case InscricaoEstadualFactory.AMAPA:
                return new Amapa();
            case InscricaoEstadualFactory.AMAZONAS:
                return new Amazonas();
            case InscricaoEstadualFactory.BAHIA:
                return new Bahia();
            case InscricaoEstadualFactory.CEARA:
                return new Ceara();
            case InscricaoEstadualFactory.DISTRITO_FEDERAL:
                return new DistritoFederal();
            case InscricaoEstadualFactory.ESPIRITO_SANTO:
                return new EspiritoSanto();
            case InscricaoEstadualFactory.GOIAS:
                return new Goias();
            case InscricaoEstadualFactory.MARANHAO:
                return new Maranhao();
            case InscricaoEstadualFactory.MATO_GROSSO:
                return new MatoGrosso();
            case InscricaoEstadualFactory.MATO_GROSSO_DO_SUL:
                return new MatoGrossoSul();
            case InscricaoEstadualFactory.MINAS_GERAIS:
                return new MinasGerais();
            case InscricaoEstadualFactory.PARA:
                return new Para();
            case InscricaoEstadualFactory.PARAIBA:
                return new Paraiba();
            case InscricaoEstadualFactory.PARANA:
                return new Parana();
            case InscricaoEstadualFactory.PERNAMBUCO:
                return new Pernambuco();
            case InscricaoEstadualFactory.PIAUI:
                return new Piaui();
            case InscricaoEstadualFactory.RORAIMA:
                return new Roraima();
            case InscricaoEstadualFactory.RONDONIA:
                return new Rondonia();
            case InscricaoEstadualFactory.RIO_DE_JANEIRO:
                return new RioDeJaneiro();
            case InscricaoEstadualFactory.RIO_GRANDE_DO_NORTE:
                return new RioGrandeDoNorte();
            case InscricaoEstadualFactory.RIO_GRANDE_DO_SUL:
                return new RioGrandeDoSul();
            case InscricaoEstadualFactory.SANTA_CATARINA:
                return new SantaCatarina();
            case InscricaoEstadualFactory.SAO_PAULO:
                return new SaoPaulo();
            case InscricaoEstadualFactory.SERGIPE:
                return new Sergipe();
            case InscricaoEstadualFactory.TOCANTINS:
                return new Tocantins();
            default:
                return null;
        }
    }


}
