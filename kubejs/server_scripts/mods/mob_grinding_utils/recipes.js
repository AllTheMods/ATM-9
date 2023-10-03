ServerEvents.recipes(event => {
    event.remove({ id: 'mob_grinding_utils:recipe_saw_upgrade_looting' })
    event.shaped('mob_grinding_utils:saw_upgrade_looting', [
        "GLG",
        "LRL",
        "GLG"
      ], {
      G: '#forge:nuggets/gold',
      L: '#forge:dyes/blue',
      R: [Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 1).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 2).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 3).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 4).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 5).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 6).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 7).strongNBT(),Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 8).strongNBT()]
    }).id('kubejs:mob_grinding_utils/saw_upgrade_looting')
  })