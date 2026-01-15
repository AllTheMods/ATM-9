GTCEuStartupEvents.registry("gtceu:machine", allthemods => {

    allthemods.create("void_fluid_drilling_rig", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType("void_fluid_drilling_rig")
        .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, GTRecipeModifiers.BATCH_MODE])
        .appearanceBlock(GTBlocks.CASING_TITANIUM_STABLE)
        .pattern((definition) =>
            FactoryBlockPattern.start()
                .aisle("XXX", "#F#", "#F#", "#F#", "###", "###", "###")
                .aisle("XXX", "FCF", "FCF", "FCF", "#F#", "#F#", "#F#")
                .aisle("XSX", "#F#", "#F#", "#F#", "###", "###", "###")
                .where("S", Predicates.controller(Predicates.blocks(definition.get())))
                .where("X", Predicates.blocks("gtceu:sturdy_machine_casing")
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
                .where("C", Predicates.blocks("gtceu:sturdy_machine_casing"))
                .where("F", Predicates.blocks("gtceu:hssg_frame"))
                .where("#", Predicates.any())
                .build()
        )
        .workableCasingModel("gtceu:block/casings/solid/machine_casing_sturdy_hsse", "gtceu:block/multiblock/fluid_drilling_rig")
    
})

GTCEuStartupEvents.registry("gtceu:recipe_type", allthemods => {

    allthemods.create("void_fluid_drilling_rig")
        .setEUIO("in")
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setMaxIOSize(2, 0, 0, 1)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL)

})