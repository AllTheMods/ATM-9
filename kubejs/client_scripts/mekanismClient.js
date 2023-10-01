/*
  Mekanism items for processing stack
  Authored by EnigmaQuip

  DO NOT EDIT BELOW
  only the startup script should need editing
*/

ClientEvents.highPriorityAssets(event => {
  const mekItems = ['clump', 'crystal', 'dirty_dust', 'shard']
  global.mekStackAdditions.forEach(entry => {
    event.addLang(`slurry.kubejs.clean_${entry.material}`, snakeCaseToUpperCase(`clean_${entry.material}_slurry`))
    event.addLang(`slurry.kubejs.dirty_${entry.material}`, snakeCaseToUpperCase(`dirty_${entry.material}_slurry`))
    mekItems.forEach(type => {
      event.addLang(`item.kubejs.${type}_${entry.material}`, snakeCaseToUpperCase(`${entry.material}_${type}`))
    })
    if (entry.makeDust) {
      event.addLang(`item.kubejs.dust_${entry.material}`, snakeCaseToUpperCase(`${entry.material}_dust`))
    }
  })
})

function snakeCaseToUpperCase(input) {
  return String(input)
    .split("_")
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(" ");
}