ServerEvents.recipes(event => {
 event.remove({id: 'minecolonies:supplychestdeployer'})
 event.shaped('minecolonies:supplychestdeployer', [
    ' B ',
    'III',
    'RRR'
  ], {
    B: 'minecraft:white_banner',
    I: 'minecraft:iron_bars',
    R: '#minecraft:chest_boats'
  })
  })
