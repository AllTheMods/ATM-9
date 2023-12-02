const CropRegistry = Java.loadClass('com.blakebr0.mysticalagriculture.registry.CropRegistry')

// sets the chance for a seed to drop
const SecondarySeed = 0.01
const TierSecondaryCutoff = 5

ServerEvents.tags('item', event => {
  let CropRegistryInstance = CropRegistry.getInstance()
  let cropTiers = CropRegistryInstance.getTiers()
  let tiers = Array.apply(null, Array(cropTiers.length))
  for (const CropTier of cropTiers) {
    tiers[CropTier.getValue() - 1] = CropTier.getFarmland()
    if (CropTier.getValue() >= TierSecondaryCutoff) {
      CropTier.setSecondarySeedDrop(false)
      CropTier.setBaseSecondaryChance(0)
    } else {
      CropTier.setBaseSecondaryChance(SecondarySeed)
    }
  }
  for (let i = 0; i < tiers.length; i++) {
    let farmA = tiers[i]
    let farmB = null
    if (i + 1 < tiers.length) {
      if (!farmA.equals(tiers[i + 1])) {
        farmB = tiers[i + 1]
      }
    }
    let tierA = farmA.getIdLocation().getPath().replace('_farmland', '')
    event.add(`kubejs:farmland/${tierA}`, farmA.getId())
    if (farmB) {
      let tierB = farmB.getIdLocation().getPath().replace('_farmland', '')
      event.add(`kubejs:farmland/${tierA}`, `#kubejs:farmland/${tierB}`)
    } else {
      break
    }
  }
})

ServerEvents.recipes(event => {
  let JsonExport = { enabled: [], disabled: [] }
  let CropRegistryInstance = CropRegistry.getInstance()
  let CropList = CropRegistryInstance.getCrops()
  for (const Crop of CropList) {
    let CropName = Crop.getName()
    if (Crop.isEnabled()) {
      JsonExport.enabled.push(CropName)
    } else {
      JsonExport.disabled.push(CropName)
    }
  }
  JsonIO.write('kubejs/server_scripts/mods/mysticalagriculture/cropInfo.json', JsonExport)

  // Botany Pots
  if (Platform.isLoaded('botanypots')) {
    let seenSeeds = []
    let crux = {}
    let disabledSeedRecipes = []

    // Fix drops, fix cruxes, check for missing
    event.forEachRecipe({ type: 'botanypots:crop' }, recipe => {
      let seed = Ingredient.of(recipe.json.get('seed')).getFirst()
      if (seed.getMod().contains('mystical')) {
        let seedName = seed.getIdLocation().getPath().replace('_seeds', '')
        let newDrops = []
        let Crop = CropRegistryInstance.getCropByName(seedName)
        let cruxBlock = Crop.getCruxBlock()
        if (cruxBlock) {
          recipe.json.add('categories', [`${cruxBlock.getIdLocation().getPath()}`])
          crux[cruxBlock.getId()] = cruxBlock.getIdLocation().getPath()
        }
        for (const drop of recipe.json.get('drops')) {
          if (Ingredient.of(drop.get('output')).test(seed)) {
            if (SecondarySeed > 0 && Crop.getTier().hasSecondarySeedDrop()) {
              drop.add('chance', SecondarySeed)
              newDrops.push(drop)
            }
          } else {
            newDrops.push(drop)
          }
        }
        recipe.json.add('drops', newDrops)
        seenSeeds.push(seedName)

        // add disabled seed recipes by recipe ID to an array
        if (JsonExport.disabled.find((name) => name === Crop.getName())) {
          disabledSeedRecipes.push(recipe.getId())
        }
      }
    })

    // add missing recipes
    for (const seed of JsonExport.enabled) {
      if (!seenSeeds.includes(seed)) {
        let Crop = CropRegistryInstance.getCropByName(seed)
        let drops = [{ chance: 1.0, output: Ingredient.of(Crop.getEssenceItem()).toJson() }]
        if (SecondarySeed > 0 && Crop.getTier().hasSecondarySeedDrop()) {
          drops.push({ chance: SecondarySeed, output: Ingredient.of(Crop.getSeedsItem()).toJson() })
        }
        drops.push({ chance: 0.01, output: Ingredient.of("mysticalagriculture:fertilized_essence").toJson(), minRolls: 1, maxRolls: 1 })
        let category = `${Crop.getTier().getFarmland().getIdLocation().getPath().replace('_farmland', '')}`
        let cruxBlock = Crop.getCruxBlock()
        if (cruxBlock) {
          category = `${cruxBlock.getIdLocation().getPath()}`
          crux[cruxBlock.getId()] = cruxBlock.getIdLocation().getPath()
        }
        event.custom({
          type: 'botanypots:crop',
          seed: Ingredient.of(Crop.getSeedsItem()).toJson(),
          categories: [category],
          growthTicks: 1200 + (600 * Crop.getTier().getValue()),
          display: {
            type: 'botanypots:aging',
            block: Crop.getCropBlock().getId()
          },
          drops: drops
        }).id(`kubejs:botanypots/mysticalagriculture/${seed}`)
      }
    }
    // add crux 'soils'
    for (const block in crux) {
      let category = crux[block]
      event.custom({
        type: 'botanypots:soil',
        input: { item: block },
        display: { block: block },
        categories: [category],
        growthModifier: 1.0
      }).id(`kubejs:botanypots/mysticalagriculture/crux/${category}`)
    }

    // remove disabled seed recipes by id using that array we made earlier
    disabledSeedRecipes.forEach(id => {
      event.remove({id: id})
    })
  }

  // Thermal Insolator
  if (Platform.isLoaded('thermal')) {
    JsonExport.enabled.forEach(cropName => {
      let Crop = CropRegistryInstance.getCropByName(cropName)
      event.custom({
        type: 'thermal:insolator',
        ingredient: Ingredient.of(Crop.getSeedsItem()).toJson(),
        result: [
          {
            item: Crop.getEssenceItem().getId(),
            chance: 1 + SecondarySeed
          },
          {
            item: Crop.getSeedsItem().getId(),
            chance: Crop.getTier().hasSecondarySeedDrop() ? (1 + SecondarySeed) : 1,
            locked: true
          }
        ]
      }).id(`kubejs:thermal/machines/insolator/mysticalagriculture/${cropName}`)
    })
  }

  // Immersive Engineering Cloche
  if (Platform.isLoaded('immersiveengineering')) {
    JsonExport.enabled.forEach(cropName => {
      let Crop = CropRegistryInstance.getCropByName(cropName)
      event.custom({
        type: 'immersiveengineering:cloche',
        results: [
          {
            item: Crop.getEssenceItem().getId(),
            count: 2
          }
        ],
        input: Ingredient.of(Crop.getSeedsItem()).toJson(),
        soil: Ingredient.of(Crop.getCruxBlock() ?? `#kubejs:farmland/${Crop.getTier().getFarmland().getIdLocation().getPath().replace('_farmland', '')}`).toJson(),
        time: 250 + (750 * Crop.getTier().getValue()),
        render: {
          type: 'crop',
          block: Crop.getCropBlock().getId()
        }
      }).id(`kubejs:immersiveengineering/cloche/mysticalagriculture/${cropName}`)
    })
  }
})
