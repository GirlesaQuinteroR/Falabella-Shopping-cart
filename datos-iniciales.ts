import { Selector } from 'testcafe'

export class DatosIniciales {

    placa: Selector = Selector('#mat-input-1')
    terminosyCondiciones: Selector = Selector('#mat-slide-toggle-1-input')
    quieroCotizar: Selector = Selector('button span.mat-button-wrapper')
    recaptcha:Selector = Selector('.recaptcha-checkbox-border').filterVisible()
    error: Selector = Selector('.asf-field-error').filterVisible()
    errorContinuarsinTerminos: Selector = Selector('.asf-field-error')
    errorIngresarPlaca: Selector = Selector('#mat-error-1')

}