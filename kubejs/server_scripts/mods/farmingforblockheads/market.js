/*
 This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
 As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
  farming for blockheads custom market additions
  authored by EnigmaQuip
  for use in ATM8
  Ported to ATM9 by Mitchell52

  List Gen
    /markethelper
    OP permission required
    only should need to be run on mod changes,
    generates a new marketitems.json file
*/

ServerEvents.commandRegistry(allthemods => {
  const { commands: Commands, arguments: Arguments, builtinSuggestions: Suggestions } = allthemods;
  allthemods.register(
    Commands.literal("markethelper")
      .requires(source => source.getServer().isSingleplayer() || source.hasPermission(2))
      .executes((ctx) => Market(ctx.source))
  )
})

function Market(source) {
  let saplings = {}
  let seeds = {}
  let flowers = {}
  let taggedSeeds = Ingredient.of('#forge:seeds').stacks
  taggedSeeds.forEach(seed => {
    let mod = seed.idLocation.namespace
    if (seeds[mod] == null) {
      seeds[mod] = []
    }
    seeds[mod].push(seed.id)
  })
  let taggedSaplings = Ingredient.of('#minecraft:saplings').stacks
  taggedSaplings.forEach(sapling => {
    let mod = sapling.idLocation.namespace
    if (saplings[mod] == null) {
      saplings[mod] = []
    }
    saplings[mod].push(sapling.id)
  })
  let taggedFlowers = Ingredient.of('#minecraft:flowers').stacks
  taggedFlowers.forEach(flower => {
    let mod = flower.idLocation.namespace
    if (mod == 'botania') {
      if (!flower.id.contains('mystical_flower')) {
        return
      }
    }
    if (flowers[mod] == null) {
      flowers[mod] = []
    }
    flowers[mod].push(flower.id)
  })
  JsonIO.write('kubejs/server_scripts/mods/farmingforblockheads/marketitems.json', { saplings: saplings, seeds: seeds, flowers: flowers })
  return 1
}

const FFBAPI = Java.loadClass('net.blay09.mods.farmingforblockheads.api.FarmingForBlockheadsAPI')

// Datapack Gen
ServerEvents.highPriorityData(allthemods => {
  allthemods.addJson('kubejs:farmingforblockheads_compat/atm.json', {
    groupOverrides: {
      "Croptopia Seeds": {
        enabled: false
      }
    }
  })
})
