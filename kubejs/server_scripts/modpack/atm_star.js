// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
  allthemods.custom({
    type: "create:mechanical_crafting",
    pattern: [
      '    A    ',
      '   AJA   ',
      'AAAJFJAAA',
      'AJJCDEJJA',
      ' AMBIHMA ',
      '  AKGLA  ',
      ' AJJAJJA ',
      'AJJA AJJA',
      'AAA   AAA'
    ],
    key: {
      A: Ingredient.of('allthemodium:unobtainium_allthemodium_alloy_block').toJson(),
      B: Ingredient.of('allthetweaks:nexium_emitter').toJson(),
      C: Ingredient.of('allthetweaks:dragon_soul').toJson(),
      D: Ingredient.of('allthetweaks:withers_compass').toJson(),
      E: Ingredient.of('allthetweaks:pulsating_black_hole').toJson(),
      F: Ingredient.of('allthetweaks:oblivion_shard').toJson(),
      G: Ingredient.of('allthetweaks:improbable_probability_device').toJson(),
      H: Ingredient.of('allthetweaks:dimensional_seed').toJson(),
      I: Ingredient.of('allthetweaks:patrick_star').toJson(),
      J: Ingredient.of('allthecompressed:nether_star_block_3x').toJson(),
      K: Ingredient.of('allthetweaks:philosophers_fuel').toJson(),
      L: Ingredient.of('mysticalagradditions:creative_essence').toJson(),
      M: Item.of('allthemodium:unobtainium_vibranium_alloy_block', "{HideFlags:1,display:{Name:'[{\"text\":\"Awakened Unobtainium-Vibranium Alloy Block\",\"italic\":false}]'}}").enchant('unbreaking', 1).strongNBT().toJson()
    },
    result: Ingredient.of('allthetweaks:atm_star').toJson(),
    acceptMirrored: false
  }).id('allthemods:allthetweaks/atm_star')
  
  allthemods.custom({
    type: "create:mechanical_crafting",
    pattern: [
      '    S    ',
      '   SSS   ',
      'SSSSSSSSS',
      'SSSSSSSSS',
      ' SSSPSSS ',
      '  SSSSS  ',
      ' SSSSSSS ',
      'SSSS SSSS',
      'SSS   SSS'
    ],
    key: {
      S: Ingredient.of('allthetweaks:atm_star_shard').toJson(),
      P: Ingredient.of('allthetweaks:patrick_star').toJson(),
    },
    result: Ingredient.of('allthetweaks:atm_star').toJson(),
    acceptMirrored: false
  }).id('allthemods:allthetweaks/atm_shard_star')
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
