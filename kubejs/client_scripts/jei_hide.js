// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

JEIEvents.hideItems(allthemods => {
  allthemods.hide(/extrastorage:(block|disk|storagepart)_.+/)
  allthemods.hide(/rebornstorage:(small|medium|large|larger)_(item|fluid)_disk.*/)
  allthemods.hide(/extrastorage:advanced_(importer|exporter)/)
  allthemods.hide(/ae2:facade/)
  allthemods.hide(['angelring:leadstone_angel_ring', 'angelring:hardened_angel_ring', 'angelring:reinforced_angel_ring', 'angelring:resonant_angel_ring'])
  allthemods.hide('spirit:compressed_soul_sand')
  allthemods.hide('reliquary:rod_of_lyssa')
  allthemods.hide('mekanism:upgrade_anchor')
  allthemods.hide('ars_nouveau:glyph_animate_block')
  allthemods.hide([
    'absentbydesign:slab_tuff',
    'absentbydesign:stairs_tuff',
    'absentbydesign:wall_tuff',
    'absentbydesign:wall_calcite',
    'absentbydesign:stairs_calcite',
    'absentbydesign:slab_calcite'
  ])

  Color.DYE.forEach(color => {
    ['controller', 'creative_controller', 'grid', 'crafting_grid', 'pattern_grid', 'fluid_grid', 'network_receiver', 'network_transmitter', 'relay', 'detector', 'security_manager', 'wireless_transmitter', 'disk_manipulator', 'crafter', 'crafter_manager', 'crafting_monitor'].forEach(machine => {
      allthemods.hide(`refinedstorage:${color}_${machine}`)
    })
  })

  if (global.chunk) {
    allthemods.hide('mekanism:dimensional_stabilizer')
    allthemods.hide('ae2:spatial_anchor')
  }
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
