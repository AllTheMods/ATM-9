GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('advanced_large_chemical_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_PTFE_INERT)
        .recipeTypes('large_chemical_reactor')
        .recipeModifier(GTRecipeModifiers.PARALLEL_HATCH.apply(OverclockingLogic.PERFECT_OVERCLOCK, GTRecipeModifiers.ELECTRIC_OVERCLOCK))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('c   c', 'ccccc', 'c   c', 'ccccc', 'c   c')
            .aisle('ccccc', 'cpppc', 'cwwwc', 'cpppc', 'ccccc')
            .aisle('c   c', 'cwwwc', 'cpppc', 'cwwwc', 'c   c')
            .aisle('ccccc', 'cpppc', 'cwwwc', 'cpppc', 'ccccc')
            .aisle('c   c', 'kcccc', 'c   c', 'ccccc', 'c   c')
            .where('k', Predicates.controller(Predicates.blocks(definition.get())))
            .where('w', Predicates.blocks(GTBlocks.COIL_TUNGSTENSTEEL.get()))
            .where('p', Predicates.blocks(GTBlocks.CASING_POLYTETRAFLUOROETHYLENE_PIPE.get()))
            .where(' ', Predicates.any())
            .where('c', Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
        .build())
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_inert_ptfe",
            "gtceu:block/multiblock/large_chemical_reactor",
            false
        )
})