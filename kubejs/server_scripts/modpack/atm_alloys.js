// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
//Powah
//
// ATM-Vibranium Ingot
  allthemods.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('allthemodium:allthemodium_ingot').toJson(),
	    Ingredient.of('allthemodium:piglich_heart').toJson(),
	    Ingredient.of('allthemodium:vibranium_ingot').toJson()
    ],
    energy: '1000000000',
	result: Item.of('allthemodium:vibranium_allthemodium_alloy_ingot').toJson()
  }).id(`allthemods:energizing/allthemodium_vibranium_allthemodium_alloy_ingot`)
  
// ATM-Vibranium Block
  allthemods.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('allthemodium:allthemodium_block').toJson(),
      Ingredient.of('allthemodium:piglich_heart_block').toJson(),
      Ingredient.of('allthemodium:vibranium_block').toJson()
    ],
    energy: '8100000000',
    result: Item.of('allthemodium:vibranium_allthemodium_alloy_block').toJson()
  }).id(`allthemods:energizing/allthemodium_vibranium_allthemodium_alloy_block`)

// ATM-Unobtainium Ingot
  allthemods.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('allthemodium:allthemodium_ingot').toJson(),
      Ingredient.of('allthemodium:piglich_heart').toJson(),
	    Ingredient.of('allthemodium:unobtainium_ingot').toJson()
    ],
    energy: '1000000000',
    result: Item.of('allthemodium:unobtainium_allthemodium_alloy_ingot').toJson()
  }).id(`allthemods:energizing/allthemodium_unobtainium_allthemodium_alloy_ingot`)
  
// ATM-Unobtainium Block
  allthemods.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('allthemodium:allthemodium_block').toJson(),
      Ingredient.of('allthemodium:piglich_heart_block').toJson(),
      Ingredient.of('allthemodium:unobtainium_block').toJson()
    ],
    energy: '8100000000',
    result: Item.of('allthemodium:unobtainium_allthemodium_alloy_block').toJson()
  }).id(`allthemods:energizing/allthemodium_unobtainium_allthemodium_alloy_block`)
  
// Unobtainium-Vibranium Ingot
  allthemods.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('allthemodium:vibranium_ingot').toJson(),
      Ingredient.of('allthemodium:piglich_heart').toJson(),
	    Ingredient.of('allthemodium:unobtainium_ingot').toJson()
    ],
    energy: '1000000000',
    result: Item.of('allthemodium:unobtainium_vibranium_alloy_ingot').toJson()
  }).id(`allthemods:energizing/allthemodium_unobtainium_vibranium_alloy_ingot`)

// Unobtainium-Vibranium Block
allthemods.custom({
  type: 'powah:energizing',
  ingredients: [
    Ingredient.of('allthemodium:vibranium_block').toJson(),
    Ingredient.of('allthemodium:piglich_heart_block').toJson(),
    Ingredient.of('allthemodium:unobtainium_block').toJson()
  ],
  energy: '8100000000',
  result: Item.of('allthemodium:unobtainium_vibranium_alloy_block').toJson()
}).id(`allthemods:energizing/allthemodium_unobtainium_vibranium_alloy_block`)
  
// Unobtainium-Vibranium Awakened Block
  allthemods.custom({
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

}).id(`allthemods:awakening/awakened_unobtainium_vibranium_alloy_block`)

//Botania
//
//allthemodium-vibranium ingot
allthemods.custom({
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
}).id(`allthemods:terra/allthemodium_vibranium_allthemodium_alloy_ingot`)

//allthemodium-unobtainium ingot
allthemods.custom({
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
}).id(`allthemods:terra/allthemodium_unobtainium_allthemodium_alloy_ingot`)

//unobtainium-vibranium ingot
allthemods.custom({
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
}).id(`allthemods:terra/allthemodium_unobtainium_vibranium_alloy_ingot`)

//allthemodium-vibranium block
allthemods.custom({
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
}).id(`allthemods:terra/allthemodium_vibranium_allthemodium_alloy_block`)

//allthemodium-unobtainium block
allthemods.custom({
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
}).id(`allthemods:terra/allthemodium_unobtainium_allthemodium_alloy_block`)

//unobtainium-vibranium block
allthemods.custom({
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
}).id(`allthemods:terra/allthemodium_unobtainium_vibranium_alloy_block`)

//Mythic Botany
//allthemodium-vibranium ingot
allthemods.custom({
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
}).id(`allthemods:infuser/allthemodium_vibranium_allthemodium_alloy_ingot`)

//allthemodium-unobtainium ingot
allthemods.custom({
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
}).id(`allthemods:infuser/allthemodium_unobtainium_allthemodium_alloy_ingot`)

//unobtainium-vibranium ingot
allthemods.custom({
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
}).id(`allthemods:infuser/allthemodium_unobtainium_vibranium_alloy_ingot`)

//allthemodium-vibranium block
allthemods.custom({
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
}).id(`allthemods:infuser/allthemodium_vibranium_allthemodium_alloy_block`)

//allthemodium-unobtainium block
allthemods.custom({
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
}).id(`allthemods:infuser/allthemodium_unobtainium_allthemodium_alloy_block`)

//unobtainium-vibranium block
allthemods.custom({
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
}).id(`allthemods:infuser/allthemodium_unobtainium_vibranium_alloy_block`)
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
