const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty')
const $OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')

GTCEuStartupEvents.registry('gtceu:material', event => {
    GTMaterials.NetherStar.setProperty(PropertyKey.FLUID, new $FluidProperty())
    GTMaterials.NetherStar.getProperty(PropertyKey.FLUID).storage.enqueueRegistration(GTFluidStorageKeys.LIQUID, new GTFluidBuilder())

    GTMaterials.Trinium.setProperty(PropertyKey.ORE, new $OreProperty(1, 1, true))

    event.create('inert_nether_essence')
        .fluid()
        .color(0x500bbf)

    event.create("trinaquadalloy")
        .ingot().fluid()
        .color(0x281832).iconSet(GTMaterialIconSet.BRIGHT)
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .components('6x trinium', '2x naquadah', '1x carbon')
        .blastTemp(8747, 'higher', GTValues.VA[GTValues.ZPM], 1200)

    event.create('fluorite')
        .gem().ore()
        .color(0x0c9949).iconSet('diamond')
        .components('1x calcium', '2x fluorine')

    event.create('dolomite')
        .dust().ore()
        .color(0xf2e4bd).iconSet('rough')
        .components('1x calcium', '1x magnesium', '1x carbon','3x oxygen')
    
    event.create('star_matter')
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.PLASMA, new GTFluidBuilder().state(GTFluidState.PLASMA).customStill())
        .color(0xb219d1)

    event.create('nitinol')
        .ingot().fluid()
        .iconSet(GTMaterialIconSet.METALLIC)
        .colorAverage()
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .components('4x nickel', '6x titanium')
        .blastTemp(1583, 'high', GTValues.VA[GTValues.IV], 1200)
        
})