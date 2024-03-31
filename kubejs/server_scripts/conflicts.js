ServerEvents.recipes(event => {

  // Yellorium
  event.remove({ id: 'bigreactors:crafting/yellorium_component_to_storage' })
  event.remove({ id: 'bigreactors:crafting/yellorium_ingot_to_nugget' })
  
  // Fire for Standing Torch
  event.remove({ id: 'additional_lights:fire_for_standing_torch_s' })
  event.shaped('additional_lights:fire_for_standing_torch_s', ['S', 'C'], { S: '#forge:rods/wooden', C: '#minecraft:coals' })

  // GT Duplicate Removals
  event.remove({ id: 'gtceu:shaped/block_compress_nether_star' })
  event.remove({ id: 'gtceu:shaped/block_compress_ender_pearl' })
  event.remove({ id: 'gtceu:shaped/block_compress_flint' })

  // GT Duplicate Dusts
  event.remove({ id: 'gtceu:shapeless/dust_bronze'})
  event.remove({ id: 'gtceu:shapeless/dust_brass'})


  // GT conflicts, Powah Uraninite
  event.remove({ id: 'gtceu:smelting/smelt_raw_uraninite_ore_to_ingot'})
  event.remove({ id: 'gtceu:blasting/smelt_raw_uraninite_ore_to_ingot'})
  event.remove({ id: 'gtceu:shaped/compress_uraninite_to_ore_block' })
  event.smelting('gtceu:uraninite_dust', 'gtceu:raw_uraninite').id('atm9:gtceu/smelting_smelt_raw_uraninite_ore_to_ingot')
  event.blasting('gtceu:uraninite_dust', 'gtceu:raw_uraninite').id('atm9:gtceu/blasting_smelt_raw_uraninite_ore_to_ingot')
  event.shapeless('gtceu:raw_uraninite_block', '9x gtceu:raw_uraninite').id('atm9:gtceu/shaped_compress_uraninite_to_ore_block')

  // Reborn Storage conflicts
  event.remove({ id: 'rebornstorage:disks/small_item_disk' })
  event.remove({ id: 'rebornstorage:disks/small_item_storage_disk_from_storage_housing' })
  event.remove({ id: 'rebornstorage:parts/small_item_disk_part' })
  event.remove({ id: 'rebornstorage:disks/medium_item_disk' })
  event.remove({ id: 'rebornstorage:disks/medium_item_storage_disk_from_storage_housing' })
  event.remove({ id: 'rebornstorage:parts/medium_item_disk_part' })
  event.remove({ id: 'rebornstorage:disks/large_item_disk' })
  event.remove({ id: 'rebornstorage:disks/large_item_storage_disk_from_storage_housing' })
  event.remove({ id: 'rebornstorage:parts/large_item_disk_part' })
  event.remove({ id: 'rebornstorage:disks/larger_item_disk' })
  event.remove({ id: 'rebornstorage:disks/larger_item_storage_disk_from_storage_housing' })
  event.remove({ id: 'rebornstorage:parts/larger_item_disk_part' })
  event.remove({ id: 'rebornstorage:disks/small_fluid_disk' })
  event.remove({ id: 'rebornstorage:disks/small_fluid_storage_disk_from_storage_housing' })
  event.remove({ id: 'rebornstorage:parts/small_fluid_disk_part' })
  event.remove({ id: 'rebornstorage:disks/medium_fluid_disk' })
  event.remove({ id: 'rebornstorage:disks/medium_fluid_storage_disk_from_storage_housing' })
  event.remove({ id: 'rebornstorage:parts/medium_fluid_disk_part' })
  event.remove({ id: 'rebornstorage:disks/large_fluid_disk' })
  event.remove({ id: 'rebornstorage:disks/large_fluid_storage_disk_from_storage_housing' })
  event.remove({ id: 'rebornstorage:parts/large_fluid_disk_part' })
  event.remove({ id: 'rebornstorage:disks/larger_fluid_disk' })
  event.remove({ id: 'rebornstorage:disks/larger_fluid_storage_disk_from_storage_housing' })
  event.remove({ id: 'rebornstorage:parts/larger_fluid_disk_part' })

  // Extra Storage conflicts
  event.remove({ id: 'extrastorage:advanced_importer' })
  event.remove({ id: 'extrastorage:advanced_exporter' })
  event.remove({ id: 'extrastorage:storage_block/block_256k' })
  event.remove({ id: 'extrastorage:storage_block/block_1024k' })
  event.remove({ id: 'extrastorage:storage_block/block_4096k' })
  event.remove({ id: 'extrastorage:storage_block/block_16384k' })
  event.remove({ id: 'extrastorage:storage_block/block_16384k_fluid' })
  event.remove({ id: 'extrastorage:storage_block/block_65536k_fluid' })
  event.remove({ id: 'extrastorage:storage_block/block_262144k_fluid' })
  event.remove({ id: 'extrastorage:storage_block/block_1048576k_fluid' })
  event.remove({ id: 'extrastorage:disk/shapeless/disk_256k' })
  event.remove({ id: 'extrastorage:disk/shaped/disk_256k' })
  event.remove({ id: 'extrastorage:disk/shapeless/disk_1024k' })
  event.remove({ id: 'extrastorage:disk/shaped/disk_1024k' })
  event.remove({ id: 'extrastorage:disk/shapeless/disk_4096k' })
  event.remove({ id: 'extrastorage:disk/shaped/disk_4096k' })
  event.remove({ id: 'extrastorage:disk/shapeless/disk_16384k' })
  event.remove({ id: 'extrastorage:disk/shaped/disk_16384k' })
  event.remove({ id: 'extrastorage:disk/shapeless/disk_16384k_fluid' })
  event.remove({ id: 'extrastorage:disk/shaped/disk_16384k_fluid' })
  event.remove({ id: 'extrastorage:disk/shapeless/disk_65536k_fluid' })
  event.remove({ id: 'extrastorage:disk/shaped/disk_65536k_fluid' })
  event.remove({ id: 'extrastorage:disk/shapeless/disk_262144k_fluid' })
  event.remove({ id: 'extrastorage:disk/shaped/disk_262144k_fluid' })
  event.remove({ id: 'extrastorage:disk/shapeless/disk_1048576k_fluid' })
  event.remove({ id: 'extrastorage:disk/shaped/disk_1048576k_fluid' })
  event.remove({ id: 'extrastorage:part/storagepart_256k' })
  event.remove({ id: 'extrastorage:part/storagepart_1024k' })
  event.remove({ id: 'extrastorage:part/storagepart_4096k' })
  event.remove({ id: 'extrastorage:part/storagepart_16384k' })
  event.remove({ id: 'extrastorage:part/storagepart_16384k_fluid' })
  event.remove({ id: 'extrastorage:part/storagepart_65536k_fluid' })
  event.remove({ id: 'extrastorage:part/storagepart_262144k_fluid' })
  event.remove({ id: 'extrastorage:part/storagepart_1048576k_fluid' })



  // Blue Skies tools
  let planks = Ingredient.of('#minecraft:planks').subtract(Ingredient.of('#blue_skies:planks'))
  event.forEachRecipe({ id: /minecraft:wooden_(hoe|shovel|pickaxe|sword|axe)/ }, recipe => {
    let json = recipe.json
    let key = json.get('key')
    key.add('X', planks.toJson())
    json.add('key', key)
    recipe.json = json
  })
  event.forEachRecipe({ id: 'minecraft:stick' }, recipe => {
    let json = recipe.json
    let key = json.get('key')
    key.add('#', planks.toJson())
    json.add('key', key)
    recipe.json = json
  })

  let cobble = Ingredient.of('#quark:stone_tool_materials').subtract(Ingredient.of('#blue_skies:cobblestone'))
  event.forEachRecipe({ id: /quark:tweaks\/crafting\/utility\/tools\/stone_(hoe|shovel|pickaxe|sword|axe)/ }, recipe => {
    let json = recipe.json
    let key = json.get('key')
    key.add('X', cobble.toJson())
    json.add('key', key)
    recipe.json = json
  })

  // Rechiseled Chisel / Croptopia Knife
  event.remove({ id: 'rechiseled:chisel' })
  event.shaped('rechiseled:chisel', ['C ', ' S'], { C: '#forge:ingots/iron', S: '#forge:rods/wooden' }).noMirror().id(`kubejs:rechiseled/chisel`)
  event.remove({ id: 'croptopia:knife' })
  event.shaped('croptopia:knife', [' C', 'S '], { C: '#forge:ingots/iron', S: '#forge:rods/wooden' }).noMirror().id(`kubejs:croptopia/knife`)

  // Structurize / Construction Wand
  event.remove({ id: 'structurize:sceptergold' })
  event.shaped('structurize:sceptergold', ['C  ', ' S ', '  S'], { C: '#minecraft:stone_crafting_materials', S: '#forge:rods/wooden' }).noMirror().id(`kubejs:structurize/sceptergold`)
  event.remove({ id: 'constructionwand:stone_wand' })
  event.shaped('constructionwand:stone_wand', ['  C', ' S ', 'S  '], { C: '#minecraft:stone_crafting_materials', S: '#forge:rods/wooden' }).noMirror().id(`kubejs:constructionwand/stone_wand`)
  event.remove({ id: 'structurize:sceptersteel' })
  event.shaped('structurize:sceptersteel', ['C  ', ' S ', '  S'], { C: '#forge:ingots/iron', S: '#forge:rods/wooden' }).noMirror().id(`kubejs:structurize/sceptersteel`)
  event.remove({ id: 'constructionwand:iron_wand' })
  event.shaped('constructionwand:iron_wand', ['  C', ' S ', 'S  '], { C: '#forge:ingots/iron', S: '#forge:rods/wooden' }).noMirror().id(`kubejs:constructionwand/iron_wand`)

  // Remove minecraft recipes, mods add better versions
  event.remove({ id: 'minecraft:cake' })
  event.remove({ id: 'minecraft:beehive' })

  // quark's log to stick recipe, but botania safe
  event.remove({id: 'enderio:stick'})
  let logSticks = Ingredient.of('#minecraft:logs').subtract(Ingredient.of(['#botania:livingwood_logs', '#botania:dreamwood_logs']))
  event.shaped('16x minecraft:stick', ['s', 's'], { s: logSticks }).id('kubejs:easy_sticks')

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
    event.remove({ id: removeId })
  })

  //Bugs/"incorrect things" Fixes
  // Functional storage cheap drawers (1x technically conflicts with quark chest to vanilla chest)
  event.remove({id: 'functionalstorage:oak_drawer_alternate_x1'})
  event.remove({id: 'functionalstorage:oak_drawer_alternate_x2'})
  event.remove({id: 'functionalstorage:oak_drawer_alternate_x4'})

  // Incorrect ore smelting/blasting output, Supposed to be fixed in mc1.20 of DeeperDarker, not fixed in v1.2.1
  event.remove({id: 'deeperdarker:raw_iron_from_blasting_gloomslate_iron_ore'})
  event.remove({id: 'deeperdarker:raw_gold_from_blasting_gloomslate_gold_ore'})
  event.remove({id: 'deeperdarker:raw_copper_from_blasting_gloomslate_copper_ore'})
  event.remove({id: 'deeperdarker:raw_iron_from_smelting_gloomslate_iron_ore'})
  event.remove({id: 'deeperdarker:raw_gold_from_smelting_gloomslate_gold_ore'})
  event.remove({id: 'deeperdarker:raw_copper_from_smelting_gloomslate_copper_ore'})

  // Duplicate dust recipes, remove/fix/unify
  event.remove({id: 'thermal:signalum_dust_4'})
  event.remove({id: 'thermal:lumium_dust_4'})

  //enderium
  event.remove({id: 'thermal:enderium_dust_2'})
  event.remove({id: 'alltheores:enderium_dust_from_alloy_blending'})
  event.shaped('4x #forge:dusts/enderium',['LLL','DEE',"H  "],{
    L: '#forge:dusts/lead',
    D: '#forge:dusts/diamond',
    E: '#forge:ender_pearls',
    H: '#alltheores:ore_hammers'
  }).id('allthemods9:enderium_dust_handblend')

})
