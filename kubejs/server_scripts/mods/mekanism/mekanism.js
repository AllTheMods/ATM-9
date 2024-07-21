// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
  allthemods.remove({ id: 'mekanism:atomic_disassembler' })
  allthemods.shaped('mekanism:atomic_disassembler', ['ITI', 'IAI', ' P '], {
    I: 'mekanism:alloy_infused',
    T: 'mekanism:energy_tablet',
    A: 'mekanism:alloy_atomic',
    P: 'allthemodium:allthemodium_pickaxe'
  })
  allthemods.remove({ id: 'mekanism:meka_tool' })
  allthemods.shaped('mekanism:meka_tool', ['UCU', 'TDT', 'PBP'], {
    U: 'mekanism:ultimate_control_circuit',
    C: 'mekanism:configurator',
    T: '#forge:plates/unobtainium',
    D: 'mekanism:atomic_disassembler',
    B: 'mekanism:basic_induction_cell',
    P: 'mekanism:pellet_polonium'
  })
  allthemods.remove({ id: 'mekanism:upgrade/anchor' })

  // remove combiner recipes for ores
  allthemods.remove({ type: 'mekanism:combining', id: /ore/ })
  
  // GBG Recipe Change | Alfred
  allthemods.remove({ id: 'mekanismgenerators:generator/gas_burning' })
  allthemods.shaped( 'mekanismgenerators:gas_burning_generator', ['UBU', 'TDT', 'UBU'], {
	U: 'mekanism:ingot_refined_obsidian',
    B: 'mekanism:alloy_atomic',
    T: 'mekanismgenerators:bio_generator',
    D: 'mekanism:electrolytic_core'
  }).id('allthemods:mekanismgenerators/gas_burning_gen')
  
  // inert nether star
  allthemods.custom({
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
  }).id('allthemods:reaction/inert_star/water_ethene')

  // inert nether star duping
  allthemods.custom({
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
  }).id('allthemods:reaction/inert_star/water_neutron')

  // inert nether star activation
  allthemods.custom({
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
  }).id('allthemods:nucleosynthesizing/nether_star')
  
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
