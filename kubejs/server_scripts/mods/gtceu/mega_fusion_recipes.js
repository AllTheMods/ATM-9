
ServerEvents.recipes(event => {
    // Components
    event.recipes.gtceu.assembly_line('mega_fusion_reactor')
        .itemInputs([
            '2x gtceu:uv_fusion_reactor',
            '4x gtceu:fusion_coil',
            '4x #gtceu:circuits/uhv',
            '2x gtceu:neutronium_plate',
            '4x gtceu:uv_field_generator',
            '8x gtceu:gravi_star',
            '64x gtceu:uhpic_chip',
        ])
        .inputFluids([
            Fluid.of('gtceu:soldering_alloy', 144 * 16),
            Fluid.of('gtceu:yttrium_barium_cuprate', 144 * 16),
        ])
        .itemOutputs('1x gtceu:mega_fusion_reactor')
        .duration(1600).EUt(UV)

    event.recipes.gtceu.mega_fusion_reactor('star_matter')
        .inputFluids([
            Fluid.of('gtceu:helium_plasma', 10000), 
            Fluid.of('gtceu:nitrogen_plasma', 2500), 
            Fluid.of('gtceu:oxygen_plasma', 1500), 
            Fluid.of('gtceu:iron_plasma', 250)
        ])
        .outputFluids(Fluid.of('gtceu:star_matter_plasma', 1000))
        .duration(64).EUt(UV)
        .fusionStartEU(600000000)
})