ServerEvents.recipes( event => {
    event.remove('extradisks:disk/shaped/infinite_storage_disk')
    event.remove('extradisks:blocks/infinite_storage_block')
    event.remove('extradisks:part/infinite_storage_part')
    event.remove('extradisks:disk/shaped/infinite_fluid_storage_disk')
    event.remove('extradisks:part/infinite_fluid_storage_part')
    event.remove('extradisks:blocks/infinite_fluid_storage_block')
})

ServerEvents.recipes(event => {
    event.remove({ id: 'rsinfinitybooster:infinity_card' })
    event.shaped('rsinfinitybooster:infinity_card', ['EBE', 'BUB', 'NNN'], {
      U: '#forge:ingots/unobtainium',
      B: 'refinedstorage:range_upgrade',
      E: '#forge:plates/enderium',
      N: 'minecraft:netherite_ingot'
    }).id('kubejs:rsinfinitybooster/infinity_card')
  })