// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
//priority:950
// Written by EnigmaQuip as a post almost unified recipe generation script for missing recipes

// Missing tags for unify
ServerEvents.tags('item', allthemods => {
  allthemods.add('forge:wires/aluminum', 'ftbic:aluminum_wire')
  allthemods.add('forge:wires/copper', 'ftbic:copper_wire')
  allthemods.add('forge:wires/gold', 'ftbic:gold_wire')
  allthemods.add('forge:wires/enderium', 'ftbic:enderium_wire')
})

ServerEvents.recipes(allthemods => {
  if (global.devLogging) {
    console.log('Finishing Unifying on Wires')
  }
  let wireCount = {
    create: 0,
    ftbic: 0,
    ie: 0,
    thermal: 0
  }
  global.auTags.wires.forEach(material => {
    let wire = global.itemFromTag('wires', material)
    if (wire.isEmpty()) {
      console.log(`${material} does not have a wire tag entry`)
      return
    }

    if (global.loaded.CreateAdd_Loaded) {
      let plate = global.itemFromTag('plates', material)
      if (!plate.isEmpty()) {
        // Check if create additions rolling recipe exists and add it if not
        let count = allthemods.recipeStream({ type: 'createaddition:rolling' }).mapToInt(recipe => {
          if (wire.equalsIgnoringCount(Item.of(recipe.json.get('result')))) { return 1 }
          return 0
        }).sum()

        if (count == 0) {
          allthemods.custom({
            type: 'createaddition:rolling',
            input: Ingredient.of(`#forge:plates/${material}`).toJson(),
            result: wire.withCount(2).toJson()
          }).id(`allthemods:createaddition/rolling/${material}_plate`)
          wireCount.create++
        }
      }
    }

    if (global.loaded.FTBIC_Loaded) {
      let rod = global.itemFromTag('rods', material)
      if (!rod.isEmpty()) {
        // Check if ftbic extruding recipe exists and add it if not
        let count = allthemods.recipeStream({ type: 'ftbic:extruding' }).mapToInt(recipe => {
          let hasMatch = false
          recipe.json.get('outputItems').forEach(item => {
            if (wire.specialEquals(Item.of(item), true)) {
              hasMatch = true
            }
          })
          if (hasMatch) { return 1 }
          return 0
        }).sum()

        if (count == 0) {
          allthemods.custom({
            type: 'ftbic:extruding',
            inputItems: [{ "count": 1, "ingredient": Ingredient.of(`#forge:rods/${material}`).toJson() }],
            outputItems: [wire.withCount(2).toJson()]
          }).id(`allthemods:ftbic/extruding/rods/${material}_to_${material}_wire`)
          wireCount.ftbic++
        }
      }
    }

    if (global.loaded.IE_Loaded) {
      let ingot = global.itemFromTag('ingots', material)
      if (!ingot.isEmpty()) {
        // Check if ie metal press recipe exists and add it if not
        let count = allthemods.recipeStream({ type: 'immersiveengineering:metal_press' }).mapToInt(recipe => {
          let result = recipe.json.get('result')
          if (result.has('base_ingredient')) {
            if (wire.equalsIgnoringCount(Item.of(result.get('base_ingredient')))) { return 1 }
          } else if (wire.equalsIgnoringCount(Item.of(result))) { return 1 }
          return 0
        }).sum()

        if (count == 0) {
          allthemods.custom({
            type: 'immersiveengineering:metal_press',
            mold: 'immersiveengineering:mold_wire',
            input: Ingredient.of(`#forge:ingots/${material}`).toJson(),
            result: {
              count: 2,
              base_ingredient: wire.toJson()
            },
            energy: 2400
          }).id(`allthemods:immersiveengineering/metalpress/wire_${material}`)
          wireCount.ie++
        }
      }
    }

  })
  if (global.devLogging) {
    console.log(`Added Wire Recipes - CreateAdditions: ${wireCount.create}, FTBIC: ${wireCount.ftbic}, IE: ${wireCount.ie}`)
    // Added Wire Recipes - CreateAdditions: 1, FTBIC: 4, IE: 1
  }
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
