// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes((allthemods) => {
 const crops = ["rice", "cucumber", "soy_bean", "wasabi_root", "sesame_seed"];
  function categories(crop) {
    return crop == "rice" ? ["water"] : ["dirt", "farmland"];
  }
  function items(crop) {
    return `sushigocrafting:${crop}`;
  }
  function blockConvert(blockString, withType) {
    const block =
      blockString.substring(0, 1) === "#"
        ? { tag: blockString.substring(1) }
        : { block: blockString };
    if (withType)
      block.type = blockString.substring(0, 1) === "#" ? "tag" : "block";
    return block;
  }
  function removeUnderCrop(crop) {
    if (crop.includes("_")) {
      const base = `sushigocrafting:${crop.split("_")[0]}_crop`;
      return blockConvert(base, false);
    } else {
      return blockConvert(`sushigocrafting:${crop}_crop`, false);
    }
  }
  function removeUnderSeed(crop) {
    return crop.includes("_") ? `sushigocrafting:${crop.split("_")[0]}_seeds` : `sushigocrafting:${crop}_seeds`;
  }
  crops.forEach((crop) => {
    allthemods.custom({
      type: "botanypots:crop",
      seed: Ingredient.of(removeUnderSeed(crop)).toJson(),
      categories: categories(crop),
      growthTicks: 1200,
      //display: blockConvert(`sushigocrafting:${crop}_crop`, false),
      display: removeUnderCrop(crop),
      drops: [
        {
          chance: 1.0,
          output: Ingredient.of(items(crop)).toJson(),
          minRolls: 1,
          maxRolls: 2,
        },
        {
          chance: 0.15,
          output: Ingredient.of(items(crop)).toJson(),
          minRolls: 1,
          maxRolls: 2,
        },
      ],
    })
  })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
