//priority:900
// Written by EnigmaQuip as a post almost unified recipe generation script for missing recipes

// Missing tags for unify
ServerEvents.tags('item', event => {
  event.add('forge:storage_blocks/raw_aluminum', 'xycraft_world:aluminum_raw_block')
  global.blueskies.forEach(metal => {
    event.add(`forge:storage_blocks/raw_${metal}`, `blue_skies:raw_${metal}_block`)
    event.add(`forge:storage_blocks/${metal}`, `blue_skies:${metal}_block`)
  })
})

ServerEvents.recipes(event => {
  if (global.devLogging) {
    console.log('Finishing Unifying on Storage Blocks')
  }
  let storageCount = {
    ie: 0,
    thermal: 0
  }

  global.auTags.storage_blocks.forEach(material => {
    let storage = global.itemFromTag('storage_blocks', material)
    if (storage.isEmpty()) {
      console.log(`${material} does not have a storage_blocks tag entry`)
      return
    }

    let raw = false
    if (/raw_/.test(material)) {
      raw = true
      material = material.replace('raw_', '')
    }

    let ingotTag = Ingredient.of(`#forge:ingots/${material}`)
    if (ingotTag.getFirst().isEmpty()) {
      // check for gem
      ingotTag = Ingredient.of(`#forge:gems/${material}`)
    }
    if (raw) {
      ingotTag = Ingredient.of(`#forge:raw_materials/${material}`)
    }

    if (!ingotTag.getFirst().isEmpty()) {
      if (global.loaded.IE_Loaded) {
        // Check if ie metal press recipe exists and add it if not
        let count = event.recipeStream({ type: 'immersiveengineering:metal_press' }).mapToInt(recipe => {
          let result = recipe.json.get('result')
          if (result.has('base_ingredient')) {
            if (storage.equalsIgnoringCount(Item.of(result.get('base_ingredient')))) { return 1 }
          } else if (storage.equalsIgnoringCount(Item.of(result))) { return 1 }
          return 0
        }).sum()

        if (count == 0) {
          event.custom({
            type: 'immersiveengineering:metal_press',
            mold: 'immersiveengineering:mold_packing_9',
            input: {
              count: 9,
              base_ingredient: ingotTag.toJson()
            },
            result: storage.toJson(),
            energy: 2400
          }).id(`kubejs:immersiveengineering/metalpress/packing3x3/${raw ? 'raw_' : ''}${material}`)
          storageCount.ie++
        }
      }

      if (global.loaded.Thermal_Loaded) {
        // Check if thermal multiservo press recipe exists and add it if not
        let count = event.recipeStream({ type: 'thermal:press' }).mapToInt(recipe => {
          let hasMatch = false
          recipe.json.get('result').forEach(item => {
            if (storage.specialEquals(Item.of(item), true)) {
              hasMatch = true
            }
          })
          if (hasMatch) { return 1 }
          return 0
        }).sum()

        if (count == 0) {
          event.custom({
            type: 'thermal:press',
            ingredients: [
              Item.of(ingotTag.getFirst()).withCount(9),
              Ingredient.of('thermal:press_packing_3x3_die').toJson(),
            ],
            result: [storage.toJson()],
          }).id(`kubejs:thermal/machines/press/packing3x3/press_${raw ? 'raw_' : ''}${material}_packing`)
          storageCount.thermal++
        }
      }
    }

    if (!raw) {
      if (event.countRecipes({ type: 'minecraft:smelting', input: `#forge:storage_blocks/raw_${material}`, output: `#forge:storage_blocks/${material}` }) == 0) {
        let rawBlock = Ingredient.of(`#forge:storage_blocks/raw_${material}`)
        if (!rawBlock.isEmpty()) {
          event.smelting(storage, rawBlock, 6.3, '90s')
          event.blasting(storage, rawBlock, 6.3, '45s')
        }
      }
    }

  })
  if (global.devLogging) {
    console.log(`Added Storage Block Recipes - IE: ${storageCount.ie}, Thermal: ${storageCount.thermal}`)
    // Added Storage Block Recipes - IE: 80, Thermal: 43
  }
})
