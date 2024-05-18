// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
//priority:450
// Written by EnigmaQuip as a post almost unified recipe generation script for missing recipes
ServerEvents.recipes(allthemods => {
  if (global.devLogging) {
    console.log('Finishing Unifying on Rods')
  }
  let rodCount = {
    create: 0,
    ftbic: 0,
    ie: 0,
    thermal: 0
  }
  global.auTags.rods.forEach(material => {
    let rod = global.itemFromTag('rods', material)
    if (rod.isEmpty()) {
      console.log(`${material} does not have a rod tag entry`)
      return
    }

    let ingotTag = Ingredient.of(`#forge:ingots/${material}`)
    if (ingotTag.getFirst().isEmpty()) {
      // check for gem
      ingotTag = Ingredient.of(`#forge:gems/${material}`)
      if (ingotTag.getFirst().isEmpty()) { return }
    }

    if (global.loaded.CreateAdd_Loaded) {
      let count = allthemods.recipeStream({ type: 'createaddition:rolling' }).mapToInt(recipe => {
        if (rod.equalsIgnoringCount(Item.of(recipe.json.get('result')))) { return 1 }
        return 0
      }).sum()

      if (count == 0) {
        allthemods.custom({
          type: 'createaddition:rolling',
          input: ingotTag.toJson(),
          result: rod.withCount(2).toJson()
        }).id(`allthemods:createaddition/rolling/${material}_ingot`)
        rodCount.create++
      }
    }

    if (global.loaded.FTBIC_Loaded) {
      // Check if ftbic extruding recipe exists and add it if not
      let count = allthemods.recipeStream({ type: 'ftbic:extruding' }).mapToInt(recipe => {
        let hasMatch = false
        recipe.json.get('outputItems').forEach(item => {
          if (rod.specialEquals(Item.of(item), true)) {
            hasMatch = true
          }
        })
        if (hasMatch) { return 1 }
        return 0
      }).sum()

      if (count == 0) {
        allthemods.custom({
          type: 'ftbic:extruding',
          inputItems: [{ "count": 1, "ingredient": ingotTag.toJson() }],
          outputItems: [rod.withCount(2).toJson()]
        }).id(`allthemods:ftbic/extruding/ingots/${material}_to_${material}_rod`)
        rodCount.ftbic++
      }
    }

    if (global.loaded.IE_Loaded) {
      // Check if ie metal press recipe exists and add it if not
      let count = allthemods.recipeStream({ type: 'immersiveengineering:metal_press' }).mapToInt(recipe => {
        let result = recipe.json.get('result')
        if (result.has('base_ingredient')) {
          if (rod.equalsIgnoringCount(Item.of(result.get('base_ingredient')))) { return 1 }
        } else if (rod.equalsIgnoringCount(Item.of(result))) { return 1 }
        return 0
      }).sum()

      if (count == 0) {
        allthemods.custom({
          type: 'immersiveengineering:metal_press',
          mold: 'immersiveengineering:mold_rod',
          input: ingotTag.toJson(),
          result: {
            count: 2,
            base_ingredient: rod.toJson()
          },
          energy: 2400
        }).id(`allthemods:immersiveengineering/metalpress/rod_${material}`)
        rodCount.ie++
      }
    }
    /*
    if (global.loaded.Thermal_Loaded) {
        // add blast chiller recipes? cross check with tconstruct
    }*/
    /*
    // remove crafting recipes not using atm hammer, need to add GT outputs to whitelist
    allthemods.forEachRecipe({ type: 'minecraft:crafting_shaped', output: rod }, recipe => {
      if (!recipe.hasInput('#alltheores:ore_hammers')) {
        allthemods.remove({ id: recipe.getId() })
      }
    })*/
  })
  if (global.devLogging) {
    console.log(`Added Rod Recipes - CreateAdditions: ${rodCount.create}, FTBIC: ${rodCount.ftbic}, IE: ${rodCount.ie}, Thermal: ${rodCount.thermal}`)
    // Added Rod Recipes - CreateAdditions: 20, FTBIC: 16, IE: 8, Thermal: 0
  }
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
