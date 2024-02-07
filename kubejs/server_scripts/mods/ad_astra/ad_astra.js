ServerEvents.recipes(e=> {
    e.remove({ id: 'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot'})

    //oil is oil
    e.custom({
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
