const CoilWorkableElectricMultiblockMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.multiblock.CoilWorkableElectricMultiblockMachine")
GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
allthemods.create("highly_reactive_molten_blast_smeltery", "multiblock")
        .machine((holder) => new CoilWorkableElectricMultiblockMachine(holder))
        .rotationState(RotationState.ALL)
        .recipeTypes('alloy_blast_smelter')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT,GTRecipeModifiers.BATCH_MODE, (machine, recipe) => GTRecipeModifiers.ebfOverclock(machine, recipe)])
        .appearanceBlock(GCYMBlocks.CASING_HIGH_TEMPERATURE_SMELTING)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("BCCCB", "BCDCB", "BCDCB", "BEEEB", "BFFFB", "BCCCB", "BBBBB", "BBBBB", "BBBBB")
            .aisle("CCCCC", "CDGDC", "CADAC", "EADAE", "FAFAF", "CCCCC", "BCFCB", "BBFBB", "BBFBB")
            .aisle("CCCCC", "DGHGD", "DDHDD", "EDHDE", "FFAFF", "CCCCC", "BFCFB", "BFAFB", "BFIFB")
            .aisle("CCCCC", "CDGDC", "CADAC", "EADAE", "FAFAF", "CCCCC", "BCFCB", "BBFBB", "BBFBB")
            .aisle("BCCCB", "BCJCB", "BCDCB", "BEEEB", "BFFFB", "BCCCB", "BBBBB", "BBBBB", "BBBBB")
            .where("A", Predicates.blocks("minecraft:air"))
            .where('B', Predicates.any())
           .where('C', Predicates.blocks('gtceu:high_temperature_smelting_casing').setMinGlobalLimited(10) 
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where("D", Predicates.blocks("gtceu:neutronium_frame"))
            .where("E", Predicates.blocks("gtceu:heat_vent"))
            .where("F", Predicates.heatingCoils())
            .where("G", Predicates.blocks("gtceu:fusion_coil"))
            .where("H", Predicates.blocks("gtceu:robust_machine_casing"))
            .where("I", Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
            .where('J', Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingModel("gtceu:block/casings/gcym/high_temperature_smelting_casing", 'gtceu:block/multiblock/gcym/blast_alloy_smelter');
})
