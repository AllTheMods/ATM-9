// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
  allthemods.remove({id: 'angelring:diamond_ring'})
  allthemods.shaped('angelring:diamond_ring', [
     'DND',
     'VEU',
     'DAD'
   ], {
     D: '#forge:storage_blocks/diamond',
     N: '#forge:storage_blocks/netherite',
     V: '#forge:storage_blocks/vibranium',
     U: '#forge:storage_blocks/unobtainium',
     A: '#forge:storage_blocks/allthemodium',
     E: '#forge:elytra'
   })
 allthemods.remove({id: 'angelring:angel_ring'})
 allthemods.shaped('angelring:angel_ring', [
  'CAC',
  'ARA',
  'DGD'
], {
  C: 'ironfurnaces:allthemodium_furnace',
  A: '#forge:storage_blocks/unobtainium',
  R: 'angelring:diamond_ring',
  D: '#forge:nether_stars',
  G: '#forge:storage_blocks/unobtainium'
  })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
