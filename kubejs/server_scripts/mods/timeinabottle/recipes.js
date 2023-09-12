ServerEvents.recipes(event => {
  event.remove({ id: 'tiab:time_in_a_bottle' })
  event.shaped('tiab:time_in_a_bottle', ['UUU', 'DCD', 'LBL'], {
    U: '#forge:ingots/unobtainium',
    D: 'mysticalagriculture:speed_iii_augment',
    L: 'minecraft:lapis_lazuli',
    C: 'productivebees:upgrade_time',
    B: 'minecraft:experience_bottle'
  })
})
