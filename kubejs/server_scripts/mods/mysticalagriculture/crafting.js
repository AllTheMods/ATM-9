// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

let cropAdjust = [
  {crop:"steel", tier:"imperium"},
  {crop:"bronze", tier:"tertium"},
  {crop:"brass", tier:"tertium", block:"alltheores:brass_block"},
  {crop:"nitro_crystal", tier:"insanium"},
  {crop:"spirited_crystal", tier:"supremium"},
  {crop:"niotic_crystal", tier:"supremium"},
  {crop:"blazing_crystal", tier:"imperium"},
  {crop:"energized_steel", tier:"imperium"},
  {crop:"certus_quartz", tier:"tertium", block:"ae2:quartz_block"},
  {crop:"fluix", tier:"imperium", block:"ae2:fluix_block"},
  {crop:"soularium", tier:"imperium"},
  {crop:"conductive_alloy", tier:"tertium"},
  {crop:"copper_alloy", tier:"tertium"},
  {crop:"end_steel", tier:"supremium"},
  {crop:"redstone_alloy", tier:"tertium"},
  {crop:"vibrant_alloy", tier:"supremium"},
  {crop:"dark_steel", tier:"imperium"},
  {crop:"pulsating_alloy", tier:"imperium"},
  {crop:"energetic_alloy", tier:"imperium"},
  {crop:"refined_glowstone", tier:"imperium", block:"mekanism:block_refined_glowstone"},
  {crop:"refined_obsidian", tier:"imperium", block:"mekanism:block_refined_obsidian"},
  {crop:"constantan", tier:"imperium"},
  {crop:"cyanite", tier:"supremium", block:"bigreactors:cyanite_block"},
  {crop:"graphite", tier:"tertium", block:"bigreactors:graphite_block"},
]

ServerEvents.recipes(allthemods => {
  // essence crafting for custom seeds
  function essenceCircle(result, essenceType) {
    allthemods.shaped(result, ['aaa', 'a a', 'aaa'], { a: `mysticalagriculture:${essenceType}_essence` }).id(`allthemods:mysticalagriculture/${essenceType}_essence_crafting`)
  }
  essenceCircle('allthemodium:allthemodium_nugget', 'allthemodium')
  essenceCircle('allthemodium:vibranium_nugget', 'vibranium')
  essenceCircle('allthemodium:unobtainium_nugget', 'unobtainium')
  essenceCircle('6x silentgear:azure_silver_ingot', 'azure_silver')
  essenceCircle('6x silentgear:crimson_iron_ingot', 'crimson_iron')

  // infusion seed crafting
  function seedCrafting(output, middle, item1, item2, item3, item4, item5, item6, item7, item8){
    allthemods.custom({
      type: 'mysticalagriculture:infusion',
      input: { item: middle },
      ingredients: [
        { item: item1 },
        { item: item2 },
        { item: item3 },
        { item: item4 },
        { item: item5 },
        { item: item6 },
        { item: item7 },
        { item: item8 }
      ],
      result: { item: output }
    }).id(`allthemods:${output.replace(':', '/')}/infusion`)
  }

  // make alloy seeds use blocks to craft
  cropAdjust.forEach(entry => {
    let ess = ''
    let block = ''

    if (entry.tier == 'insanium') {
      ess = `mysticalagradditions:insanium_essence`
    } else {
      ess = `mysticalagriculture:${entry.tier}_essence`
    }

    if (Item.exists(`allthecompressed:${entry.crop}_block_1x`)){
      // use the allthecompressed block if it exists
      block = `allthecompressed:${entry.crop}_block_1x`
    } else if (entry.block !== undefined){
      // else use the provided block in cropAdjust
      block = entry.block
    } else {
      // else neither exists, fallback to the first thing we can find via the storage_blocks tag
      block = Ingredient.of(`#forge:storage_blocks/${entry.crop}`).getItemIds()[0]
    }
    allthemods.remove({id:`mysticalagriculture:seed/infusion/${entry.crop}`})
    seedCrafting(`mysticalagriculture:${entry.crop}_seeds`, 'mysticalagriculture:prosperity_seed_base', ess, block, ess, block, ess, block, ess, block)
  })

  // magical soil crafting
  let soilMid = 'mysticalagradditions:insanium_farmland'
  let soil1 = 'mysticalagradditions:dragon_scale'
  let soil2 = 'mysticalagradditions:insanium_block'
  seedCrafting('kubejs:magical_soil', soilMid, soil1, soil2, soil1, soil2, soil1, soil2, soil1, soil2)


  //MA EXP droplets to fluid EXP
  allthemods.custom({
    type: "thermal:centrifuge",
    ingredient: {
      item: "mysticalagriculture:experience_droplet"
    },
    result: [
      {
        fluid: "cofh_core:experience",
        amount: 250
      }
    ],
    energy: 400
  })

  // add recipe to make turtle eggs from turtle essence
  allthemods.shaped('4x minecraft:turtle_egg', ['   ', '   ', 'EEE'], {
    E: 'mysticalagriculture:turtle_essence'
  }).id('allthemods:mysticalagriculture/turtle_egg')

  // remove gaia crux
  allthemods.remove({ id: "mysticalagradditions:gaia_spirit_crux" })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
