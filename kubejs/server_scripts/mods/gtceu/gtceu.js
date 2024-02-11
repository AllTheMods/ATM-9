ServerEvents.recipes(event => {
    event.recipes.gtceu.chemical_bath('kubejs:inert_star')
        .itemInputs('minecraft:wither_skeleton_skull')
        .inputFluids(Fluid.of('gtceu:polyethylene', 1000))
        .itemOutputs('kubejs:inert_nether_star')
        .duration(10)
        .EUt(IV)
    
    event.recipes.gtceu.mixer('kubejs:inert_fluid')
        .itemInputs('kubejs:inert_nether_star')
        .inputFluids(Fluid.of('gtceu:aqua_regia', 2000))
        .outputFluids(Fluid.of('gtceu:inert_nether_essence', 2304))
        .duration(12)
        .EUt(IV)
    
    event.recipes.gtceu.autoclave('kubejs:autoclave/nether_star')
        .itemInputs('gtceu:polyethylene_dust')
        .inputFluids(Fluid.of('gtceu:inert_nether_essence', 144))
        .itemOutputs('minecraft:nether_star')
        .duration(6)
        .EUt(EV)

    event.recipes.gtceu.arc_furnace('nan/its_a_joke')
        .itemInputs(Item.of('productivebees:configurable_honeycomb', '{EntityTag:{type:"productivebees:neutronium"}}').strongNBT())
        .inputFluids(Fluid.of('gtceu:oxygen_plasma', 100))
        .chancedOutput('2x gtceu:neutronium_nugget', 20, 5)
        .chancedOutput('gtceu:neutronium_nugget', 5, 5)
        .chancedOutput('gtceu:neutronium_nugget', 5, 5)
        .chancedOutput('gtceu:neutronium_nugget', 5, 5)
        .duration(25600)
        .EUt(ULV)

    // ALCR
    event.recipes.gtceu.assembly_line('advanced_large_chemical_reactor')
        .itemInputs('gtceu:large_chemical_reactor', '3x #gtceu:circuits/iv', '15x gtceu:nitinol_plate', '4x gtceu:platinum_single_cable')
        .itemOutputs('gtceu:advanced_large_chemical_reactor')
        .inputFluids(
            Fluid.of('gtceu:copper', 4608),
            Fluid.of('gtceu:tin', 4608),
            Fluid.of('gtceu:soldering_alloy', 2304),
            Fluid.of('gtceu:lubricant', 8000)
        )
        .duration(500)
        .EUt(IV)
    
    event.recipes.gtceu.assembler('uhv_16a_energy_hatch')
        .itemInputs('2x gtceu:uhv_energy_input_hatch_4a', '2x gtceu:uhpic_chip', 'kubejs:superthermal_transference_coil', '2x kubejs:cable_of_hyperconductivity')
        .itemOutputs('gtceu:uhv_energy_input_hatch_16a')
        .duration(200)
        .EUt(UHV)
})