const $VeinedVeinGenerator = Java.loadClass('com.gregtechceu.gtceu.api.data.worldgen.generator.veins.VeinedVeinGenerator');
const $DikeVeinGenerator = Java.loadClass('com.gregtechceu.gtceu.api.data.worldgen.generator.veins.DikeVeinGenerator');

GTCEuServerEvents.oreVeins(event => {
    event.add("fluorite_vein", builder => {
        builder.clusterSize(35)
            .weight(30)
            .density(0.75)
            .discardChanceOnAirExposure(0.0)
            .layer('deepslate')
            .dimensions('allthemodium:mining')
            .biomes('#allthemodium:mining_features/mining_biomes')
            .heightRangeUniform(-50, 10)
            .dikeVeinGenerator(generator => 
                generator.withBlock(new GTDikeBlockDefinition['(com.gregtechceu.gtceu.api.data.chemical.material.Material,int,int,int)'](GTMaterials.get("fluorite"), 3, -64, 320))
                        .withBlock(new GTDikeBlockDefinition['(com.gregtechceu.gtceu.api.data.chemical.material.Material,int,int,int)'](GTMaterials.get("sulfur"), 1, -64, 320))
                        .withBlock(new GTDikeBlockDefinition['(com.gregtechceu.gtceu.api.data.chemical.material.Material,int,int,int)'](GTMaterials.get("gypsum"), 2, -64, 320))
                        .withBlock(new GTDikeBlockDefinition['(com.gregtechceu.gtceu.api.data.chemical.material.Material,int,int,int)'](GTMaterials.get("dolomite"), 1, -64, 320))
            )
        })

    event.modifyAll((veinId, vein) => {
        let startY;
        let endY;
        switch(vein.layer) {
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
        event.add(veinId.toString() + '_mining', newVein => {
            let veinGen = vein.veinGenerator();
            if (veinGen instanceof $VeinedVeinGenerator) {
                veinGen = veinGen.copy()
                veinGen.minYLevel = startY;
                veinGen.maxYLevel = endY;
            } else if (veinGen instanceof $DikeVeinGenerator) {
                veinGen = veinGen.copy()
                veinGen.minYLevel = startY;
                veinGen.maxYLevel = endY;
            }

            newVein.clusterSize(vein.clusterSize())
            newVein.weight(vein.weight())
            newVein.density(vein.density())
            newVein.layer(vein.layer())
            newVein.heightRangeUniform(startY, endY)
            newVein.discardChanceOnAirExposure(vein.discardChanceOnAirExposure())
            newVein.dimensions('allthemodium:mining')
            newVein.biomes('#allthemodium:mining_features/mining_biomes')
            newVein['veinGenerator(com.gregtechceu.gtceu.api.data.worldgen.generator.VeinGenerator)'](veinGen)
        })
    })

})