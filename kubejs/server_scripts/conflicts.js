// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

  // Yellorium
  allthemods.remove({ id: 'bigreactors:crafting/yellorium_component_to_storage' })
  allthemods.remove({ id: 'bigreactors:crafting/yellorium_ingot_to_nugget' })
  
  // Fire for Standing Torch
  allthemods.remove({ id: 'additional_lights:fire_for_standing_torch_s' })
  allthemods.shaped('additional_lights:fire_for_standing_torch_s', ['S', 'C'], { S: '#forge:rods/wooden', C: '#minecraft:coals' })

  // GT Duplicate Removals
  allthemods.remove({ id: 'gtceu:shaped/block_compress_nether_star' })
  allthemods.remove({ id: 'gtceu:shaped/block_compress_ender_pearl' })
  allthemods.remove({ id: 'gtceu:shaped/block_compress_flint' })

  // GT Duplicate Dusts
  allthemods.remove({ id: 'gtceu:shapeless/dust_bronze'})
  allthemods.remove({ id: 'gtceu:shapeless/dust_brass'})


  // GT conflicts, Powah Uraninite
  allthemods.remove({ id: 'gtceu:smelting/smelt_raw_uraninite_ore_to_ingot'})
  allthemods.remove({ id: 'gtceu:blasting/smelt_raw_uraninite_ore_to_ingot'})
  allthemods.remove({ id: 'gtceu:shaped/compress_uraninite_to_ore_block' })
  allthemods.smelting('gtceu:uraninite_dust', 'gtceu:raw_uraninite').id('atm9:gtceu/smelting_smelt_raw_uraninite_ore_to_ingot')
  allthemods.blasting('gtceu:uraninite_dust', 'gtceu:raw_uraninite').id('atm9:gtceu/blasting_smelt_raw_uraninite_ore_to_ingot')
  allthemods.shapeless('gtceu:raw_uraninite_block', '9x gtceu:raw_uraninite').id('atm9:gtceu/shaped_compress_uraninite_to_ore_block')

  // Reborn Storage conflicts
  allthemods.remove({ id: 'rebornstorage:disks/small_item_disk' })
  allthemods.remove({ id: 'rebornstorage:disks/small_item_storage_disk_from_storage_housing' })
  allthemods.remove({ id: 'rebornstorage:parts/small_item_disk_part' })
  allthemods.remove({ id: 'rebornstorage:disks/medium_item_disk' })
  allthemods.remove({ id: 'rebornstorage:disks/medium_item_storage_disk_from_storage_housing' })
  allthemods.remove({ id: 'rebornstorage:parts/medium_item_disk_part' })
  allthemods.remove({ id: 'rebornstorage:disks/large_item_disk' })
  allthemods.remove({ id: 'rebornstorage:disks/large_item_storage_disk_from_storage_housing' })
  allthemods.remove({ id: 'rebornstorage:parts/large_item_disk_part' })
  allthemods.remove({ id: 'rebornstorage:disks/larger_item_disk' })
  allthemods.remove({ id: 'rebornstorage:disks/larger_item_storage_disk_from_storage_housing' })
  allthemods.remove({ id: 'rebornstorage:parts/larger_item_disk_part' })
  allthemods.remove({ id: 'rebornstorage:disks/small_fluid_disk' })
  allthemods.remove({ id: 'rebornstorage:disks/small_fluid_storage_disk_from_storage_housing' })
  allthemods.remove({ id: 'rebornstorage:parts/small_fluid_disk_part' })
  allthemods.remove({ id: 'rebornstorage:disks/medium_fluid_disk' })
  allthemods.remove({ id: 'rebornstorage:disks/medium_fluid_storage_disk_from_storage_housing' })
  allthemods.remove({ id: 'rebornstorage:parts/medium_fluid_disk_part' })
  allthemods.remove({ id: 'rebornstorage:disks/large_fluid_disk' })
  allthemods.remove({ id: 'rebornstorage:disks/large_fluid_storage_disk_from_storage_housing' })
  allthemods.remove({ id: 'rebornstorage:parts/large_fluid_disk_part' })
  allthemods.remove({ id: 'rebornstorage:disks/larger_fluid_disk' })
  allthemods.remove({ id: 'rebornstorage:disks/larger_fluid_storage_disk_from_storage_housing' })
  allthemods.remove({ id: 'rebornstorage:parts/larger_fluid_disk_part' })

  // Extra Storage conflicts
  allthemods.remove({ id: 'extrastorage:advanced_importer' })
  allthemods.remove({ id: 'extrastorage:advanced_exporter' })
  allthemods.remove({ id: 'extrastorage:storage_block/block_256k' })
  allthemods.remove({ id: 'extrastorage:storage_block/block_1024k' })
  allthemods.remove({ id: 'extrastorage:storage_block/block_4096k' })
  allthemods.remove({ id: 'extrastorage:storage_block/block_16384k' })
  allthemods.remove({ id: 'extrastorage:storage_block/block_16384k_fluid' })
  allthemods.remove({ id: 'extrastorage:storage_block/block_65536k_fluid' })
  allthemods.remove({ id: 'extrastorage:storage_block/block_262144k_fluid' })
  allthemods.remove({ id: 'extrastorage:storage_block/block_1048576k_fluid' })
  allthemods.remove({ id: 'extrastorage:disk/shapeless/disk_256k' })
  allthemods.remove({ id: 'extrastorage:disk/shaped/disk_256k' })
  allthemods.remove({ id: 'extrastorage:disk/shapeless/disk_1024k' })
  allthemods.remove({ id: 'extrastorage:disk/shaped/disk_1024k' })
  allthemods.remove({ id: 'extrastorage:disk/shapeless/disk_4096k' })
  allthemods.remove({ id: 'extrastorage:disk/shaped/disk_4096k' })
  allthemods.remove({ id: 'extrastorage:disk/shapeless/disk_16384k' })
  allthemods.remove({ id: 'extrastorage:disk/shaped/disk_16384k' })
  allthemods.remove({ id: 'extrastorage:disk/shapeless/disk_16384k_fluid' })
  allthemods.remove({ id: 'extrastorage:disk/shaped/disk_16384k_fluid' })
  allthemods.remove({ id: 'extrastorage:disk/shapeless/disk_65536k_fluid' })
  allthemods.remove({ id: 'extrastorage:disk/shaped/disk_65536k_fluid' })
  allthemods.remove({ id: 'extrastorage:disk/shapeless/disk_262144k_fluid' })
  allthemods.remove({ id: 'extrastorage:disk/shaped/disk_262144k_fluid' })
  allthemods.remove({ id: 'extrastorage:disk/shapeless/disk_1048576k_fluid' })
  allthemods.remove({ id: 'extrastorage:disk/shaped/disk_1048576k_fluid' })
  allthemods.remove({ id: 'extrastorage:part/storagepart_256k' })
  allthemods.remove({ id: 'extrastorage:part/storagepart_1024k' })
  allthemods.remove({ id: 'extrastorage:part/storagepart_4096k' })
  allthemods.remove({ id: 'extrastorage:part/storagepart_16384k' })
  allthemods.remove({ id: 'extrastorage:part/storagepart_16384k_fluid' })
  allthemods.remove({ id: 'extrastorage:part/storagepart_65536k_fluid' })
  allthemods.remove({ id: 'extrastorage:part/storagepart_262144k_fluid' })
  allthemods.remove({ id: 'extrastorage:part/storagepart_1048576k_fluid' })



  // Blue Skies tools
  let planks = Ingredient.of('#minecraft:planks').subtract(Ingredient.of('#blue_skies:planks'))
  allthemods.forEachRecipe({ id: /minecraft:wooden_(hoe|shovel|pickaxe|sword|axe)/ }, recipe => {
    let json = recipe.json
    let key = json.get('key')
    key.add('X', planks.toJson())
    json.add('key', key)
    recipe.json = json
  })
  allthemods.forEachRecipe({ id: 'minecraft:stick' }, recipe => {
    let json = recipe.json
    let key = json.get('key')
    key.add('#', planks.toJson())
    json.add('key', key)
    recipe.json = json
  })

  let cobble = Ingredient.of('#quark:stone_tool_materials').subtract(Ingredient.of('#blue_skies:cobblestone'))
  allthemods.forEachRecipe({ id: /quark:tweaks\/crafting\/utility\/tools\/stone_(hoe|shovel|pickaxe|sword|axe)/ }, recipe => {
    let json = recipe.json
    let key = json.get('key')
    key.add('X', cobble.toJson())
    json.add('key', key)
    recipe.json = json
  })

  // Rechiseled Chisel / Croptopia Knife
  allthemods.remove({ id: 'rechiseled:chisel' })
  allthemods.shaped('rechiseled:chisel', ['C ', ' S'], { C: '#forge:ingots/iron', S: '#forge:rods/wooden' }).noMirror().id(`allthemods:rechiseled/chisel`)
  allthemods.remove({ id: 'croptopia:knife' })
  allthemods.shaped('croptopia:knife', [' C', 'S '], { C: '#forge:ingots/iron', S: '#forge:rods/wooden' }).noMirror().id(`allthemods:croptopia/knife`)

  // Structurize / Construction Wand
  allthemods.remove({ id: 'structurize:sceptergold' })
  allthemods.shaped('structurize:sceptergold', ['C  ', ' S ', '  S'], { C: '#minecraft:stone_crafting_materials', S: '#forge:rods/wooden' }).noMirror().id(`allthemods:structurize/sceptergold`)
  allthemods.remove({ id: 'constructionwand:stone_wand' })
  allthemods.shaped('constructionwand:stone_wand', ['  C', ' S ', 'S  '], { C: '#minecraft:stone_crafting_materials', S: '#forge:rods/wooden' }).noMirror().id(`allthemods:constructionwand/stone_wand`)
  allthemods.remove({ id: 'structurize:sceptersteel' })
  allthemods.shaped('structurize:sceptersteel', ['C  ', ' S ', '  S'], { C: '#forge:ingots/iron', S: '#forge:rods/wooden' }).noMirror().id(`allthemods:structurize/sceptersteel`)
  allthemods.remove({ id: 'constructionwand:iron_wand' })
  allthemods.shaped('constructionwand:iron_wand', ['  C', ' S ', 'S  '], { C: '#forge:ingots/iron', S: '#forge:rods/wooden' }).noMirror().id(`allthemods:constructionwand/iron_wand`)

  // Remove minecraft recipes, mods add better versions
  allthemods.remove({ id: 'minecraft:cake' })
  allthemods.remove({ id: 'minecraft:beehive' })

  // quark's log to stick recipe, but botania safe
  allthemods.remove({id: 'enderio:stick'})
  let logSticks = Ingredient.of('#minecraft:logs').subtract(Ingredient.of(['#botania:livingwood_logs', '#botania:dreamwood_logs']))
  allthemods.shaped('16x minecraft:stick', ['s', 's'], { s: logSticks }).id('allthemods:easy_sticks')

  // duplicate abd and quark
  let abdRemovals = [
    'absentbydesign:slab_tuff',
    'absentbydesign:stairs_tuff',
    'absentbydesign:wall_tuff',
    'absentbydesign:wall_calcite',
    'absentbydesign:stairs_calcite',
    'absentbydesign:slab_calcite'
  ]
  abdRemovals.forEach(removeId => {
    allthemods.remove({ id: removeId })
  })

  //Bugs/"incorrect things" Fixes
  // Functional storage cheap drawers (1x technically conflicts with quark chest to vanilla chest)
  allthemods.remove({id: 'functionalstorage:oak_drawer_alternate_x1'})
  allthemods.remove({id: 'functionalstorage:oak_drawer_alternate_x2'})
  allthemods.remove({id: 'functionalstorage:oak_drawer_alternate_x4'})

  // Incorrect ore smelting/blasting output, Supposed to be fixed in mc1.20 of DeeperDarker, not fixed in v1.2.1
  allthemods.remove({id: 'deeperdarker:raw_iron_from_blasting_gloomslate_iron_ore'})
  allthemods.remove({id: 'deeperdarker:raw_gold_from_blasting_gloomslate_gold_ore'})
  allthemods.remove({id: 'deeperdarker:raw_copper_from_blasting_gloomslate_copper_ore'})
  allthemods.remove({id: 'deeperdarker:raw_iron_from_smelting_gloomslate_iron_ore'})
  allthemods.remove({id: 'deeperdarker:raw_gold_from_smelting_gloomslate_gold_ore'})
  allthemods.remove({id: 'deeperdarker:raw_copper_from_smelting_gloomslate_copper_ore'})

  // Duplicate dust recipes, remove/fix/unify
  allthemods.remove({id: 'thermal:signalum_dust_4'})
  allthemods.remove({id: 'thermal:lumium_dust_4'})

  //enderium
  allthemods.remove({id: 'thermal:enderium_dust_2'})
  allthemods.remove({id: 'alltheores:enderium_dust_from_alloy_blending'})
  allthemods.shaped('4x #forge:dusts/enderium',['LLL','DEE',"H  "],{
    L: '#forge:dusts/lead',
    D: '#forge:dusts/diamond',
    E: '#forge:ender_pearls',
    H: '#alltheores:ore_hammers'
  }).id('allthemods9:enderium_dust_handblend')

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
