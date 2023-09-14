ServerEvents.recipes(event => {
  // Sword, All recipes are Top-middle and go clockwise
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": true,
    "output": Item.of("allthemodium:alloy_sword").toJson(),
    "pedestalItems": [
	  {"item": Ingredient.of('#forge:ingots/unobtainium').toJson()},
	  {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
	  {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/allthemodium').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
	  {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
	  {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
	  {"item": Ingredient.of('#forge:ingots/vibranium').toJson()},	  
	  {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()},
	  {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()},
	  {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()}
    ],
    "reagent": [Item.of("allthemodium:allthemodium_sword").toJson()],
    "sourceCost": 5000
  }).id('kubejs:allthemodium/alloy_sword')
  
    // Pickaxe
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": true,
    "output": Item.of("allthemodium:alloy_pick").toJson(),
    "pedestalItems": [
	  {"item": Ingredient.of('#forge:ingots/unobtainium').toJson()},
	  {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
	  {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/allthemodium').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
	  {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
	  {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
	  {"item": Ingredient.of('#forge:ingots/vibranium').toJson()},	  
	  {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()},
	  {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()},
	  {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()}
    ],
    "reagent": [Item.of("allthemodium:allthemodium_pickaxe").toJson()],
    "sourceCost": 5000
  }).id('kubejs:allthemodium/alloy_pick')
  
      // Shovel
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": true,
    "output": Item.of("allthemodium:alloy_shovel").toJson(),
    "pedestalItems": [
	  {"item": Ingredient.of('#forge:ingots/unobtainium').toJson()},
	  {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
	  {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/allthemodium').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
	  {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
	  {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
	  {"item": Ingredient.of('#forge:ingots/vibranium').toJson()},	  
	  {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()},
	  {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()},
	  {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()}
    ],
    "reagent": [Item.of("allthemodium:allthemodium_shovel").toJson()],
    "sourceCost": 5000
  }).id('kubejs:allthemodium/alloy_shovel')
 
     // Axe
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": true,
    "output": Item.of("allthemodium:alloy_axe").toJson(),
    "pedestalItems": [
	  {"item": Ingredient.of('#forge:ingots/unobtainium').toJson()},
	  {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
	  {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/allthemodium').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
	  {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
	  {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
	  {"item": Ingredient.of('#forge:ingots/vibranium').toJson()},	  
	  {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()},
	  {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()},
	  {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()}
    ],
    "reagent": [Item.of("allthemodium:allthemodium_axe").toJson()],
    "sourceCost": 5000
	}).id('kubejs:allthemodium/alloy_axe')


	    // Paxel
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": true,
    "output": Item.of("allthemodium:alloy_paxel").toJson(),
    "pedestalItems": [
	  {"item": Ingredient.of('allthemodium:alloy_sword').toJson()},
	  {"item": Ingredient.of('allthemodium:alloy_pick').toJson()},
	  {"item": Ingredient.of('allthemodium:alloy_shovel').toJson()},
      {"item": Ingredient.of('allthemodium:alloy_axe').toJson()},
    ],
    "reagent": [Item.of("mysticalagradditions:awakened_supremium_paxel").toJson()],
    "sourceCost": 10000
	}).id('kubejs:allthemodium/alloy_paxel')
 
  
})