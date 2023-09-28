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
  event.remove({ id: 'gtceu:shapeless/block_compress_nether_star' })
  event.remove({ id: 'gtceu:shapeless/block_compress_ender_pearl' })
  event.remove({ id: 'gtceu:shapeless/block_compress_flint' })

  // GT conflicts, Powah Uraninite
  event.remove({ id: 'gtceu:smelting/smelt_raw_uraninite_ore_to_ingot'})
  event.remove({ id: 'gtceu:blasting/smelt_raw_uraninite_ore_to_ingot'})
  event.smelting('gtceu:uraninite_dust', 'gtceu:raw_uraninite').id('atm9:gtceu/smelting_smelt_raw_uraninite_ore_to_ingot')
  event.blasting('gtceu:uraninite_dust', 'gtceu:raw_uraninite').id('atm9:gtceu/blasting_smelt_raw_uraninite_ore_to_ingot')
})

