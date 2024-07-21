// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
  allthemods.custom({
    type: "create:mechanical_crafting",
    pattern: [
      '    B    ',
      '   BCA   ',
      'BBBGCABBB',
      'ACGCGGGCA',
      ' AAGGGBA ',
      '  EDDDE  ',
      ' EFEDEFE ',
      'BEDD DDEB',
      'AAA   AAA'
    ],
    key: {
      A: Ingredient.of('minecraft:magenta_concrete').toJson(),
      B: Ingredient.of('minecraft:pink_concrete').toJson(),
      C: Ingredient.of('minecraft:pink_concrete_powder').toJson(),
      D: Ingredient.of('minecraft:green_concrete').toJson(),
      E: Ingredient.of('minecraft:green_concrete_powder').toJson(),
      F: Ingredient.of('minecraft:lime_concrete').toJson(),
      G: Ingredient.of('minecraft:magenta_concrete_powder').toJson()
    },
    result: Ingredient.of('allthetweaks:patrick_star').toJson(),
    acceptMirrored: false
  }).id('allthemods:allthetweaks/patrick_star')
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
