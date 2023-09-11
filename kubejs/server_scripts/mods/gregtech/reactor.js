

ServerEvents.recipes(event => {
    event.recipes.gtceu.breeder_reactor('uranium_238')
        .itemInputs('1x #forge:ingots/uranium')
        .itemOutputs('1x gtceu:plutonium_ingot')
        //.output('gas', [{gas: 'mekanism:nuclear_waste', amount: 1000}]) // TODO enable when mekJS updates.
        .EUt(GTValues.VA[GTValues.EV]).duration(200)
        .perTick(true)
        .output('eu', GTValues.V[GTValues.MV])
    
    event.recipes.gtceu.breeder_reactor('uranium_235')
        .itemInputs('1x #forge:ingots/uranium_235')
        //.output('gas', [{gas: 'mekanism:nuclear_waste', amount: 2000}]) // TODO enable when mekJS updates.
        .EUt(GTValues.VA[GTValues.EV]).duration(200)
        .perTick(true)
        .output('eu', GTValues.V[GTValues.MV])
    
    event.recipes.gtceu.breeder_reactor('plutonium_239')
        .itemInputs('1x #forge:ingots/plutonium')
        .itemOutputs('1x gtceu:plutonium_241_ingot')
        //.output('gas', [{gas: 'mekanism:nuclear_waste', amount: 3000}]) // TODO enable when mekJS updates.
        .EUt(GTValues.VA[GTValues.EV]).duration(200)
        .perTick(true)
        .output('eu', GTValues.V[GTValues.MV])
  
    event.recipes.gtceu.breeder_reactor('plutonium_241')
        .itemInputs('1x #forge:ingots/plutonium_241')
        //.output('gas', [{gas: 'mekanism:nuclear_waste', amount: 4000}]) // TODO enable when mekJS updates.
        .EUt(GTValues.VA[GTValues.EV]).duration(200)
        .perTick(true)
        .output('eu', GTValues.V[GTValues.MV])
})