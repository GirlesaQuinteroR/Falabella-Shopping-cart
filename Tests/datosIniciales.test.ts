import {DatosIniciales} from '../datos-iniciales'
import { ClientFunction, Selector } from 'testcafe'



const  datosIniciales = new DatosIniciales()
const getLocation = ClientFunction(() => document.location.href)

fixture`Prueba de Componente: Datos Iniciales`.page`https://soat.segurosfalabella.com.co/sale/step0`

test('Verificar aparece mensaje de error si continuo sin verificar términos', async t => {
await t.click(datosIniciales.placa)
await t.typeText(datosIniciales.placa,'efv204').pressKey('enter')
await t.click(datosIniciales.terminosyCondiciones)
await t.click(datosIniciales.quieroCotizar.filterVisible())
.expect(datosIniciales.errorContinuarsinTerminos).ok()
})

test('Verificar aparece mensaje de error si continuo sin ingresar placa', async t => {
await t.click(datosIniciales.quieroCotizar.filterVisible())
.expect(datosIniciales.errorIngresarPlaca).ok()
})
