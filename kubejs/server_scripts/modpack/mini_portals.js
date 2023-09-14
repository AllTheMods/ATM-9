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

/*  
// Nether Infused Teleportation Core
	event.custom({
  "type": "elementalcraft:binding",
  "element_amount": 10000,
  "element_type": "fire",
  "ingredients": [
    {
      "item": "mekanism:teleportation_core"
    },
	{
      "item": "elementalcraft:purecrystal"
    },
	{
      "item": "minecraft:netherite_block"
    },
    
	Item.of('elementalcraft:jewel', '{elementalcraft:{jewel:"elementalcraft:piglin"}}').strongNBT().toJson(),
    
    {
      "item": "minecraft:netherite_block"
    },
    {
      "item": "elementalcraft:purecrystal"
    }
  ],
  "output": Item.of('mekanism:teleportation_core', "{HideFlags:1,display:{Name:'[{\"text\":\"Nether Infused Teleportation Core\",\"italic\":false}]'}}").enchant('unbreaking', 1).toJson()
}).id('kubejs:allthetweaks/nether_core')
*/
  
  // Mini End
	event.shaped('allthetweaks:mini_end', ['ABA', 'BCB', 'ABA'], {
    A: 'additional_lights:fire_pit_s_end_stone',
    B: 'minecraft:ender_eye',
    C: Item.of('mekanism:teleportation_core', "{HideFlags:1,display:{Name:'[{\"text\":\"Ender Infused Teleportation Core\",\"italic\":false}]'}}").enchant('unbreaking', 1).strongNBT().toJson()

  }).id('kubejs:allthetweaks/mini_end')

/*
// Ender Infused Teleportation Core
	event.custom({
  "type": "elementalcraft:binding",
  "element_amount": 10000,
  "element_type": "air",
  "ingredients": [
    {
      "item": "mekanism:teleportation_core"
    },
	{
      "item": "elementalcraft:purecrystal"
    },
	{
      "item": "allthetweaks:ender_pearl_block"
    },
    
	Item.of('elementalcraft:jewel', '{elementalcraft:{jewel:"elementalcraft:demigod"}}').strongNBT().toJson(),
    
    {
      "item": "allthetweaks:ender_pearl_block"
    },
    {
      "item": "elementalcraft:purecrystal"
    }
  ],
  "output": Item.of('mekanism:teleportation_core', "{HideFlags:1,display:{Name:'[{\"text\":\"Ender Infused Teleportation Core\",\"italic\":false}]'}}").enchant('unbreaking', 1).toJson()
}).id('kubejs:allthetweaks/ender_core')
*/
  
// Mini Exit
	event.shaped('allthetweaks:mini_exit', ['ABA', 'DCD', 'ADA'], {
    A: 'additional_lights:fire_pit_s_end_stone',
    B: 'minecraft:dragon_egg',
    C: Item.of('mekanism:teleportation_core', "{HideFlags:1,display:{Name:'[{\"text\":\"Draconic Infused Teleportation Core\",\"italic\":false}]'}}").enchant('unbreaking', 1).strongNBT().toJson(),
	D: 'minecraft:end_crystal'

  }).id('kubejs:allthetweaks/mini_exit')
 
/*
// Draconic Infused Teleportation Core
	event.custom({
  "type": "elementalcraft:binding",
  "element_amount": 10000,
  "element_type": "fire",
  "ingredients": [
    {
      "item": "mekanism:teleportation_core"
    },
	{
      "item": "elementalcraft:purecrystal"
    },
	{
      "item": "minecraft:dragon_egg"
    },
    
	Item.of('elementalcraft:jewel', '{elementalcraft:{jewel:"elementalcraft:phoenix"}}').strongNBT().toJson(),
    
    {
      "item": "minecraft:dragon_egg"
    },
    {
      "item": "elementalcraft:purecrystal"
    }
  ],
  "output": Item.of('mekanism:teleportation_core', "{HideFlags:1,display:{Name:'[{\"text\":\"Draconic Infused Teleportation Core\",\"italic\":false}]'}}").enchant('unbreaking', 1).toJson()
}).id('kubejs:allthetweaks/draco_core')
*/
  
})