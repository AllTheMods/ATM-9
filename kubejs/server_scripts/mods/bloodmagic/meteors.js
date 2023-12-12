ServerEvents.highPriorityData(event => {
    let addMeteorWithCore = (id, explosionRadius, input, coreBlock, innerRadius, outerRadius, fillBlock, weightMap, syphon) => {
        let meteorJson = JsonIO.toObject(
            {
                "type": "bloodmagic:meteor",
                "explosion": explosionRadius,
                "input": input,
                "layers": [
                  {
                    "additionalWeight": 0,
                    "fill": {
                      "block": coreBlock
                    },
                    "minWeight": 0,
                    "radius": innerRadius
                  },
                  {
                    "additionalWeight": 0,
                    "fill": {
                      "block": fillBlock
                    },
                    "minWeight": 1000,
                    "radius": outerRadius,
                    "weightMap": weightMap
                  }
                ],
                "syphon": syphon
              }
        )

        event.addJson(`bloodmagic:recipes/meteor/${id}`, meteorJson)
    }

    let addMeteor = (id, explosionRadius, input, radius, fillBlock, weightMap, syphon) => {
        let meteorJson = JsonIO.toObject(
            {
                "type": "bloodmagic:meteor",
                "explosion": explosionRadius,
                "input": input,
                "layers": [
                  {
                    "additionalWeight": 0,
                    "fill": {
                      "block": fillBlock
                    },
                    "minWeight": 1000,
                    "radius": radius,
                    "weightMap": weightMap
                  }
                ],
                "syphon": syphon
              }
        )

        event.addJson(`bloodmagic:recipes/meteor/${id}`, meteorJson)
    }

    let endMap = [
        {
            "block": "gtceu:endstone_naquadah_ore",
            "weight": 200
        },
        {
            "block": "gtceu:endstone_plutonium_ore",
            "weight": 200
        },
        {
            "block": "gtceu:endstone_tungstate_ore",
            "weight": 400
        }
    ]

    let netherMap = [
        {
            "block": "gtceu:netherrack_sphalerite_ore",
            "weight": 200
        },
        {
            "block": "gtceu:netherrack_sulfur_ore",
            "weight": 400
        },
        {
            "block": "gtceu:netherrack_tetrahedrite_ore",
            "weight": 400
        }
    ]

    let overworldMap = [
        {
            "block": "gtceu:tantalite_ore",
            "weight": 200
        },
        {
            "block": "gtceu:vanadium_magnetite_ore",
            "weight": 200
        },
        {
            "block": "gtceu:cobaltite_ore",
            "weight": 400
        }
    ]
    
    let speedRuneMap = [
        {
            "block": "bloodmagic:dungeon_ore",
            "weight": 400
        },
        {
            "block": "bloodmagic:speedrune2",
            "weight": 30
        }
    ]

    let atmMap = [
        {
            "block": "allthemodium:unobtainium_ore",
            "weight": 50
        },
        {
            "block": "allthemodium:vibranium_ore",
            "weight": 75
        },
        {
            "block": "allthemodium:allthemodium_ore",
            "weight": 100
        }
    ]

    addMeteorWithCore('intricate_parts', 12, { "item": "bloodmagic:hellforgedparts" }, "bloodmagic:dungeon_ore", 1, 3, "bloodmagic:dungeon_stone", speedRuneMap, 5000000)
    addMeteor('endGTOres', 6, { "item": "gtceu:naquadah_ingot" }, 3, "minecraft:endstone", endMap, 2500000)
    addMeteor('netherGTOres', 8, { "item": "gtceu:titanium_ingot" }, 4, "minecraft:netherrack", netherMap, 1250000)
    addMeteor('overworldGTOres', 8, { "item": "gtceu:arsenic_dust" }, 4, "minecraft:cobblestone", overworldMap, 625000)
    addMeteor('allthemodium', 12, { "item": "allthemodium:unobtainium_ingot" }, 3, "allthemodium:ancient_stone", atmMap, 2500000)
})