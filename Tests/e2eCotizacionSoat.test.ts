import {DatosIniciales} from '../datos-iniciales'
import {CompletarInformacion} from '../seccion1-completar-informacion'
import { ClientFunction, Selector } from 'testcafe'
import { PagarSoat } from './seccion2-pagar'



const  datosIniciales = new DatosIniciales()
const completarInformacion = new CompletarInformacion()
const pagarSoat = new PagarSoat()

const getLocation = ClientFunction(() => document.location.href)

fixture`E2E`.page`https://soat.segurosfalabella.com.co/sale/step0`

test('E2E testing para SOAT Falabella', async t => {
    const botonContinuar = completarInformacion.continuarSeccionDos

//Datos Iniciales
await t.click(datosIniciales.placa)
await t.typeText(datosIniciales.placa,'efv204').pressKey('enter')
await t.click(datosIniciales.terminosyCondiciones.filterVisible())
await t.click(datosIniciales.terminosyCondiciones.filterVisible())
await t.click(datosIniciales.quieroCotizar.filterVisible())
//Este fue el intento realizado para evadir el reCAPTCHA. 
/*if (await (datosIniciales.error.visible)){
    await t.click( await datosIniciales.recaptcha)
    await t.click(datosIniciales.quieroCotizar.filterVisible())
 }*/
await t.expect(getLocation())
.contains(await `https://soat.segurosfalabella.com.co/sale/step1`)

//Sección 1 “completa tu información” de la plataforma de seguros
await t.click(completarInformacion.beneficio)
await t.click(completarInformacion.fechaDeNacimiento)
await t.click(completarInformacion.seleccionarDía)
await t.click(completarInformacion.genero)
await t.click(completarInformacion.seleccionarGenero)
await t.typeText(completarInformacion.direccion,'calle10 carrera50')
await t.typeText(completarInformacion.email,'prueba@gr5.com')
await t.typeText(completarInformacion.celular,'3005554433')
await t.click(completarInformacion.continuarSeccionDos)

//Sección 2 “Paga tu soat”

await t.click(pagarSoat.formaDePago)
await t.click(pagarSoat.seleccionarBanco)
await t.click(pagarSoat.elegirBanco)
await t.click(pagarSoat.tipoCliente)
await t.click(pagarSoat.elegirTipoCliente)
await t.click(pagarSoat.terminosCondiciones)
await t.click(pagarSoat.continuar)

})