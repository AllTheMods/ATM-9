// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const Tags = Java.loadClass('dev.latvian.mods.kubejs.util.Tags')

GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('greenhouse')
        .category('greenhouse')
        .setEUIO('in')
        .setMaxIOSize(4, 4, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BOILER)
})

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    allthemods.create('greenhouse', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('greenhouse')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('CCC', 'CCC', 'CGC', 'CGC', 'CCC')
            .aisle('CCC', 'FPF', 'G#G', 'GIG', 'CGC')
            .aisle('CCC', 'CMC', 'GSG', 'GLG', 'COC')
            .aisle('CCC', 'FPF', 'G#G', 'GIG', 'CGC')
            .aisle('CCC', 'CKC', 'CGC', 'CGC', 'CCC')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('M', Predicates.blockTag(Tags.block("minecraft:dirt")))
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where('S', Predicates.blockTag(Tags.block("minecraft:saplings")))
            .where('I', Predicates.blocks('glowstone')
                .or(Predicates.blocks('shroomlight'))
            )
            .where('F', Predicates.blocks(GTBlocks.FIREBOX_STEEL.get()))
            .where('P', Predicates.blocks(GTBlocks.CASING_STEEL_PIPE.get()))
            .where('L', Predicates.blocks(GTBlocks.FILTER_CASING.get()))
            .where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()).setMinGlobalLimited(21)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('#', Predicates.air())
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/solid/machine_casing_solid_steel', 'gtceu:block/multiblock/implosion_compressor', false)
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
