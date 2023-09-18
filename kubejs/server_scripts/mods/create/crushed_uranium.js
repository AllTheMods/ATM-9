//missing crushed uranium handling
ServerEvents.recipes(event => {
  event.smelting('alltheores:uranium_ingot', 'create:crushed_raw_uranium').xp(0.1).id('kubejs:create/smelting/uranium_ingot_from_crushed')
  event.blasting('alltheores:uranium_ingot', 'create:crushed_raw_uranium').xp(0.1).id('kubejs:create/blasting/uranium_ingot_from_crushed')
  event.custom({
    type: 'create:splashing',
    ingredients: [
      {
        'item': 'create:crushed_raw_uranium'
      }
    ],
    results: [
      {
        'count': 9,
        'item': 'alltheores:uranium_nugget'
      }
    ]
  }).id('kubejs:create/splashing/crushed_raw_uranium')
})
