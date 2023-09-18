//missing crushed silver handling
ServerEvents.recipes(event => {
  event.smelting('alltheores:silver_ingot', 'create:crushed_raw_silver').xp(0.1).id('kubejs:create/smelting/silver_ingot_from_crushed')
  event.blasting('alltheores:silver_ingot', 'create:crushed_raw_silver').xp(0.1).id('kubejs:create/blasting/silver_ingot_from_crushed')
  event.custom({
    type: 'create:splashing',
    ingredients: [
      {
        'item': 'create:crushed_raw_silver'
      }
    ],
    results: [
      {
        'count': 9,
        'item': 'alltheores:silver_nugget'
      }
    ]
  }).id('kubejs:create/splashing/crushed_raw_silver')
})
