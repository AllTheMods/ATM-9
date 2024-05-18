// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

global.miningDimOres = [
    {path: 'runic_stone',         id:'allthemodium:runic_stone',         min:65,max:250,size:4,count:1, stoneReplaces:"forbidden_arcanus:runic_stone",         deepslateReplaces:"forbidden_arcanus:runic_deepslate"},
    {path: 'dark_ore',            id:'allthemodium:dark_ore',            min:65,max:129,size:2,count:1, stoneReplaces:"evilcraft:dark_ore",                    deepslateReplaces:"evilcraft:dark_ore_deepslate"},
    {path: 'arcane_crystal_ore',  id:'allthemodium:arcane_crystal_ore',  min:65,max:250,size:4,count:1, stoneReplaces:"forbidden_arcanus:arcane_crystal_ore",  deepslateReplaces:"forbidden_arcanus:deepslate_arcane_crystal_ore"},
    {path: 'uraninite_ore',       id:'allthemodium:uraninite_ore',       min:65,max:250,size:8,count:8, stoneReplaces:"powah:uraninite_ore",                   deepslateReplaces:"powah:deepslate_uraninite_ore"},
    {path: 'inferium_ore',        id:'allthemodium:inferium_ore',        min:65,max:250,size:8,count:16,stoneReplaces:"mysticalagriculture:inferium_ore",      deepslateReplaces:"mysticalagriculture:deepslate_inferium_ore"},
    {path: 'prosperity_ore',      id:'allthemodium:prosperity_ore',      min:65,max:250,size:8,count:3, stoneReplaces:"mysticalagriculture:prosperity_ore",    deepslateReplaces:"mysticalagriculture:deepslate_prosperity_ore"},
    {path: 'apatite_ore',         id:'allthemodium:apatite_ore',         min:65,max:250,size:12,count:3,stoneReplaces:"thermal:apatite_ore",                   deepslateReplaces:"thermal:deepslate_apatite_ore"},
    {path: 'cinnabar_ore',        id:'allthemodium:cinnabar_ore',        min:65,max:250,size:4,count:1, stoneReplaces:"thermal:cinnabar_ore",                  deepslateReplaces:"thermal:deepslate_cinnabar_ore"},
    {path: 'niter_ore',           id:'allthemodium:niter_ore',           min:65,max:250,size:8,count:8, stoneReplaces:"thermal:niter_ore",                     deepslateReplaces:"thermal:deepslate_niter_ore"},
    {path: 'sulfur_ore',          id:'allthemodium:sulfur_ore',          min:65,max:250,size:8,count:8, stoneReplaces:"thermal:sulfur_ore",                    deepslateReplaces:"thermal:deepslate_sulfur_ore"},
]
   
ServerEvents.lowPriorityData(allthemods => {
    let addMiningDimOre = (path, id, min, max, size, count, stoneReplaces, deepslateReplaces) => {
        let jsonPlaced = JsonIO.toObject({
            "feature": id,
            "placement": [
              {
                "count": count,
                "type": "minecraft:count"
              },
              {
                "type": "minecraft:in_square"
              },
              {
                "height": {
                  "min_inclusive": {
                    "absolute": min
                  },
                  "max_inclusive": {
                    "absolute": max
                  },
                  "type": "minecraft:trapezoid"
                },
                "type": "minecraft:height_range"
              },
              {
                "type": "minecraft:biome"
              }
            ]
          })
        let jsonConfigured = JsonIO.toObject({
            "type": "minecraft:ore",
            "config": {
              "size": size,
              "discard_chance_on_air_exposure": 0.0,
              "targets": [
                {
                  "target": {
                    "predicate_type": "minecraft:tag_match",
                    "tag": "minecraft:stone_ore_replaceables"
                  },
                  "state": {
                    "Name": stoneReplaces
                  }
                },
                {
                  "target": {
                    "predicate_type": "minecraft:tag_match",
                    "tag": "minecraft:deepslate_ore_replaceables"
                  },
                  "state": {
                    "Name": deepslateReplaces
                  }
                }
              ]
            }
          })
        let jsonForge = JsonIO.toObject({
            type: "forge:add_features",
            biomes: "#allthemodium:mining_features/mining_biomes",
            "features": [id],
            "step": "underground_ores"
        })
        allthemods.addJson(`allthemodium:worldgen/placed_feature/${path}.json`, jsonPlaced)
        allthemods.addJson(`allthemodium:worldgen/configured_feature/${path}.json`, jsonConfigured)
        allthemods.addJson(`allthemodium:forge/biome_modifier/allthemodium/dim_ores/${path}.json`, jsonForge)
    }
    global.miningDimOres.forEach(ore=>{
        addMiningDimOre(ore.path,ore.id, ore.min, ore.max, ore.size, ore.count, ore.stoneReplaces, ore.deepslateReplaces);
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
