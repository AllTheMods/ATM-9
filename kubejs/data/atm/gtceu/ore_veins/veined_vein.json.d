{
  "__comment0": "Diameter of the vein, all axis.",
  "cluster_size": 25,

  "__comment1": "% chance for the picked block to place (0.0,1.0)",
  "density": 1.0,

  "__comment2": "Weight of this vein, out of all registered veins",
  "weight": 200,

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
    "type": "gtceu:veined",
    "ore_blocks": "hematite",
    "dense_block": "chalcopyrite",
    "filler_block": {
      "Name": "minecraft:white_stained_glass"
    },
    "min_y": -60,
    "max_y": 100,
    "veininess_treshold": 0.3,
    "edge_roundoff_begin": 15,
    "max_edge_roundoff": 0.2,
    "min_richness": 0.1,
    "max_richness": 0.3,
    "max_richness_threshold": 0.6,
    "dense_block_chance": 0.05,
    "ore_gap_noise_skip_threshold": -0.3
  }
}