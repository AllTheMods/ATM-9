// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
  allthemods.remove({ id: 'entangled:block' })
  allthemods.remove({ id: 'entangled:item' })
  allthemods.shaped('entangled:block', ['UEU', 'ECE', 'UEU'], {
    U: '#forge:ingots/unobtainium',
    E: '#forge:ender_pearls',
    C: 'minecraft:ender_chest'
  })
  allthemods.shaped('entangled:item', [' EC', ' UE', 'U  '], {
    U: '#forge:ingots/unobtainium',
    E: '#forge:ender_pearls',
    C: 'minecraft:ender_chest'
  })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
