ServerEvents.recipes(event => {
  // Dragon Soul
  event.shaped('allthetweaks:dragon_soul', ['CDA', 'SNI', 'BGE'], {
    C: 'mysticalagradditions:dragon_scale',
    D: 'occultism:soul_gem',
    A: 'ends_delight:non_hatchable_dragon_egg',
    S: [Item.of('blue_skies:poison_arc', '{ArcLevel:1}').strongNBT(),Item.of('blue_skies:poison_arc', '{ArcLevel:2}').strongNBT(),'twilightforest:snow_queen_trophy'],
    N: 'allthemodium:piglich_heart_block',
    I: [Item.of('blue_skies:nature_arc', '{ArcLevel:1}').strongNBT(),Item.of('blue_skies:nature_arc', '{ArcLevel:2}').strongNBT(),'twilightforest:snow_queen_trophy'],
    B: 'botania:life_essence',
	G: 'productivebees:inactive_dragon_egg',
    E: 'ars_nouveau:summon_focus'
  }).id('kubejs:allthetweaks/dragon_soul')

  // Dimensional Seed Recipe
  event.shaped('allthetweaks:dimensional_seed', ['ABC', 'DEF', 'GHI'], {
    A: 'allthecompressed:netherrack_6x',
    B: 'allthecompressed:dirt_6x',
    C: 'allthecompressed:obsidian_5x',
    D: 'allthetweaks:mini_exit',
    E: 'allthetweaks:mini_nether',
    F: 'allthetweaks:mini_end',
    G: 'allthecompressed:end_stone_5x',
    H: 'allthecompressed:emerald_block_4x',
    I: 'allthecompressed:diamond_block_4x'
  }).id('kubejs:allthetweaks/dimensional_seed')

    // Withers Compass
    event.shaped('allthetweaks:withers_compass', ['DCD', 'ABA', 'DED'], {
      A: 'cataclysm:abyssal_sacrifice',
      B: 'industrialforegoing:wither_builder',
      C: 'deeperdarker:heart_of_the_deep',
      D: 'bloodmagic:speedrune2',
      E: 'cataclysm:void_forge'
    }).id('kubejs:allthetweaks/withers_compass')

  // Philosopher's Fuel
  event.shaped('allthetweaks:philosophers_fuel', ['ABC', 'DEF', 'GHI'], {
  A: 'generatorgalore:ender_generator',
	B: 'ironfurnaces:million_furnace'  ,
	C: 'bigreactors:insanite_block' ,
	D: Item.of('evilcraft:flesh_rejuvenated', '{Fluid:{Amount:0,FluidName:"minecraft:empty"},capacity:10000}'),
	E: 'mysticalagradditions:insanium_coal_block',
  F: 'forbidden_arcanus:deorum_block',
	G: 'mysticalagriculture:awakened_supremium_furnace',
	H: 'twilightforest:twilight_portal_miniature_structure',
  I: 'silentgear:tyrian_steel_block'
  }).id('kubejs:allthetweaks/philosophers_fuel')

  // Improbable Probability Device
  event.shaped('allthetweaks:improbable_probability_device', ['ABA', 'CGE', 'FDF'], {
    A: 'mekanism:pellet_antimatter',
    B: 'computercraft:pocket_computer_advanced',
    C: ['extradisks:1048576k_storage_part', 'extradisks:1048576k_fluid_storage_part', 'megacells:cell_component_256m'],
    D: 'advgenerators:power_capacitor_tier3',
    E: 'rftoolsutility:flight_module',
    F: Item.of('powah:battery_nitro', '{powah_tile_data:{energy_stored_main_energy:2000000000L}}').weakNBT(),
    G: 'ad_astra:jet_suit'
    }).id('kubejs:allthetweaks/improbable_probability_device')
  
    // Nexium Emitter
    event.shaped('allthetweaks:nexium_emitter', ['A B', ' CF', 'GED'], {
      A: 'powah:player_transmitter_nitro',
      B: [Item.of('ae2wtlib:wireless_universal_terminal', '{crafting:1b,internalMaxPower:4800000.0d,pattern_access:1b,pattern_encoding:1b}'), Item.of('universalgrid:wireless_universal_grid', '{gridType:0}')],
      F: [Item.of('mekanism:module_gravitational_modulating_unit')],
      D: 'create:mechanical_arm',
      E: 'ae2:singularity',
      C: 'immersiveengineering:railgun',
      G: 'exchangers:end_exchanger'
    }).id('kubejs:allthetweaks/nexium_emitter')

  // Pulsating Black Hole
  event.custom({
    type: 'pneumaticcraft:pressure_chamber',
    inputs: [
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'irons_spellbooks:fire_upgrade_orb', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'ae2:quantum_ring', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:micromissiles', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'forbidden_arcanus:dark_rune_block', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'thermal_extra:rf_coil_xfer_augment_5', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'occultism:stable_wormhole', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'mythicbotany:mjoellnir', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'apotheosis:vial_of_expulsion', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'evilcraft:lightning_bomb', 'count': 1 }
    ],
    pressure: 4.9,
    results: [
      {
        'item': 'allthetweaks:pulsating_black_hole'
      }
    ]
  }).id('kubejs:pressure/allthetweaks/pulsating_black_hole')

  // Oblivion Shard
  event.shaped('allthetweaks:oblivion_shard', [' AB', 'ACA', 'BA '], {
    A: 'forbidden_arcanus:eternal_stella',
    C: Item.of('evilcraft:mace_of_destruction', '{Fluid: {FluidName: "evilcraft:blood", Amount: 4000}}').weakNBT(),
    B: 'evilcraft:piercing_vengeance_focus'
  }).id('kubejs:allthetweaks/oblivion_shard')

  // Creative Essence
  event.shaped('mysticalagradditions:creative_essence', ['CAC', 'ABA', 'CAC'], {
    A: 'mysticalagradditions:insanium_block',
    C: 'mysticalagradditions:insanium_gemstone_block',
    B: 'mysticalagriculture:master_infusion_crystal'
  }).id('kubejs:allthetweaks/creative_essence')
})