

const $PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty')
const $ATMBlocks = Java.loadClass('com.thevortex.allthemodium.registry.ModRegistry')

GTCEuStartupEvents.registry('tag_prefix', event => {
    event.create('other', 'ore')
        .stateSupplier(() => $ATMBlocks.ANCIENT_STONE)
        .isNether(true)
        .color($MapColor.TERRACOTTA_GREEN);
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('fluorite')
        .gem().ore()
        .color(0x0c9949).iconSet('diamond')
        .components(GTMaterials.Calcium, 1, GTMaterials.Fluorine, 2)

    event.create('dolomite')
        .dust().ore()
        .color(0xf2e4bd).iconSet('rough')
        .components(GTMaterials.Calcium, 1, GTMaterials.Magnesium, 1, GTMaterials.Carbon, 1, GTMaterials.Oxygen, 3)

    event.create('antimatter')
        .fluid()
        .element('antimatter')
        .color(0xac1aeb).iconSet('gas')

    GTMaterials.Polonium.setProperty($PropertyKey.FLUID, new $FluidProperty(GTFluidTypes.GAS, false))
})

StartupEvents.postInit(event => {
    GTMaterials.get('dolomite').setFormula('CaMg(CO3)2', true)
})