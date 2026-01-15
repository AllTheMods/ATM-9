// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const ForgeCapabilities = Java.loadClass('net.minecraftforge.common.capabilities.ForgeCapabilities')
const ModifierFunction = Java.loadClass('com.gregtechceu.gtceu.api.recipe.modifier.ModifierFunction')
const ContentModifier = Java.loadClass('com.gregtechceu.gtceu.api.recipe.content.ContentModifier')
const GTRecipeModifiers = Java.loadClass('com.gregtechceu.gtceu.common.data.GTRecipeModifiers')

const neuralNodeModifier = (machine, recipe) => {
    let dataVal = 0;

    // get recipe target item
    let recipeId = recipe.getId().toString();
    let path = recipeId.substring(recipeId.lastIndexOf(':') + 1);
    let targetMob = path.substring(path.lastIndexOf('/') + 1);
    
    if (!targetMob) return ModifierFunction.builder().build();

    // scan inputs
    let parts = machine.getParts();
    
    for (let i = 0; i < parts.size(); i++) {
        let part = parts.get(i);
        
        try {
            if (!part.getHolder) continue; 
            let holder = part.getHolder();
            if (!holder || !holder.getCapability) continue; 
            let cap = holder.getCapability(ForgeCapabilities.ITEM_HANDLER, null);
            if (!cap.isPresent()) continue; 
            let handler = cap.orElse(null);
            if (!handler) continue;
            
            //scan slots
            for (let slot = 0; slot < handler.getSlots(); slot++) {
                let stack = handler.getStackInSlot(slot);
                if (stack.isEmpty()) continue;
                let itemId = stack.getItem().toString(); 
                if (!itemId.contains('data_model') && !itemId.contains('hostilenetworks')) continue;
                let nbt = stack.getTag ? stack.getTag() : (stack.nbt || null);
                if (!nbt) continue;
                
                let nbtStr = nbt.toString();
                if (nbtStr.contains(targetMob)) {
                    let dataMatch = nbtStr.match(/(?:["']?data["']?)\s*:\s*(\d+)/);
                    if (dataMatch) {
                        dataVal = parseInt(dataMatch[1]);
                        break; 
                    }
                }
            }
        } catch (e) {}
        
        if (dataVal > 0) break; 
    }

    // multiplier
    if (dataVal > 0) {
        let multiplier = 1;
        if (dataVal >= 54 && dataVal <= 353) multiplier = 2;
        else if (dataVal >= 354 && dataVal <= 1254) multiplier = 4;
        else if (dataVal >= 1255) multiplier = 8;
        
        if (multiplier > 1) {
            return ModifierFunction.builder()
                .outputModifier(ContentModifier.multiplier(multiplier))
                .build();
        }
    }

    return ModifierFunction.builder().build();
}

GTCEuStartupEvents.registry('gtceu:recipe_type', allthemods => {
    allthemods.create('neural_node')
        .category('neural_node')
        .setEUIO('in')
        .setMaxIOSize(3, 19, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION)
})

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    allthemods.create('neural_node', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('neural_node')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .recipeModifiers([neuralNodeModifier, GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT_SUBTICK, GTRecipeModifiers.BATCH_MODE]) 
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('AAAAAAAAAAAAAAAA', 'A              A', 'A              A', 'A              A', 'A              A', 'A              A', 'A              A', 'A              A', 'A              A', 'A              A', 'A              A', 'A  CCCC   CCC  A', 'A              A', 'A              A', 'A              A', 'AAAAAAAAAAAAAAAA')
            .aisle('A              A', ' BBBBCFFFFFFFFB ', ' BBBBBBBBBBBBBB ', ' BBBBBCFFFFFFFB ', ' BBBBBBBBBBBBBB ', ' BFFFFFFFFFFFFB ', ' BBBBBBBBBBBBBB ', ' BBBBBBBCFFFFFF ', ' BBBBBBBBBBBBBB ', ' BFFFFFFBFFFFFB ', ' BBBBBBBBBBBBBB ', ' BB    BBB   BB ', ' BBBBBBBBBBBBBB ', ' BBBBBBBBBBBBBB ', ' BBBBBBBBBBBBBB ', 'A              A')
            .aisle('A              A', ' FBBBBBBBBBBBBB ', ' BD          DB ', ' F            B ', ' B            B ', ' F            F ', ' B            B ', ' F            B ', ' B            B ', ' F            F ', ' B            B ', ' B            B ', ' B            B ', ' BD          DB ', ' BBBBBBBBBBBBBB ', 'A              A')
            .aisle('A              A', ' FBBBBBBBBBBBBB ', ' B            B ', ' F D        D B ', ' B            B ', ' F            F ', ' B            B ', ' F            B ', ' B            B ', ' F            F ', ' B            B ', 'C              C', ' B D        D B ', ' B            B ', ' BBBBBBBBBBBBBB ', 'A              A')
            .aisle('A              A', ' FBBBBBBBBBBBBB ', ' B            B ', ' F            B ', ' B  D      D  B ', ' F            F ', ' B            B ', ' F            B ', ' B            B ', ' F            F ', ' B            B ', 'C   D      D   C', ' B            B ', ' B            B ', ' BBBBBBBBBBBBBB ', 'A              A')
            .aisle('A              A', ' FBBBBBBBBBBBBC ', ' B            B ', ' F            B ', ' B            B ', ' F   D    D   F ', ' B            B ', ' F            B ', ' B            B ', ' F            F ', ' B   D    D   B ', 'C              C', ' B            B ', ' B            B ', ' BBBBBBBBBBBBBB ', 'A              A')
            .aisle('A              A', ' FBBBBBBBBBBBBF ', ' B            B ', ' F            C ', ' B            B ', ' F            F ', ' B    GGGG    B ', ' F    GGGG    B ', ' B    GGGG    B ', ' F    GGGG    F ', ' B            B ', ' B             C', ' B            B ', ' B            B ', ' BBBBBBBBBBBBBB ', 'A              A')
            .aisle('A              A', ' FBBBBBBBBBBBBF ', ' B            B ', ' F            F ', ' B            B ', ' F            F ', ' B    GGGG    B ', ' F    GGGG    C ', ' B    GGGG    B ', ' B    GGGG    F ', ' B            B ', ' B            B ', ' B            B ', ' B            B ', ' BBBBBBBBBBBBBB ', 'A              A')
            .aisle('A              A', ' FBBBBBBBBBBBBF ', ' B            B ', ' F            F ', ' B            B ', ' F            F ', ' B    GGGG    B ', ' C    GGGG    F ', ' B    GGGG    B ', ' F    GGGG    B ', ' B            B ', ' B            B ', ' B            B ', ' B            B ', ' BBBBBBBBBBBBBB ', 'A              A')
            .aisle('A              A', ' FBBBBBBBBBBBBF ', ' B            B ', ' C            F ', ' B            B ', ' F            F ', ' B    GGGG    B ', ' B    GGGG    F ', ' B    GGGG    B ', ' F    GGGG    F ', ' B            B ', 'C             B ', ' B            B ', ' B            B ', ' BBBBBBBBBBBBBB ', 'A              A')
            .aisle('A              A', ' CBBBBBBBBBBBBF ', ' B            B ', ' B            F ', ' B            B ', ' F   D    D   F ', ' B            B ', ' B            F ', ' B            B ', ' F            F ', ' B   D    D   B ', 'C              C', ' B            B ', ' B            B ', ' BBBBBBBBBBBBBB ', 'A              A')
            .aisle('A              A', ' BBBBBBBBBBBBBF ', ' B            B ', ' B            F ', ' B  D      D  B ', ' F            F ', ' B            B ', ' B            F ', ' B            B ', ' F            F ', ' B            B ', 'C   D      D   C', ' B            B ', ' B            B ', ' BBBBBBBBBBBBBB ', 'A              A')
            .aisle('A              A', ' BBBBBBBBBBBBBF ', ' B            B ', ' B D        D F ', ' B            B ', ' F            F ', ' B            B ', ' B            F ', ' B            B ', ' F            F ', ' B            B ', 'C              C', ' B D        D B ', ' B            B ', ' BBBBBBBBBBBBBB ', 'A              A')
            .aisle('A              A', ' BBBBBBBBBBBBBF ', ' BD          DB ', ' B            F ', ' B            B ', ' F            F ', ' B            B ', ' B            F ', ' B            B ', ' F            F ', ' B            B ', ' B            B ', ' B            B ', ' BD          DB ', ' BBBBBBBBBBBBBB ', 'A              A')
            .aisle('A              A', ' BBBBBBBBBBBBBB ', ' BBBBBBBBBBBBBB ', ' BBBBBBBBBBBBBB ', ' BBB     BACBBB ', ' BBBBBBBBBBBBBB ', ' BBBBBBBBBBBBBB ', ' BBBBBBBBBBBBBB ', ' BBBBBBBBBBBBBB ', ' BBBBBBBBBBBBBB ', ' BBBEEEBBBBBBBB ', ' BBBEKEBBBBBBBB ', ' BBBBBBBBBBBBBB ', ' BBBBBBBBBBBBBB ', ' BBBBBBBBBBBBBB ', 'A              A')
            .aisle('AAAAAAAAAAAAAAAA', 'A              A', 'A CCCCCCCCCCCC A', 'A C          C A', 'A C HHHHH    C A', 'A C          C A', 'A C          C A', 'A C          C A', 'A C          C A', 'A C          C A', 'A C          C A', 'A C          C A', 'A C          C A', 'A CCCCCCCCCCCC A', 'A              A', 'AAAAAAAAAAAAAAAA')
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('A', Predicates.blocks(GCYMBlocks.CASING_NONCONDUCTING.get()))
            .where('B', Predicates.blocks(GTBlocks.CASING_PTFE_INERT.get()))
            .where('C', Predicates.blocks(GCYMBlocks.CASING_VIBRATION_SAFE.get()))
            .where('D', Predicates.blocks("gtceu:polytetrafluoroethylene_frame"))
            .where('E', Predicates.blocks(GTBlocks.CASING_STAINLESS_CLEAN.get())
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where('F', Predicates.blocks(GCYMBlocks.CASING_WATERTIGHT.get()))
            .where('G', Predicates.blocks("hostilenetworks:sim_chamber"))
            .where('H', Predicates.blocks(GCYMBlocks.CASING_WATERTIGHT.get())
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS, PartAbility.EXPORT_ITEMS))
            )
            .where(' ', Predicates.any())
            .build()
        )
        .workableCasingModel('gtceu:block/casings/solid/machine_casing_clean_stainless_steel', 'gtceu:block/multiblock/fusion_reactor')
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.