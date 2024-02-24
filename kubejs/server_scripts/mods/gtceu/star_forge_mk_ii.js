ServerEvents.recipes(event => {
    //Same recipes as the MK I but faster, it was also tested on a server to make sure there were no compatibility issue
    //it's all the same tier of voltage as the mk1

    function starForgeMK_II(id, duration, eu, output, item, fluid) {
        id+="_mk_ii"
        event.recipes.gtceu.star_forge_mk_ii(id)
            .itemInputs(item)
            .inputFluids(fluid)
            .itemOutputs(output)
            .duration(duration/4)//same recipes but 4times as fast
            .EUt(eu)
        if(fluid = '') {
            fluid = null
        }
    }
    // Gregstar Components
    starForgeMK_II('robust_star_housing', 4000, GTValues.VA[7], 'kubejs:star_housing', ['allthetweaks:patrick_star', '32x gtceu:tungsten_steel_double_plate', '64x gtceu:tungsten_steel_screw'], [Fluid.of('gtceu:oxygen_plasma', 2880), Fluid.of('gtceu:nitrogen_plasma', 2880), Fluid.of('gtceu:argon_plasma', 2880), Fluid.of('gtceu:helium_plasma', 2880)])
    starForgeMK_II('absolute_reaction_plating', 1000, GTValues.VA[7], 'kubejs:absolute_reaction_plating', ['gtceu:neutronium_block', '16x gtceu:fusion_coil', '16x gtceu:fusion_casing_mk3', '16x gtceu:fusion_glass'], Fluid.of('gtceu:uranium_235', 2000))
    starForgeMK_II('star_compression_module', 1000, GTValues.VA[7], 'kubejs:star_compression_module', ['allthetweaks:atm_star', '16x gtceu:energy_cluster', '4x gtceu:uv_transformer_16a', '4x gtceu:uv_energy_input_hatch_16a'])
    starForgeMK_II('superthermal_transference_coil', 1000, GTValues.VA[7], 'kubejs:superthermal_transference_coil', ['16x gtceu:uv_voltage_coil', '16x gtceu:tritanium_coil_block', '4x gtceu:uv_naquadria_battery'], Fluid.of('gtceu:europium', 2000))
    starForgeMK_II('cable_of_hyperconductivity', 1000, GTValues.VA[7], 'kubejs:cable_of_hyperconductivity', ['8x gtceu:manganese_phosphide_hex_wire', '8x gtceu:magnesium_diboride_hex_wire', '8x gtceu:mercury_barium_calcium_cuprate_hex_wire', '8x gtceu:uranium_triplatinum_hex_wire', '8x gtceu:samarium_iron_arsenic_oxide_hex_wire', '8x gtceu:indium_tin_barium_titanium_cuprate_hex_wire', '8x gtceu:uranium_rhodium_dinaquadide_hex_wire','8x gtceu:enriched_naquadah_trinium_europium_duranide_hex_wire'], [Fluid.of('gtceu:styrene_butadiene_rubber', 16000), Fluid.of('gtceu:silicone_rubber', 32000), Fluid.of('gtceu:rubber', 64000)])


    // Micro Universe Orb
    starForgeMK_II('micro_universe_catalyst', 2000, GTValues.VA[8], 'kubejs:micro_universe_catalyst', ['16x gtceu:naquadria_plate', '32x gtceu:uv_electric_piston', '8x gtceu:gravi_star'], [Fluid.of('gtceu:neutronium', 144 * 32), Fluid.of('gtceu:star_matter_plasma', 10000)])

    // Gregstar
    starForgeMK_II('gregstar', 1280000, GTValues.VA[0], 'allthetweaks:greg_star',
        [
            'kubejs:star_housing',
            'gtceu:nan_certificate',
            'kubejs:absolute_reaction_plating',
            'kubejs:star_compression_module',
            'kubejs:superthermal_transference_coil',
            'kubejs:cable_of_hyperconductivity',
            '32x mekanism:pellet_antimatter',
            '8x industrialforegoing:black_hole_controller',
            '16x ironfurnaces:unobtainium_furnace',
            '32x computercraft:computer_advanced',
            Item.of('exchangers:end_steel_exchanger', 8, '{Energy:50000000}').weakNBT()
        ],
        [
            Fluid.of('gtceu:europium', 10000)
        ]
    )

    // Gregstar creative uses
    starForgeMK_II('infinite_polonium', 4000, GTValues.VA[7],
        Item.of('mekanism:creative_chemical_tank', '{mekData: {GasTanks: [{Tank: 0b, stored: {gasName: "mekanism:polonium", amount: 9223372036854775807L}}]}}'),
        ['1000x mekanism:pellet_polonium',
        '2x kubejs:greg_star_shard'],
    )
    starForgeMK_II('infinite_plutonium', 4000, GTValues.VA[7],
        Item.of('mekanism:creative_chemical_tank', '{mekData: {GasTanks: [{Tank: 0b, stored: {gasName: "mekanism:plutonium", amount: 9223372036854775807L}}]}}'),
        ['1000x mekanism:pellet_plutonium',
        '2x kubejs:greg_star_shard'],
    )

    // Other Star Forge Recipes
    event.recipes.gtceu.star_forge_mk_ii('atm_star_in_starforge_mk_ii')
        .itemInputs(
            [
                '28x allthemodium:unobtainium_allthemodium_alloy_block',
                Item.of('allthemodium:unobtainium_vibranium_alloy_block', "{HideFlags:1,display:{Name:'[{\"text\":\"Awakened Unobtainium-Vibranium Alloy Block\",\"italic\":false}]'}}").enchant('minecraft:unbreaking', 1).strongNBT(),
                Item.of('allthemodium:unobtainium_vibranium_alloy_block', "{HideFlags:1,display:{Name:'[{\"text\":\"Awakened Unobtainium-Vibranium Alloy Block\",\"italic\":false}]'}}").enchant('minecraft:unbreaking', 1).strongNBT(),
                'allthetweaks:oblivion_shard',
                'allthetweaks:dragon_soul',
                'allthetweaks:withers_compass',
                'allthetweaks:pulsating_black_hole',
                'allthetweaks:nexium_emitter',
                'allthetweaks:patrick_star',
                'allthetweaks:dimensional_seed',
                'allthetweaks:philosophers_fuel',
                'allthetweaks:improbable_probability_device',
                'mysticalagradditions:creative_essence'
            ])
        .inputFluids(Fluid.of('gtceu:nether_star', 1574640))
        .itemOutputs('allthetweaks:atm_star')
        .chancedOutput(Item.of('allthetweaks:atm_star'), 20, 20)
        .duration(432000/4)
        .EUt(GTValues.VA[0])

    event.recipes.gtceu.star_forge_mk_ii('atm_star_from_shards_in_starforge_mk_ii')
        .itemInputs(
            [
                '54x allthetweaks:atm_star_shard',
                'allthetweaks:patrick_star'
            ])
        .itemOutputs('allthetweaks:atm_star')
        .chancedOutput(Item.of('allthetweaks:atm_star'), 20, 20)
        .duration(12000/9)// after all it's one of the only reason why you would build the mk2 so I thought x9 would be a good thing (it's for those that want to make the 9x block)
        .EUt(GTValues.VA[0])

    event.recipes.gtceu.star_forge_mk_ii('patrick_star_in_starforge_mk_ii')
        .itemInputs(
            [
                '11x minecraft:pink_concrete',
                '5x minecraft:pink_concrete_powder',
                '13x minecraft:magenta_concrete',
                '8x minecraft:magenta_concrete_powder',
                '2x minecraft:lime_concrete',
                '8x minecraft:green_concrete',
                '8x minecraft:green_concrete_powder'
            ])
        .itemOutputs('allthetweaks:patrick_star')
        .chancedOutput(Item.of('allthetweaks:patrick_star'), 20, 20)
        .duration(432000/4)
        .EUt(GTValues.VA[0])
    
    // Star Forge MK2 Controller Block Recipe
	starForgeMK_II('star_forge_mk_ii', 10000, GTValues.VA[9], 'gtceu:star_forge_mk_ii', ['gtceu:star_forge','64x kubejs:cable_of_hyperconductivity','36x kubejs:superthermal_transference_coil','128x gtceu:uhpic_chip','gtceu:max_battery','24x #gtceu:circuits/uhv'], [Fluid.of('gtceu:star_matter_plasma', 3000)])

})
