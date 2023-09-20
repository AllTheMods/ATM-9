//missing crushed osmium handling
ServerEvents.recipes(event => {
    event.smelting('alltheores:osmium_ingot', 'create:crushed_raw_osmium').xp(0.1).id('kubejs:create/smelting/osmium_ingot_from_crushed')
    event.blasting('alltheores:osmium_ingot', 'create:crushed_raw_osmium').xp(0.1).id('kubejs:create/blasting/osmium_ingot_from_crushed')
    event.custom({
      type: 'create:splashing',
      ingredients: [
        {
          'item': 'create:crushed_raw_osmium'
        }
      ],
      results: [
        {
          'count': 9,
          'item': 'alltheores:osmium_nugget'
        }
      ]
    }).id('kubejs:create/splashing/crushed_raw_osmium')
  })