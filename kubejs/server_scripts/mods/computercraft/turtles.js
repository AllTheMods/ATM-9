// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
  allthemods.remove({ id: 'advancedperipherals:chunk_controller' })
  allthemods.remove({ id: 'computercraft:turtle_normal' })
  allthemods.remove({ id: 'computercraft:turtle_advanced' })
  allthemods.remove({ id: 'computercraft:turtle_advanced_upgrade' })
  allthemods.shaped('computercraft:turtle_advanced', ['III', 'ICI', 'IAI'], {
    I: '#forge:ingots/gold',
    C: 'computercraft:computer_advanced',
    A: '#forge:ingots/allthemodium'
  }).id('allthemods:computercraft/turtle_advanced')
  allthemods.shaped('computercraft:turtle_normal', ['III', 'ICI', 'IAI'], {
    I: '#forge:ingots/iron',
    C: 'computercraft:computer_normal',
    A: '#forge:ingots/allthemodium'
  }).id('allthemods:computercraft/turtle_normal')
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
