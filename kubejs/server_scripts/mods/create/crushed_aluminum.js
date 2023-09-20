//missing crushed aluminum handling
ServerEvents.recipes(event => {
  event.smelting('alltheores:aluminum_ingot', 'create:crushed_raw_aluminum').xp(0.1).id('kubejs:create/smelting/aluminum_ingot_from_crushed')
  event.blasting('alltheores:aluminum_ingot', 'create:crushed_raw_aluminum').xp(0.1).id('kubejs:create/blasting/aluminum_ingot_from_crushed')
  event.custom({
    type: 'create:splashing',
    ingredients: [
      {
        'item': 'create:crushed_raw_aluminum'
      }
    ],
    results: [
      {
        'count': 9,
        'item': 'alltheores:aluminum_nugget'
      }
    ]
  }).id('kubejs:create/splashing/crushed_raw_aluminum')
})
