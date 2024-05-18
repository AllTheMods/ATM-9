// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const $FusionReactorMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.electric.FusionReactorMachine")

GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('mega_fusion_reactor')
        .category('gregstar')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 4, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_FUSION, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);

    GTRecipeTypes.FUSION_RECIPES.onRecipeBuild((builder, provider) => {
        GTRecipeTypes.get('mega_fusion_reactor').copyFrom(builder)
            .duration(Math.max((builder.duration / 2), 1))
            .EUt(builder.EUt() * 1.5)
            .save(provider);
    });
})

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    allthemods.create('mega_fusion_reactor', 'multiblock', (holder) => new $FusionReactorMachine(holder, GTValues.UHV))
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(GTRecipeTypes.get('mega_fusion_reactor'))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK)])
        .appearanceBlock(GCyMBlocks.CASING_ATOMIC)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("                                 ", "                                 ", "C  N C                     C N  C", "C  N C                     C N  C", "C  N C                     C N  C", "C  N C                     C N  C", "                                 ", "                                 ")
            .aisle("                                 ", "C  N C        AAAAA        C N  C", "ATT#H#H C    CAAAAAC    C H#H#TTA", "ATT#H#H CS  SCAGGGACS  SC H#H#TTA", "ATT#H#H CS  SCAGGGACS  SC H#H#TTA", "ATT#H#H C    CAAAAAC    C H#H#TTA", "C  N C        AAAAA        C N  C", "                                 ")
            .aisle("C  N C                     C N  C", "ATT#HC  C    CAAAAAC    C  CH#TTA", "A#####H C    C#####C    C H#####A", "A#####HH#CAACC#####CCAAC#HH#####A", "A#####HH#CAACC#####CCAAC#HH#####A", "A#####H C    C#####C    C H#####A", "ATT#HC  C    CAAAAAC    C  CH#TTA", "C  N C                     C N  C")
            .aisle("C  N C                     C N  C", "ATT#H#H CS  SCAAAAACS  SC H#H#TTA", "A######H#CAAC#######CAAC#H######A", "G###############################G", "G###############################G", "A######H#CAAC#######CAAC#H######A", "ATT#H#H CS  SCAAAAACS  SC H#H#TTA", "C  N C                     C N  C")
            .aisle("C  N C                     C N  C", "ATT#H#H CS  SCAAAAACS  SC H#H#TTA", "A######H#CAAC#######CAAC#H######A", "G###############################G", "G###############################G", "A######H#CAAC#######CAAC#H######A", "ATT#H#H CS  SCAAAAACS  SC H#H#TTA", "C  N C                     C N  C")
            .aisle("C  N C                     C N  C", "ATT#HC  C    CAAAAAC    C  CH#TTA", "A#####H C    C#####C    C H#####A", "A#####HH#CAACC#####CCAAC#HH#####A", "A#####HH#CAACC#####CCAAC#HH#####A", "A#####H C    C#####C    C H#####A", "ATT#HC  C    CAAAAAC    C  CH#TTA", "C  N C                     C N  C")
            .aisle("                                 ", "C  N C        AAAAA        C N  C", "ATT#H#H C    CAAMAAC    C H#H#TTA", "ATT#H#H CS  SCAGGGACS  SC H#H#TTA", "ATT#H#H CS  SCAGGGACS  SC H#H#TTA", "ATT#H#H C    CAAAAAC    C H#H#TTA", "C  N C        AAAAA        C N  C", "                                 ")
            .aisle("                                 ", "                                 ", "C  N C                     C N  C", "C  N C                     C N  C", "C  N C                     C N  C", "C  N C                     C N  C", "                                 ", "                                 ")
            .where('M', Predicates.controller(Predicates.blocks(definition.get())))
            .where('H', Predicates.blocks("gtceu:fusion_coil"))
            .where('T', Predicates.blocks(GTBlocks.COIL_TRITANIUM.get()))
            .where('N', Predicates.blocks("gtceu:heatproof_machine_casing"))
            .where('C', Predicates.blocks("gtceu:fusion_casing_mk3"))
            .where('G', Predicates.blocks("gtceu:fusion_glass"))
            .where('S', Predicates.blocks("mekanism:supercharged_coil"))
            .where('A', Predicates.blocks('gtceu:atomic_casing').setMinGlobalLimited(35)
                .or(Predicates.autoAbilities(definition.recipeTypes))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where(' ', Predicates.any())
            .where('#', Predicates.air())
            .build())/*
        .shapeInfo(controller => MultiblockShapeInfo.builder()
            .aisle("                              ", "                              ", "C  C C                  C C  C", "C  C C                  C C  C", "C  C C                  C C  C", "C  C C                  C C  C", "                              ", "                              ")
            .aisle("                              ", "C  C C       AAAA       C C  C", "AHH#H#H     CAIOAC     H#H#HHA", "AHH#H#H U  UCAGGACU  U H#H#HHA", "AHH#H#H U  UCAGGACU  U H#H#HHA", "AHH#H#H     CAAAAC     H#H#HHA", "C  C C       AAAA       C C  C", "                              ")
            .aisle("C  C C                  C C  C", "AHH#H#C     CAAAAC     C#H#HHA", "A#####H     C####C     H#####A", "A#####HHCAACC####CCAACHH#####A", "A#####HHCAACC####CCAACHH#####A", "A#####H     C####C     H#####A", "AHH#H#C     CAAAAC     C#H#HHA", "C  C C                  C C  C")
            .aisle("C  C C                  C C  C", "EHH#H##HS  SCAAAACS  SH##H#HHA", "A######HCAAC######CAACH######A", "G############################G", "G############################G", "A######HCAAC######CAACH######A", "AHH#H##Hs  SCAAAACS  sH##H#HHA", "C  C C                  C C  C")
            .aisle("C  C C                  C C  C", "EHH#H##HS  SCAAAACS  SH##H#HHA", "A######HCAAC######CAACH######A", "G############################G", "G############################G", "A######HCAAC######CAACH######A", "AHH#H##Hs  SCAAAACS  sH##H#HHA", "C  C C                  C C  C")
            .aisle("C  C C                  C C  C", "AHH#H#C     CAAAAC     C#H#HHA", "A#####H     C####C     H#####A", "A#####HHCAACC####CCAACHH#####A", "A#####HHCAACC####CCAACHH#####A", "A#####H     C####C     H#####A", "AHH#H#C     CAAAAC     C#H#HHA", "C  C C                  C C  C")
            .aisle("                              ", "C  C C       AAAA       C C  C", "AHH#H#H     CAMAAC     H#H#HHA", "AHH#H#H u  uCAGGACu  u H#H#HHA", "AHH#H#H u  uCAGGACu  u H#H#HHA", "AHH#H#H     CAFRAC     H#H#HHA", "C  C C       AAAA       C C  C", "                              ")
            .aisle("                              ", "                              ", "C  C C                  C C  C", "C  C C                  C C  C", "C  C C                  C C  C", "C  C C                  C C  C", "                              ", "                              ")
            .where('M', controller, Direction.SOUTH)
            .where('H', Predicates.blocks(GTBlocks.FUSION_COIL.get()))
            .where("C", Predicates.blocks(GTBlocks.FUSION_CASING_MK3.get()))
            .where('G', Predicates.blocks(GTBlocks.FUSION_GLASS.get()))
            ["where(char,net.minecraft.world.level.block.state.BlockState)"]('U', Block.getBlock("mekanism:supercharged_coil").defaultBlockState().setValue(BlockProperties.FACING, Direction.NORTH))
            ["where(char,net.minecraft.world.level.block.state.BlockState)"]('u', Block.getBlock("mekanism:supercharged_coil").defaultBlockState().setValue(BlockProperties.FACING, Direction.SOUTH))
            ["where(char,net.minecraft.world.level.block.state.BlockState)"]('S', Block.getBlock("mekanism:supercharged_coil").defaultBlockState().setValue(BlockProperties.FACING, Direction.DOWN))
            ["where(char,net.minecraft.world.level.block.state.BlockState)"]('s', Block.getBlock("mekanism:supercharged_coil").defaultBlockState().setValue(BlockProperties.FACING, Direction.UP))
            .where('E', GTMachines.ENERGY_INPUT_HATCH[6], Direction.WEST)
            .where('A', Block.getBlock("gtceu:atomic_casing"))
            .where('F', GTMachines.FLUID_IMPORT_HATCH[6], Direction.UP)
            .where('R', GTMachines.FLUID_EXPORT_HATCH[6], Direction.UP)
            .where('I', GTMachines.ITEM_IMPORT_BUS[6], Direction.SOUTH)
            .where('O', GTMachines.ITEM_EXPORT_BUS[6], Direction.SOUTH)
            .where(' ', Blocks.AIR)
            .where('#', Blocks.AIR)
            .build())*/
        .workableCasingRenderer("gtceu:block/casings/gcym/atomic_casing",
            "gtceu:block/multiblock/fusion_reactor", false)
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
