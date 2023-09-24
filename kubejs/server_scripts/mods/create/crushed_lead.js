//missing crushed lead handling
ServerEvents.recipes(event => {
  event.smelting('alltheores:lead_ingot', 'create:crushed_raw_lead').xp(0.1).id('kubejs:create/smelting/lead_ingot_from_crushed')
  event.blasting('alltheores:lead_ingot', 'create:crushed_raw_lead').xp(0.1).id('kubejs:create/blasting/lead_ingot_from_crushed')
  event.custom({
    type: 'create:splashing',
    ingredients: [
      {
        'item': 'create:crushed_raw_lead'
      }
    ],
    results: [
      {
        'count': 9,
        'item': 'alltheores:lead_nugget'
      }
    ]
  }).id('kubejs:create/splashing/crushed_raw_lead')
})
