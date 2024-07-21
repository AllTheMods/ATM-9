// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.custom({
      type: 'create:filling',
      ingredients: [
        {
          'tag': 'minecraft:planks'
        },
        {
          'fluidTag': 'forge:creosote',
          'amount': 125
        }
      ],
      results: [
        {
          'item': 'immersiveengineering:treated_wood_horizontal'
        }
      ]
    }).id('allthemods:create/filling/treated_wood')

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
