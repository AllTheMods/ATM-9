// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.remove({ id: 'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot'})

    //oil is oil
    allthemods.custom({
        type: "ad_astra:refining",
        cookingtime: 1,
        energy: 30,
        input: {
            ingredient: {
                tag: "forge:crude_oil"
              },
            millibuckets: 5
        },
        result: {
            fluid: "ad_astra:fuel",
            millibuckets: 5
        }
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
