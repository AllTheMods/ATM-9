GTCEuStartupEvents.registry("gtceu:machine", event => {

    event.create("world_data_scanner", "simple", GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV)
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType("world_data_scanner", true, true)
        .workableTieredHullRenderer("gtceu:block/machines/scanner")
        .tankScalingFunction(tier => tier * 0 + 64000)

    event.create("void_miner", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType("void_miner")
        .recipeModifier(GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK))
        .appearanceBlock(GTBlocks.CASING_TITANIUM_STABLE)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle("XXX", "#F#", "#F#", "#F#", "###", "###", "###")
                .aisle("XXX", "FCF", "FCF", "FCF", "#F#", "#F#", "#F#")
                .aisle("XSX", "#F#", "#F#", "#F#", "###", "###", "###")
                .where("S", Predicates.controller(Predicates.blocks(definition.get())))
                .where("X", Predicates.blocks("gtceu:stable_machine_casing")
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
                .where("C", Predicates.blocks("gtceu:stable_machine_casing"))
                .where("F", Predicates.blocks("gtceu:titanium_frame"))
                .where("#", Predicates.any())
                .build()
        )
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_stable_titanium", "gtceu:block/multiblock/large_miner", false)
    
})

GTCEuStartupEvents.registry("gtceu:recipe_type", event => {

    event.create("void_miner")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 4, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)

    event.create("world_data_scanner")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 1, 2, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.SCIENCE)

})

StartupEvents.registry("item", event => {
    event.create("overworld_data")
        .texture("gtceu:item/data_stick")
    event.create("nether_data")
        .texture("gtceu:item/data_stick")
    event.create("end_data")
        .texture("gtceu:item/data_stick")
})