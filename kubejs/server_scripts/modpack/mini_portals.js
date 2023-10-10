ServerEvents.recipes(event => {
	
// Twilight Mini Structure
	event.custom({
	"type": "mysticalagriculture:awakening",
	"essences": [
    {
      "item": "mysticalagriculture:air_essence",
      "count": 40
    },
    {
      "item": "mysticalagriculture:earth_essence",
      "count": 40
    },
    {
      "item": "mysticalagriculture:water_essence",
      "count": 40
    },
    {
      "item": "mysticalagriculture:fire_essence",
      "count": 40
    }
  ],
  "input": {
    "item": "twilightforest:snow_queen_trophy"
  },
  "ingredients": [
    {
      "item": "twilightforest:fiery_block"
    },
    {
      "item": "twilightforest:knightmetal_block"
    },
    {
      "item": "twilightforest:steeleaf_block"
    },
    {
      "item": "twilightforest:carminite_block"
    }
  ],
  "result": {
    "item": "twilightforest:twilight_portal_miniature_structure"
	}
	}).id(`kubejs:awakening/twilight_portal_miniature_structure`)

// Mini Nether
	event.shaped('allthetweaks:mini_nether', ['ADA', 'BCB', 'AEA'], {
    A: 'minecraft:obsidian',
    B: 'minecraft:nether_star',
    C: Item.of('mekanism:teleportation_core', "{HideFlags:1,display:{Name:'[{\"text\":\"Nether Infused Teleportation Core\",\"italic\":false}]'}}").enchant('unbreaking', 1).strongNBT().toJson(),
	D: 'minecraft:wither_skeleton_skull',
	E: 'minecraft:warped_nylium'

  }).id('kubejs:allthetweaks/mini_nether')

// Nether Infused Teleportation Core
  event.custom({
    type: "apotheosis:enchanting",
    input: {
      item: "mekanism:teleportation_core"
    },
    requirements: {
      eterna: 40,
      quanta: 15,
      arcana: 60
    },
    max_requirements: {
      eterna: -1,
      quanta: 25,
      arcana: -1
    },
    result: Item.of('mekanism:teleportation_core', "{HideFlags:1,display:{Name:'[{\"text\":\"Nether Infused Teleportation Core\",\"italic\":false}]'}}").enchant('unbreaking', 1).toJson()
  }).id("kubejs:allthetweaks/nether_core")
  
  // Mini End
	event.shaped('allthetweaks:mini_end', ['ABA', 'BCB', 'ABA'], {
    A: 'additional_lights:fire_pit_s_end_stone',
    B: 'minecraft:ender_eye',
    C: Item.of('mekanism:teleportation_core', "{HideFlags:1,display:{Name:'[{\"text\":\"Ender Infused Teleportation Core\",\"italic\":false}]'}}").enchant('unbreaking', 1).strongNBT().toJson()

  }).id('kubejs:allthetweaks/mini_end')

// Ender Infused Teleportation Core
event.custom({
  type: "apotheosis:enchanting",
  input: {
    item: "mekanism:teleportation_core"
  },
  requirements: {
    eterna: 50,
    quanta: 8.5,
    arcana: 32.5
  },
  max_requirements: {
    eterna: 50,
    quanta: 13.5,
    arcana: 37.5
  },
  result: Item.of('mekanism:teleportation_core', "{HideFlags:1,display:{Name:'[{\"text\":\"Ender Infused Teleportation Core\",\"italic\":false}]'}}").enchant('unbreaking', 1).toJson()
}).id("kubejs:allthetweaks/ender_core")
  
// Mini Exit
	event.shaped('allthetweaks:mini_exit', ['ABA', 'DCD', 'ADA'], {
    A: 'additional_lights:fire_pit_s_end_stone',
    B: 'minecraft:dragon_egg',
    C: Item.of('mekanism:teleportation_core', "{HideFlags:1,display:{Name:'[{\"text\":\"Draconic Infused Teleportation Core\",\"italic\":false}]'}}").enchant('unbreaking', 1).strongNBT().toJson(),
	D: 'minecraft:end_crystal'

  }).id('kubejs:allthetweaks/mini_exit')
 
// Draconic Infused Teleportation Core
event.custom({
  type: "apotheosis:enchanting",
  input: {
    item: "mekanism:teleportation_core"
  },
  requirements: {
    eterna: 50,
    quanta: 45,
    arcana: 100
  },
  max_requirements: {
    eterna: 50,
    quanta: 50,
    arcana: 100
  },
  result: Item.of('mekanism:teleportation_core', "{HideFlags:1,display:{Name:'[{\"text\":\"Draconic Infused Teleportation Core\",\"italic\":false}]'}}").enchant('unbreaking', 1).toJson()
}).id("kubejs:allthetweaks/draco_core")
  
})