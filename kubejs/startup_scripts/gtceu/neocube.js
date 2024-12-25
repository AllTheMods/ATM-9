// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    allthemods.create('neocube', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeTypes('assembly_line')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeModifier(GTRecipeModifiers.OC_PERFECT_SUBTICK)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('FFFFFFFF', 'LLLLLLLL', 'GLGGGGLG', 'GLG  GLG', 'GLG  GLG', 'GLG  GLG', 'GLG  GLG', 'GLG  GLG', 'GLGGGGLG', 'LLLLLLLL', 'GGGGGGGG', '        ')
            .aisle('FCCCCCCF', 'LAAAAAAL', 'LALIILAL', 'LAI  IAL', 'LAI  IAL', 'LAI  IAL', 'LAI  IAL', 'LAI  IAL', 'LALIILAL', 'LAAAAAAL', 'GCCCCCCG', ' SSSSSS ')
            .aisle('FCFFFFCF', 'LALLLLAL', 'GLFFFFLG', 'GIF  FIG', 'GIF  FIG', 'GIF  FIG', 'GIF  FIG', 'GIF  FIG', 'GLFFFFLG', 'LALLLLAL', 'GCGGGGCG', ' S    S ')
            .aisle('FCF  FCF', 'LAL  LAL', 'GIF  FIG', '        ', '        ', '        ', '        ', '        ', 'GIF  FIG', 'LAL  LAL', 'GCG  GCG', ' S    S ')
            .aisle('FCF  FCF', 'LAL  LAL', 'GIF  FIG', '        ', '        ', '        ', '        ', '        ', 'GIF  FIG', 'LAL  LAL', 'GCG  GCG', ' S    S ')
            .aisle('FCFFFFCF', 'LALLLLAL', 'GLFFFFLG', 'GIF  FIG', 'GIF  FIG', 'GIF  FIG', 'GIF  FIG', 'GIF  FIG', 'GLFFFFLG', 'LALLLLAL', 'GCGGGGCG', ' S    S ')
            .aisle('FCCCCCCF', 'LAAAAAAL', 'LALIILAL', 'LAI  IAL', 'LAI  IAL', 'LAI  IAL', 'LAI  IAL', 'LAI  IAL', 'LALIILAL', 'LAAAAAAL', 'GCCCCCCG', ' SSSSSS ')
            .aisle('FFFFFFFF', 'LLLLLLLL', 'GLGGGGLG', 'GLG  GLG', 'GLG  GLG', 'GLG  GLG', 'GLG  GLG', 'GLG  GLG', 'GLGGGGLG', 'LLLLLLLL', 'GGGGGGDK', '        ')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('S', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get())
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(1).setMaxGlobalLimited(2))
            )
            .where('F', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()))
            .where('G', Predicates.blocks(GTBlocks.CASING_GRATE.get()))
            .where('C', Predicates.blocks(GTBlocks.CASING_ASSEMBLY_CONTROL.get()))
            .where('D', Predicates.abilities(PartAbility.DATA_ACCESS, PartAbility.OPTICAL_DATA_RECEPTION).setExactLimit(1))
            .where('L', Predicates.blocks(GTBlocks.CASING_LAMINATED_GLASS.get()))
            .where('A', Predicates.blocks(GTBlocks.CASING_ASSEMBLY_LINE.get()))
            .where('I', Predicates.blocks(GTMachines.ITEM_IMPORT_BUS[0].getBlock()).setMinGlobalLimited(5).setMaxGlobalLimited(16)
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS_1X, PartAbility.IMPORT_FLUIDS_4X, PartAbility.IMPORT_FLUIDS_9X).setMaxGlobalLimited(4))
                .or(Predicates.blocks(GTBlocks.CASING_LAMINATED_GLASS.get()))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/assembly_line",
            false
        )
})