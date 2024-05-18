// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
  allthemods.remove({ id: 'silentgear:salvager' })
  allthemods.shaped('silentgear:salvager', [
    ' M ',
    'CDC',
    'COC'
  ], {
    M: 'mininggadgets:upgrade_magnet',
    C: 'silentgear:crimson_steel_ingot',
    D: 'minecraft:diamond_block',
    O: 'minecraft:obsidian'
  })
  allthemods.remove({id: 'silentgear:bronze_ingot'})
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
