ServerEvents.recipes(e=> {
    e.custom({
        type: 'mekanism:crushing',
        input: {
            ingredient: Ingredient.of('evilcraft:dark_gem').toJson()
            },
        output: Ingredient.of('evilcraft:dark_gem_crushed').toJson()
    }).id('kubejs:mekanism/evilcraft_dark_gem_crushed')
/*
    e.custom({
        "type": "immersiveengineering:crusher",
        "secondaries": [],
        "result": {
          "item": "evilcraft:dark_gem_crushed",
          "count": 1
        },
        "input": {
          "item": "evilcraft:dark_gem"
        },
        "energy": 3200
      }).id('kubejs:immersiveengineering/evilcraft_dark_gem_crushed')
*/
    e.custom({
        "type": "create:crushing",
        "ingredients": [
          {
            "item": "evilcraft:dark_gem"
          }
        ],
        "results": [
          {
            "item": "evilcraft:dark_gem_crushed",
            "count": 1
          }
        ],
        "processingTime": 100
      }).id('kubejs:create/evilcraft_dark_gem_crushed')
  /*
  //FTBic
    e.custom({
        "type": "ftbic:macerating",
        "inputItems": [
          {
            "ingredient": {
              "item": "evilcraft:dark_gem"
            },
            "count": 1
          }
        ],
        "outputItems": [
          {
            "item": "evilcraft:dark_gem_crushed",
            "count": 1
          }
        ]
      }).id('kubejs:ftbic/evilcraft_dark_gem_crushed')

    //Thermal
    e.custom({
        "type": "thermal:pulverizer",
        "ingredient": {
          "value": [
          {
            "item": "evilcraft:dark_gem"
          }
        ],
            "count": 1
        },
        "result": [
          {
            "item": "evilcraft:dark_gem_crushed",
            "count": 1
          }
        ],
    "experience": 0.1
}).id('kubejs:thermal/evilcraft_dark_gem_crushed')
*/    
  
    e.custom({  //crushing spirit
        "type": "occultism:crushing",
        "ingredient": Ingredient.of('evilcraft:dark_gem').toJson(),
        "result": Item.of('evilcraft:dark_gem_crushed', 1).toJson(),
        "crushing_time": 100,
        "ignore_crushing_multiplier": true
      }).id(`kubejs:occultcrushing/dark_gem_crushed`)

})
