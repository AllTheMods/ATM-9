// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
//priority:700
// Written by EnigmaQuip as a post almost unified recipe generation script for missing recipes

// Missing tags for unify
ServerEvents.tags('item', allthemods => {
  ['falsite', 'ventium', 'horizonite'].forEach(metal => {
    allthemods.add(`forge:ingots/${metal}`, `blue_skies:${metal}_ingot`)
  })
})

ServerEvents.recipes(allthemods => {
  if (global.devLogging) {
    console.log('Finishing Unifying on Ingots')
  }
  let ingotCount = {
    ie: 0,
    thermal: 0
  }
  global.auTags.ingots.forEach(material => {
    let ingot = global.itemFromTag('ingots', material)
    if (ingot.isEmpty()) {
      console.log(`${material} does not have a ingot tag entry`)
      return
    }

    let isAlloy = global.alloys.includes(material)

    let storageTag = Ingredient.of(`#forge:storage_blocks/${material}`)
    let nuggetTag = Ingredient.of(`#forge:nuggets/${material}`)

    if (global.loaded.IE_Loaded) {

      let ie = {
        storage: false,
        nugget: false
      }
      // Check if ie metal press recipe exists and add it if not
      allthemods.forEachRecipe({ type: 'immersiveengineering:metal_press' }, recipe => {
        let result = recipe.json.get('result')
        if (result.has('base_ingredient')) {
          result = result.get('base_ingredient')
        }
        if (!ingot.equalsIgnoringCount(Item.of(result))) { return }
        let input = recipe.json.get('input')
        if (input.has('base_ingredient')) {
          input = input.get('base_ingredient')
        }
        if (storageTag.test(Ingredient.of(input))) { ie.storage = true }
        else if (nuggetTag.test(Ingredient.of(input))) { ie.nugget = true }
      })

      if (!ie.storage && !storageTag.getFirst().isEmpty()) {
        let recipe = {
          type: 'immersiveengineering:metal_press',
          mold: 'immersiveengineering:mold_unpacking',
          input: storageTag.toJson(),
          result: ingot.withCount(9).toJson(),
          energy: 2400
        }
        allthemods.custom(recipe).id(`allthemods:immersiveengineering/metalpress/unpacking/block_${material}`)
        ingotCount.ie++
      }

      if (!ie.nugget && !nuggetTag.getFirst().isEmpty()) {
        allthemods.custom({
          type: 'immersiveengineering:metal_press',
          mold: 'immersiveengineering:mold_packing_9',
          input: {
            count: 9,
            base_ingredient: nuggetTag.toJson()
          },
          result: ingot.toJson(),
          energy: 2400
        }).id(`allthemods:immersiveengineering/metalpress/packing3x3/${material}_nugget`)
        ingotCount.ie++
      }
    }

    if (global.loaded.Thermal_Loaded) {

      let thermal = {
        storage: false,
        nugget: false
      }
      // Check if thermal multiservo press recipe exists and add it if not
      allthemods.forEachRecipe({ type: 'thermal:press' }, recipe => {
        let hasMatch = false
        recipe.json.get('result').forEach(item => {
          if (ingot.specialEquals(Item.of(item), true)) {
            hasMatch = true
          }
        })
        if (!hasMatch) { return }
        recipe.json.get('ingredients').forEach(item => {
          if (storageTag.test(Ingredient.of(item))) { thermal.storage = true }
          else if (nuggetTag.test(Ingredient.of(item))) { thermal.nugget = true }
        })
      })

      if (!thermal.storage && !storageTag.getFirst().isEmpty()) {
        allthemods.custom({
          type: 'thermal:press',
          ingredients: [
            storageTag.toJson(),
            Ingredient.of('thermal:press_unpacking_die').toJson(),
          ],
          result: [ingot.withCount(9).toJson()],
        }).id(`allthemods:thermal/machines/press/unpacking/press_${material}_unpacking`)
        ingotCount.thermal++
      }

      if (!thermal.nugget && !nuggetTag.getFirst().isEmpty()) {
        allthemods.custom({
          type: 'thermal:press',
          ingredients: [
            Item.of(nuggetTag.getFirst()).withCount(9),
            Ingredient.of('thermal:press_packing_3x3_die').toJson(),
          ],
          result: [ingot.toJson()],
        }).id(`allthemods:thermal/machines/press/packing3x3/press_${material}_nugget_packing`)
        ingotCount.thermal++
      }
    }

    if (isAlloy) {
      /*
      TODO include alloying recipes across all alloying machines
      create mixing
      thermal induction smelter
      ie alloy kiln
      ie arc furnace
      */
    } else {
      /*
      TODO include/check ore/raw/raw_storage/chunk/dust to ingot recipes that might be missing
      most take their recipes from vanilla smelting/blasting
      special cases:
      ie arc furnace
          dust -> ingot
          ore -> 2 ingot, 1 ie slag
          raw ore -> 1 ingot, 1 ingot (50%)
          raw ore storage -> 13 ingots, 1 ingot (50%)
      thermal induction smelter
      */
    }
  })

  if (global.devLogging) {
    console.log(`Added Ingot Recipes - IE: ${ingotCount.ie}, Thermal: ${ingotCount.thermal}`)
    // Added Ingot Recipes - IE: 87, Thermal: 45
  }
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
