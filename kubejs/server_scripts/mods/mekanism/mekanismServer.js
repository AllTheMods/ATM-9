/*
  Mekanism recipes for processing stack
  Authored by EnigmaQuip

  DO NOT EDIT BELOW
  only the startup script should need editing
*/

ServerEvents.recipes(event => {
  global.mekStackAdditions.forEach(entry => {
    let material = entry.material

    let dust = AlmostUnified.getPreferredItemForTag(`forge:dusts/${material}`)
    if (entry.makeDust) {
      dust = Item.of(`kubejs:dust_${material}`)
    } else if (dust.isEmpty() && !Ingredient.of(`#forge:dusts/${material}`).isEmpty()) {
      dust = Ingredient.of(`#forge:dusts/${material}`).getFirst()
    }
    let hasDust = !dust.isEmpty()

    if (!Ingredient.of(`#forge:storage_blocks/raw_${material}`).isEmpty()) {
      event.custom({
        type: 'mekanism:dissolution',
        itemInput: {
          ingredient: {
            tag: `forge:storage_blocks/raw_${material}`
          }
        },
        output: {
          slurry: `kubejs:dirty_${material}`,
          amount: 6000,
          chemicalType: 'slurry'
        },
        gasInput: {
          amount: 2,
          gas: 'mekanism:sulfuric_acid'
        }
      }).id(`kubejs:processing/${material}/slurry/dirty/from_raw_block`)
      event.custom({
        type: 'mekanism:injecting',
        itemInput: {
          ingredient: {
            tag: `forge:storage_blocks/raw_${material}`
          }
        },
        chemicalInput: {
          amount: 2,
          gas: 'mekanism:hydrogen_chloride'
        },
        output: {
          item: `kubejs:shard_${material}`,
          count: 24
        }
      }).id(`kubejs:processing/${material}/shard/from_raw_block`)
      event.custom({
        type: 'mekanism:purifying',
        itemInput: {
          ingredient: {
            tag: `forge:storage_blocks/raw_${material}`
          }
        },
        chemicalInput: {
          amount: 2,
          gas: 'mekanism:oxygen'
        },
        output: {
          item: `kubejs:clump_${material}`,
          count: 18
        }
      }).id(`kubejs:processing/${material}/clump/from_raw_block`)
      if (hasDust) {
        event.custom({
          type: 'mekanism:enriching',
          input: {
            ingredient: {
              tag: `forge:storage_blocks/raw_${material}`
            }
          },
          output: {
            item: dust.id,
            count: 12
          }
        }).id(`kubejs:processing/${material}/dust/from_raw_block`)
      }
    }

    if (!Ingredient.of(`#forge:ores/${material}`).isEmpty()) {
      event.custom({
        type: 'mekanism:dissolution',
        itemInput: {
          ingredient: {
            tag: `forge:ores/${material}`
          }
        },
        output: {
          slurry: `kubejs:dirty_${material}`,
          amount: 1000,
          chemicalType: 'slurry'
        },
        gasInput: {
          amount: 1,
          gas: 'mekanism:sulfuric_acid'
        }
      }).id(`kubejs:processing/${material}/slurry/dirty/from_ore`)
      event.custom({
        type: 'mekanism:injecting',
        itemInput: {
          ingredient: {
            tag: `forge:ores/${material}`
          }
        },
        chemicalInput: {
          amount: 1,
          gas: 'mekanism:hydrogen_chloride'
        },
        output: {
          item: `kubejs:shard_${material}`,
          count: 4
        }
      }).id(`kubejs:processing/${material}/shard/from_ore`)
      event.custom({
        type: 'mekanism:purifying',
        itemInput: {
          ingredient: {
            tag: `forge:ores/${material}`
          }
        },
        chemicalInput: {
          amount: 1,
          gas: 'mekanism:oxygen'
        },
        output: {
          item: `kubejs:clump_${material}`,
          count: 3
        }
      }).id(`kubejs:processing/${material}/clump/from_ore`)
      if (hasDust) {
        event.custom({
          type: 'mekanism:enriching',
          input: {
            ingredient: {
              tag: `forge:ores/${material}`
            }
          },
          output: {
            item: dust.id,
            count: 2
          }
        }).id(`kubejs:processing/${material}/dust/from_ore`)
      }
    }

    if (!Ingredient.of(`#forge:raw_materials/${material}`).isEmpty()) {
      event.custom({
        type: 'mekanism:dissolution',
        itemInput: {
          amount: 3,
          ingredient: {
            tag: `forge:raw_materials/${material}`
          }
        },
        output: {
          slurry: `kubejs:dirty_${material}`,
          amount: 2000,
          chemicalType: 'slurry'
        },
        gasInput: {
          amount: 1,
          gas: 'mekanism:sulfuric_acid'
        }
      }).id(`kubejs:processing/${material}/slurry/dirty/from_raw_ore`)
      event.custom({
        type: 'mekanism:injecting',
        itemInput: {
          amount: 3,
          ingredient: {
            tag: `forge:raw_materials/${material}`
          }
        },
        chemicalInput: {
          amount: 1,
          gas: 'mekanism:hydrogen_chloride'
        },
        output: {
          item: `kubejs:shard_${material}`,
          count: 8
        }
      }).id(`kubejs:processing/${material}/shard/from_raw_ore`)
      event.custom({
        type: 'mekanism:purifying',
        itemInput: {
          ingredient: {
            tag: `forge:raw_materials/${material}`
          }
        },
        chemicalInput: {
          amount: 1,
          gas: 'mekanism:oxygen'
        },
        output: {
          item: `kubejs:clump_${material}`,
          count: 2
        }
      }).id(`kubejs:processing/${material}/clump/from_raw_ore`)
      if (hasDust) {
        event.custom({
          type: 'mekanism:enriching',
          input: {
            amount: 3,
            ingredient: {
              tag: `forge:raw_materials/${material}`
            }
          },
          output: {
            item: dust.id,
            count: 4
          }
        }).id(`kubejs:processing/${material}/dust/from_raw_ore`)
      }
    }

    event.custom({
      type: 'mekanism:washing',
      fluidInput: {
        amount: 5,
        tag: 'minecraft:water'
      },
      slurryInput: {
        amount: 1,
        slurry: `kubejs:dirty_${material}`
      },
      output: {
        slurry: `kubejs:clean_${material}`,
        amount: 1
      }
    }).id(`kubejs:processing/${material}/slurry/clean`)
    event.custom({
      type: 'mekanism:crystallizing',
      chemicalType: 'slurry',
      input: {
        amount: 200,
        slurry: `kubejs:clean_${material}`
      },
      output: {
        item: `kubejs:crystal_${material}`
      }
    }).id(`kubejs:processing/${material}/crystal/from_slurry`)
    event.custom({
      type: 'mekanism:injecting',
      itemInput: {
        ingredient: {
          tag: `mekanism:crystals/${material}`
        }
      },
      chemicalInput: {
        amount: 1,
        gas: 'mekanism:hydrogen_chloride'
      },
      output: {
        item: `kubejs:shard_${material}`
      }
    }).id(`kubejs:processing/${material}/shard/from_crystal`)
    event.custom({
      type: 'mekanism:purifying',
      itemInput: {
        ingredient: {
          tag: `mekanism:shards/${material}`
        }
      },
      chemicalInput: {
        amount: 1,
        gas: 'mekanism:oxygen'
      },
      output: {
        item: `kubejs:clump_${material}`
      }
    }).id(`kubejs:processing/${material}/clump/from_shard`)
    event.custom({
      type: 'mekanism:crushing',
      input: {
        ingredient: {
          tag: `mekanism:clumps/${material}`
        }
      },
      output: {
        item: `kubejs:dirty_dust_${material}`
      }
    }).id(`kubejs:processing/${material}/dirty_dust/from_clump`)
    if (hasDust) {
      event.custom({
        type: 'mekanism:enriching',
        input: {
          ingredient: {
            tag: `mekanism:dirty_dusts/${material}`
          }
        },
        output: {
          item: dust.id
        }
      }).id(`kubejs:processing/${material}/dust/from_dirty_dust`)
    }
  })
})