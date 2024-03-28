JEIEvents.hideItems(event => {
  event.hide(/extrastorage:(block|disk|storagepart)_.+/)
  event.hide(/rebornstorage:(small|medium|large|larger)_(item|fluid)_disk.*/)
  event.hide(/extrastorage:advanced_(importer|exporter)/)
  event.hide(/ae2:facade/)
  event.hide(['angelring:leadstone_angel_ring', 'angelring:hardened_angel_ring', 'angelring:reinforced_angel_ring', 'angelring:resonant_angel_ring'])
  event.hide('spirit:compressed_soul_sand')
  event.hide('reliquary:rod_of_lyssa')
  event.hide('mekanism:upgrade_anchor')
  event.hide('ars_nouveau:glyph_animate_block')
  event.hide([
    'absentbydesign:slab_tuff',
    'absentbydesign:stairs_tuff',
    'absentbydesign:wall_tuff',
    'absentbydesign:wall_calcite',
    'absentbydesign:stairs_calcite',
    'absentbydesign:slab_calcite'
  ])

  Color.DYE.forEach(color => {
    ['controller', 'creative_controller', 'grid', 'crafting_grid', 'pattern_grid', 'fluid_grid', 'network_receiver', 'network_transmitter', 'relay', 'detector', 'security_manager', 'wireless_transmitter', 'disk_manipulator', 'crafter', 'crafter_manager', 'crafting_monitor'].forEach(machine => {
      event.hide(`refinedstorage:${color}_${machine}`)
    })
  })

  if (global.chunk) {
    event.hide('mekanism:dimensional_stabilizer')
    event.hide('ae2:spatial_anchor')
  }
})
