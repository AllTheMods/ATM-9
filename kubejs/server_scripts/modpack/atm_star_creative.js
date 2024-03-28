/*
    Authored by Mitchell52, EnigmaQuip
    for AllTheMods 8
*/
ServerEvents.recipes(e => {
  function pressure(inputs, result, rCount, pressure) {
    e.custom({
      type: 'pneumaticcraft:pressure_chamber',
      inputs: inputs,
      pressure: pressure,
      results: [{
        item: result,
        count: rCount
      }]
    }).id(`kubejs:pressure/${result.replace(':', '/')}`)
  }

  ///# AE2
  e.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('megacells:mega_energy_cell').toJson(),
      Ingredient.of('megacells:mega_energy_cell').toJson(),
      Ingredient.of('allthetweaks:atm_star').toJson(),
      Ingredient.of('megacells:mega_energy_cell').toJson(),
      Ingredient.of('megacells:mega_energy_cell').toJson(),
    ],
    energy: '2147483647',
    result: Item.of('ae2:creative_energy_cell').toJson()
  }).id(`kubejs:energizing/ae2_creative_energy_cell`)

  ///# Ars Noveau
  e.shaped(Item.of('ars_nouveau:creative_spell_book', {
    mode: 0,
    spells: 'intangible,ignite,flare,strength,craft,cold_snap,rune,snare,slowfall,freeze,split,crush,smelt,summon_steed,accelerate,summon_vex,lightning,grow,dampen,touch,invisibility,extract,delay,light,duration_down,exchange,place_block,summon_wolves,shield,conjure_water,cut,harm,interact,blink,amplify,phantom_block,fell,extend_time,heal,leap,redstone_signal,pierce,harvest,fortune,break,pickup,launch,dispel,haste,ender_inventory,pull,explosion,fangs,aoe,gravity,self,aquatic,projectile,wither,gust'
  }),
    ['BSG', 'GGE', 'EER'],
    {
      B: Ingredient.of('ars_nouveau:archmage_spell_book').toJson(),
      S: Ingredient.of('allthetweaks:atm_star').toJson(),
      G: Ingredient.of('ars_nouveau:source_gem_block').toJson(),
      E: Ingredient.of('minecraft:ender_eye').toJson(),
      R: Ingredient.of('tombstone:soul_receptacle').toJson()
    }
  )

  e.shaped('ars_nouveau:creative_source_jar', ['GMG', 'GSG', 'GGG'], {
    G: '#forge:glass',
    S: 'allthetweaks:atm_star',
    M: 'ars_nouveau:source_gem_block'
  })

  
    ///# Botania
    e.shaped('botania:creative_pool', ['RMR', 'MSM', 'RMR'], {
      S: 'allthetweaks:atm_star',
      M: 'botania:mana_pool',
      R: '#botania:runes'
    }).id('kubejs:botania/creative_pool')
  
  e.shaped(Item.of('botania:mana_tablet', '{creative:1b,mana:500000}'), ['RMR', 'MSM', 'RMR'], {
    S: 'allthetweaks:atm_star',
    M: 'botania:mana_tablet',
    R: '#botania:runes'
  }).id('kubejs:botania/creative_tablet')

  
  ///# Create
  e.custom({
    type: "create:mechanical_crafting",
    pattern: ['CLC', 'HSH', 'LGL'],
    key: {
      C: Ingredient.of('create:cogwheel').toJson(),
      L: Ingredient.of('create:large_cogwheel').toJson(),
      H: Ingredient.of('create:shaft').toJson(),
      S: Ingredient.of('allthetweaks:atm_star').toJson(),
      G: Ingredient.of('create:gearbox').toJson()
    },
    result: Ingredient.of('create:creative_motor').toJson(),
    acceptMirrored: false
  }).id('kubejs:create/creative_motor')

  e.custom({
    type: 'create:mixing',
    ingredients: [
      Ingredient.of('create:blaze_cake').toJson(),
      Ingredient.of('allthetweaks:atm_star').toJson(),
      Ingredient.of('croptopia:tres_leche_cake').toJson()
    ],
    results: [Ingredient.of('create:creative_blaze_cake').toJson()],
    heatRequirement: 'superheated'
  })

  e.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('create:flywheel',).toJson(),
      Ingredient.of('allthetweaks:atm_star').toJson(),
      Ingredient.of('createaddition:alternator',).toJson()
    ],
    energy: '2147483647',
    result: Item.of('createaddition:creative_energy').toJson()
  }).id(`kubejs:energizing/createaddition_creative_energy`)
  
  

  ///# Integrated Dynamics
  e.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('integrateddynamics:energy_battery').toJson(),
      Ingredient.of('integrateddynamics:energy_battery').toJson(),
      Ingredient.of('allthetweaks:atm_star').toJson(),
      Ingredient.of('integrateddynamics:energy_battery').toJson(),
      Ingredient.of('integrateddynamics:energy_battery').toJson(),
    ],
    energy: '2147483647',
    result: Item.of('integrateddynamics:energy_battery_creative').toJson()
  }).id(`kubejs:energizing/integrateddynamics_energy_battery_creative`)

  ///# IronJetpacks
  e.shaped(Item.of('ironjetpacks:cell', { Id: "ironjetpacks:creative" }).strongNBT(), [
    ' A ',
    'BCB',
    ' A '
  ], {
    A: '#forge:storage_blocks/redstone',
    B: 'allthemodium:unobtainium_block',
    C: 'powah:battery_nitro'
  }).id('kubejs:ironjetpacks_creative_cell')

  e.shaped(Item.of('ironjetpacks:thruster', { Id: "ironjetpacks:creative" }).strongNBT(), [
    'ABA',
    'BCB',
    'ADA'
  ], {
    A: 'allthemodium:unobtainium_block',
    B: 'powah:nitro_crystal_block',
    C: Item.of('ironjetpacks:cell', { Id: "ironjetpacks:creative" }).strongNBT(),
    D: 'ironfurnaces:unobtainium_furnace'
  }).id('kubejs:ironjetpacks_creative_thruster')

  e.shaped(Item.of('ironjetpacks:capacitor', { Id: "ironjetpacks:creative" }), [
    'ACA',
    'BDB',
    'AEA'
  ], {
    A: 'allthemodium:unobtainium_block',
    B: 'mekanism:sps_casing',
    C: 'powah:reactor_nitro',
    D: 'mekanism:ultimate_induction_cell',
    E: 'powah:reactor_nitro'
  }).id('kubejs:ironjetpacks_creative_capacator')

  e.shaped(Item.of('ironjetpacks:jetpack', { Id: "ironjetpacks:creative" }).strongNBT(), [
    'ACA',
    'BFB',
    'DED'
  ], {
    A: 'mysticalagradditions:creative_essence',
    B: 'allthemodium:vibranium_allthemodium_alloy_block',
    C: Item.of('ironjetpacks:capacitor', { Id: "ironjetpacks:creative" }).strongNBT(),
    D: Item.of('ironjetpacks:thruster', { Id: "ironjetpacks:creative" }).strongNBT(),
    E: 'allthetweaks:atm_star',
    F: Item.of('ironjetpacks:jetpack', { Id: "ironjetpacks:unobtainium" }).strongNBT()
  }).id('kubejs:ironjetpacks_creative_jetpack')

  ///#Mekanism
  e.shaped('mekanism:creative_energy_cube', ['ATA', 'UCU', 'ATA'], {
    A: 'mekanism:alloy_atomic',
    T: 'mekanism:energy_tablet',
    U: 'allthemodium:unobtainium_block',
    C: 'mekanism:ultimate_energy_cube'
  }).id('kubejs:mekanism/creative_energy_cube')

  e.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('mekanism:creative_energy_cube',).toJson(),
      Ingredient.of('mekanism:creative_energy_cube',).toJson(),
      Ingredient.of('allthetweaks:atm_star').toJson(),
      Ingredient.of('mekanism:creative_energy_cube',).toJson(),
      Ingredient.of('mekanism:creative_energy_cube',).toJson(),
    ],
    energy: '2147483647',
    result: Item.of('mekanism:creative_energy_cube', '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}').toJson()
  }).id(`kubejs:energizing/mekanism_creative_energy_cube`)

  ///# Powah
  e.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('powah:energy_cell_nitro').toJson(),
      Ingredient.of('powah:energy_cell_nitro').toJson(),
      Ingredient.of('allthetweaks:atm_star').toJson(),
      Ingredient.of('powah:energy_cell_nitro').toJson(),
      Ingredient.of('powah:energy_cell_nitro').toJson(),
    ],
    energy: '2147483647',
    result: Item.of('powah:energy_cell_creative').toJson()
  }).id(`kubejs:energizing/powah_energy_cell_creative`)

  ///# Pnc
  pressure([
    { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:advanced_pressure_tube', 'count': 64 },
    { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:electrostatic_compressor', 'count': 1 },
    { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:advanced_pressure_tube', 'count': 64 },
    { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:flux_compressor', 'count': 1 },
    { 'type': 'pneumaticcraft:stacked_item', 'item': 'allthetweaks:atm_star', 'count': 1 },
    { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:advanced_air_compressor', 'count': 1 },
    { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:advanced_pressure_tube', 'count': 64 },
    { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:advanced_liquid_compressor', 'count': 1 },
    { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:advanced_pressure_tube', 'count': 64 }
  ], 'pneumaticcraft:creative_compressor', 1, 4.9)

  pressure([
    { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:compressed_iron_block', 'count': 64 },
    { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:compressed_iron_block', 'count': 64 },
    { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:compressed_iron_block', 'count': 64 },
    { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:compressed_iron_block', 'count': 64 },
    { 'type': 'pneumaticcraft:stacked_item', 'item': 'allthetweaks:atm_star', 'count': 1 },
    { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:compressed_iron_block', 'count': 64 },
    { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:compressed_iron_block', 'count': 64 },
    { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:compressed_iron_block', 'count': 64 },
    { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:compressed_iron_block', 'count': 64 }
  ], 'pneumaticcraft:creative_compressed_iron_block', 1, 4.9)


  ///# Refined storage
  e.custom({
    type: 'powah:energizing',
    ingredients: [Ingredient.of('refinedstorage:wireless_grid').toJson()],
    energy: '2147483647',
    result: Item.of('refinedstorage:creative_wireless_grid').toJson()
  }).id(`kubejs:energizing/refinedstorage_creative_wireless_grid`)
  e.custom({
    type: 'powah:energizing',
    ingredients: [Ingredient.of('refinedstorage:wireless_fluid_grid').toJson()],
    energy: '2147483647',
    result: Item.of('refinedstorage:creative_wireless_fluid_grid').toJson()
  }).id(`kubejs:energizing/refinedstorage_creative_wireless_fluid_grid`)
  e.custom({
    type: 'powah:energizing',
    ingredients: [Ingredient.of('refinedstorage:wireless_crafting_monitor').toJson()],
    energy: '2147483647',
    result: Item.of('refinedstorage:creative_wireless_crafting_monitor').toJson()
  }).id(`kubejs:energizing/refinedstorage_creative_wireless_crafting_monitor`)
  e.custom({
    type: 'powah:energizing',
    ingredients: [Ingredient.of('refinedstorageaddons:wireless_crafting_grid').toJson()],
    energy: '2147483647',
    result: Item.of('refinedstorageaddons:creative_wireless_crafting_grid').toJson()
  }).id(`kubejs:energizing/refinedstorage_creative_wireless_crafting_grid`)
  e.custom({
    type: 'powah:energizing',
    ingredients: [Ingredient.of('refinedstorage:portable_grid').toJson()],
    energy: '2147483647',
    result: Item.of('refinedstorage:creative_portable_grid').toJson()
  }).id(`kubejs:energizing/refinedstorage_creative_portable_grid`)
  e.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('refinedstorage:controller').toJson(),
      Ingredient.of('allthetweaks:atm_star').toJson()
    ],
    energy: '2147483647',
    result: Item.of('refinedstorage:creative_controller').toJson()
  }).id(`kubejs:energizing/refinedstorage_creative_controller`)

  ///# Universal Grid
  e.shaped('universalgrid:creative_wireless_universal_grid', ['ABA', 'CBD', 'ABA'], {
    A: 'allthemodium:unobtainium_ingot',
    B: 'refinedstorage:quartz_enriched_iron',
    C: 'refinedstorageaddons:creative_wireless_crafting_grid',
    D: 'universalgrid:wireless_universal_grid'
  }).id('kubejs:universalgrid/creative_wireless_universal_grid')

})
