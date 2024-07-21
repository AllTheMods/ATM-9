// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
  allthemods.remove({ id: 'quarryplus:solid_fuel_quarry' })
  allthemods.remove({ id: 'quarryplus:workbench' })
  allthemods.shaped('quarryplus:solid_fuel_quarry', ['FFF', 'DGD', 'AAA'], {
    F: 'minecraft:furnace',
    D: 'minecraft:diamond_pickaxe',
    G: '#forge:storage_blocks/gold',
    A: '#forge:nuggets/allthemodium'
  })
  allthemods.shaped('quarryplus:workbench', ['III', 'GDG', 'AAA'], {
    I: '#forge:storage_blocks/iron',
    G: '#forge:storage_blocks/gold',
    D: '#forge:storage_blocks/diamond',
    A: '#forge:nuggets/allthemodium'
  })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
