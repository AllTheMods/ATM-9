function register_greg_ore(event, type, oretag) {
  var plain = oretag.split(":")[1]
  plain = plain.replace("_ore","")
  plain = plain.replace("deepslate_","")
  plain = plain.replace("nether_","")
  plain = plain.replace("endstone_","")
  var tag = `forge:ores/${type}/${plain}`
  //console.info(`${oretag} as ${tag}`)
  event.add(tag, oretag)
}

function registerCustomBlocksForGregtech(event) {
  var ores_stone = [
    'minecraft:iron_ore',
    'minecraft:gold_ore',
    'minecraft:emerald_ore',
    'minecraft:copper_ore',
    'minecraft:coal_ore',
    'minecraft:redstone_ore',
    'minecraft:lapis_ore',
    'minecraft:diamond_ore',
    'alltheores:aluminum_ore',
    'alltheores:lead_ore',
    'alltheores:nickel_ore',
    'alltheores:platinum_ore',
    'alltheores:silver_ore',
    'alltheores:tin_ore',
    'alltheores:ruby_ore',
    'alltheores:sapphire_ore',
  ];

  var ores_deepslate = [
    'minecraft:deepslate_iron_ore',
    'minecraft:deepslate_gold_ore',
    'minecraft:deepslate_emerald_ore',
    'minecraft:deepslate_copper_ore',
    'minecraft:deepslate_coal_ore',
    'minecraft:deepslate_redstone_ore',
    'minecraft:deepslate_lapis_ore',
    'minecraft:deepslate_diamond_ore',
    'alltheores:deepslate_lead_ore',
    'alltheores:deepslate_nickel_ore',
    'alltheores:deepslate_platinum_ore',
    'alltheores:deepslate_silver_ore',
    'alltheores:deepslate_tin_ore',
    'alltheores:deepslate_ruby_ore',
    'alltheores:deepslate_sapphire_ore',
  ]

  var ores_nether = [
    'minecraft:nether_gold_ore',
    'minecraft:nether_quartz_ore',
    'alltheores:nether_aluminum_ore',
    'alltheores:nether_lead_ore',
    'alltheores:nether_nickel_ore',
    'alltheores:nether_platinum_ore',
    'alltheores:nether_silver_ore',
    'alltheores:nether_tin_ore',
  ]

  var ores_end = [
    'alltheores:endstone_aluminum_ore'
  ]
  
  ores_stone.forEach((v_ore) => {
    register_greg_ore(event,"stone",v_ore)
  });

  ores_deepslate.forEach((v_ore) => {
    register_greg_ore(event,"deepslate",v_ore)
  });

  ores_nether.forEach((v_ore) => {
    register_greg_ore(event,"netherrack",v_ore)
  });

  ores_end.forEach((v_ore) => {
    register_greg_ore(event,"endstone",v_ore)
  });
}

ServerEvents.tags('item', event => {
  event.add('minecraft:boats', /byg:\w+?_boat/)
  event.add('minecraft:chest_boats', /byg:.+?_chest_boat/)
  event.add('forge:cheese', '#forge:cheeses')
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

  
  registerCustomBlocksForGregtech(event)
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

})

ServerEvents.tags('fluid', event => {
  event.remove('minecraft:water',[
    'ad_astra:oil','ad_astra:flowing_oil',
    'ad_astra:cryo_fuel','ad_astra:flowing_cryo_fuel',
    'ad_astra:fuel','ad_astra:flowing_fuel',
    'createaddition:flowing_seed_oil','createaddition:seed_oil'])
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
