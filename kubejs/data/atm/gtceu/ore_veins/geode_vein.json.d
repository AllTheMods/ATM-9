{
  "__comment0": "Diameter of the vein, all axis.",
  "cluster_size": 30,

  "__comment1": "% chance for the picked block to place (0.0,1.0)",
  "density": 0.75,

  "__comment2": "Weight of this vein, out of all registered veins",
  "weight": 300,

  "__comment3": "In what stone type should this vein place in?",
  "layer": "stone",

  "__comment4": "What dimension can this vein appear in?",
  "dimension_filter": "minecraft:overworld",

  "__comment6": "What Y layers does this vein appear in? Vanilla placement modifier.",
  "height_range": {
    "height": {
      "type": "uniform",
      "min_inclusive": {
        "absolute": 0
      },
      "max_inclusive": {
        "absolute": 128
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
    "type": "gtceu:geode",
    "blocks": {
      "filling_provider": {
        "type": "minecraft:simple_state_provider",
        "state": {
          "Name": "minecraft:air"
        }
      },
      "inner_layer_provider": "stone",
      "alternate_inner_layer_provider": "nether_quartz",
      "middle_layer_provider": {
        "type": "simple_state_provider",
        "state": {
          "Name": "minecraft:smooth_basalt"
        }
      },
      "outer_layer_provider": {
        "type": "simple_state_provider",
        "state": {
          "Name": "minecraft:tuff"
        }
      },
      "inner_placements": [
        {
          "Name": "minecraft:diamond_block"
        }
      ],
      "cannot_replace": "#minecraft:features_cannot_replace",
      "invalid_blocks": "#minecraft:geode_invalid_blocks",
      "provider_material_prefix": "redSand"
    },
    "crack": {
      "base_crack_size": 1.0,
      "crack_point_offset": 2,
      "generate_crack_chance": 0.75
    },
    "layers": {
      "filling": 1.7,
      "inner_layer": 2.2,
      "middle_layer": 3.2,
      "outer_layer": 4.2
    },
    "distribution_points": {
      "type": "minecraft:uniform",
      "value": {
        "max_inclusive": 6,
        "min_inclusive": 1
      }
    },
    "invalid_blocks_threshold": 1,
    "max_gen_offset": 16,
    "min_gen_offset": -16,
    "noise_multiplier": 0.1,
    "outer_wall_distance": {
      "type": "minecraft:uniform",
      "value": {
        "max_inclusive": 10,
        "min_inclusive": 6
      }
    },
    "placements_require_layer0_alternate": true,
    "point_offset": {
      "type": "minecraft:uniform",
      "value": {
        "max_inclusive": 4,
        "min_inclusive": 2
      }
    },
    "use_alternate_layer0_chance": 0.083,
    "use_potential_placements_chance": 0.35
  }
}