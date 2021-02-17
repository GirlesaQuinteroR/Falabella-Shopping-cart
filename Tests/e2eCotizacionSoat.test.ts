import {DatosIniciales} from '../datos-iniciales'
import {CompletarInformacion} from '../seccion1-completarI-informacion'
import { ClientFunction, Selector } from 'testcafe'


const  datosIniciales = new DatosIniciales()
const completarInformacion = new CompletarInformacion()

const getLocation = ClientFunction(() => document.location.href)

fixture`E2E`.page`https://soat.segurosfalabella.com.co/sale/step0`

test('E2E testing para SOAT Falabella', async t => {
    const botonContinuar = completarInformacion.continuarSeccionDos
await t
//Datos Iniciales
.click(datosIniciales.placa)
.typeText(datosIniciales.placa,'efv204').pressKey('enter')
.click(datosIniciales.terminosyCondiciones)
.click(datosIniciales.terminosyCondiciones)
.click(datosIniciales.quieroCotizar.filterVisible())
.expect(getLocation())
.contains(`https://soat.segurosfalabella.com.co/sale/step1`)

//Sección 1 “completa tu información” de la plataforma de seguros
await t.click(completarInformacion.beneficio)
await t.click(completarInformacion.fechaDeNacimiento)
await t.click(completarInformacion.seleccionarDía)
await t.click(completarInformacion.genero)
await t.click(completarInformacion.seleccionarGenero)
await t.typeText(completarInformacion.direccion,'calle10 carrera50')
await t.typeText(completarInformacion.email,'prueba@gr5.com')
await t.typeText(completarInformacion.celular,'3005554433')
await t.expect(await botonContinuar.innerText).contains("Continuar").click



})