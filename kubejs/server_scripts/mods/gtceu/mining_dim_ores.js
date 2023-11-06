
//const $ChemicalHelper = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.ChemicalHelper');
const $WorldGenLayers = Java.loadClass('com.gregtechceu.gtceu.api.data.worldgen.WorldGenLayers');
const $HashBiMap = Java.loadClass('com.google.common.collect.HashBiMap');
const $VeinedVeinGenerator = Java.loadClass('com.gregtechceu.gtceu.api.data.worldgen.generator.VeinedVeinGenerator');
const $DikeVeinGenerator = Java.loadClass('com.gregtechceu.gtceu.api.data.worldgen.generator.DikeVeinGenerator');
const $DikeBlockDefinition = Java.loadClass('com.gregtechceu.gtceu.api.data.worldgen.generator.DikeVeinGenerator$DikeBlockDefinition');
const $Either = Java.loadClass('com.mojang.datafixers.util.Either');

GTCEuServerEvents.oreVeins(event => {
    event.add("fluorite_vein", builder => {
        builder.clusterSize(35)
            .weight(30)
            .density(0.75)
            .discardChanceOnAirExposure(0.0)
            .layer('deepslate')
            .addSpawnDimension('allthemodium:mining')
            .addSpawnBiome('#allthemodium:mining_features/mining_biomes')
            .heightRange({
                height: {
                    type: "uniform",
                    min_inclusive: {
                        absolute: -50
                    },
                    max_inclusive: {
                        absolute: 10
                    }
                }
            })
            .generator(builder.generatorBuilder("gtceu:dike")
                .withBlock(new $DikeBlockDefinition($Either.right(GTMaterials.get("fluorite")), 3, -64, 320))
                .withBlock(new $DikeBlockDefinition($Either.right(GTMaterials.get("sulfur")), 1, -64, 320))
                .withBlock(new $DikeBlockDefinition($Either.right(GTMaterials.get("gypsum")), 2, -64, 320))
                .withBlock(new $DikeBlockDefinition($Either.right(GTMaterials.get("dolomite")), 1, -64, 320))
                .minYLevel(-50)
                .maxYLevel(10))
        })

    //$ChemicalHelper.ORES_INVERSE.put(Blocks.AIR.defaultBlockState(), TagPrefix.ore)
    $HashBiMap.create(GTRegistries.ORE_VEINS.registry()).forEach((veinId, vein) => {
        let startY;
        let endY;
        switch(vein.layer) {
            case $WorldGenLayers.ENDSTONE:
                startY = -63;
                endY = 0;
                break;
            case $WorldGenLayers.NETHERRACK:
                startY = 1;
                endY = 64;
                break;
            case $WorldGenLayers.DEEPSLATE:
                startY = 65;
                endY = 128;
                break;
            case $WorldGenLayers.STONE:
                startY = 129;
                endY = 248;
                break;
            default:
                startY = 319;
                endY = 320;
                break;
        }
        event.add(veinId.toString() + '_mining', newVein => {
            let veinGen = vein.getVeinGenerator();
            if (veinGen instanceof $VeinedVeinGenerator) {
                veinGen = veinGen.copy()
                veinGen.minYLevel = startY;
                veinGen.maxYLevel = endY;
            } else if (veinGen instanceof $DikeVeinGenerator) {
                veinGen = veinGen.copy()
                veinGen.minYLevel = startY;
                veinGen.maxYLevel = endY;
            }

            newVein.clusterSize(vein.clusterSize)
                .weight(vein.weight)
                .density(vein.density)
                .layer(vein.layer)
                .heightRange({
                    height: {
                        type: "uniform",
                        min_inclusive: {
                            absolute: startY
                        },
                        max_inclusive: {
                            absolute: endY
                        }
                    }
                })
                .discardChanceOnAirExposure(vein.discardChanceOnAirExposure)
                .addSpawnDimension('allthemodium:mining')
                .addSpawnBiome('#allthemodium:mining_features/mining_biomes')
                .generator(veinGen)
        })
    })

})