ServerEvents.recipes((event) => {
    const gtr = event.recipes.gtceu

    gtr.assembler("gtceu:void_miner")
        .itemInputs("gtceu:lv_miner",
            "gtceu:mv_miner",
            "gtceu:hv_miner",
            "4x gtceu:lv_field_generator",
            "4x gtceu:mv_field_generator",
            "4x gtceu:hv_field_generator",
            "4x #gtceu:circuits/ev",
            "gtceu:long_titanium_rod",
            "4x gtceu:titanium_plate")
        .inputFluids("gtceu:soldering_alloy 1440")
        .itemOutputs("gtceu:void_miner")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(800)

    const world_data_scanner = [
        ["lv", "gtceu:tin_single_cable"],
        ["mv", "gtceu:copper_single_cable"],
        ["hv", "gtceu:gold_single_cable"],
        ["ev", "gtceu:aluminium_single_cable"],
        ["iv", "gtceu:platinum_single_cable"],
        ["luv", "gtceu:niobium_titanium_single_cable"],
        ["zpm", "gtceu:vanadium_gallium_single_cable"],
        ["uv", "gtceu:yttrium_barium_cuprate_single_cable"],
        ["uhv", "gtceu:europium_single_cable"]]
    world_data_scanner.forEach((scanner) => {
        event.shaped("gtceu:" + scanner[0] + "_world_data_scanner", [
            "CDC",
            "BAB",
            "CDC"
        ], {
            A: "gtceu:" + scanner[0] + "_machine_hull",
            B: scanner[1],
            C: "gtceu:" + scanner[0] + "_sensor",
            D: "#gtceu:circuits/" + scanner[0]
        })
    })

    gtr.world_data_scanner("kubejs:overworld_data")
        .itemInputs("gtceu:data_stick", "64x gtceu:stone_dust")
        .inputFluids("gtceu:pcb_coolant 100", "gtceu:air 64000")
        .itemOutputs("kubejs:overworld_data")
        .EUt(32)
        .duration(4000)
        .dimension("overworld")

    gtr.world_data_scanner("kubejs:nether_data")
        .itemInputs("2x gtceu:data_stick", "64x gtceu:netherrack_dust")
        .inputFluids("gtceu:pcb_coolant 200", "gtceu:nether_air 64000")
        .itemOutputs("2x kubejs:nether_data")
        .EUt(128)
        .duration(4000)
        .dimension("the_nether")

    gtr.world_data_scanner("kubejs:end_data")
        .itemInputs("4x gtceu:data_stick", "64x gtceu:endstone_dust")
        .inputFluids("gtceu:pcb_coolant 400", "gtceu:ender_air 64000")
        .itemOutputs("4x kubejs:end_data")
        .EUt(512)
        .duration(4000)
        .dimension("the_end")
    
    const overworld_raw_ores =
        [[["3x gtceu:raw_bentonite",
            "2x gtceu:raw_magnetite",
            "2x gtceu:raw_olivine",
            "1x gtceu:raw_glauconite_sand"], "1"],

        [["9x gtceu:raw_almandine",
            "6x gtceu:raw_pyrope",
            "3x gtceu:raw_sapphire",
            "3x gtceu:raw_green_sapphire"], "2"],

        [["3x gtceu:raw_goethite",
            "12x gtceu:raw_yellow_limonite",
            "12x gtceu:raw_hematite",
            "6x gtceu:raw_malachite"], "3"],

        [["6x gtceu:raw_soapstone",
            "4x gtceu:raw_talc",
            "4x gtceu:raw_glauconite_sand",
            "2x gtceu:raw_pentlandite"], "4"],

        [["3x gtceu:raw_grossular",
            "2x gtceu:raw_spessartine",
            "2x gtceu:raw_pyrolusite",
            "1x gtceu:raw_tantalite"], "5"],

        [["13x gtceu:raw_chalcopyrite",
            "1x gtceu:raw_zeolite",
            "1x gtceu:raw_cassiterite",
            "3x gtceu:raw_realgar"], "6"],

        [["12x gtceu:raw_coal"], "7"],

        [["2x gtceu:raw_chalcopyrite",
            "8x minecraft:raw_iron",
            "8x gtceu:raw_pyrite",
            "8x minecraft:raw_copper"], "8"],

        [["12x gtceu:raw_magnetite",
            "8x gtceu:raw_vanadium_magnetite",
            "4x minecraft:raw_gold"], "9"],

        [["6x gtceu:raw_lazurite",
            "4x gtceu:raw_sodalite",
            "4x gtceu:raw_lapis",
            "2x gtceu:raw_calcite"], "10"],

        [["6x gtceu:raw_galena",
            "4x gtceu:raw_silver",
            "2x gtceu:raw_lead"], "11"],

        [["3x gtceu:raw_kyanite",
            "2x gtceu:raw_mica",
            "2x gtceu:raw_bauxite",
            "1x gtceu:raw_pollucite"], "12"],

        [["16x gtceu:raw_tin",
            "8x gtceu:raw_cassiterite"], "13"],

        [["6x gtceu:raw_red_garnet",
            "4x gtceu:raw_yellow_garnet",
            "4x gtceu:raw_amethyst",
            "2x gtceu:raw_opal"], "14"],

        [["12x gtceu:raw_basaltic_mineral_sand",
            "8x gtceu:raw_granitic_mineral_sand",
            "8x gtceu:raw_fullers_earth",
            "4x gtceu:raw_gypsum"], "15"],

        [["8x gtceu:raw_rock_salt",
            "1x gtceu:raw_salt",
            "3x gtceu:raw_lepidolite",
            "3x gtceu:raw_spodumene"], "16"],

        [["9x gtceu:raw_redstone",
            "6x gtceu:raw_ruby",
            "3x gtceu:raw_cinnabar"], "17"],

        [["6x gtceu:raw_apatite",
            "4x gtceu:raw_tricalcium_phosphate",
            "2x gtceu:raw_pyrochlore"], "18"],

        [["12x gtceu:raw_cassiterite_sand",
            "8x gtceu:raw_garnet_sand",
            "8x gtceu:raw_asbestos",
            "4x gtceu:raw_diatomite"], "19"],

        [["12x gtceu:raw_oilsands"], "20"],

        [["6x gtceu:raw_graphite",
            "4x gtceu:raw_diamond",
            "2x gtceu:raw_coal"], "21"],

        [["6x gtceu:raw_garnierite",
            "4x gtceu:raw_nickel",
            "4x gtceu:raw_cobaltite",
            "2x gtceu:raw_pentlandite"], "22"]]

    overworld_raw_ores.forEach((overworld_ore) => {
        let recipe = gtr.void_miner("overworld_void_ore_" + overworld_ore[1])
            .inputFluids("gtceu:drilling_fluid 1000")
            .notConsumable("kubejs:overworld_data")
            .circuit(overworld_ore[1])
            .EUt(GTValues.VA[GTValues.EV])
            .duration(20)
        let output = overworld_ore[0]
        output.forEach(item => {
            recipe.chancedOutput(item, 2000, 0)
        })
    })
    const nether_raw_ores =
        [[["14x gtceu:raw_tetrahedrite",
            "7x minecraft:raw_copper",
            "4x gtceu:raw_stibnite"], "1"],

        [["5x gtceu:raw_bastnasite",
            "2x gtceu:raw_molybdenum",
            "2x gtceu:raw_neodymium",
            "2x gtceu:raw_monazite"], "2"],

        [["9x gtceu:raw_redstone",
            "6x gtceu:raw_ruby",
            "3x gtceu:raw_cinnabar"], "3"],

        [["6x gtceu:raw_saltpeter",
            "4x gtceu:raw_diatomite",
            "4x gtceu:raw_electrotine",
            "2x gtceu:raw_alunite"], "4"],

        [["5x gtceu:raw_beryllium",
            "6x gtceu:raw_emerald"], "5"],

        [["3x gtceu:raw_grossular",
            "2x gtceu:raw_pyrolusite",
            "1x gtceu:raw_tantalite"], "6"],

        [["8x gtceu:raw_wulfenite",
            "5x gtceu:raw_molybdenite",
            "3x gtceu:raw_molybdenum",
            "3x gtceu:raw_powellite"], "7"],

        [["5x gtceu:raw_goethite",
            "3x gtceu:raw_yellow_limonite",
            "3x gtceu:raw_hematite",
            "2x minecraft:raw_gold"], "8"],

        [["6x gtceu:raw_quartzite",
            "4x gtceu:raw_certus_quartz",
            "2x gtceu:raw_barite"], "9"],

        [["11x gtceu:raw_blue_topaz",
            "7x gtceu:raw_topaz",
            "7x gtceu:raw_chalcocite",
            "4x gtceu:raw_bornite"], "10"],

        [["12x gtceu:raw_nether_quartz",
            "4x gtceu:raw_quartzite"], "11"],

        [["15x gtceu:raw_sulfur",
            "10x gtceu:raw_pyrite",
            "5x gtceu:raw_sphalerite"], "12"]]

    nether_raw_ores.forEach((nether_ore) => {
        let recipe = gtr.void_miner("nether_void_ore_" + nether_ore[1])
            .inputFluids("gtceu:drilling_fluid 1000")
            .notConsumable("2x kubejs:nether_data")
            .circuit(nether_ore[1])
            .EUt(2 * GTValues.VA[GTValues.EV])
            .duration(20)
        let output = nether_ore[0]
        output.forEach(item => {
            recipe.chancedOutput(item, 2000, 0)
        })
    })

    const end_raw_ores =
        [[["9x gtceu:raw_magnetite",
            "6x gtceu:raw_vanadium_magnetite",
            "6x gtceu:raw_chromite",
            "3x minecraft:raw_gold"], "1"],

        [["8x gtceu:raw_bauxite",
            "4x gtceu:raw_ilmenite",
            "4x gtceu:raw_aluminium"], "2"],

        [["3x gtceu:raw_bornite",
            "2x gtceu:raw_cooperite",
            "2x gtceu:raw_platinum",
            "1x gtceu:raw_palladium"], "3"],

        [["6x gtceu:raw_scheelite",
            "4x gtceu:raw_tungstate",
            "2x gtceu:raw_lithium"], "4"],

        [["9x gtceu:raw_pitchblende",
            "6x gtceu:raw_uraninite"], "5"],

        [["9x gtceu:raw_naquadah",
            "3x gtceu:raw_plutonium"], "6"]]

    end_raw_ores.forEach((end_ore) => {
        let recipe = gtr.void_miner("end_void_ore_" + end_ore[1])
            .inputFluids("gtceu:drilling_fluid 1000")
            .notConsumable("4x kubejs:end_data")
            .circuit(end_ore[1])
            .EUt(GTValues.VA[GTValues.IV])
            .duration(20)
        let output = end_ore[0]
        output.forEach(item => {
            recipe.chancedOutput(item, 2000, 0)
        })
    })
})