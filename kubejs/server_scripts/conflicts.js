ServerEvents.recipes(event => {
  
  // Fire for Standing Torch
  event.remove({ id: 'additional_lights:fire_for_standing_torch_s' })
  event.shaped('additional_lights:fire_for_standing_torch_s', ['S', 'C'], { S: '#forge:rods/wooden', C: '#minecraft:coals' })

  // GT Flawed Gems
  event.remove({ id: 'gtceu:shapeless/gem_to_gem_flawedgem_coal' })
  event.shaped('2x gtceu:coal_flawed_gem', ['CC'], { C: 'minecraft:coal' })
  event.remove({ id: 'gtceu:shapeless/gem_to_gem_flawedgem_lapis' })
  event.shaped('2x gtceu:lapis_flawed_gem', ['LL'], { L: 'minecraft:lapis_lazuli' })

})

