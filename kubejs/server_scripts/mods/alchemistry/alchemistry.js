// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

// "Fixes" https://github.com/SmashingMods/Alchemistry/issues/350

ServerEvents.recipes(allthemods => {
    allthemods.remove({id: 'alchemistry:atomizer/syrup'})
    allthemods.remove({id: 'alchemistry:liquifier/syrup'})

    allthemods.custom({
        "type": "alchemistry:atomizer",
        "group": "alchemistry:atomizer",
        "input": {
          "fluid": "thermal:syrup",
          "amount": "500"
        },
        "result": {
          "item": "chemlib:sucrose",
          "count": 8
        }
    }).id('allthemods:alchemistry/atomizer/syrup')

    allthemods.custom({
        "type": "alchemistry:liquifier",
        "group": "alchemistry:liquifier",
        "input": {
          "ingredient": {
            "item": "chemlib:sucrose"
          },
          "count": 8
        },
        "result": {
          "fluid": "thermal:syrup",
          "amount": "500"
        }
    }).id('allthemods:alchemistry/liquifier/syrup')

})


// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.