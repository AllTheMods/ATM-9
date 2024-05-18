// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
// priority:950
// Written by EnigmaQuip as a post almost unified recipe generation script for missing recipes

ServerEvents.recipes(allthemods => {
  if (global.devLogging) {
    console.log('Finishing Unifying on Dusts')
  }

  let dustCount = {
    occult: 0,
    ftbic: 0
  }

  global.auTags.dusts.forEach(material => {
    let dust = global.itemFromTag('dusts', material)
    if (dust.isEmpty()) {
      console.log(`${material} does not have a dust tag entry`)
      return
    }

    let ingotTag = Ingredient.of(`#forge:ingots/${material}`)
    let oreTag = Ingredient.of(`#forge:ores/${material}`)
    let rawTag = Ingredient.of(`#forge:raw_materials/${material}`)

    // Occultism Crusher
    if (global.loaded.Occult_Loaded) {
      let crush = {
        ingot: false,
        ore: false,
        raw: false
      }
      allthemods.forEachRecipe({ type: "occultism:crushing" }, recipe => {
        let recipeJson = recipe.json
        if (dust.equalsIgnoringCount(Item.of(recipeJson.get('result')))) {
          let input = recipeJson.get('ingredient')
          if (ingotTag.test(Ingredient.of(input))) {
            crush.ingot = true
          } else if (oreTag.test(Ingredient.of(input))) {
            crush.ore = true
          } else if (rawTag.test(Ingredient.of(input))) {
            crush.raw = true
          }
        }
      })
      let recipe = {
        type: "occultism:crushing",
        ingredient: {},
        result: {},
        crushing_time: 200,
        ignore_crushing_multiplier: true
      }
      if (!ingotTag.getFirst().isEmpty() && !crush.ingot) {
        let ingotRecipe = recipe
        ingotRecipe.ingredient = ingotTag.toJson()
        ingotRecipe.result = dust.withCount(1).toJson()
        allthemods.custom(ingotRecipe).id(`allthemods:occultism/crushing/${material}_dust_from_ingot`)
        dustCount.occult++
      }
      if (!rawTag.getFirst().isEmpty() && !crush.raw) {
        let rawRecipe = recipe
        rawRecipe.ingredient = rawTag.toJson()
        rawRecipe.result = dust.withCount(2).toJson()
        rawRecipe.ignore_crushing_multiplier = false
        allthemods.custom(rawRecipe).id(`allthemods:occultism/crushing/${material}_dust_from_raw_material`)
        dustCount.occult++
      }
      if (!oreTag.getFirst().isEmpty() && !crush.ore) {
        let oreRecipe = recipe
        oreRecipe.ingredient = oreTag.toJson()
        oreRecipe.result = dust.withCount(2).toJson()
        oreRecipe.crushing_time = 300
        oreRecipe.ignore_crushing_multiplier = false
        allthemods.custom(oreRecipe).id(`allthemods:occultism/crushing/${material}_dust`)
        dustCount.occult++
      }
    }

    // FTBIC Macerating
    if (global.loaded.FTBIC_Loaded) {
      let macerate = {
        ingot: false,
        ore: false,
        raw: false,
      }
      allthemods.forEachRecipe({ type: 'ftbic:macerating' }, recipe => {
        let recipeJson = recipe.json
        recipeJson.get('outputItems').forEach(item => {
          if (dust.equalsIgnoringCount(Item.of(item))) {
            recipeJson.get('inputItems').forEach(inputJson => {
              let input = inputJson.get('ingredient')
              if (ingotTag.test(Ingredient.of(input))) {
                macerate.ingot = true
              } else if (oreTag.test(Ingredient.of(input))) {
                macerate.ore = true
              } else if (rawTag.test(Ingredient.of(input))) {
                macerate.raw = true
              }
            })
          }
        })
      })
      if (!ingotTag.getFirst().isEmpty() && !macerate.ingot) {
        allthemods.custom({
          "type": "ftbic:macerating",
          "inputItems": [{ count: 1, ingredient: ingotTag.toJson() }],
          "outputItems": [dust.toJson()]
        }).id(`allthemods:ftbic/macerating/ingots/${material}_to_dust`)
        dustCount.ftbic++
      }
      if (!oreTag.getFirst().isEmpty() && !macerate.ore) {
        allthemods.custom({
          "type": "ftbic:macerating",
          "inputItems": [{ count: 1, ingredient: oreTag.toJson() }],
          "outputItems": [dust.withCount(2).toJson()]
        }).id(`allthemods:ftbic/macerating/ores/${material}_to_dust`)
        dustCount.ftbic++
      }
      if (!rawTag.getFirst().isEmpty() && !macerate.raw) {
        allthemods.custom({
          "type": "ftbic:macerating",
          "inputItems": [{ count: 1, ingredient: rawTag.toJson() }],
          "outputItems": [
            dust.toJson(),
            { chance: 0.35, item: dust.id }
          ]
        }).id(`allthemods:ftbic/macerating/raw_materials/${material}_to_dust`)
        dustCount.ftbic++
      }
    }
  })

  if (global.devLogging) {
    console.log(`Added Dust Recipes - FTBIC: ${dustCount.ftbic}, Occultism: ${dustCount.occult}`)
    // Added Dust Recipes - FTBIC: 60, Occultism: 5
  }
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
