ServerEvents.recipes(e => {
  e.remove({ id: 'mekanism:atomic_disassembler' })
  e.shaped('mekanism:atomic_disassembler', ['ITI', 'IAI', ' P '], {
    I: 'mekanism:alloy_infused',
    T: 'mekanism:energy_tablet',
    A: 'mekanism:alloy_atomic',
    P: 'allthemodium:allthemodium_pickaxe'
  })
  e.remove({ id: 'mekanism:meka_tool' })
  e.shaped('mekanism:meka_tool', ['UCU', 'TDT', 'PBP'], {
    U: 'mekanism:ultimate_control_circuit',
    C: 'mekanism:configurator',
    T: '#forge:plates/unobtainium',
    D: 'mekanism:atomic_disassembler',
    B: 'mekanism:basic_induction_cell',
    P: 'mekanism:pellet_polonium'
  })
  e.remove({ id: 'mekanism:upgrade/anchor' })

  // remove combiner recipes for ores
  e.remove({ type: 'mekanism:combining', id: /ore/ })
  // delete ethylene
  e.remove({ id: 'mekanism:reaction/substrate/water_hydrogen'})
  e.remove({ id: 'mekanism:reaction/substrate/ethene_oxygen'})
  e.remove({ id: 'mekanism:reaction/substrate/water_ethene'})
  //substrate
  e.custom({
    "type": "mekanism:reaction",
    "duration": 100,
    "fluidInput": {
      "amount": 10,
      "tag": "minecraft:water"
    },
    "gasInput": {
      "amount": 100,
      "gas": "mekanism:hydrogen"
    },
    "itemInput": {
      "amount": 2,
      "ingredient": {
        "tag": "forge:fuels/bio"
      }
    },
    "itemOutput": {
      "item": "mekanism:substrate"
    }
  }).id('kubejs:mek/ethene')
//substrate dupe
  e.custom({
    "type": "mekanism:reaction",
    "duration": 400,
    "energyRequired": 200,
    "fluidInput": {
      "amount": 200,
      "tag": "minecraft:water"
    },
    "gasInput": {
      "amount": 100,
      "gas": "mekanism:hydrogen"
    },
    "gasOutput": {
      "amount": 10,
      "gas": "mekanism:oxygen"
    },
    "itemInput": {
      "ingredient": {
        "item": "mekanism:substrate"
      }
    },
    "itemOutput": {
      "count": 8,
      "item": "mekanism:substrate"
    }
  })
//hdpe
  e.custom({
    "type": "mekanism:reaction",
    "duration": 60,
    "energyRequired": 1000,
    "fluidInput": {
      "amount": 50,
      "tag": "minecraft:water"
    },
    "gasInput": {
      "amount": 10,
      "gas": "mekanism:oxygen"
    },
    "itemInput": {
      "ingredient": {
        "item": "mekanism:substrate"
      }
    },
    "itemOutput": {
      "item": "mekanism:hdpe_pellet"
    }
  })
})
