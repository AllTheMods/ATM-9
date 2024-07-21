/*
 This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
 As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
  Mekanism items for processing stack
  Authored by EnigmaQuip

  DO NOT EDIT BELOW
  only the startup script should need editing
*/

ClientEvents.highPriorityAssets(allthemods => {
  const mekItems = ['clump', 'crystal', 'dirty_dust', 'shard']
  global.mekStackAdditions.forEach(entry => {
    allthemods.addLang(`slurry.kubejs.clean_${entry.material}`, snakeCaseToUpperCase(`clean_${entry.material}_slurry`))
    allthemods.addLang(`slurry.kubejs.dirty_${entry.material}`, snakeCaseToUpperCase(`dirty_${entry.material}_slurry`))
    mekItems.forEach(type => {
      allthemods.addLang(`item.kubejs.${type}_${entry.material}`, snakeCaseToUpperCase(`${entry.material}_${type}`))
    })
    if (entry.makeDust) {
      allthemods.addLang(`item.kubejs.dust_${entry.material}`, snakeCaseToUpperCase(`${entry.material}_dust`))
    }
  })
})

function snakeCaseToUpperCase(input) {
  return String(input)
    .split("_")
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(" ");
}

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
