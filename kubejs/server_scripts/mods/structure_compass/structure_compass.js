ServerEvents.recipes(event => {
 event.remove({id: 'structurecompass:structure_compass'})
 event.shaped('structurecompass:structure_compass', [
    'NAN',
    'ACA',
    'NAN'
  ], {
    A: 'allthemodium:allthemodium_ingot',
    N: 'minecraft:netherite_ingot',
    C: 'naturescompass:naturescompass',
  })
  })
