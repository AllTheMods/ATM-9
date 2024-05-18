// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
  allthemods.remove({ id: 'mininggadgets:upgrade_empty' })
  allthemods.shaped('mininggadgets:upgrade_empty', ['RAL', 'DGD', 'LAR'], {
    'L': '#forge:storage_blocks/lapis',
    'R': '#forge:storage_blocks/redstone',
    'D': '#forge:gems/diamond',
    'A': '#forge:nuggets/allthemodium',
    'G': '#forge:glass_panes'
  })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
