// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const $VeinedVeinGenerator = Java.loadClass('com.gregtechceu.gtceu.api.data.worldgen.generator.veins.VeinedVeinGenerator');
const $DikeVeinGenerator = Java.loadClass('com.gregtechceu.gtceu.api.data.worldgen.generator.veins.DikeVeinGenerator');

GTCEuServerEvents.oreVeins(allthemods => {
    allthemods.modifyAll((veinId, vein) => {
        let startY;
        let endY;
        switch(vein.layer()) {
            case GTWorldGenLayers.ENDSTONE:
                startY = -63;
                endY = 0;
                break;
            case GTWorldGenLayers.NETHERRACK:
                startY = 1;
                endY = 64;
                break;
            case GTWorldGenLayers.DEEPSLATE:
                startY = 65;
                endY = 128;
                break;
            case GTWorldGenLayers.STONE:
                startY = 129;
                endY = 248;
                break;
            default:
                startY = 319;
                endY = 320;
                break;
        }

        let veinGen = vein.veinGenerator();
        if (veinGen instanceof $VeinedVeinGenerator) {
            veinGen = veinGen.copy()
            veinGen.minYLevel(startY);
            veinGen.maxYLevel(endY);
            // veinGen.minYLevel = startY;
            // veinGen.maxYLevel = endY;
        } else if (veinGen instanceof $DikeVeinGenerator) {
            veinGen = veinGen.copy()
            veinGen.minYLevel(startY);
            veinGen.maxYLevel(endY);
            var blocks = veinGen.getAllEntries()
            blocks.forEach((block) => {
                veinGen.withBlock(new GTDikeBlockDefinition['(com.mojang.datafixers.util.Either,int,int,int)'](block.key, block.value, startY, endY))
            })
            // veinGen.minYLevel = startY;
            // veinGen.maxYLevel = endY;
        }

        
        
        vein.heightRangeUniform(startY, endY)
        vein.dimensions('allthemodium:mining')
        vein.biomes('#allthemodium:mining_features/mining_biomes')
        vein['veinGenerator(com.gregtechceu.gtceu.api.data.worldgen.generator.VeinGenerator)'](veinGen)
        // vein.surfaceIndicatorGenerator(indicator => indicator
        //     .block(Block.getBlock("minecraft:air"))
        //     .placement("above")
        //     .density(0.4)
        //     .radius(5))


        // allthemods.add(veinId + '_mining', newVein => {
        //     let veinGen = vein.veinGenerator();
        //     if (veinGen instanceof $VeinedVeinGenerator) {
        //         veinGen = veinGen.copy()
        //         veinGen.minYLevel = startY;
        //         veinGen.maxYLevel = endY;
        //     } else if (veinGen instanceof $DikeVeinGenerator) {
        //         veinGen = veinGen.copy()
        //         veinGen.minYLevel = startY;
        //         veinGen.maxYLevel = endY;
        //     }

        //     newVein.clusterSize(vein.clusterSize())
        //     newVein.weight(vein.weight())
        //     newVein.density(vein.density())
        //     newVein.layer(vein.layer())
        //     newVein.heightRangeUniform(startY, endY)
        //     newVein.discardChanceOnAirExposure(vein.discardChanceOnAirExposure())
        //     newVein.dimensions('allthemodium:mining')
        //     newVein.biomes('#allthemodium:mining_features/mining_biomes')
        //     newVein['veinGenerator(com.gregtechceu.gtceu.api.data.worldgen.generator.VeinGenerator)'](veinGen)
        // })
    })

    allthemods.add("fluorite_vein", builder => {
        builder.clusterSize(35)
            .weight(30)
            .density(0.75)
            .discardChanceOnAirExposure(0.0)
            .layer('deepslate')
            .dimensions('allthemodium:mining')
            .biomes('#allthemodium:mining_features/mining_biomes')
            .heightRangeUniform(65, 128)
            .dikeVeinGenerator(generator => 
                generator.withBlock(new GTDikeBlockDefinition['(com.gregtechceu.gtceu.api.data.chemical.material.Material,int,int,int)'](GTMaterials.get("fluorite"), 3, 65, 128))
                        .withBlock(new GTDikeBlockDefinition['(com.gregtechceu.gtceu.api.data.chemical.material.Material,int,int,int)'](GTMaterials.get("sulfur"), 1, 65, 128))
                        .withBlock(new GTDikeBlockDefinition['(com.gregtechceu.gtceu.api.data.chemical.material.Material,int,int,int)'](GTMaterials.get("gypsum"), 2, 65, 128))
                        .withBlock(new GTDikeBlockDefinition['(com.gregtechceu.gtceu.api.data.chemical.material.Material,int,int,int)'](GTMaterials.get("dolomite"), 1, 65, 128))
            )
        })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
