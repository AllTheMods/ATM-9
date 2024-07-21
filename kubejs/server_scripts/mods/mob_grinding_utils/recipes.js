// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.remove({ id: 'mob_grinding_utils:recipe_saw_upgrade_looting' })
    allthemods.shaped('mob_grinding_utils:saw_upgrade_looting', [
        "GLG",
        "LRL",
        "GLG"
      ], {
      G: '#forge:nuggets/gold',
      L: '#forge:dyes/blue',
      R: [Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 1).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 2).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 3).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 4).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 5).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 6).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 7).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 8).strongNBT()]
    }).id('allthemods:mob_grinding_utils/saw_upgrade_looting')
  })

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
