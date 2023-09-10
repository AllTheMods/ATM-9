ServerEvents.recipes(event => {
  event.remove({ id: 'quarryplus:solid_fuel_quarry' })
  event.remove({ id: 'quarryplus:workbench' })
  event.shaped('quarryplus:solid_fuel_quarry', ['FFF', 'DGD', 'AAA'], {
    F: 'minecraft:furnace',
    D: 'minecraft:diamond_pickaxe',
    G: '#forge:storage_blocks/gold',
    A: '#forge:nuggets/allthemodium'
  })
  event.shaped('quarryplus:workbench', ['III', 'GDG', 'AAA'], {
    I: '#forge:storage_blocks/iron',
    G: '#forge:storage_blocks/gold',
    D: '#forge:storage_blocks/diamond',
    A: '#forge:nuggets/allthemodium'
  })
})
