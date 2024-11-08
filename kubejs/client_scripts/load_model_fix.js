ClientEvents.highPriorityAssets((allthemods) => {
  let modelsToShutup = [
    // Wrong loader

    "ae2additions:models/block/crafting/1024k_storage_formed",
    "ae2additions:models/block/crafting/16384k_storage_formed",
    "ae2additions:models/block/crafting/4096k_storage_formed",
    "ae2additions:models/block/crafting/65536k_storage_formed",
    "mahoutsukai:models/item/proximity_projection_keys2"
  ]

  modelsToShutup.forEach((rl) => {
    allthemods.add(rl, { loader: "forge:empty" })
  })

  let modelsToDefaultToItem = [
    "industrialforegoing:models/item/transporter",
    "occultism:models/item/lighted_air",
    "refinedstorage:models/item/cover",
    "refinedstorage:models/item/hollow_cover",
    "mysticalagriculture:models/item/azure_silver_essence",
    "mysticalagriculture:models/item/crimson_iron_essence",
    "mysticalagriculture:models/item/allthemodium_essence",
    "mysticalagriculture:models/item/unobtainium_essence",
    "mysticalagriculture:models/item/vibranium_essence",
    "mysticalagriculture:models/item/azure_silver_seeds",
    "mysticalagriculture:models/item/crimson_iron_seeds",
    "mysticalagriculture:models/item/allthemodium_seeds",
    "mysticalagriculture:models/item/unobtainium_seeds",
    "mysticalagriculture:models/item/vibranium_seeds",
    "allthemodium:models/item/spawn_egg/piglich",
    "bigreactors:models/item/energizerstatus",
    "bloodmagic:models/item/inversion_pillar_cap",
    "supplementaries:models/item/gunpowder",
    "irons_spellbooks:models/item/magehunter_normal",
    "irons_spellbooks:models/item/truthseeker_normal",
    "irons_spellbooks:models/item/keeper_flamberge_normal",
    "irons_spellbooks:models/item/truthseeker_gui",
    "irons_spellbooks:models/item/magehunter_gui",
    "irons_spellbooks:models/item/keeper_flamberge_gui",
    "voidscape:models/item/voidic_crystal_boots",
    "voidscape:models/item/corrupt_boots",
    "voidscape:models/item/titanite_boots",
    "voidscape:models/item/ichor_boots",
    "voidscape:models/item/astral_boots"
  ]

  modelsToDefaultToItem.forEach((rl) => {
    allthemods.add(rl, { parent: "forge:item/default" })
  })

  let modelsToDefaultToBlock = [
    "glassential:models/block/dark_ethereal_dreverse_oor_bottom_right_open",
    "draconicevolution:models/block/structure_block",
    "supplementaries:models/block/hanging_flower_pot_rope"
  ]

  modelsToDefaultToBlock.forEach((rl) => {
    allthemods.add(rl, { parent: "forge:block/default" })
  })

  // forge:bucket -> forge:fluid_container

  allthemods.add("advgenerators:models/item/steam_bucket", {
    parent: "forge:item/bucket_drip",
    loader: "forge:fluid_container",
    fluid: "advgenerators:steam"
  })
  allthemods.add("advgenerators:models/item/syngas_bucket", {
    parent: "forge:item/bucket_drip",
    loader: "forge:fluid_container",
    fluid: "advgenerators:syngas"
  })
})
