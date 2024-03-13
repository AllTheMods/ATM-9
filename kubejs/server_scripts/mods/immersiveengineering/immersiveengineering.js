ServerEvents.recipes(event => {
    event.custom({
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
    }).id('kubejs:create/filling/treated_wood')

})