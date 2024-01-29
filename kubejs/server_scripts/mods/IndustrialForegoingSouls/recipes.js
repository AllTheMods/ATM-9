ServerEvents.recipes(event => {
  event.remove({ id: 'industrialforegoingsouls:soul_laser_base' })
  event.shaped('industrialforegoingsouls:soul_laser_base', ['ABA', 'CDC', 'GSG'], {
    A: '#forge:plastic',
    B: 'minecraft:sculk_shrieker',
    C: 'minecraft:iron_bars',
    D: '#industrialforegoing:machine_frame/advanced',
    G: '#forge:gears/unobtainium',
    S: 'minecraft:sculk_catalyst'
  })

  event.remove({ id: 'industrialforegoingsouls:soul_surge' })
  event.shaped('industrialforegoingsouls:soul_surge', ['ABA', 'CBC', 'CPC'], {
    A: 'allthemodium:allthemodium_block',
    B: '#forge:plastic',
    C: 'minecraft:echo_shard',
    P: 'minecraft:piston',
  })
})