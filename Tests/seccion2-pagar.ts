import { Selector } from 'testcafe'

export class PagarSoat {
    formaDePago: Selector = Selector('img[src="https://sfcdnstoragecosoatprd.blob.core.windows.net/sf-cnd-sco-soat-prod/statics_images/logo_pse.png"]')
    seleccionarBanco: Selector = Selector ('[formcontrolname="bank"]')
    elegirBanco: Selector = Selector ('#mat-option-65')
    tipoCliente: Selector = Selector('[formcontrolname="customerType"]')
    elegirTipoCliente: Selector = Selector('#mat-option-3')
    terminosCondiciones:Selector = Selector('.mat-slide-toggle-thumb-container')
    continuar:Selector = Selector('.mat-focus-indicator+ .continue')
}