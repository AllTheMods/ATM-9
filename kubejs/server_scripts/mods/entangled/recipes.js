ServerEvents.recipes(event => {
  event.remove({ id: 'entangled:block' })
  event.remove({ id: 'entangled:item' })
  event.shaped('entangled:block', ['UEU', 'ECE', 'UEU'], {
    U: '#forge:ingots/unobtainium',
    E: '#forge:ender_pearls',
    C: 'minecraft:ender_chest'
  })
  event.shaped('entangled:item', [' EC', ' UE', 'U  '], {
    U: '#forge:ingots/unobtainium',
    E: '#forge:ender_pearls',
    C: 'minecraft:ender_chest'
  })
})
