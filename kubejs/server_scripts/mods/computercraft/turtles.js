ServerEvents.recipes(event => {
  event.remove({ id: 'advancedperipherals:chunk_controller' })
  event.remove({ id: 'computercraft:turtle_normal' })
  event.remove({ id: 'computercraft:turtle_advanced' })
  event.remove({ id: 'computercraft:turtle_advanced_upgrade' })
  event.shaped('computercraft:turtle_advanced', ['III', 'ICI', 'IAI'], {
    I: '#forge:ingots/gold',
    C: 'computercraft:computer_advanced',
    A: '#forge:ingots/allthemodium'
  }).id('kubejs:computercraft/turtle_advanced')
  event.shaped('computercraft:turtle_normal', ['III', 'ICI', 'IAI'], {
    I: '#forge:ingots/iron',
    C: 'computercraft:computer_normal',
    A: '#forge:ingots/allthemodium'
  }).id('kubejs:computercraft/turtle_normal')
})
