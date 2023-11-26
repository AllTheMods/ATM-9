ServerEvents.recipes(event => {
  
  // Fire for Standing Torch
  event.remove({ id: 'additional_lights:fire_for_standing_torch_s' })
  event.shaped('additional_lights:fire_for_standing_torch_s', ['S', 'C'], { S: '#forge:rods/wooden', C: '#minecraft:coals' })

  // GT Flawed Gems
  event.remove({ id: 'gtceu:shapeless/gem_to_gem_flawedgem_coal' })
  event.shaped('2x gtceu:coal_flawed_gem', ['CC'], { C: 'minecraft:coal' })
  event.remove({ id: 'gtceu:shapeless/gem_to_gem_flawedgem_lapis' })
  event.shaped('2x gtceu:lapis_flawed_gem', ['LL'], { L: 'minecraft:lapis_lazuli' })

  // GT Duplicate Removals
  event.remove({ id: 'gtceu:shaped/block_compress_nether_star' })
  event.remove({ id: 'gtceu:shaped/block_compress_ender_pearl' })
  event.remove({ id: 'gtceu:shaped/block_compress_flint' })

  // GT conflicts, Powah Uraninite
  event.remove({ id: 'gtceu:smelting/smelt_raw_uraninite_ore_to_ingot'})
  event.remove({ id: 'gtceu:blasting/smelt_raw_uraninite_ore_to_ingot'})
  event.remove({ id: 'gtceu:shaped/compress_uraninite_to_ore_block' })
  event.smelting('gtceu:uraninite_dust', 'gtceu:raw_uraninite').id('atm9:gtceu/smelting_smelt_raw_uraninite_ore_to_ingot')
  event.blasting('gtceu:uraninite_dust', 'gtceu:raw_uraninite').id('atm9:gtceu/blasting_smelt_raw_uraninite_ore_to_ingot')
  event.shapeless('gtceu:raw_uraninite_block', '9x gtceu:raw_uraninite').id('atm9:gtceu/shaped_compress_uraninite_to_ore_block')

  // Reborn Storage conflicts
  event.remove({ output: 'rebornstorage:small_item_disk' })
  event.remove({ output: 'rebornstorage:small_item_disk_part' })
  event.remove({ output: 'rebornstorage:medium_item_disk' })
  event.remove({ output: 'rebornstorage:medium_item_disk_part' })
  event.remove({ output: 'rebornstorage:large_item_disk' })
  event.remove({ output: 'rebornstorage:large_item_disk_part' })
  event.remove({ output: 'rebornstorage:larger_item_disk' })
  event.remove({ output: 'rebornstorage:larger_item_disk_part' })
  event.remove({ output: 'rebornstorage:small_fluid_disk' })
  event.remove({ output: 'rebornstorage:small_fluid_disk_part' })
  event.remove({ output: 'rebornstorage:medium_fluid_disk' })
  event.remove({ output: 'rebornstorage:medium_fluid_disk_part' })
  event.remove({ output: 'rebornstorage:large_fluid_disk' })
  event.remove({ output: 'rebornstorage:large_fluid_disk_part' })
  event.remove({ output: 'rebornstorage:larger_fluid_disk' })
  event.remove({ output: 'rebornstorage:larger_fluid_disk_part' })

  // Extra Storage conflicts
  event.remove({ output: 'extrastorage:advanced_importer' })
  event.remove({ output: 'extrastorage:advanced_exporter' })
  event.remove({ output: 'extrastorage:block_256k' })
  event.remove({ output: 'extrastorage:block_1024k' })
  event.remove({ output: 'extrastorage:block_4096k' })
  event.remove({ output: 'extrastorage:block_16384k' })
  event.remove({ output: 'extrastorage:block_16384k_fluid' })
  event.remove({ output: 'extrastorage:block_65536k_fluid' })
  event.remove({ output: 'extrastorage:block_262144k_fluid' })
  event.remove({ output: 'extrastorage:block_1048576k_fluid' })
  event.remove({ output: 'extrastorage:disk_256k' })
  event.remove({ output: 'extrastorage:disk_1024k' })
  event.remove({ output: 'extrastorage:disk_4096k' })
  event.remove({ output: 'extrastorage:disk_16384k' })
  event.remove({ output: 'extrastorage:disk_16384k_fluid' })
  event.remove({ output: 'extrastorage:disk_65536k_fluid' })
  event.remove({ output: 'extrastorage:disk_262144k_fluid' })
  event.remove({ output: 'extrastorage:disk_1048576k_fluid' })
  event.remove({ output: 'extrastorage:storagepart_256k' })
  event.remove({ output: 'extrastorage:storagepart_1024k' })
  event.remove({ output: 'extrastorage:storagepart_4096k' })
  event.remove({ output: 'extrastorage:storagepart_16384k' })
  event.remove({ output: 'extrastorage:storagepart_16384k_fluid' })
  event.remove({ output: 'extrastorage:storagepart_65536k_fluid' })
  event.remove({ output: 'extrastorage:storagepart_262144k_fluid' })
  event.remove({ output: 'extrastorage:storagepart_1048576k_fluid' })
})

