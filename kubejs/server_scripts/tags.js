// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.tags('item', allthemods => {
  allthemods.add('minecraft:boats', /byg:\w+?_boat/)
  allthemods.add('minecraft:chest_boats', /byg:.+?_chest_boat/)
  allthemods.add('forge:plastic', 'pneumaticcraft:plastic')
  allthemods.add('forge:dusts/ender', 'ae2:ender_dust')
  allthemods.add('ars_nouveau:golem/shard', ['minecraft:amethyst_shard', 'ae2:certus_quartz_crystal'])
  allthemods.add('forge:raw_materials', ['silentgear:raw_azure_silver', 'silentgear:raw_crimson_iron'])
  allthemods.add('forge:rubber', ['ftbic:rubber','industrialforegoing:dryrubber','thermal:cured_rubber'])
  allthemods.add('mysticalagriculture:essences', [
    'mysticalagriculture:allthemodium_essence',
    'mysticalagriculture:azure_silver_essence',
    'mysticalagriculture:crimson_iron_essence',
    'mysticalagriculture:unobtainium_essence',
    'mysticalagriculture:vibranium_essence',
  ])
  allthemods.add('mysticalagriculture:seeds', [
    'mysticalagriculture:allthemodium_seeds',
    'mysticalagriculture:azure_silver_seeds',
    'mysticalagriculture:crimson_iron_seeds',
    'mysticalagriculture:unobtainium_seeds',
    'mysticalagriculture:vibranium_seeds',
  ])
  allthemods.add('forge:dusts', 'alltheores:netherite_dust')
  allthemods.add('forge:dusts/netherite', 'alltheores:netherite_dust')

  allthemods.add('forbidden_arcanus:modifier/eternal_incompatible',[
    '#alltheores:ore_hammers','@ftbic','minecraft:nether_star','bloodmagic:sanguinereverter','#occultism:miners/ores','apotheosis:potion_charm'
  ])

  // add Productive Bee blocktags as item tags for the GT Apiary to work
  allthemods.add('productivebees:flowers/glowing_flowers', ['minecraft:glowstone', 'minecraft:shroomlight', 'minecraft:redstone_lamp'])
  allthemods.add('productivebees:flowers/crystalline', ['minecraft:quartz_block', 'minecraft:quartz_pillar', 'minecraft:nether_quartz_ore', 'alltheores:other_quartz_ore', 'botania:dark_quartz', 'botania:mana_quartz', 'botania:blaze_quartz', 'botania:lavendar_quartz', 'botania:red_quartz', 'botania:elf_quartz', 'botania:sunny_quartz', 'productivebees:quartz_netherrack'])
  allthemods.add('productivebees:flowers/swamp_flowers', ['minecraft:cherry_leaves', 'minecraft:flowering_azalea_leaves', 'minecraft:mangrove_propagule', 'minecraft:flowering_azalea', 'minecraft:dandelion', 'minecraft:poppy', 'minecraft:blue_orchid', 'minecraft:allium', 'minecraft:azure_bluet', 'minecraft:red_tulip', 'minecraft:orange_tulip', 'minecraft:white_tulip', 'minecraft:pink_tulip', 'minecraft:oxeye_daisy', 'minecraft:cornflower', 'minecraft:lily_of_the_valley', 'minecraft:torchflower', 'minecraft:wither_rose', 'minecraft:pink_petals', 'minecraft:sunflower', 'minecraft:lilac', 'minecraft:rose_bush', 'minecraft:peony', 'minecraft:pitcher_plant', 'minecraft:lily_pad'])
  allthemods.add('productivebees:flowers/cupric_flowers', ['minecraft:copper_block', 'minecraft:cut_copper', 'minecraft:exposed_copper', 'minecraft:exposed_cut_copper', 'minecraft:weathered_copper', 'minecraft:weathered_cut_copper', 'minecraft:oxidized_copper', 'minecraft:oxidized_cut_copper', 'minecraft:waxed_copper_block', 'minecraft:waxed_exposed_copper', 'minecraft:waxed_weathered_copper', 'minecraft:waxed_oxidized_copper', 'minecraft:copper_ore', 'minecraft:deepslate_copper_ore', 'minecraft:raw_copper_block', 'minecraft:lightning_rod'])
  allthemods.add('productivebees:flowers/souled_flowers', ['minecraft:soul_sand', 'minecraft:soul_soil'])
  allthemods.add('productivebees:flowers/redstone', ['minecraft:redstone_block', 'minecraft:redstone_ore', 'minecraft:deepslate_redstone_ore', 'minecraft:redstone_torch', 'minecraft:redstone_lamp', 'minecraft:redstone', 'alltheores:other_redstone_ore', 'deeperdarker:sculk_stone_redstone_ore', 'deeperdarker:gloomslate_redstone_ore', 'gtceu:redstone_ore', 'gtceu:deepslate_redstone_ore', 'gtceu:endstone_redstone_ore', 'gtceu:netherrack_redstone_ore'])
  allthemods.add('productivebees:flowers/prismarine', ['minecraft:sea_lantern', 'minecraft:prismarine', 'minecraft:prismarine_bricks', 'minecraft:dark_prismarine'])
  allthemods.add('productivebees:flowers/magmatic_flowers', ['minecraft:magma_block', 'minecraft:nether_wart'])
  allthemods.add('productivebees:flowers/fiery', 'minecraft:magma_block')
  allthemods.add('productivebees:flowers/ender', ['minecraft:chorus_plant', 'minecraft:chorus_flower'])
  allthemods.add('productivebees:flowers/graves', '#tombstone:decorative_graves')
  allthemods.add('productivebees:flowers/draconic_flowers', 'minecraft:dragon_egg')
  allthemods.add('productivebees:flowers/burning', 'minecraft:magma_block')
  allthemods.add('productivebees:flowers/ferric_flowers', ['minecraft:iron_block', 'minecraft:iron_bars', 'minecraft:iron_door', 'minecraft:iron_trapdoor', 'minecraft:iron_ore', 'minecraft:deepslate_iron_ore', 'minecraft:raw_iron_block', 'minecraft:cauldron', 'minecraft:hopper', 'minecraft:anvil', 'minecraft:chipped_anvil', 'minecraft:damaged_anvil'])
  allthemods.add('productivebees:flowers/wither_flowers', 'minecraft:wither_rose')
  allthemods.add('productivebees:flowers/gilded_flowers', ['minecraft:gilded_blackstone', 'minecraft:gold_block', 'minecraft:light_weighted_pressure_plate', 'minecraft:gold_ore', 'minecraft:deepslate_gold_ore', 'minecraft:nether_gold_ore', 'minecraft:raw_gold_block'])
  allthemods.add('kubejs:bee/pepto_bismol/flowers', '#minecraft:flowers')
  allthemods.add('kubejs:bee/zombie/flowers', '#minecraft:flowers')
  allthemods.add('kubejs:bee/plastic/flowers', '#minecraft:flowers')
  allthemods.add('kubejs:bee/sticky_resin/flowers', '#minecraft:flowers')
  allthemods.add('kubejs:bee/menril/flowers', '#minecraft:flowers')
  allthemods.add('kubejs:bee/energized_glowstone/flowers', '#minecraft:flowers')

  //Fix Mythicbotany tags
  allthemods.add('forge:raw_materials/elementium', 'mythicbotany:raw_elementium')
  allthemods.add('forge:storage_blocks/raw_elementium', 'mythicbotany:raw_elementium_block')

  allthemods.remove('forge:shears', 'allthemodium:alloy_paxel')
  
  allthemods.remove('forge:ingots/naquadah', 'sgjourney:naquadah')
  allthemods.remove('forge:ingots/naquadah_alloy', 'sgjourney:naquadah')
  allthemods.remove('forge:ingots/naquadah_alloy', 'sgjourney:naquadah_alloy')
  allthemods.remove('forge:purified_ores/naquadah', 'sgjourney:pure_naquadah')
  allthemods.remove('forge:rods/naquadah_alloy', 'sgjourney:naquadah_rod')
  allthemods.remove('forge:raw_materials/naquadah', 'sgjourney:raw_naquadah')


  //Salt fixes (iarspider)
  // - croptopia
  allthemods.add('forge:dusts', 'croptopia:salt')
  allthemods.add('forge:dusts/salt', 'croptopia:salt')
  allthemods.add('supplementaries:hourglass_dusts', 'croptopia:salt')
  allthemods.add('minecolonies:reduceable_ingredient', 'croptopia:salt')
  // - mek
  allthemods.add('forge:storage_blocks', 'mekanism:block_salt')
	allthemods.add('minecolonies:storage_blocks', 'mekanism:block_salt')
	allthemods.add('forge:storage_blocks/salt', 'mekanism:block_salt')
  // - railcraft
  allthemods.remove('forge:salt', 'railcraft:saltpeter_dust')
	allthemods.remove('forge:dusts/salt', 'railcraft:saltpeter_dust')
	allthemods.remove('forge:salts', 'railcraft:saltpeter_dust')
	allthemods.add('forge:dusts/potassium_nitrate', 'railcraft:saltpeter_dust')
	allthemods.add('forge:dusts', 'railcraft:saltpeter_dust')
	allthemods.add('forge:dusts/saltpeter', 'railcraft:saltpeter_dust')
	allthemods.add('forge:dusts/niter', 'railcraft:saltpeter_dust')
	allthemods.add('mysticalagriculture:material/saltpeter', 'railcraft:saltpeter_dust')
	allthemods.add('supplementaries:hourglass_dusts', 'railcraft:saltpeter_dust')

})

ServerEvents.tags('block', allthemods => {
  allthemods.add('buildinggadgets:blacklist/generic', '#forge:relocation_not_supported')
  allthemods.add('ae2:blacklisted/spatial', '#forge:relocation_not_supported')
  allthemods.add('forge:relocation_not_supported', [/productivebees:.+/, 'minecraft:beehive', 'minecraft:bee_nest', /integrateddynamics:.+/, '@waystones'])
  allthemods.add('ars_nouveau:golem/budding', [
    'minecraft:budding_amethyst',
    'ae2:damaged_budding_quartz',
    'ae2:chipped_budding_quartz',
    'ae2:flawed_budding_quartz',
    'ae2:flawless_budding_quartz'
  ])
  allthemods.add('industrialforegoingsouls:cant_accelerate', [
    'thermal:machine_insolator',
    'industrialforegoing:stasis_chamber',
    'industrialforegoing:laser_drill',
    '#productivebees:advanced_beehives',
    'industrialforegoing:hydroponic_bed'
  ])
  allthemods.add('ars_nouveau:golem/cluster', ['minecraft:amethyst_cluster', 'ae2:quartz_cluster'])
  allthemods.add('mysticalagriculture:crops', [
    'mysticalagriculture:allthemodium_crop',
    'mysticalagriculture:azure_silver_crop',
    'mysticalagriculture:crimson_iron_crop',
    'mysticalagriculture:unobtainium_crop',
    'mysticalagriculture:vibranium_crop'
  ])
  
  allthemods.add('minecraft:beacon_base_blocks', [
    'allthemodium:vibranium_allthemodium_alloy_block',
    'allthemodium:unobtainium_allthemodium_alloy_block',
    'allthemodium:unobtainium_vibranium_alloy_block',
    'allthetweaks:atm_star_block'
  ])

  allthemods.add('entangled:invalid_targets', ['@megacells','@expatternprovider','@cabletiers','@ae2','@refinedstorage'])

})

ServerEvents.tags('fluid', allthemods => {
  allthemods.remove('minecraft:water',[
    'ad_astra:oil','ad_astra:flowing_oil',
    'ad_astra:cryo_fuel','ad_astra:flowing_cryo_fuel',
    'ad_astra:fuel','ad_astra:flowing_fuel',
    'createaddition:flowing_seed_oil','createaddition:seed_oil',
    'createaddition:bioethanol','createaddition:flowing_bioethanol'])
  allthemods.add('forge:oil', '#forge:crude_oil')
})

ServerEvents.tags('entity_type', allthemods => {
  allthemods.add('kubejs:mob_blacklist', [/productivebees:.+/, 'allthemodium:piglich', 'artifacts:mimic', 'minecraft:iron_golem','minecraft:wither'])
  allthemods.add('mob_grinding_utils:no_swab', '#kubejs:mob_blacklist')
  allthemods.add('mob_grinding_utils:no_spawn', '#kubejs:mob_blacklist')
  allthemods.add('pneumaticcraft:vacuum_trap_blacklisted', '#kubejs:mob_blacklist')
  allthemods.add('industrialforegoing:mob_duplicator_blacklist', '#kubejs:mob_blacklist')
  allthemods.add('ars_nouveau:drygmy_blacklist', [/productivebees:.+/, 'artifacts:mimic'])
  allthemods.add('spirit:soul_cage_blacklisted', '#kubejs:mob_blacklist')
})

ServerEvents.tags('worldgen/biome', allthemods => {
  allthemods.add('botania:mystical_flower_spawnlist', 'allthemodium:mining')
  allthemods.add('botania:mystical_mushroom_spawnlist', [
    'allthemodium:the_other', 'allthemodium:soul_sand_valley', 'allthemodium:warped_forest',
    'allthemodium:desert_hills', 'allthemodium:desert', 'allthemodium:crimson_forest', 'allthemodium:basalt_deltas'])
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
