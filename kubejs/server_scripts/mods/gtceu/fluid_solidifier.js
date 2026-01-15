ServerEvents.recipes((event) => {
    const gtr = event.recipes.gtceu
    
    gtr.fluid_solidifier("gtceu:honey_block")
        .notConsumable("gtceu:block_casting_mold")
        .inputFluids("#forge:honey 1000")
        .itemOutputs("minecraft:honey_block")
        .duration(10)
        .EUt(ULV)

})