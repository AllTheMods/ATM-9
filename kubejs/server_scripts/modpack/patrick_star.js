ServerEvents.recipes(event => {
  event.custom({
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
  }).id('kubejs:allthetweaks/patrick_star')
})
