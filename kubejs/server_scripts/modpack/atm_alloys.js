ServerEvents.recipes(event => {
//Powah
//
// ATM-Vibranium Ingot
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('allthemodium:allthemodium_ingot').toJson(),
	    Ingredient.of('allthemodium:piglich_heart').toJson(),
	    Ingredient.of('allthemodium:vibranium_ingot').toJson()
    ],
    energy: '1000000000',
	result: Item.of('allthemodium:vibranium_allthemodium_alloy_ingot').toJson()
  }).id(`kubejs:energizing/allthemodium_vibranium_allthemodium_alloy_ingot`)
  
// ATM-Vibranium Block
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('allthemodium:allthemodium_block').toJson(),
      Ingredient.of('allthemodium:piglich_heart_block').toJson(),
      Ingredient.of('allthemodium:vibranium_block').toJson()
    ],
    energy: '8100000000',
    result: Item.of('allthemodium:vibranium_allthemodium_alloy_block').toJson()
  }).id(`kubejs:energizing/allthemodium_vibranium_allthemodium_alloy_block`)

// ATM-Unobtainium Ingot
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('allthemodium:allthemodium_ingot').toJson(),
      Ingredient.of('allthemodium:piglich_heart').toJson(),
	    Ingredient.of('allthemodium:unobtainium_ingot').toJson()
    ],
    energy: '1000000000',
    result: Item.of('allthemodium:unobtainium_allthemodium_alloy_ingot').toJson()
  }).id(`kubejs:energizing/allthemodium_unobtainium_allthemodium_alloy_ingot`)
  
// ATM-Unobtainium Block
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('allthemodium:allthemodium_block').toJson(),
      Ingredient.of('allthemodium:piglich_heart_block').toJson(),
      Ingredient.of('allthemodium:unobtainium_block').toJson()
    ],
    energy: '8100000000',
    result: Item.of('allthemodium:unobtainium_allthemodium_alloy_block').toJson()
  }).id(`kubejs:energizing/allthemodium_unobtainium_allthemodium_alloy_block`)
  
// Unobtainium-Vibranium Ingot
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('allthemodium:vibranium_ingot').toJson(),
      Ingredient.of('allthemodium:piglich_heart').toJson(),
	    Ingredient.of('allthemodium:unobtainium_ingot').toJson()
    ],
    energy: '1000000000',
    result: Item.of('allthemodium:unobtainium_vibranium_alloy_ingot').toJson()
  }).id(`kubejs:energizing/allthemodium_unobtainium_vibranium_alloy_ingot`)

// Unobtainium-Vibranium Block
event.custom({
  type: 'powah:energizing',
  ingredients: [
    Ingredient.of('allthemodium:vibranium_block').toJson(),
    Ingredient.of('allthemodium:piglich_heart_block').toJson(),
    Ingredient.of('allthemodium:unobtainium_block').toJson()
  ],
  energy: '8100000000',
  result: Item.of('allthemodium:unobtainium_vibranium_alloy_block').toJson()
}).id(`kubejs:energizing/allthemodium_unobtainium_vibranium_alloy_block`)
  
// Unobtainium-Vibranium Awakened Block
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
    "item": "allthemodium:unobtainium_vibranium_alloy_block"
  },
  "ingredients": [
    {
      "item": "allthemodium:vibranium_block"
    },
    {
      "item": "allthemodium:unobtainium_block"
    },
    {
      "item": "allthemodium:vibranium_block"
    },
    {
      "item": "allthemodium:unobtainium_block"
    }
  ],
  "result":  
	Item.of('allthemodium:unobtainium_vibranium_alloy_block', "{HideFlags:1,display:{Name:'[{\"text\":\"Awakened Unobtainium-Vibranium Alloy Block\",\"italic\":false}]'}}").enchant('unbreaking', 1).toJson()

}).id(`kubejs:awakening/awakened_unobtainium_vibranium_alloy_block`)

//Botania
//
//allthemodium-vibranium ingot
event.custom({
  "type": "botania:terra_plate",
  "ingredients": [
    {
      "item": "allthemodium:allthemodium_ingot"
    },
    {
      "item": "allthemodium:piglich_heart"
    },
    {
     "item": "allthemodium:vibranium_ingot"
    }
  ],
  "mana": 1000000,
  "result": {
    "item": "allthemodium:vibranium_allthemodium_alloy_ingot"
  }
}).id(`kubejs:terra/allthemodium_vibranium_allthemodium_alloy_ingot`)

//allthemodium-unobtainium ingot
event.custom({
  "type": "botania:terra_plate",
  "ingredients": [
    {
      "item": "allthemodium:allthemodium_ingot"
    },
    {
      "item": "allthemodium:piglich_heart"
    },
    {
     "item": "allthemodium:unobtainium_ingot"
    }
  ],
  "mana": 1000000,
  "result": {
    "item": "allthemodium:unobtainium_allthemodium_alloy_ingot"
  }
}).id(`kubejs:terra/allthemodium_unobtainium_allthemodium_alloy_ingot`)

//unobtainium-vibranium ingot
event.custom({
  "type": "botania:terra_plate",
  "ingredients": [
    {
      "item": "allthemodium:unobtainium_ingot"
    },
    {
      "item": "allthemodium:piglich_heart"
    },
    {
     "item": "allthemodium:vibranium_ingot"
    }
  ],
  "mana": 1000000,
  "result": {
    "item": "allthemodium:unobtainium_vibranium_alloy_ingot"
  }
}).id(`kubejs:terra/allthemodium_unobtainium_vibranium_alloy_ingot`)

//allthemodium-vibranium block
event.custom({
  "type": "botania:terra_plate",
  "ingredients": [
    {
      "item": "allthemodium:allthemodium_block"
    },
    {
      "item": "allthemodium:piglich_heart_block"
    },
    {
     "item": "allthemodium:vibranium_block"
    }
  ],
  "mana": 8100000,
  "result": {
    "item": "allthemodium:vibranium_allthemodium_alloy_block"
  }
}).id(`kubejs:terra/allthemodium_vibranium_allthemodium_alloy_block`)

//allthemodium-unobtainium block
event.custom({
  "type": "botania:terra_plate",
  "ingredients": [
    {
      "item": "allthemodium:allthemodium_block"
    },
    {
      "item": "allthemodium:piglich_heart_block"
    },
    {
     "item": "allthemodium:unobtainium_block"
    }
  ],
  "mana": 8100000,
  "result": {
    "item": "allthemodium:unobtainium_allthemodium_alloy_block"
  }
}).id(`kubejs:terra/allthemodium_unobtainium_allthemodium_alloy_block`)

//unobtainium-vibranium block
event.custom({
  "type": "botania:terra_plate",
  "ingredients": [
    {
      "item": "allthemodium:unobtainium_block"
    },
    {
      "item": "allthemodium:piglich_heart_block"
    },
    {
     "item": "allthemodium:vibranium_block"
    }
  ],
  "mana": 8100000,
  "result": {
    "item": "allthemodium:unobtainium_vibranium_alloy_block"
  }
}).id(`kubejs:terra/allthemodium_unobtainium_vibranium_alloy_block`)

//Mythic Botany
//allthemodium-vibranium ingot
event.custom({
  "type": "mythicbotany:infuser",
  "fromColor": 16750080,
  "ingredients": [
    {
      "item": "allthemodium:allthemodium_ingot"
    },
    {
      "item": "allthemodium:piglich_heart"
    },
    {
     "item": "allthemodium:vibranium_ingot"
    }
  ],
  "mana": 1000000,
  "output": {
    "item": "allthemodium:vibranium_allthemodium_alloy_ingot"
  },
  "toColor": 4565073
}).id(`kubejs:infuser/allthemodium_vibranium_allthemodium_alloy_ingot`)

//allthemodium-unobtainium ingot
event.custom({
  "type": "mythicbotany:infuser",
  "fromColor": 16750080,
  "ingredients": [
    {
      "item": "allthemodium:allthemodium_ingot"
    },
    {
      "item": "allthemodium:piglich_heart"
    },
    {
     "item": "allthemodium:unobtainium_ingot"
    }
  ],
  "mana": 1000000,
  "output": {
    "item": "allthemodium:unobtainium_allthemodium_alloy_ingot"
  },
  "toColor": 6292164
}).id(`kubejs:infuser/allthemodium_unobtainium_allthemodium_alloy_ingot`)

//unobtainium-vibranium ingot
event.custom({
  "type": "mythicbotany:infuser",
  "fromColor": 6292164,
  "ingredients": [
    {
      "item": "allthemodium:unobtainium_ingot"
    },
    {
      "item": "allthemodium:piglich_heart"
    },
    {
     "item": "allthemodium:vibranium_ingot"
    }
  ],
  "mana": 1000000,
  "output": {
    "item": "allthemodium:unobtainium_vibranium_alloy_ingot"
  },
  "toColor": 4565073
}).id(`kubejs:infuser/allthemodium_unobtainium_vibranium_alloy_ingot`)

//allthemodium-vibranium block
event.custom({
  "type": "mythicbotany:infuser",
  "fromColor": 16750080,
  "ingredients": [
    {
      "item": "allthemodium:allthemodium_block"
    },
    {
      "item": "allthemodium:piglich_heart_block"
    },
    {
     "item": "allthemodium:vibranium_block"
    }
  ],
  "mana": 8100000,
  "output": {
    "item": "allthemodium:vibranium_allthemodium_alloy_block"
  },
  "toColor": 4565073
}).id(`kubejs:infuser/allthemodium_vibranium_allthemodium_alloy_block`)

//allthemodium-unobtainium block
event.custom({
  "type": "mythicbotany:infuser",
  "fromColor": 16750080,
  "ingredients": [
    {
      "item": "allthemodium:allthemodium_block"
    },
    {
      "item": "allthemodium:piglich_heart_block"
    },
    {
     "item": "allthemodium:unobtainium_block"
    }
  ],
  "mana": 8100000,
  "output": {
    "item": "allthemodium:unobtainium_allthemodium_alloy_block"
  },
  "toColor": 6292164
}).id(`kubejs:infuser/allthemodium_unobtainium_allthemodium_alloy_block`)

//unobtainium-vibranium block
event.custom({
  "type": "mythicbotany:infuser",
  "fromColor": 6292164,
  "ingredients": [
    {
      "item": "allthemodium:unobtainium_block"
    },
    {
      "item": "allthemodium:piglich_heart_block"
    },
    {
     "item": "allthemodium:vibranium_block"
    }
  ],
  "mana": 8100000,
  "output": {
    "item": "allthemodium:unobtainium_vibranium_alloy_block"
  },
  "toColor": 4565073
}).id(`kubejs:infuser/allthemodium_unobtainium_vibranium_alloy_block`)
})
