import { Selector } from 'testcafe'

export class CompletarInformacion {
    beneficio: Selector = Selector('.benefit-title')
    fechaDeNacimiento: Selector = Selector('input[name="Fecha de nacimiento"]')
    seleccionarDía: Selector = Selector('div.mat-calendar-body-cell-content')
    genero: Selector = Selector('[formcontrolname="gender"]')
    seleccionarGenero: Selector = Selector('.mat-option-text') 
    direccion: Selector = Selector('[formcontrolname="address"]')
    email: Selector = Selector('[formcontrolname="email"]')
    celular: Selector = Selector('[formcontrolname="phone"]')
    continuarSeccionDos:Selector = Selector('.mat-asf-round-primary.invalid-form') 


}