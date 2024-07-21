// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const [ ULV, LV, MV, HV, EV, IV, LuV, ZPM, UV, UHV, UEV, UIV, UXV, OpV, MAX ] = GTValues.VA
ServerEvents.recipes(allthemods => {
    function starForge(id, duration, eu, output, item, fluid) {
		allthemods.recipes.gtceu.star_forge(id)
			.itemInputs(item)
			.inputFluids(fluid)
			.itemOutputs(output)
			.duration(duration)
			.EUt(eu)
		if(fluid = '') {
			fluid = null
		}
	} 
	// Gregstar Components with fluids
	starForge('robust_star_housing', 4000, ZPM, 'kubejs:star_housing', ['allthetweaks:patrick_star', '32x gtceu:double_tungsten_steel_plate', '64x gtceu:tungsten_steel_screw'], [Fluid.of('gtceu:oxygen_plasma', 2880), Fluid.of('gtceu:nitrogen_plasma', 2880), Fluid.of('gtceu:argon_plasma', 2880), Fluid.of('gtceu:helium_plasma', 2880)])
	starForge('absolute_reaction_plating', 1000, ZPM, 'kubejs:absolute_reaction_plating', ['gtceu:neutronium_block', '16x gtceu:fusion_coil', '16x gtceu:fusion_casing_mk3', '16x gtceu:fusion_glass'], Fluid.of('gtceu:uranium_235', 2000))
	starForge('superthermal_transference_coil', 1000, ZPM, 'kubejs:superthermal_transference_coil', ['16x gtceu:uv_voltage_coil', '16x gtceu:tritanium_coil_block', '4x gtceu:uv_naquadria_battery'], Fluid.of('gtceu:europium', 2000))
	starForge('cable_of_hyperconductivity', 1000, ZPM, 'kubejs:cable_of_hyperconductivity', ['8x gtceu:manganese_phosphide_hex_wire', '8x gtceu:magnesium_diboride_hex_wire', '8x gtceu:mercury_barium_calcium_cuprate_hex_wire', '8x gtceu:uranium_triplatinum_hex_wire', '8x gtceu:samarium_iron_arsenic_oxide_hex_wire', '8x gtceu:indium_tin_barium_titanium_cuprate_hex_wire', '8x gtceu:uranium_rhodium_dinaquadide_hex_wire','8x gtceu:enriched_naquadah_trinium_europium_duranide_hex_wire'], [Fluid.of('gtceu:styrene_butadiene_rubber', 16000), Fluid.of('gtceu:silicone_rubber', 32000), Fluid.of('gtceu:rubber', 64000)])
	
	// star compression module
	allthemods.recipes.gtceu.star_forge('star_compression_module')
		.itemInputs(['allthetweaks:atm_star', '16x gtceu:energy_cluster', '4x gtceu:uv_transformer_16a', '4x gtceu:uv_energy_input_hatch_16a'])
		.itemOutputs('kubejs:star_compression_module')
		.duration(1000)
		.EUt(ZPM)

	// Micro Universe Catalyst
	starForge('micro_universe_catalyst', 2000, UV, 'kubejs:micro_universe_catalyst', ['16x gtceu:naquadria_plate', '32x gtceu:uv_electric_piston', '8x gtceu:gravi_star'], [Fluid.of('gtceu:neutronium', 144 * 32), Fluid.of('gtceu:star_matter_plasma', 10000)])

	// Gregstar
	starForge('gregstar', 1280000, ULV, 'allthetweaks:greg_star', 
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

	// Gregstar shards
	allthemods.recipes.gtceu.macerator('gregstar_shards')
		.itemInputs('allthetweaks:greg_star')
		.itemOutputs('5x kubejs:greg_star_shard')
		.chancedOutput(Item.of('4x kubejs:greg_star_shard'), 5000, 750)
		.chancedOutput(Item.of('3x kubejs:greg_star_shard'), 2500, 500)
		.chancedOutput(Item.of('2x kubejs:greg_star_shard'), 1250, 250)
		.duration(120)
		.EUt(ZPM)

	// Gregstar creative uses
	allthemods.recipes.gtceu.star_forge('infinite_polonium')
		.itemInputs(['1000x mekanism:pellet_polonium', '2x kubejs:greg_star_shard'])
		.itemOutputs(Item.of('mekanism:creative_chemical_tank', '{mekData: {GasTanks: [{Tank: 0b, stored: {gasName: "mekanism:polonium", amount: 9223372036854775807L}}]}}'))
		.duration(4000)
		.EUt(ZPM)
	
	allthemods.recipes.gtceu.star_forge('infinite_plutonium')
		.itemInputs(['1000x mekanism:pellet_plutonium', '2x kubejs:greg_star_shard'])
		.itemOutputs(Item.of('mekanism:creative_chemical_tank', '{mekData: {GasTanks: [{Tank: 0b, stored: {gasName: "mekanism:plutonium", amount: 9223372036854775807L}}]}}'))
		.duration(4000)
		.EUt(ZPM)

	// Other Star Forge Recipes
	allthemods.recipes.gtceu.star_forge('atm_star')
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
		.duration(432000)
		.EUt(ULV)
	
	allthemods.recipes.gtceu.star_forge('atm_star_from_shards')
		.itemInputs(
			[
				'54x allthetweaks:atm_star_shard',
				'allthetweaks:patrick_star'
			])
		.itemOutputs('allthetweaks:atm_star')
		.chancedOutput(Item.of('allthetweaks:atm_star'), 20, 20)
		.duration(108000)
		.EUt(ULV)
	
	allthemods.recipes.gtceu.star_forge('greg_star_from_shards')
		.itemInputs(
			[
				'54x kubejs:greg_star_shard',
				'kubejs:star_housing'
			])
		.itemOutputs('allthetweaks:greg_star')
		.chancedOutput(Item.of('allthetweaks:greg_star'), 20, 20)
		.duration(108000)
		.EUt(ULV)
	
	allthemods.recipes.gtceu.star_forge('patrick_star')
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
		.duration(432000)
		.EUt(ULV)
	
	// Star Forge Controller Block Recipe
	allthemods.recipes.gtceu.assembly_line('star_forge')
		.itemInputs(
			[
				'gtceu:uhv_machine_hull',
                '4x #gtceu:circuits/uhv',
				'4x gtceu:gravi_star',
				'4x gtceu:uv_field_generator',
				'64x gtceu:uhpic_chip',
				'64x gtceu:ruthenium_trinium_americium_neutronate_single_wire'
			])
		.inputFluids(
			[
				Fluid.of('gtceu:europium', 2592),
				Fluid.of('gtceu:soldering_alloy', 1152)
			])
		.itemOutputs('gtceu:star_forge')
        .stationResearch(b => b.researchStack(Item.of('gtceu:uv_field_generator')).CWUt(64).EUt(ZPM))
		.duration(2400)
		.EUt(ZPM)
	
	// Atomic Casing Recipes
	// Assembler Recipe
	allthemods.recipes.gtceu.assembler('atomic_casing')
		.itemInputs(
			[
				'gtceu:naquadah_alloy_frame',
				'6x gtceu:trinaquadalloy_plate'
			])
		.itemOutputs('2x gtceu:atomic_casing')
		.circuit(6)
		.duration(50)
		.EUt(16)
	// Shaped Crafting Grid Recipe
	allthemods.shaped('2x gtceu:atomic_casing', ['ABA', 'ACA', 'ADA'], {
		A: 'gtceu:trinaquadalloy_plate',
		B: '#forge:tools/hammers',
		C: 'gtceu:naquadah_alloy_frame',
		D: '#forge:tools/wrenches',
	  }).id('gtceu:shaped/atomic_casing')
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
