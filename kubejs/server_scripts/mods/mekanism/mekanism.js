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
  /*
  e.remove({ id: 'mekanism:reaction/substrate/water_hydrogen'})
  e.remove({ id: 'mekanism:reaction/substrate/ethene_oxygen'})
  e.remove({ id: 'mekanism:reaction/substrate/water_ethene'})
  */
  
  // GBG Recipe Change | Alfred
  e.remove({ id: 'mekanismgenerators:generator/gas_burning' })
  e.shaped( 'mekanismgenerators:gas_burning_generator', ['UBU', 'TDT', 'UBU'], {
	U: 'mekanism:ingot_refined_obsidian',
    B: 'mekanism:alloy_atomic',
    T: 'mekanismgenerators:bio_generator',
    D: 'mekanism:electrolytic_core'
  }).id('kubejs:mekanismgenerators/gas_burning_gen')
  
  // inert nether star
  e.custom({
    "type": "mekanism:reaction",
    "duration": 100,
    "fluidInput": {
      "amount": 10,
      "tag": "minecraft:water"
    },
    "gasInput": {
      "amount": 100,
      "gas": "mekanism:ethene"
    },
    "itemInput": {
      "amount": 1,
      "ingredient": {
        "item": "minecraft:wither_skeleton_skull"
      }
    },
    "itemOutput": {
      "amount": 1,
      "item": "kubejs:inert_nether_star"
    },
    "gasOutput": {
      "amount": 100,
      "gas": "kubejs:neutron_gas"
    }
  }).id('kubejs:reaction/inert_star/water_ethene')

  // inert nether star duping
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
      "gas": "kubejs:neutron_gas"
    },
    "gasOutput": {
      "amount": 10,
      "gas": "mekanism:hydrogen"
    },
    "itemInput": {
      "ingredient": {
        "item": "kubejs:inert_nether_star"
      }
    },
    "itemOutput": {
      "count": 16,
      "item": "kubejs:inert_nether_star"
    }
  }).id('kubejs:reaction/inert_star/water_neutron')

  // inert nether star activation
  e.custom({
    "type": "mekanism:nucleosynthesizing",
    "itemInput": {
      "amount": 16,
      "ingredient": {
        "item": "kubejs:inert_nether_star"
      }
    },
    "gasInput": {
      "amount": 1,
      "gas": "mekanism:antimatter"
    },
    "output": {
      "count": 16,
      "item": "minecraft:nether_star"
    },
    "duration": 200
  }).id('kubejs:nucleosynthesizing/nether_star')
  
  //substrate
  
  /*
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
  }) */
})
