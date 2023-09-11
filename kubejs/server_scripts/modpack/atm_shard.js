ServerEvents.recipes(e => {
  let shard = ('allthetweaks:atm_star_shard')

//#SilentGear
  e.shapeless('32x allthetweaks:allthecatalystium', shard)
//#Pipez
  e.shaped('16x pipez:infinity_upgrade', ['ABA', 'BCB', 'ADA'], {
    A: 'allthemodium:unobtainium_ingot',
    B: 'minecraft:redstone_block',
    C: 'pipez:ultimate_upgrade',
    D: shard
  })
//#Thermal
  e.shaped('thermal:machine_efficiency_creative_augment', ['ABA', 'CDC', 'AEA'], {
    A: 'thermal:upgrade_augment_3',
    B: 'powah:charged_snowball',
    C: 'thermal:energy_cell',
    D: shard,
    E: 'thermal:lightning_charge'
  })

/*
//#waterstrainer
  e.shaped('waterstrainer:super_worm', ['DSD', 'DWD', 'DDD'], {
    D: '#forge:dirt',
    S: shard,
    W: 'waterstrainer:worm'
  }).id('kubejs:waterstrainer/super_worm')
*/
})
