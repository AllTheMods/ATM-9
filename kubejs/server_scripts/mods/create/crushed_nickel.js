//missing crushed nickel handling
ServerEvents.recipes(event => {
  event.smelting('alltheores:nickel_ingot', 'create:crushed_raw_nickel').xp(0.1).id('kubejs:create/smelting/nickel_ingot_from_crushed')
  event.blasting('alltheores:nickel_ingot', 'create:crushed_raw_nickel').xp(0.1).id('kubejs:create/blasting/nickel_ingot_from_crushed')
  event.custom({
    type: 'create:splashing',
    ingredients: [
      {
        'item': 'create:crushed_raw_nickel'
      }
    ],
    results: [
      {
        'count': 9,
        'item': 'alltheores:nickel_nugget'
      }
    ]
  }).id('kubejs:create/splashing/crushed_raw_nickel')
})
