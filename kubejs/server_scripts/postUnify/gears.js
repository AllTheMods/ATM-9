// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
//priority:400
// Written by EnigmaQuip as a post almost unified recipe generation script for missing recipes
ServerEvents.recipes(allthemods => {
  if (global.devLogging) {
    console.log('Finishing Unifying on Gears')
  }
  let gearCount = {
    ftbic: 0,
    ie: 0,
    thermal: 0
  }
  global.auTags.gears.forEach(material => {
    let gear = global.itemFromTag('gears', material)
    if (gear.isEmpty()) {
      console.log(`${material} does not have a gear tag entry`)
      return
    }

    let ingotTag = Ingredient.of(`#forge:ingots/${material}`)
    if (ingotTag.getFirst().isEmpty()) {
      // check for gem
      ingotTag = Ingredient.of(`#forge:gems/${material}`)
    }
    if (!ingotTag.getFirst().isEmpty()) {

      if (global.loaded.IE_Loaded) {
        // Check if ie metal press recipe exists and add it if not
        let count = allthemods.recipeStream({ type: 'immersiveengineering:metal_press' }).mapToInt(recipe => {
          let result = recipe.json.get('result')
          if (result.has('base_ingredient')) {
            if (gear.equalsIgnoringCount(Item.of(result.get('base_ingredient')))) { return 1 }
          } else if (gear.equalsIgnoringCount(Item.of(result))) { return 1 }
          return 0
        }).sum()

        if (count == 0) {
          allthemods.custom({
            type: 'immersiveengineering:metal_press',
            mold: 'immersiveengineering:mold_gear',
            input: {
              count: 4,
              base_ingredient: ingotTag.toJson()
            },
            result: gear.toJson(),
            energy: 2400
          }).id(`allthemods:immersiveengineering/metalpress/gear_${material}`)
          gearCount.ie++
        }
      }

      if (global.loaded.Thermal_Loaded) {
        // Check if thermal multiservo press recipe exists and add it if not
        let count = allthemods.recipeStream({ type: 'thermal:press' }).mapToInt(recipe => {
          let hasMatch = false
          recipe.json.get('result').forEach(item => {
            if (gear.specialEquals(Item.of(item), true)) {
              hasMatch = true
            }
          })
          if (hasMatch) { return 1 }
          return 0
        }).sum()

        if (count == 0) {
          allthemods.custom({
            type: 'thermal:press',
            ingredient: [
              Item.of(ingotTag.getFirst()).withCount(4),
              Item.of('thermal:press_gear_die')
              ],
            result: [gear.toJson()],
          }).id(`allthemods:thermal/machines/press/press_${material}_ingot_to_gear`)
          gearCount.thermal++
        }
      }
    }

    let plateTag = Ingredient.of(`#forge:plates/${material}`)
    if (!plateTag.getFirst().isEmpty()) {

      if (global.loaded.FTBIC_Loaded) {
        // Check if ftbic extruding recipe exists and add it if not
        let count = allthemods.recipeStream({ type: 'ftbic:extruding' }).mapToInt(recipe => {
          let hasMatch = false
          recipe.json.get('outputItems').forEach(item => {
            if (gear.specialEquals(Item.of(item), true)) {
              hasMatch = true
            }
          })
          if (hasMatch) { return 1 }
          return 0
        }).sum()

        if (count == 0) {
          allthemods.custom({
            type: 'ftbic:extruding',
            inputItems: [{ "count": 4, "ingredient": plateTag.toJson() }],
            outputItems: [gear.withCount(1).toJson()]
          }).id(`allthemods:ftbic/extruding/ingots/${material}_to_${material}_gear`)
          gearCount.ftbic++
        }
      }

    }
  })

  if (global.devLogging) {
    console.log(`Added Gear Recipes - FTBIC: ${gearCount.ftbic}, IE: ${gearCount.ie}, Thermal: ${gearCount.thermal}`)
    // Added Gear Recipes - FTBIC: 22, IE: 17, Thermal: 15
  }
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
