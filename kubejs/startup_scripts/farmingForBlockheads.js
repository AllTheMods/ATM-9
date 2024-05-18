/*
  This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
  As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

  farming for blockheads custom market additions
  authored by EnigmaQuip
  for use in ATM8
  Ported to ATM9 by Mitchell52
*/

const FFBAPI = Java.loadClass('net.blay09.mods.farmingforblockheads.api.FarmingForBlockheadsAPI')

// list of items to not add to the Market
let MarketBlackList = [
  "twilightforest:time_sapling",
  "twilightforest:mining_sapling",
  "twilightforest:sorting_sapling",
  "twilightforest:transformation_sapling",
  "occultism:otherworld_sapling",
  "occultism:otherworld_sapling_natural",
  "ars_nouveau:magebloom_crop"
]

ForgeEvents.onEvent('net.blay09.mods.farmingforblockheads.api.MarketRegistryReloadEvent$Post', allthemods => {
  global.MarketRegistry(allthemods)
})

global.MarketRegistry = (allthemods) => {
  let market = JsonIO.read('kubejs/server_scripts/mods/farmingforblockheads/marketitems.json')
  let category = {
    saplings: FFBAPI.getMarketCategorySaplings(),
    seeds: FFBAPI.getMarketCategorySeeds(),
    flowers: FFBAPI.getMarketCategoryFlowers()
  }
  market.forEach((key, type) => {
    type.forEach((mod, list) => {
      list.forEach(item => {
        if (!FFBAPI.getMarketEntry(item)) {
          if (!MarketBlackList.includes(item)) {
            FFBAPI.registerMarketEntry(item, 'minecraft:emerald', category[key])
          }
        }
      })
    })
  })
}

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
