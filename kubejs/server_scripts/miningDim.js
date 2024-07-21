// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

global.miningDimOres = [
    {path: 'runic_stone',                   id:'allthemodium:runic_stone',                   min:65,  max:250,size:4,count:1, stoneReplaces:"forbidden_arcanus:runic_stone",              deepslateReplaces:"forbidden_arcanus:runic_deepslate",               endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'dark_ore',                      id:'allthemodium:dark_ore',                      min:65,  max:129,size:2,count:1, stoneReplaces:"evilcraft:dark_ore",                         deepslateReplaces:"evilcraft:dark_ore_deepslate",                    endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'arcane_crystal_ore',            id:'allthemodium:arcane_crystal_ore',            min:65,  max:250,size:4,count:1, stoneReplaces:"forbidden_arcanus:arcane_crystal_ore",       deepslateReplaces:"forbidden_arcanus:deepslate_arcane_crystal_ore",  endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'uraninite_ore',                 id:'allthemodium:uraninite_ore',                 min:65,  max:250,size:8,count:8, stoneReplaces:"powah:uraninite_ore",                        deepslateReplaces:"powah:deepslate_uraninite_ore",                   endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'inferium_ore',                  id:'allthemodium:inferium_ore',                  min:65,  max:250,size:8,count:16,stoneReplaces:"mysticalagriculture:inferium_ore",           deepslateReplaces:"mysticalagriculture:deepslate_inferium_ore",      endStoneReplaces:null,                                             netherrackReplaces:"mysticalagradditions:nether_inferium_ore"},
    {path: 'aggra_inferium_ore',            id:'allthemodium:aggra_inferium_ore',            min:-63, max:63, size:8,count:16,stoneReplaces:null,                                         deepslateReplaces:null,                                              endStoneReplaces:"mysticalagradditions:end_inferium_ore",          netherrackReplaces:"mysticalagradditions:nether_inferium_ore"},
    {path: 'aggra_prosperity_ore',          id:'allthemodium:aggra_prosperity_ore',          min:-63, max:63, size:8,count:8, stoneReplaces:null,                                         deepslateReplaces:null,                                              endStoneReplaces:"mysticalagradditions:end_prosperity_ore",        netherrackReplaces:"mysticalagradditions:nether_prosperity_ore"},
    {path: 'prosperity_ore',                id:'allthemodium:prosperity_ore',                min:65,  max:250,size:8,count:8, stoneReplaces:"mysticalagriculture:prosperity_ore",         deepslateReplaces:"mysticalagriculture:deepslate_prosperity_ore",    endStoneReplaces:null,                                             netherrackReplaces:"mysticalagradditions:nether_prosperity_ore"},
    {path: 'apatite_ore',                   id:'allthemodium:apatite_ore',                   min:65,  max:250,size:12,count:3,stoneReplaces:"thermal:apatite_ore",                        deepslateReplaces:"thermal:deepslate_apatite_ore",                   endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'cinnabar_ore',                  id:'allthemodium:cinnabar_ore',                  min:65,  max:250,size:4,count:1, stoneReplaces:"thermal:cinnabar_ore",                       deepslateReplaces:"thermal:deepslate_cinnabar_ore",                  endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'niter_ore',                     id:'allthemodium:niter_ore',                     min:65,  max:250,size:8,count:8, stoneReplaces:"thermal:niter_ore",                          deepslateReplaces:"thermal:deepslate_niter_ore",                     endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'sulfur_ore',                    id:'allthemodium:sulfur_ore',                    min:65,  max:250,size:8,count:8, stoneReplaces:"thermal:sulfur_ore",                         deepslateReplaces:"thermal:deepslate_sulfur_ore",                    endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'draconium_ore',                 id:'allthemodium:draconium_ore',                 min:-63, max:250,size:4,count:8, stoneReplaces:"draconicevolution:overworld_draconium_ore",  deepslateReplaces:null,                                              endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'deepslate_draconium_ore',       id:'allthemodium:deepslate_draconium_ore',       min:-63, max:250,size:4,count:8, stoneReplaces:null,                                         deepslateReplaces:"draconicevolution:deepslate_draconium_ore",       endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'end_draconium_ore',             id:'allthemodium:end_draconium_ore',             min:-63, max:0,  size:4,count:8, stoneReplaces:null,                                         deepslateReplaces:null,                                              endStoneReplaces:"draconicevolution:end_draconium_ore",            netherrackReplaces:null},
    {path: 'nether_draconium_ore',          id:'allthemodium:nether_draconium_ore',          min:0,   max:63, size:4,count:8, stoneReplaces:null,                                         deepslateReplaces:null,                                              endStoneReplaces:null,                                             netherrackReplaces:"draconicevolution:nether_draconium_ore"},
    
]
   
ServerEvents.lowPriorityData(allthemods => {
    let addMiningDimOre = (path, id, min, max, size, count, stoneReplaces, deepslateReplaces, endStoneReplaces, netherrackReplaces) => {
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
              "targets": []
            }
          })

        let jsonForge = JsonIO.toObject({
            type: "forge:add_features",
            biomes: "#allthemodium:mining_features/mining_biomes",
            "features": [id],
            "step": "underground_ores"
        })
        if(stoneReplaces!==null){
            jsonConfigured.config.targets.push(
              JsonIO.toObject({
                "target": {
                  "predicate_type": "minecraft:tag_match",
                  "tag": "minecraft:stone_ore_replaceables"
                },
                "state": {
                  "Name": stoneReplaces
                }
              }))
        }
        if(deepslateReplaces!==null){
          jsonConfigured.config.targets.push(
            JsonIO.toObject({
              "target": {
                "predicate_type": "minecraft:tag_match",
                "tag": "minecraft:deepslate_ore_replaceables"
              },
              "state": {
                "Name": deepslateReplaces
              }
            }))
      }
      if(endStoneReplaces!==null){
        jsonConfigured.config.targets.push(
          JsonIO.toObject({
            "target": {
              "predicate_type": "minecraft:block_match",
              "block": "minecraft:end_stone"
            },
            "state": {
              "Name": endStoneReplaces
            }
          }))
      }
      if(netherrackReplaces!==null){
        jsonConfigured.config.targets.push(
          JsonIO.toObject({
            "target": {
              "predicate_type": "minecraft:block_match",
              "block": "minecraft:netherrack"
            },
            "state": {
              "Name": netherrackReplaces
            }
          }))
      }  
        allthemods.addJson(`allthemodium:worldgen/placed_feature/${path}.json`, jsonPlaced)
        allthemods.addJson(`allthemodium:worldgen/configured_feature/${path}.json`, jsonConfigured)
        allthemods.addJson(`allthemodium:forge/biome_modifier/allthemodium/dim_ores/${path}.json`, jsonForge)
    }
    global.miningDimOres.forEach(ore=>{
        addMiningDimOre(ore.path,ore.id, ore.min, ore.max, ore.size, ore.count, ore.stoneReplaces, ore.deepslateReplaces, ore.endStoneReplaces, ore.netherrackReplaces);
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
