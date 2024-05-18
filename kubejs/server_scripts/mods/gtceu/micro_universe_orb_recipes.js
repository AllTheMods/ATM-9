// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    // Components
    allthemods.recipes.gtceu.assembly_line('micro_universe_drill_ship')
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
        .stationResearch(b => b.researchStack(Item.of('gtceu:advanced_power_thruster')).CWUt(144).EUt(UHV))
        .duration(2400).EUt(UHV)

    allthemods.recipes.gtceu.assembly_line('micro_universe_energy_transmitter')
        .itemInputs([
            '1x gtceu:atomic_casing',
            '24x gtceu:tungsten_steel_screw',
            '6x gtceu:dense_rhodium_plated_palladium_plate',
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
        .stationResearch(b => b.researchStack(Item.of('gtceu:fusion_coil')).CWUt(96).EUt(UV))
        .duration(2400).EUt(UV)

    allthemods.recipes.gtceu.assembly_line('micro_universe_focus_lens')
        .itemInputs([
            '1x gtceu:atomic_casing',
            '24x gtceu:tungsten_steel_screw',
            '6x gtceu:dense_rhodium_plated_palladium_plate',
            '1x #forge:lenses/orange',
            '1x kubejs:superthermal_transference_coil',
            '1x kubejs:absolute_reaction_plating'
        ])
        .inputFluids([
            Fluid.of('gtceu:neutronium', 1296),
            Fluid.of('gtceu:soldering_alloy', 6912)
        ])
        .itemOutputs('1x kubejs:micro_universe_focus_lens')
        .stationResearch(b => b.researchStack(Item.of('kubejs:superthermal_transference_coil')).CWUt(128).EUt(UV))
        .duration(2400).EUt(UV)


    allthemods.recipes.gtceu.assembly_line('micro_universe_orb')
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
        .stationResearch(b => b.researchStack(Item.of('gtceu:star_forge')).CWUt(144).EUt(UHV))
        .duration(3000).EUt(UV)

    // Resource Generation
    allthemods.recipes.gtceu.micro_universe_collector('otherworldy_ore')
        .notConsumable('16x kubejs:micro_universe_catalyst')
        .itemInputs(['1x kubejs:micro_universe_drill_ship', '16x #forge:ingots/uranium_235'])
        .inputFluids([Fluid.of('gtceu:rocket_fuel', 10000), Fluid.of('gtceu:nether_star', 144 * 16)])
        .itemOutputs(['288x gtceu:neutronium_ingot', '126x allthemodium:allthemodium_ingot', '126x allthemodium:unobtainium_ingot', '126x gtceu:naquadria_ingot'])
        .outputFluids([Fluid.of('gtceu:samarium', 12960), Fluid.of('gtceu:darmstadtium', 4608)])
        .duration(1200 * 8).EUt(UV)

    allthemods.recipes.gtceu.micro_universe_collector('end_ore')
        .notConsumable('16x kubejs:micro_universe_catalyst')
        .itemInputs(['1x kubejs:micro_universe_drill_ship', '1024x minecraft:end_stone'])
        .inputFluids([Fluid.of('gtceu:rocket_fuel', 10000), Fluid.of('gtceu:ender_air', 1000000), Fluid.of('gtceu:nether_star', 144 * 64)])
        .itemOutputs(['8192x gtceu:endstone_naquadah_ore', '8192x gtceu:endstone_trinium_ore', '512x gtceu:endstone_plutonium_ore', '8192x gtceu:endstone_tungstate_ore'])
        .outputFluids([Fluid.of('gtceu:liquid_ender_air', 640000), Fluid.of('gtceu:tritium', 32000)])
        .duration(1800 * 8).EUt(UV)

    allthemods.recipes.gtceu.micro_universe_collector('nether_ore')
        .notConsumable('16x kubejs:micro_universe_catalyst')
        .itemInputs(['1x kubejs:micro_universe_drill_ship', '1024x minecraft:netherrack'])
        .inputFluids([Fluid.of('gtceu:rocket_fuel', 10000), Fluid.of('gtceu:nether_air', 1000000), Fluid.of('gtceu:nether_star', 144 * 16)])
        .itemOutputs(['8192x gtceu:netherrack_sulfur_ore', '8192x gtceu:netherrack_tetrahedrite_ore', '4096x gtceu:netherrack_sphalerite_ore'])
        .outputFluids([Fluid.of('gtceu:liquid_nether_air', 640000), Fluid.of('minecraft:lava', 100000), Fluid.of('gtceu:inert_nether_essence', 16000)])
        .duration(1200 * 4).EUt(UV)

    allthemods.recipes.gtceu.micro_universe_collector('overworld_ore')
        .notConsumable('16x kubejs:micro_universe_catalyst')
        .itemInputs(['1x kubejs:micro_universe_drill_ship', '1024x minecraft:stone'])
        .inputFluids([Fluid.of('gtceu:rocket_fuel', 10000), Fluid.of('gtceu:air', 1000000), Fluid.of('gtceu:nether_star', 144 * 16)])
        .itemOutputs(['8192x gtceu:redstone_ore', '4096x gtceu:tantalite_ore', '8192x gtceu:salt_ore', '4096x gtceu:galena_ore', '4096x gtceu:cobaltite_ore'])
        .outputFluids([Fluid.of('gtceu:liquid_air', 640000), Fluid.of('gtceu:oil', 1000000)])
        .duration(1200 * 2).EUt(UV)
    
    allthemods.recipes.gtceu.micro_universe_collector('max_energy_hatch')
        .itemInputs(['1x allthetweaks:greg_star_block', '8x gtceu:uhv_energy_input_hatch_16a', '1x kubejs:micro_universe_drill_ship', '16x kubejs:micro_universe_catalyst'])
        .inputFluids([Fluid.of('gtceu:star_matter_plasma', 12000), Fluid.of('gtceu:nether_star', 1574640)])
        .itemOutputs(['1x gtceu:max_energy_input_hatch'])
        .duration(2400 * 16).EUt(UV)
    
    allthemods.recipes.gtceu.micro_universe_collector('creative_energy')
        .itemInputs(['1x allthetweaks:greg_star_block', '32x gtceu:uhv_16a_energy_converter', '1x kubejs:micro_universe_drill_ship', '16x kubejs:micro_universe_catalyst'])
        .inputFluids([Fluid.of('gtceu:nether_star', 1574640)])
        .itemOutputs(['1x gtceu:creative_energy'])
        .duration(2400 * 16).EUt(UV)


    // Energy Generation
    allthemods.recipes.gtceu.micro_universe_reactor('uhv_power')
        .notConsumable('16x kubejs:micro_universe_catalyst')
        .itemInputs(['1x kubejs:micro_universe_drill_ship', '256x gtceu:naquadria_ingot', '128x gtceu:neutronium_ingot', '1x #gtceu:batteries/uv'])
        .inputFluids(Fluid.of('gtceu:nether_star', 144 * 16))
        .duration(18000 * 256).EUt(-(GTValues.V[GTValues.UV]))

    allthemods.recipes.gtceu.micro_universe_reactor('uev_power')
        .notConsumable('16x kubejs:micro_universe_catalyst')
        .itemInputs(['1x kubejs:micro_universe_drill_ship', '256x gtceu:tritanium_ingot', '128x gtceu:neutronium_ingot', '1x #gtceu:batteries/uhv'])
        .inputFluids(Fluid.of('gtceu:nether_star', 144 * 16))
        .duration(18000 * 1024).EUt(-(GTValues.V[GTValues.UV]))
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
