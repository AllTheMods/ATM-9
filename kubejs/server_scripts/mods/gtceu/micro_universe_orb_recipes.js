
ServerEvents.recipes(event => {
    // Components
    event.recipes.gtceu.assembly_line('micro_universe_drill_ship')
        .itemInputs([
            '8x gtceu:uv_machine_hull',
            '8x gtceu:advanced_power_thruster',
            '2x gtceu:hsse_drill_head',
            '2x gtceu:uv_field_generator',
            '2x #gtceu:circuits/uhv',
            '32x gtceu:ruthenium_trinium_americium_neutronate_single_wire'
        ])
        .inputFluids([
            Fluid.of('gtceu:naquadria', 1296),
            Fluid.of('gtceu:soldering_alloy', 1152)
        ])
        .itemOutputs('1x kubejs:micro_universe_drill_ship')
        .duration(2400).EUt(UHV)

    event.recipes.gtceu.assembly_line('micro_universe_energy_transmitter')
        .itemInputs([
            '1x gtceu:atomic_casing',
            '24x gtceu:tungsten_steel_screw',
            '6x gtceu:rhodium_plated_palladium_dense_plate',
            '16x gtceu:enriched_naquadah_trinium_europium_duranide_hex_wire',
            '4x gtceu:uv_field_generator',
            '2x gtceu:fusion_coil',
            '1x kubejs:absolute_reaction_plating'
        ])
        .inputFluids([
            Fluid.of('gtceu:europium', 1296),
            Fluid.of('gtceu:soldering_alloy', 6912)
        ])
        .itemOutputs('1x kubejs:micro_universe_energy_transmitter')
        .duration(2400).EUt(UV)

    event.recipes.gtceu.assembly_line('micro_universe_focus_lens')
        .itemInputs([
            '1x gtceu:atomic_casing',
            '24x gtceu:tungsten_steel_screw',
            '6x gtceu:rhodium_plated_palladium_dense_plate',
            '1x #forge:lenses/orange',
            '1x kubejs:superthermal_transference_coil',
            '1x kubejs:absolute_reaction_plating'
        ])
        .inputFluids([
            Fluid.of('gtceu:neutronium', 1296),
            Fluid.of('gtceu:soldering_alloy', 6912)
        ])
        .itemOutputs('1x kubejs:micro_universe_focus_lens')
        .duration(2400).EUt(UV)


    event.recipes.gtceu.assembly_line('micro_universe_orb')
        .itemInputs([
            '1x allthetweaks:greg_star',
            '1x gtceu:uhv_machine_hull',
            '4x kubejs:micro_universe_catalyst',
            '4x gtceu:atomic_casing',
            '6x #gtceu:circuits/uhv',
            '8x gtceu:gravi_star',
            '64x gtceu:uhpic_chip',
            '64x gtceu:uhpic_chip'
        ])
        .inputFluids([
            Fluid.of('gtceu:neutronium', 144 * 32),
            Fluid.of('gtceu:europium', 2592),
            Fluid.of('gtceu:soldering_alloy', 4608),
            Fluid.of('gtceu:naquadria', 2304)
        ])
        .itemOutputs('1x gtceu:micro_universe_orb')
        .duration(3000).EUt(UV)

    // Resource Generation
    event.recipes.gtceu.micro_universe_collector('otherworldy_ore')
        .notConsumable('16x kubejs:micro_universe_catalyst')
        .itemInputs(['1x kubejs:micro_universe_drill_ship', '16x #forge:ingots/uranium_235'])
        .inputFluids([Fluid.of('gtceu:rocket_fuel', 10000), Fluid.of('gtceu:nether_star', 144 * 16)])
        .itemOutputs(['288x gtceu:neutronium_nugget', '126x allthemodium:allthemodium_nugget', '126x allthemodium:unobtainium_nugget', '126x gtceu:naquadria_nugget'])
        .outputFluids([Fluid.of('gtceu:samarium', 12960), Fluid.of('gtceu:darmstadtium', 4608)])
        .duration(12000).EUt(UHV * 36)

    event.recipes.gtceu.micro_universe_collector('end_ore')
        .notConsumable('16x kubejs:micro_universe_catalyst')
        .itemInputs(['1x kubejs:micro_universe_drill_ship', '1024x minecraft:end_stone'])
        .inputFluids([Fluid.of('gtceu:rocket_fuel', 10000), Fluid.of('gtceu:ender_air', 1000000), Fluid.of('gtceu:nether_star', 144 * 64)])
        .itemOutputs(['512x gtceu:endstone_naquadah_ore', '512x gtceu:endstone_trinium_ore', '512x gtceu:endstone_plutonium_ore', '1024x gtceu:endstone_tungstate_ore'])
        .outputFluids([Fluid.of('gtceu:liquid_ender_air', 64000), Fluid.of('gtceu:tritium', 32000)])
        .duration(18000).EUt(UHV * 36)

    event.recipes.gtceu.micro_universe_collector('nether_ore')
        .notConsumable('16x kubejs:micro_universe_catalyst')
        .itemInputs(['1x kubejs:micro_universe_drill_ship', '1024x minecraft:netherrack'])
        .inputFluids([Fluid.of('gtceu:rocket_fuel', 10000), Fluid.of('gtceu:nether_air', 1000000), Fluid.of('gtceu:nether_star', 144 * 16)])
        .itemOutputs(['1024x gtceu:netherrack_sulfur_ore', '1024x gtceu:netherrack_tetrahedrite_ore', '512x gtceu:netherrack_sphalerite_ore', '512x gtceu:netherrack_gold_ore'])
        .outputFluids([Fluid.of('gtceu:liquid_nether_air', 64000), Fluid.of('minecraft:lava', 100000), Fluid.of('gtceu:inert_nether_essence', 16000)])
        .duration(12000).EUt(UHV * 12)

    event.recipes.gtceu.micro_universe_collector('overworld_ore')
        .notConsumable('16x kubejs:micro_universe_catalyst')
        .itemInputs(['1x kubejs:micro_universe_drill_ship', '1024x minecraft:stone'])
        .inputFluids([Fluid.of('gtceu:rocket_fuel', 10000), Fluid.of('gtceu:air', 1000000), Fluid.of('gtceu:nether_star', 144 * 16)])
        .itemOutputs(['1280x gtceu:copper_ore', '1024x gtceu:tin_ore', '512x gtceu:iron_ore', '512x gtceu:diamond_ore', '16x allthemodium:allthemodium_ore'])
        .outputFluids([Fluid.of('gtceu:liquid_air', 64000), Fluid.of('gtceu:oil', 100000)])
        .duration(12000).EUt(UHV * 4)


    // Energy Generation
    event.recipes.gtceu.micro_universe_reactor('uhv_power')
        .notConsumable('16x kubejs:micro_universe_catalyst')
        .itemInputs(['1x kubejs:micro_universe_drill_ship', '256x gtceu:naquadria_ingot', '128x gtceu:neutronium_ingot', '1x #gtceu:batteries/uv'])
        .inputFluids(Fluid.of('gtceu:nether_star', 144 * 16))
        .duration(18000).EUt(-(GTValues.V[GTValues.UEV] * 16))

    event.recipes.gtceu.micro_universe_reactor('uev_power')
        .notConsumable('16x kubejs:micro_universe_catalyst')
        .itemInputs(['1x kubejs:micro_universe_drill_ship', '256x gtceu:tritanium_ingot', '128x gtceu:neutronium_ingot', '1x #gtceu:batteries/uhv'])
        .inputFluids(Fluid.of('gtceu:nether_star', 144 * 16))
        .duration(18000).EUt(-(GTValues.V[GTValues.UIV] * 16))
})