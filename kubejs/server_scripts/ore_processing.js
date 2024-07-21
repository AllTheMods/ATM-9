//
// This File has been authored by AllTheMods Staff (me, Mitchell52) for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
//  Written by Mitchell52 for AllTheMods 8, and 9
//  this file extends ore processing where the postunify scripts cannot due to some mods not allowing tag outputs, and coz one file is cleaner..
//  
// Contents
//  Create Crushing, ImmersiveEngineering Arc Furnace, Thermal Pulveriser and Induction smelter for ATM trio, and ATO iridium
//  Thermal Induction smelter for platinum
//  Thermal Pulverizer and induction smelter for Sgear ores
//  Thermal Pulverizer for missing Raw ato chunks, moved from /mods/thermal/thermal.js
//  Fixes other Redstone and Quartz Create crushing
//  Thermal extra dusts, Apatite, soulsand, cinnabar, amethyst, niter, in Mek, Create, and IE Crushers


ServerEvents.recipes(allthemods =>{
// ATM trio
    ['allthemodium', 'vibranium','unobtainium'].forEach(atm_ore =>{
        allthemods.custom({
            type: 'create:crushing',
            ingredients: [{tag: `forge:raw_materials/${atm_ore}`}],
            processingTime: 400,
            results: [
              {item: `allthemodium:${atm_ore}_dust`},
              {chance: 0.75, item: 'create:experience_nugget'}
            ]
        }).id(`allthemods:create/crushing/atm8_raw_${atm_ore}_dust`)
        allthemods.custom({
            type: 'create:crushing',
            ingredients: [{tag: `forge:storage_blocks/raw_${atm_ore}`}],
            processingTime: 400,
            results: [
              {count: 9,item: `allthemodium:${atm_ore}_dust`},
              {chance: 0.75, count: 9, item: 'create:experience_nugget'}
            ]
        }).id(`allthemods:create/crushing/atm8_raw_block_${atm_ore}_dust`)
        allthemods.custom({
            type: 'create:crushing',
            ingredients: [{tag: `forge:ores/${atm_ore}`}],
            processingTime: 400,
            results: [
              {item: `allthemodium:${atm_ore}_dust`},
              {chance: 0.75, item: `allthemodium:${atm_ore}_dust`},
              {chance: 0.75, item: 'create:experience_nugget'}
            ]
        }).id(`allthemods:create/crushing/atm8_ore_${atm_ore}_dust`)
        //Immersive
        allthemods.custom({
            type: 'immersiveengineering:arc_furnace',
            additives: [],
            energy: 25600,
            input: {tag: `forge:raw_materials/${atm_ore}`},
            results: [{base_ingredient: {item: `allthemodium:${atm_ore}_ingot`}}],
            secondaries: [{chance: 0.5, output: {item: `allthemodium:${atm_ore}_ingot`}}],
            time: 100
        }).id(`allthemods:ie/arcfurnace/atm8_raw_${atm_ore}_ingot`)
        allthemods.custom({
            type: 'immersiveengineering:arc_furnace',
            additives: [],
            energy: 102400,
            input: {tag: `forge:ores/${atm_ore}`},
            results: [{base_ingredient: {item: `allthemodium:${atm_ore}_ingot`},count: 2}],
            slag: {tag: 'forge:slag'},
            time: 200
        }).id(`allthemods:ie/arcfurnace/atm8_ore_${atm_ore}_ingot`)
        allthemods.custom({
            type: 'immersiveengineering:arc_furnace',
            additives: [],
            energy: 230400,
            input: {tag: `forge:storage_blocks/raw_${atm_ore}`},
            results: [{base_ingredient: {item: `allthemodium:${atm_ore}_ingot`},count: 13}],
            secondaries: [{chance: 0.5, output: {item: `allthemodium:${atm_ore}_ingot`}}],
            time: 900
        }).id(`allthemods:ie/arcfurnace/atm8_raw_block_${atm_ore}_ingot`)
        allthemods.custom({
            type: 'immersiveengineering:arc_furnace',
            additives: [],
            energy: 51200,
            input: {tag: `forge:dusts/${atm_ore}`},
            results: [{item: `allthemodium:${atm_ore}_ingot`}],
            time: 100
        }).id(`allthemods:ie/arcfurnace/atm8_dust_${atm_ore}_ingot`)
        //Thermal Pulverizer
        allthemods.custom({
            type: 'thermal:pulverizer',
            ingredient: {item: `allthemodium:raw_${atm_ore}`},
            result: [
                {item: `allthemodium:${atm_ore}_dust`,chance: 1.25},
                {item: 'alltheores:netherite_dust',chance: 0.05}
            ],
            experience: 0.1
        }).id(`allthemods:thermal/pulverizing/atm8_${atm_ore}`)
        //Thermal Induction smelter
        allthemods.custom({
            type: 'thermal:smelter',
            ingredient: {item: `allthemodium:raw_${atm_ore}`},
            result: [
                {item: `allthemodium:${atm_ore}_ingot`,chance: 1.5,locked: true},
                {item: 'thermal:netherite_nugget',chance: 1.0}
            ],
            experience: 0.1
        }).id(`allthemods:thermal/inductsmelter/atm8_raw_${atm_ore}`)
        allthemods.custom({
            type: 'thermal:smelter',
            ingredient: {tag: `forge:ores/${atm_ore}`},
            result: [
                {item: `allthemodium:${atm_ore}_ingot`,chance: 1.0},
                {item: 'minecraft:netherite_ingot',chance: 0.2},
                {item: 'thermal:rich_slag',chance: 0.2}
            ],
            experience: 0.1
        }).id(`allthemods:thermal/inductsmelter/atm8_ore_${atm_ore}`)
    })

// Iridium
let atoore = ['iridium']
    atoore.forEach(ato_ore =>{
        allthemods.custom({
            type: 'create:crushing',
            ingredients: [{tag: `forge:raw_materials/${ato_ore}`}],
            processingTime: 400,
            results: [
              {item: `alltheores:${ato_ore}_dust`},
              {chance: 0.75, item: 'create:experience_nugget'}
            ]
        }).id(`allthemods:create/crushing/atm8_raw_${ato_ore}_dust`)
        allthemods.custom({
            type: 'create:crushing',
            ingredients: [{tag: `forge:storage_blocks/raw_${ato_ore}`}],
            processingTime: 400,
            results: [
              {count: 9,item: `alltheores:${ato_ore}_dust`},
              {chance: 0.75, count: 9, item: 'create:experience_nugget'}
            ]
        }).id(`allthemods:create/crushing/atm8_raw_block_${ato_ore}_dust`)
        allthemods.custom({
            type: 'create:crushing',
            ingredients: [{tag: `forge:ores/${ato_ore}`}],
            processingTime: 400,
            results: [
              {item: `alltheores:${ato_ore}_dust`},
              {chance: 0.75, item: `alltheores:${ato_ore}_dust`},
              {chance: 0.75, item: 'create:experience_nugget'}
            ]
        }).id(`allthemods:create/crushing/atm8_ore_${ato_ore}_dust`)
        //Immersive
        allthemods.custom({
            type: 'immersiveengineering:arc_furnace',
            additives: [],
            energy: 25600,
            input: {tag: `forge:raw_materials/${ato_ore}`},
            results: [{base_ingredient: {item: `alltheores:${ato_ore}_ingot`}}],
            secondaries: [{chance: 0.5, output: {item: `alltheores:${ato_ore}_ingot`}}],
            time: 100
        }).id(`allthemods:ie/arcfurnace/atm8_raw_${ato_ore}_ingot`)
        allthemods.custom({
            type: 'immersiveengineering:arc_furnace',
            additives: [],
            energy: 102400,
            input: {tag: `forge:ores/${ato_ore}`},
            results: [{base_ingredient: {item: `alltheores:${ato_ore}_ingot`},count: 2}],
            slag: {tag: 'forge:slag'},
            time: 200
        }).id(`allthemods:ie/arcfurnace/atm8_ore_${ato_ore}_ingot`)
        allthemods.custom({
            type: 'immersiveengineering:arc_furnace',
            additives: [],
            energy: 230400,
            input: {tag: `forge:storage_blocks/raw_${ato_ore}`},
            results: [{base_ingredient: {item: `alltheores:${ato_ore}_ingot`},count: 13}],
            secondaries: [{chance: 0.5, output: {item: `alltheores:${ato_ore}_ingot`}}],
            time: 900
        }).id(`allthemods:ie/arcfurnace/atm8_raw_block_${ato_ore}_ingot`)
        allthemods.custom({
            type: 'immersiveengineering:arc_furnace',
            additives: [],
            energy: 51200,
            input: {tag: `forge:dusts/${ato_ore}`},
            results: [{item: `alltheores:${ato_ore}_ingot`}],
            time: 100
        }).id(`allthemods:ie/arcfurnace/atm8_dust_${ato_ore}_ingot`)
        //Thermal Pulverizer
        allthemods.custom({
            type: 'thermal:pulverizer',
            ingredient: {item: `alltheores:raw_${ato_ore}`},
            result: [
                {item: `alltheores:${ato_ore}_dust`,chance: 1.25},
                {item: 'alltheores:platinum_dust',chance: 0.05}
            ],
            experience: 0.1
        }).id(`allthemods:thermal/pulverizing/atm8_${ato_ore}`)
        //Thermal Induction smelter
        allthemods.custom({
            type: 'thermal:smelter',
            ingredient: {item: `alltheores:raw_${ato_ore}`},
            result: [
                {item: `alltheores:${ato_ore}_ingot`,chance: 1.5,locked: true},
                {item: 'alltheores:platinum_nugget',chance: 1.0}
            ],
            experience: 0.1
        }).id(`allthemods:thermal/inductsmelter/atm8_raw_${ato_ore}`)
        allthemods.custom({
            type: 'thermal:smelter',
            ingredient: {tag: `forge:ores/${ato_ore}`},
            result: [
                {item: `alltheores:${ato_ore}_ingot`,chance: 1.0},
                {item: 'alltheores:platinum_ingot',chance: 0.2},
                {item: 'thermal:rich_slag',chance: 0.2}
            ],
            experience: 0.1
        }).id(`allthemods:thermal/inductsmelter/atm8_ore_${ato_ore}`)
    })

// Platinum
allthemods.custom({
    type: 'thermal:smelter',
    ingredient: {item: `alltheores:raw_platinum`},
    result: [
        {item: `alltheores:platinum_ingot`,chance: 1.5,locked: true},
        {item: 'alltheores:tin_nugget',chance: 1.0}
    ],
    experience: 0.1
}).id(`allthemods:thermal/inductsmelter/atm8_raw_platinum`)
allthemods.custom({
    type: 'thermal:smelter',
    ingredient: {tag: `forge:ores/platinum`},
    result: [
        {item: `alltheores:platinum_ingot`,chance: 1.0},
        {item: 'alltheores:tin_ingot',chance: 0.2},
        {item: 'thermal:rich_slag',chance: 0.2}
    ],
    experience: 0.1
}).id(`allthemods:thermal/inductsmelter/atm8_ore_platinum`)

// Sgear Crimson iron, Azure silver
allthemods.custom({
    type: 'thermal:pulverizer',
    ingredient: {item: `silentgear:raw_azure_silver`},
    result: [
        {item: `silentgear:azure_silver_dust`,chance: 1.25},
        {item: 'alltheores:silver_dust',chance: 0.05}
    ],
    experience: 0.1
}).id(`allthemods:pulverizing_azure_silver`)
allthemods.custom({
    type: 'thermal:pulverizer',
    ingredient: {item: 'silentgear:raw_crimson_iron'},
    result: [
        {item: 'silentgear:crimson_iron_dust',chance: 1.25},
        {item: 'alltheores:iron_dust',chance: 0.05}
    ],
    experience: 0.1
}).id(`allthemods:pulverizing_crimson_iron`)

//// ATO ores, aluminum, platinum, uranium, zinc, osmium
//aluminum
allthemods.custom({
    type: 'thermal:pulverizer',
    ingredient: {item: `alltheores:raw_aluminum`},
    result: [
        {item: `alltheores:aluminum_dust`,chance: 1.25},
        {item: 'alltheores:tin_dust',chance: 0.05}
    ],
    experience: 0.1
}).id(`allthemods:pulverizing_ato_aluminum`)
//platinum
allthemods.custom({
    type: 'thermal:pulverizer',
    ingredient: {item: `alltheores:raw_platinum`},
    result: [
        {item: `alltheores:platinum_dust`,chance: 1.25},
        {item: 'alltheores:tin_dust',chance: 0.05}
    ],
    experience: 0.1
}).id(`allthemods:pulverizing_ato_platinum`)
//uranium
allthemods.custom({
    type: 'thermal:pulverizer',
    ingredient: {item: `alltheores:raw_uranium`},
    result: [
        {item: `alltheores:uranium_dust`,chance: 1.25},
        {item: 'alltheores:lead_dust',chance: 0.05}
    ],
    experience: 0.1
}).id(`allthemods:pulverizing_ato_uranium`)
//zinc
allthemods.custom({
    type: 'thermal:pulverizer',
    ingredient: {
      item: `alltheores:raw_zinc`},
    result: [
        {item: `alltheores:zinc_dust`,chance: 1.25},
        {item: 'alltheores:copper_dust',chance: 0.05}
    ],
    experience: 0.1
}).id(`allthemods:pulverizing_ato_zinc`)
//osmium
allthemods.custom({
    type: 'thermal:pulverizer',
    ingredient: {item: `alltheores:raw_osmium`},
    result: [
        {item: `alltheores:osmium_dust`,chance: 1.25},
        {item: 'alltheores:copper_dust',chance: 0.05}
    ],
    experience: 0.1
}).id(`allthemods:pulverizing_ato_osmium`)

// Other redstone and quartz
allthemods.custom({
    type: 'create:crushing',
    ingredients: [{item: 'alltheores:other_redstone_ore'}],
    processingTime: 400,
    results: [
      {count: 8, item: 'minecraft:redstone'},
      {chance: 0.75, item: 'minecraft:redstone'},
      {chance: 0.75, item: 'create:experience_nugget'},
      {chance: 0.12, item: 'allthemodium:ancient_stone'}
    ]
}).id(`allthemods:create/crushing/atm8_ore_redstone_dust`)

allthemods.custom({
    type: 'create:crushing',
    ingredients: [{item: 'alltheores:other_quartz_ore'}],
    processingTime: 400,
    results: [
      {count: 3, item: 'minecraft:quartz'},
      {chance: 0.75, item: 'minecraft:quartz'},
      {chance: 0.75, item: 'create:experience_nugget'},
      {chance: 0.12, item: 'allthemodium:ancient_stone'}
    ]
}).id(`allthemods:create/crushing/atm8_ore_quartz_dust`)
    
//Thermal extra dusts, apatite, soulsand, cinnabar, amethyst, niter
let thermdust =['apatite','cinnabar', 'niter']
thermdust.forEach(thermal =>{
    allthemods.custom({
        type: 'create:crushing',
        ingredients: [{item: `thermal:${thermal}`}],
        processingTime: 400,
        results: [
          {count: 1, item: `thermal:${thermal}_dust`},
          {chance: 0.5, item: `thermal:${thermal}_dust`}
        ]
    }).id(`allthemods:create/crushing/atm8_thermal_${thermal}_dust`)
    allthemods.custom({
        type: 'immersiveengineering:crusher',
        energy: 1600,
        input: {item: `thermal:${thermal}`},
        result: {item: `thermal:${thermal}_dust`},
        secondaries: [{chance: 0.1, output: {item: `thermal:${thermal}_dust`}}]
    }).id(`allthemods:immersive/crushing/atm8_thermal_${thermal}_dust`)
    allthemods.custom({
        type: 'mekanism:crushing',
        input: {ingredient:{item: `thermal:${thermal}`}},
        output:{item: `thermal:${thermal}_dust`}
    }).id(`allthemods:mekanism/crushing/atm8_thermal_${thermal}_dust`)
    })
    // Thermal Extra Soulsand dust
    allthemods.custom({
        type: 'create:crushing',
        ingredients: [{item: 'minecraft:soul_sand'}],
        processingTime: 400,
        results: [
          {count: 1, item: `thermal_extra:soul_sand_dust`},
          {chance: 0.5, item: `thermal_extra:soul_sand_dust`}
        ]
    }).id(`allthemods:create/crushing/atm8_te_soul_sand_dust`)
    allthemods.custom({
        type: 'immersiveengineering:crusher',
        energy: 1600,
        input: {item: 'minecraft:soul_sand'},
        result: {item: `thermal_extra:soul_sand_dust`},
        secondaries: [{chance: 0.1, output: {item: `thermal_extra:soul_sand_dust`}}]
    }).id(`allthemods:immersive/crushing/atm8_te_soul_sand_dust`)
    allthemods.custom({
        type: 'mekanism:crushing',
        input: {ingredient:{item: 'minecraft:soul_sand'}},
        output:{item: `thermal_extra:soul_sand_dust`}
    }).id(`allthemods:mekanism/crushing/atm8_te_soul_sand_dust`)


})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
