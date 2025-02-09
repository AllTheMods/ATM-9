// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const $SoundEvents = Java.loadClass("net.minecraft.sounds.SoundEvents")
const $SoundSource = Java.loadClass("net.minecraft.sounds.SoundSource")
const $ExistingSoundEntry = Java.loadClass("com.gregtechceu.gtceu.api.sound.ExistingSoundEntry")

GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('ore_processing_plant')
        .category('ore_processing_plant')
        .setEUIO('in')
        .setMaxIOSize(1, 9, 2, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MACERATOR);
    allthemods.create('ore_bathing_plant')
        .category('ore_processing_plant')
        .setEUIO('in')
        .setMaxIOSize(1, 9, 2, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);
    allthemods.create('ore_sifting_plant')
        .category('ore_processing_plant')
        .setEUIO('in')
        .setMaxIOSize(1, 9, 2, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(new $ExistingSoundEntry($SoundEvents.SAND_PLACE, $SoundSource.BLOCKS));
})

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    allthemods.create('ore_processing_plant', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeTypes([GTRecipeTypes.get('ore_processing_plant'), GTRecipeTypes.get('ore_bathing_plant'), GTRecipeTypes.get('ore_sifting_plant')])
        .appearanceBlock(GCYMBlocks.CASING_SECURE_MACERATION)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT_SUBTICK])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('GGGGG', 'AAAAA', 'AAAAA', 'AAAAA', ' EEE ', 'EEEEE', ' EEE ', ' E E ', ' E E ', ' EEE ', 'EEEEE', ' EEE ', 'CCCCC', 'CCCCC', 'CCCCC', 'AAAAA', 'AAAAA', 'AAAAA', 'HHHHH')
            .aisle('GAAAG', 'ABBBA', 'ABBBA', 'A   A', 'E   E', 'ED DE', 'E   E', 'E E E', 'E E E', 'EFFFE', 'EFFFE', 'E   E', 'C C C', 'CD DC', 'C   C', 'A   A', 'ABBBA', 'ABBBA', 'H   H')
            .aisle('GAAAG', 'ABBBA', 'ABBBA', 'A   A', 'E   E', 'E D E', 'E   E', ' E E ', ' E E ', 'EFFFE', 'EFFFE', 'E   E', 'C C C', 'CD DC', 'C   C', 'A   A', 'ABBBA', 'ABBBA', 'H   H')
            .aisle('GAAAG', 'ABBBA', 'ABBBA', 'A   A', 'E   E', 'ED DE', 'E   E', 'E E E', 'E E E', 'EFFFE', 'EFFFE', 'E   E', 'C C C', 'CD DC', 'C   C', 'A   A', 'ABBBA', 'ABBBA', 'H   H')
            .aisle('GGGGG', 'AAAAA', 'AAAAA', 'AAAAA', ' EEE ', 'EEEEE', ' EEE ', ' E E ', ' E E ', ' EEE ', 'EEEEE', ' EEE ', 'CCCCC', 'CCCCC', 'CCCCC', 'AAAAA', 'AAAAA', 'AAKAA', 'HHHHH')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('A', Predicates.blocks(GCYMBlocks.CASING_SECURE_MACERATION.get()))
            .where('B', Predicates.blocks(GCYMBlocks.CRUSHING_WHEELS.get()))
            .where('C', Predicates.blocks(GCYMBlocks.CASING_WATERTIGHT.get()))
            .where('D', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_PIPE.get()))
            .where('E', Predicates.blocks(GCYMBlocks.CASING_VIBRATION_SAFE.get()))
            .where('F', Predicates.blocks(GTBlocks.CASING_GRATE.get()))
            .where('G', Predicates.blocks(GCYMBlocks.CASING_SECURE_MACERATION.get())
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMaxGlobalLimited(2))
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS))
            )
            .where('H', Predicates.blocks(GCYMBlocks.CASING_SECURE_MACERATION.get())
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS, PartAbility.IMPORT_FLUIDS))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
            )
            .where(' ', Predicates.air())
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/gcym/secure_maceration_casing', 'gtceu:block/multiblock/gcym/large_maceration_tower', false)
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.