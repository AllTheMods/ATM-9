ServerEvents.recipes(event => {
  event.remove({ id: 'aeinfinitybooster:infinity_card' })
  event.shaped('aeinfinitybooster:infinity_card', ['EBE', 'BUB', 'NNN'], {
    U: '#forge:ingots/unobtainium',
    B: 'ae2:wireless_booster',
    E: '#forge:plates/enderium',
    N: 'minecraft:netherite_ingot'
  }).id('kubejs:aeinfinitybooster/infinity_card')

  event.shaped('kubejs:universal_press', ['FPF', 'CSL', 'FEF'], {
    F: '#forge:ingots/sky_steel',
    P: 'ae2:silicon_press',
    C: 'ae2:calculation_processor_press',
    S: 'minecraft:slime_ball',
    L: 'ae2:logic_processor_press',
    E: 'ae2:engineering_processor_press'
  }).id('kubejs:universal_press')
 
  event.shapeless(` 4x ae2:fluix_covered_cable`,[`ae2:fluix_covered_dense_cable`]).id(`kubejs:ae2/dense_to_normal`)
  event.shapeless(` 4x ae2:fluix_smart_cable`,[`ae2:fluix_smart_dense_cable`]).id(`kubejs:ae2/smart_dense_to_smart_normal`)
})


