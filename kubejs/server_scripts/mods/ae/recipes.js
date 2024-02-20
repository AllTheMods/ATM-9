ServerEvents.recipes(event => {
  event.remove({ id: 'aeinfinitybooster:infinity_card' })
  event.shaped('aeinfinitybooster:infinity_card', ['EBE', 'BUB', 'NNN'], {
    U: '#forge:ingots/unobtainium',
    B: 'ae2:wireless_booster',
    E: '#forge:plates/enderium',
    N: 'minecraft:netherite_ingot'
  }).id('kubejs:aeinfinitybooster/infinity_card')
})

ServerEvents.recipes(event => {
  event.shaped('kubejs:universal_press', ['FPF', 'CSL', 'FEF'], {
    F: '#forge:ingots/sky_steel',
    P: 'ae2:silicon_press',
    C: 'ae2:calculation_processor_press',
    S: 'minecraft:slime_ball',
    L: 'ae2:logic_processor_press',
    E: 'ae2:engineering_processor_press'
  }).id('kubejs:universal_press')
 })
