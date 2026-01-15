ServerEvents.recipes((event) => {
    const gtr = event.recipes.gtceu    
    
    gtr.assembly_line("gtceu:void_fluid_drilling_rig")
        .itemInputs("gtceu:mv_fluid_drilling_rig",
            "gtceu:hv_fluid_drilling_rig",
            "gtceu:ev_fluid_drilling_rig",
            "4x gtceu:mv_field_generator",
            "4x gtceu:hv_field_generator",
            "4x gtceu:ev_field_generator",
            "4x #gtceu:circuits/luv",
            "16x gtceu:hsse_screw",
            "4x gtceu:long_hssg_rod",
            "8x gtceu:hsse_plate")
        .inputFluids("gtceu:soldering_alloy 1440")
        .itemOutputs("gtceu:void_fluid_drilling_rig")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(600)
        .researchWithoutRecipe("1x_gtceu_ev_fluid_drilling_rig", "gtceu:data_orb")

    gtr.research_station("1x_gtceu_ev_fluid_drilling_rig")
        .itemInputs("gtceu:data_orb", "gtceu:ev_fluid_drilling_rig")
        .itemOutputs(Item.of("gtceu:data_orb", "{assembly_line_research:{research_id:\"1x_gtceu_ev_fluid_drilling_rig\",research_type:\"gtceu:assembly_line\"}}"))
        .EUt(GTValues.VA[GTValues.LuV])
        .CWUt(32)
        .duration(32 * 4000)
        .data({
            "hide_duration": 1,
            "duration_is_total_cwu": 1
        })

    const overworld_fluids = [
        ["gtceu:oil_medium 20000", "1"],
        ["gtceu:oil 20000", "2"],
        ["gtceu:oil_heavy 15000", "3"],
        ["gtceu:oil_light 25000", "4"],
        ["gtceu:natural_gas 15000", "5"],
        ["gtceu:salt_water 40000", "6"]
    ]

    overworld_fluids.forEach((overworld_fluid) => {
        gtr.void_fluid_drilling_rig("overworld_fluid_" + overworld_fluid[1])
            .notConsumable("kubejs:overworld_data")
            .outputFluids(overworld_fluid[0])
            .circuit(overworld_fluid[1])
            .EUt(GTValues.VA[GTValues.LuV])
            .duration(20)
    })

    const nether_fluids = [
        ["minecraft:lava 65000", "1"],
        ["gtceu:natural_gas 35000", "2"]
    ]

    nether_fluids.forEach((nether_fluid) => {
        gtr.void_fluid_drilling_rig("nether_fluid_" + nether_fluid[1])
            .notConsumable("2x kubejs:nether_data")
            .outputFluids(nether_fluid[0])
            .circuit(nether_fluid[1])
            .EUt(GTValues.VA[GTValues.LuV])
            .duration(20)
    })
})