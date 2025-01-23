// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty')
const $OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder')
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys')

GTCEuStartupEvents.registry('gtceu:material', allthemods => {
    let prop = new $FluidProperty()
    prop.getStorage().enqueueRegistration($FluidStorageKeys.LIQUID, new $FluidBuilder())
    GTMaterials.NetherStar.setProperty(PropertyKey.FLUID, prop)
    GTMaterials.Trinium.setProperty(PropertyKey.ORE, new $OreProperty(1, 1, true))

    allthemods.create('inert_nether_essence')
        .fluid()
        .color(0x500bbf)
    
    allthemods.create('molten_piglich_heart')
        .fluid()
        .color(0xe6af15)

    allthemods.create("trinaquadalloy")
        .ingot().fluid()
        .color(0x281832).iconSet(GTMaterialIconSet.BRIGHT)
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .components('6x trinium', '2x naquadah', '1x carbon')
        .blastTemp(8747, 'higher', GTValues.VA[GTValues.ZPM], 1200)

    allthemods.create('fluorite')
        .gem().ore()
        .color(0x0c9949).iconSet('diamond')
        .components('1x calcium', '2x fluorine')

    allthemods.create('dolomite')
        .dust().ore()
        .color(0xf2e4bd).iconSet('rough')
        .components('1x calcium', '1x magnesium', '1x carbon','3x oxygen')
    
    allthemods.create('star_matter')
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.PLASMA, new GTFluidBuilder().state(GTFluidState.PLASMA).customStill())
        .color(0xb219d1)

    allthemods.create('nitinol')
        .ingot().fluid()
        .iconSet(GTMaterialIconSet.METALLIC)
        .colorAverage()
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .components('4x nickel', '6x titanium')
        .blastTemp(1583, 'high', GTValues.VA[GTValues.IV], 1200)
    
    allthemods.create('alltheneutronium')
        .ingot().fluid()
        .iconSet(GTMaterialIconSet.METALLIC)
        .color(0xfcfc3d).secondaryColor(0x000000)
        .flags(GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_PLATE)
        .blastTemp(9000, 'highest', GTValues.VA[GTValues.ZPM], 1200)
        .rotorStats(1200, 300, 13.0, 655360)

        allthemods.create('vibtronium')
        .ingot().fluid()
        .iconSet(GTMaterialIconSet.METALLIC)
        .color(0x72fcb7).secondaryColor(0x000000)
        .flags(GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_PLATE)
        .blastTemp(9000, 'highest', GTValues.VA[GTValues.UV], 1200)
        .rotorStats(1000, 400, 14.0, 655360 * 2)

        allthemods.create('unobtronium')
        .ingot().fluid()
        .iconSet(GTMaterialIconSet.METALLIC)
        .color(0xe782f2).secondaryColor(0x000000)
        .flags(GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_PLATE)
        .blastTemp(10100, 'highest', GTValues.VA[GTValues.UHV], 1200)
        .rotorStats(1600, 200, 16.0, 655360 * 4)
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
