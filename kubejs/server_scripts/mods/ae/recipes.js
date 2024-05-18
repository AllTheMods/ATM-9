// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
  allthemods.remove({ id: 'aeinfinitybooster:infinity_card' })
  allthemods.shaped('aeinfinitybooster:infinity_card', ['EBE', 'BUB', 'NNN'], {
    U: '#forge:ingots/unobtainium',
    B: 'ae2:wireless_booster',
    E: '#forge:plates/enderium',
    N: 'minecraft:netherite_ingot'
  }).id('allthemods:aeinfinitybooster/infinity_card')

  allthemods.shaped('kubejs:universal_press', ['FPF', 'CSL', 'FEF'], {
    F: '#forge:ingots/sky_steel',
    P: 'ae2:silicon_press',
    C: 'ae2:calculation_processor_press',
    S: 'minecraft:slime_ball',
    L: 'ae2:logic_processor_press',
    E: 'ae2:engineering_processor_press'
  }).id('allthemods:universal_press')
 
  allthemods.shapeless(` 4x ae2:fluix_covered_cable`,[`ae2:fluix_covered_dense_cable`]).id(`allthemods:ae2/dense_to_normal`)
  allthemods.shapeless(` 4x ae2:fluix_smart_cable`,[`ae2:fluix_smart_dense_cable`]).id(`allthemods:ae2/smart_dense_to_smart_normal`)
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
