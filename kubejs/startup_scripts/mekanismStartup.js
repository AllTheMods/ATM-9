/*
  Mekanism items for processing stack
  Authored by EnigmaQuip

  if using existing dust, dust must be defined until kjs tag loading fixed
  material at a minimum should have an ore associated with it at #forge:ores/material
*/

global.mekStackAdditions = [
  {material:'allthemodium', color:'#fed95a', makeDust: false},
  {material:'vibranium', color:'#26de88', makeDust: false},
  {material:'unobtainium', color:'#d152e3', makeDust: false},
  {material:'aluminum', color:'#b1b9ba', makeDust: false},
  {material:'nickel', color:'#d4cf9b', makeDust: false},
  {material:'platinum', color:'#72cbec', makeDust: false},
  {material:'silver', color:'#748494', makeDust: false},
  {material:'zinc', color:'#487048', makeDust: false},
  {material:'crimson_iron', color:'#fc9aad', makeDust: false},
  {material:'azure_silver', color:'#e89ffc', makeDust: false}
]

// DO NOT EDIT BELOW THIS LINE

const $Slurry = Java.loadClass('mekanism.api.chemical.slurry.Slurry')
const $SlurryBuilder = Java.loadClass('mekanism.api.chemical.slurry.SlurryBuilder')
const $Gas = Java.loadClass('mekanism.api.chemical.gas.Gas')
const $GasBuilder = Java.loadClass('mekanism.api.chemical.gas.GasBuilder')

StartupEvents.registry('item', event => {
  const mekItems = ['clump', 'crystal', 'dirty_dust', 'shard']
  function mekStack(name, color) {
    mekItems.forEach(type => {
      event.create(`${type}_${name}`)
        .texture('layer0', 'mekanism:item/empty')
        .texture('layer1', `mekanism:item/${type}`)
        .texture('layer2', `mekanism:item/${type}_overlay`)
        .color(1, color)
        .tag(`mekanism:${type}s`)
        .tag(`mekanism:${type}s/${name}`)
    })
  }
  global.mekStackAdditions.forEach(entry => {
    mekStack(entry.material, entry.color)
    if (entry.makeDust) {
      event.create(`dust_${entry.material}`)
        .texture('layer0', 'mekanism:item/empty')
        .texture('layer1', `mekanism:item/dust`)
        .color(1, entry.color)
        .tag(`forge:dusts`)
        .tag(`forge:dusts/${entry.material}`)
    }
  })
})

StartupEvents.registry('mekanism:slurry', event => {
  global.mekStackAdditions.forEach(entry => {
    event.createCustom(`clean_${entry.material}`, () => $Slurry($SlurryBuilder.clean().ore(`forge:ores/${entry.material}`).tint(Color.of(entry.color).getRgbJS())))
    event.createCustom(`dirty_${entry.material}`, () => $Slurry($SlurryBuilder.dirty().ore(`forge:ores/${entry.material}`).tint(Color.of(entry.color).getRgbJS())))
  })
})

StartupEvents.registry('mekanism:gas', event => {
  event.createCustom(`neutron_gas`, () => $Gas($GasBuilder.builder()))
})