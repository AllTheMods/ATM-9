// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('mega_chemical_reactor')
        .category('gregstar')
        .setEUIO('in')
        .setMaxIOSize(3, 3, 5, 4)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW_MULTIPLE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CHEMICAL);

    GTRecipeTypes.LARGE_CHEMICAL_RECIPES.onRecipeBuild((builder, provider) => {
        GTRecipeTypes.get('mega_chemical_reactor').copyFrom(builder)
            .duration(Math.max((builder.duration / 2), 1))
            .save(provider);
    });

    GTRecipeTypes.CHEMICAL_RECIPES.onRecipeBuild((builder, provider) => {
        GTRecipeTypes.get('mega_chemical_reactor').copyFrom(builder)
            .duration(Math.max((builder.duration / 2), 1))
            .save(provider);

        GTRecipeTypes.LARGE_CHEMICAL_RECIPES.copyFrom(builder).save(provider);
    });
})

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    allthemods.create('advanced_large_chemical_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_PTFE_INERT)
        .recipeTypes('mega_chemical_reactor')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_PERFECT_SUBTICK])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('c   c', 'ccccc', 'c   c', 'ccccc', 'c   c')
            .aisle('ccccc', 'cpppc', 'cwwwc', 'cpppc', 'ccccc')
            .aisle('c   c', 'cwwwc', 'cpppc', 'cwwwc', 'c   c')
            .aisle('ccccc', 'cpppc', 'cwwwc', 'cpppc', 'ccccc')
            .aisle('c   c', 'kcccc', 'c   c', 'ccccc', 'c   c')
            .where('k', Predicates.controller(Predicates.blocks(definition.get())))
            // .where('w', Predicates.blocks(GTBlocks.COIL_RTMALLOY.get())
            .where('w', Predicates.heatingCoils()
                .or(Predicates.blocks(GTBlocks.CASING_POLYTETRAFLUOROETHYLENE_PIPE.get()))
            )
            .where('p', Predicates.blocks(GTBlocks.CASING_POLYTETRAFLUOROETHYLENE_PIPE.get())
                .or(Predicates.heatingCoils())
                // .or(Predicates.blocks(GTBlocks.COIL_RTMALLOY.get()))
            )
            .where(' ', Predicates.any())
            .where('c', Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get())
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
        .build())
        .shapeInfo(controller => MultiblockShapeInfo.builder()
            .aisle('e   e', 'ccccc', 'c   c', 'ccccc', 'c   c')
            .aisle('ccccc', 'fpppc', 'cwwwc', 'fpppc', 'ccccc')
            .aisle('c   c', 'cwwwc', 'cpppi', 'cwwwc', 'c   c')
            .aisle('ccccc', 'fpppc', 'cwwwc', 'fpppc', 'ccccc')
            .aisle('c   c', 'kcPcm', 'c   c', 'cIcFc', 'c   c')
            .where('k', controller, Direction.SOUTH)
            .where('c', GTBlocks.CASING_PTFE_INERT.get())
            .where('w', GTBlocks.COIL_RTMALLOY.get())
            .where('p', GTBlocks.CASING_POLYTETRAFLUOROETHYLENE_PIPE.get())
            .where(' ', Block.getBlock('minecraft:air'))
            .where('e', GTMachines.ENERGY_INPUT_HATCH[5], Direction.NORTH)
            ["where(char,net.minecraft.world.level.block.state.BlockState)"]('m', 
                Block.getBlock('gtceu:maintenance_hatch').defaultBlockState().setValue(BlockProperties.FACING, Direction.SOUTH))
            ["where(char,net.minecraft.world.level.block.state.BlockState)"]('P', 
                Block.getBlock('gtceu:iv_parallel_hatch').defaultBlockState().setValue(BlockProperties.FACING, Direction.SOUTH))
            .where('f', GTMachines.FLUID_IMPORT_HATCH[5], Direction.WEST)
            .where('i', GTMachines.ITEM_IMPORT_BUS[5], Direction.EAST)
            .where('F', GTMachines.FLUID_EXPORT_HATCH[5], Direction.SOUTH)
            .where('I', GTMachines.ITEM_EXPORT_BUS[5], Direction.SOUTH)
        .build())
        .workableCasingModel(
            "gtceu:block/casings/solid/machine_casing_inert_ptfe",
            "gtceu:block/multiblock/large_chemical_reactor"
        )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
