// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
  allthemods.remove({ id: 'industrialforegoingsouls:soul_laser_base' })
  allthemods.shaped('industrialforegoingsouls:soul_laser_base', ['ABA', 'CDC', 'GSG'], {
    A: '#forge:plastic',
    B: 'minecraft:sculk_shrieker',
    C: 'minecraft:iron_bars',
    D: '#industrialforegoing:machine_frame/advanced',
    G: '#forge:gears/unobtainium',
    S: 'minecraft:sculk_catalyst'
  })

  allthemods.remove({ id: 'industrialforegoingsouls:soul_surge' })
  allthemods.shaped('industrialforegoingsouls:soul_surge', ['ABA', 'CBC', 'CPC'], {
    A: 'allthemodium:allthemodium_block',
    B: '#forge:plastic',
    C: 'minecraft:echo_shard',
    P: 'minecraft:piston',
  })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
