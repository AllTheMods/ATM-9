//missing crushed tin handling
ServerEvents.recipes(event => {
  event.smelting('alltheores:tin_ingot', 'create:crushed_raw_tin').xp(0.1).id('kubejs:create/smelting/tin_ingot_from_crushed')
  event.blasting('alltheores:tin_ingot', 'create:crushed_raw_tin').xp(0.1).id('kubejs:create/blasting/tin_ingot_from_crushed')
  event.custom({
    type: 'create:splashing',
    ingredients: [
      {
        'item': 'create:crushed_raw_tin'
      }
    ],
    results: [
      {
        'count': 9,
        'item': 'alltheores:tin_nugget'
      }
    ]
  }).id('kubejs:create/splashing/crushed_raw_tin')
})
