{
  "__comment0": "Diameter of the vein, all axis.",
  "cluster_size": 30,

  "__comment1": "% chance for the picked block to place (0.0,1.0)",
  "density": 0.5,

  "__comment2": "Weight of this vein, out of all registered veins",
  "weight": 100,

  "__comment3": "In what stone type should this vein place in?",
  "layer": "deepslate",

  "__comment4": "What dimension can this vein appear in?",
  "dimension_filter": "minecraft:overworld",

  "__comment6": "What Y layers does this vein appear in? Vanilla placement modifier.",
  "height_range": {
    "height": {
      "type": "uniform",
      "min_inclusive": {
        "absolute": -64
      },
      "max_inclusive": {
        "absolute": 20
      }
    }
  },

  "__comment7": "Chance of an ore block not placing if exposed to air. (0.0,1.0)",
  "discard_chance_on_air_exposure": 0.0,

  "__comment8": "What biomes does this vein appear in?",
  "biomes": "#minecraft:is_overworld",

  "__comment9": "Extra added weights for specific biomes",
  "weight_modifier": {
    "biomes": "#minecraft:is_forest",
    "added_weight": 30
  },

  "__comment10": "The vein generator.",
  "generator": {
    "type": "gtceu:layer",
    "__comment": "An array of patterns, out of which 1 is picked at random. Each object in a 'pattern pool' represents a layer.",
    "layer_patterns": [
      [
        {
          "__comment": "array of materials (or TargetBlockStates) to use",
          "targets": [
            "aluminium",
            "cobalt"
          ],
          "min_size": 4,
          "max_size": 5,
          "weight": 2
        },
        {
          "targets": [
            "lead"
          ],
          "min_size": 2,
          "max_size": 2,
          "weight": 3
        },
        {
          "targets": [
            "diamond"
          ],
          "min_size": 1,
          "max_size": 3,
          "weight": 1
        }
      ]
    ]
  }
}