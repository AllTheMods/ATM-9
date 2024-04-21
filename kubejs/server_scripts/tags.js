ServerEvents.tags('item', event => {
  event.add('minecraft:boats', /byg:\w+?_boat/)
  event.add('minecraft:chest_boats', /byg:.+?_chest_boat/)
  event.add('forge:plastic', 'pneumaticcraft:plastic')
  event.add('forge:dusts/ender', 'ae2:ender_dust')
  event.add('ars_nouveau:golem/shard', ['minecraft:amethyst_shard', 'ae2:certus_quartz_crystal'])
  event.add('forge:raw_materials', ['silentgear:raw_azure_silver', 'silentgear:raw_crimson_iron'])
  event.add('forge:rubber', ['ftbic:rubber','industrialforegoing:dryrubber','thermal:cured_rubber'])
  event.add('mysticalagriculture:essences', [
    'mysticalagriculture:allthemodium_essence',
    'mysticalagriculture:azure_silver_essence',
    'mysticalagriculture:crimson_iron_essence',
    'mysticalagriculture:unobtainium_essence',
    'mysticalagriculture:vibranium_essence',
  ])
  event.add('mysticalagriculture:seeds', [
    'mysticalagriculture:allthemodium_seeds',
    'mysticalagriculture:azure_silver_seeds',
    'mysticalagriculture:crimson_iron_seeds',
    'mysticalagriculture:unobtainium_seeds',
    'mysticalagriculture:vibranium_seeds',
  ])
  event.add('forge:dusts', 'alltheores:netherite_dust')
  event.add('forge:dusts/netherite', 'alltheores:netherite_dust')

  event.add('forbidden_arcanus:modifier/eternal_incompatible',[
    '#alltheores:ore_hammers','@ftbic','minecraft:nether_star','bloodmagic:sanguinereverter','#occultism:miners/ores','apotheosis:potion_charm'
  ])

  // add Productive Bee blocktags as item tags for the GT Apiary to work
  event.add('productivebees:flowers/glowing_flowers', ['minecraft:glowstone', 'minecraft:shroomlight', 'minecraft:redstone_lamp'])
  event.add('productivebees:flowers/crystalline', ['minecraft:quartz_block', 'minecraft:quartz_pillar', 'minecraft:nether_quartz_ore', 'alltheores:other_quartz_ore', 'botania:dark_quartz', 'botania:mana_quartz', 'botania:blaze_quartz', 'botania:lavendar_quartz', 'botania:red_quartz', 'botania:elf_quartz', 'botania:sunny_quartz', 'productivebees:quartz_netherrack'])
  event.add('productivebees:flowers/swamp_flowers', ['minecraft:cherry_leaves', 'minecraft:flowering_azalea_leaves', 'minecraft:mangrove_propagule', 'minecraft:flowering_azalea', 'minecraft:dandelion', 'minecraft:poppy', 'minecraft:blue_orchid', 'minecraft:allium', 'minecraft:azure_bluet', 'minecraft:red_tulip', 'minecraft:orange_tulip', 'minecraft:white_tulip', 'minecraft:pink_tulip', 'minecraft:oxeye_daisy', 'minecraft:cornflower', 'minecraft:lily_of_the_valley', 'minecraft:torchflower', 'minecraft:wither_rose', 'minecraft:pink_petals', 'minecraft:sunflower', 'minecraft:lilac', 'minecraft:rose_bush', 'minecraft:peony', 'minecraft:pitcher_plant', 'minecraft:lily_pad'])
  event.add('productivebees:flowers/cupric_flowers', ['minecraft:copper_block', 'minecraft:cut_copper', 'minecraft:exposed_copper', 'minecraft:exposed_cut_copper', 'minecraft:weathered_copper', 'minecraft:weathered_cut_copper', 'minecraft:oxidized_copper', 'minecraft:oxidized_cut_copper', 'minecraft:waxed_copper_block', 'minecraft:waxed_exposed_copper', 'minecraft:waxed_weathered_copper', 'minecraft:waxed_oxidized_copper', 'minecraft:copper_ore', 'minecraft:deepslate_copper_ore', 'minecraft:raw_copper_block', 'minecraft:lightning_rod'])
  event.add('productivebees:flowers/souled_flowers', ['minecraft:soul_sand', 'minecraft:soul_soil'])
  event.add('productivebees:flowers/redstone', ['minecraft:redstone_block', 'minecraft:redstone_ore', 'minecraft:deepslate_redstone_ore', 'minecraft:redstone_torch', 'minecraft:redstone_lamp', 'minecraft:redstone', 'alltheores:other_redstone_ore', 'deeperdarker:sculk_stone_redstone_ore', 'deeperdarker:gloomslate_redstone_ore', 'gtceu:redstone_ore', 'gtceu:deepslate_redstone_ore', 'gtceu:endstone_redstone_ore', 'gtceu:netherrack_redstone_ore'])
  event.add('productivebees:flowers/prismarine', ['minecraft:sea_lantern', 'minecraft:prismarine', 'minecraft:prismarine_bricks', 'minecraft:dark_prismarine'])
  event.add('productivebees:flowers/magmatic_flowers', ['minecraft:magma_block', 'minecraft:nether_wart'])
  event.add('productivebees:flowers/fiery', 'minecraft:magma_block')
  event.add('productivebees:flowers/ender', ['minecraft:chorus_plant', 'minecraft:chorus_flower'])
  event.add('productivebees:flowers/graves', '#tombstone:decorative_graves')
  event.add('productivebees:flowers/draconic_flowers', 'minecraft:dragon_egg')
  event.add('productivebees:flowers/burning', 'minecraft:magma_block')
  event.add('productivebees:flowers/ferric_flowers', ['minecraft:iron_block', 'minecraft:iron_bars', 'minecraft:iron_door', 'minecraft:iron_trapdoor', 'minecraft:iron_ore', 'minecraft:deepslate_iron_ore', 'minecraft:raw_iron_block', 'minecraft:cauldron', 'minecraft:hopper', 'minecraft:anvil', 'minecraft:chipped_anvil', 'minecraft:damaged_anvil'])
  event.add('productivebees:flowers/wither_flowers', 'minecraft:wither_rose')
  event.add('productivebees:flowers/gilded_flowers', ['minecraft:gilded_blackstone', 'minecraft:gold_block', 'minecraft:light_weighted_pressure_plate', 'minecraft:gold_ore', 'minecraft:deepslate_gold_ore', 'minecraft:nether_gold_ore', 'minecraft:raw_gold_block'])
  event.add('kubejs:bee/pepto_bismol/flowers', '#minecraft:flowers')
  event.add('kubejs:bee/zombie/flowers', '#minecraft:flowers')
  event.add('kubejs:bee/plastic/flowers', '#minecraft:flowers')
  event.add('kubejs:bee/sticky_resin/flowers', '#minecraft:flowers')
  event.add('kubejs:bee/menril/flowers', '#minecraft:flowers')
  event.add('kubejs:bee/energized_glowstone/flowers', '#minecraft:flowers')

  //Fix Mythicbotany tags
  event.add('forge:raw_materials/elementium', 'mythicbotany:raw_elementium')
  event.add('forge:storage_blocks/raw_elementium', 'mythicbotany:raw_elementium_block')

  event.remove('forge:shears', 'allthemodium:alloy_paxel')
  
  event.remove('forge:ingots/naquadah', 'sgjourney:naquadah')
  event.remove('forge:ingots/naquadah_alloy', 'sgjourney:naquadah')
  event.remove('forge:ingots/naquadah_alloy', 'sgjourney:naquadah_alloy')
  event.remove('forge:purified_ores/naquadah', 'sgjourney:pure_naquadah')
  event.remove('forge:rods/naquadah_alloy', 'sgjourney:naquadah_rod')
  event.remove('forge:raw_materials/naquadah', 'sgjourney:raw_naquadah')
})

ServerEvents.tags('block', event => {
  event.add('buildinggadgets:blacklist/generic', '#forge:relocation_not_supported')
  event.add('ae2:blacklisted/spatial', '#forge:relocation_not_supported')
  event.add('forge:relocation_not_supported', [/productivebees:.+/, 'minecraft:beehive', 'minecraft:bee_nest', /integrateddynamics:.+/, '@waystones'])
  event.add('ars_nouveau:golem/budding', [
    'minecraft:budding_amethyst',
    'ae2:damaged_budding_quartz',
    'ae2:chipped_budding_quartz',
    'ae2:flawed_budding_quartz',
    'ae2:flawless_budding_quartz'
  ])
  event.add('ars_nouveau:golem/cluster', ['minecraft:amethyst_cluster', 'ae2:quartz_cluster'])
  event.add('mysticalagriculture:crops', [
    'mysticalagriculture:allthemodium_crop',
    'mysticalagriculture:azure_silver_crop',
    'mysticalagriculture:crimson_iron_crop',
    'mysticalagriculture:unobtainium_crop',
    'mysticalagriculture:vibranium_crop'
  ])
  
  event.add('minecraft:beacon_base_blocks', [
    'allthemodium:vibranium_allthemodium_alloy_block',
    'allthemodium:unobtainium_allthemodium_alloy_block',
    'allthemodium:unobtainium_vibranium_alloy_block',
    'allthetweaks:atm_star_block'
  ])

  event.add('entangled:invalid_targets', ['@megacells','@expatternprovider','@cabletiers','@ae2','@refinedstorage'])

})

ServerEvents.tags('fluid', event => {
  event.remove('minecraft:water',[
    'ad_astra:oil','ad_astra:flowing_oil',
    'ad_astra:cryo_fuel','ad_astra:flowing_cryo_fuel',
    'ad_astra:fuel','ad_astra:flowing_fuel',
    'createaddition:flowing_seed_oil','createaddition:seed_oil',
    'createaddition:bioethanol','createaddition:flowing_bioethanol'])
  event.add('forge:oil', '#forge:crude_oil')
})

ServerEvents.tags('entity_type', event => {
  event.add('kubejs:mob_blacklist', [/productivebees:.+/, 'allthemodium:piglich', 'artifacts:mimic', 'minecraft:iron_golem','minecraft:wither'])
  event.add('mob_grinding_utils:no_swab', '#kubejs:mob_blacklist')
  event.add('mob_grinding_utils:no_spawn', '#kubejs:mob_blacklist')
  event.add('pneumaticcraft:vacuum_trap_blacklisted', '#kubejs:mob_blacklist')
  event.add('industrialforegoing:mob_duplicator_blacklist', '#kubejs:mob_blacklist')
  event.add('ars_nouveau:drygmy_blacklist', [/productivebees:.+/, 'artifacts:mimic'])
  event.add('spirit:soul_cage_blacklisted', '#kubejs:mob_blacklist')
})

ServerEvents.tags('worldgen/biome', event => {
  event.add('botania:mystical_flower_spawnlist', 'allthemodium:mining')
  event.add('botania:mystical_mushroom_spawnlist', [
    'allthemodium:the_other', 'allthemodium:soul_sand_valley', 'allthemodium:warped_forest',
    'allthemodium:desert_hills', 'allthemodium:desert', 'allthemodium:crimson_forest', 'allthemodium:basalt_deltas'])
})
