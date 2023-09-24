ServerEvents.recipes(event => {
  event.remove({ id: 'silentgear:salvager' })
  event.shaped('silentgear:salvager', [
    ' M ',
    'CDC',
    'COC'
  ], {
    M: 'mininggadgets:upgrade_magnet',
    C: 'silentgear:crimson_steel_ingot',
    D: 'minecraft:diamond_block',
    O: 'minecraft:obsidian'
  })
  event.remove({id: 'silentgear:bronze_ingot'})
})
