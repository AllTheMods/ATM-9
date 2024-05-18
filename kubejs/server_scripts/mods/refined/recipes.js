// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes( allthemods => {
    allthemods.remove('extradisks:disk/shaped/infinite_storage_disk')
    allthemods.remove('extradisks:blocks/infinite_storage_block')
    allthemods.remove('extradisks:part/infinite_storage_part')
    allthemods.remove('extradisks:disk/shaped/infinite_fluid_storage_disk')
    allthemods.remove('extradisks:part/infinite_fluid_storage_part')
    allthemods.remove('extradisks:blocks/infinite_fluid_storage_block')
})

ServerEvents.recipes(allthemods => {
    allthemods.remove({ id: 'rsinfinitybooster:infinity_card' })
    allthemods.shaped('rsinfinitybooster:infinity_card', ['EBE', 'BUB', 'NNN'], {
      U: '#forge:ingots/unobtainium',
      B: 'refinedstorage:range_upgrade',
      E: '#forge:plates/enderium',
      N: 'minecraft:netherite_ingot'
    }).id('allthemods:rsinfinitybooster/infinity_card')
  })

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
