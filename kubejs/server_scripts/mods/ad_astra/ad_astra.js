ServerEvents.recipes(e=> {
    e.remove({ id: 'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot'})
  
    //oil is oil
    e.custom({
        type: "ad_astra:fuel_conversion",
        input: "#forge:crude_oil",
        output: "ad_astra:fuel",
        conversion_ratio: 1.0,
    })
})
