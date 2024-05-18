// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.custom({
        type: 'mekanism:crushing',
        input: {
            ingredient: Ingredient.of('evilcraft:dark_gem').toJson()
            },
        output: Ingredient.of('evilcraft:dark_gem_crushed').toJson()
    }).id('allthemods:mekanism/evilcraft_dark_gem_crushed')

    allthemods.custom({
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
      }).id('allthemods:immersiveengineering/evilcraft_dark_gem_crushed')

    allthemods.custom({
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
      }).id('allthemods:create/evilcraft_dark_gem_crushed')
  /*
  //FTBic
    allthemods.custom({
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
      }).id('allthemods:ftbic/evilcraft_dark_gem_crushed')
*/ 
    //Thermal
    allthemods.custom({
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
    }).id('allthemods:thermal/evilcraft_dark_gem_crushed')
   
    allthemods.custom({  //crushing spirit
        "type": "occultism:crushing",
        "ingredient": Ingredient.of('evilcraft:dark_gem').toJson(),
        "result": Item.of('evilcraft:dark_gem_crushed', 1).toJson(),
        "crushing_time": 100,
        "ignore_crushing_multiplier": true
      }).id(`allthemods:occultcrushing/dark_gem_crushed`)

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
