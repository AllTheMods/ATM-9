// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

// priority: 10

let chemlibRemove = [
    "aluminum",
    "chromium",
    "europium",
    "iridium",
    "neodymium",
    "niobium",
    "palladium",
    "rhodium",
    "ruthenium",
    "samarium",
    "silicon",
    "titanium",
    "tungsten",
    "vanadium",
    "yttrium",
]
ServerEvents.recipes(allthemods => {
    chemlibRemove.forEach(material => {
        allthemods.remove({id:`chemlib:${material}_ingot_from_smelting_${material}_dust`})
        allthemods.remove({id:`chemlib:${material}_ingot_from_blasting_${material}_dust`})
        allthemods.remove({id:`alchemistry:compactor/${material}_dust`})
    })

    // adjust recipe for fusion core to not use tungsten ingots
    allthemods.remove({id: "alchemistry:fusion_core"})
    allthemods.shaped('alchemistry:fusion_core', ['TNT','TNT','TNT',], {'T': 'chemlib:potassium_ingot', 'N': 'minecraft:netherite_scrap'}).id('allthemods:chemlib/fusion_core')

    //adjust recipe for fission core to not use yttrium ingots
    allthemods.remove({id: "alchemistry:fission_core"})
    allthemods.shaped('alchemistry:fission_core',
        ['ABA', 'ABA', 'ABA'],
        {'A': 'chemlib:zirconium_ingot', 'B': 'minecraft:blaze_rod'}
    ).id('allthemods:chemlib/fission_core')

    // add a dissolver recipe for rutile dust to make the titanium element
    // this allows the titanium bee to produce chemlib titanium which can be used for nether star production in chemlib
    allthemods.custom({
        "type": "alchemistry:dissolver",
        "group": "alchemistry:dissolver",
        "input": {
            "count": 1,
            "ingredient": {
              "item": "gtceu:rutile_dust"
            }
        },
        "output": {
            "groups": [
                {
                    "probability": 100.0,
                    "results": [
                        {
                            "count": 8,
                            "item": "chemlib:titanium"
                        },
                        {
                            "count": 16,
                            "item": "chemlib:oxygen"
                        }
                    ]
                }
            ],
            "rolls": 1,
            "weighted": false
        }
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
