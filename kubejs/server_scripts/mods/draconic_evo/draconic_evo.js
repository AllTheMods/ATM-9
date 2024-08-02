// This File has been authored by AllTheMods Staff (me, Mitchell52) for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
ServerEvents.recipes(allthemods =>{
    allthemods.custom({
        type: 'create:crushing',
        ingredients: [{item: 'draconicevolution:awakened_draconium_ingot'}],
        processingTime: 300,
        results: [
          {item: 'draconicevolution:awakened_draconium_dust'}
        ]
    }).id(`allthemods:create/crushing/awakened_draconium_dust`)
    
    allthemods.custom({
        type: 'thermal:pulverizer',
        ingredient: {item: 'draconicevolution:awakened_draconium_ingot'},
        result: [
            {item: 'draconicevolution:awakened_draconium_dust'}
        ],
        experience: 0.1
    }).id(`allthemods:thermal/pulverizing/awakened_draconium_dust`)

    allthemods.custom({
        type: "occultism:crushing",
        ingredient: {item: 'draconicevolution:awakened_draconium_ingot'},
        result: {item: 'draconicevolution:awakened_draconium_dust'},
        crushing_time: 200,
        ignore_crushing_multiplier: true
    }).id(`allthemods:occultism/crushing/awakened_draconium_dust`)

    allthemods.custom({
        type: 'immersiveengineering:crusher',
        energy: 3200,
        input: {item: 'draconicevolution:awakened_draconium_ingot'},
        result: {count: 1,item: 'draconicevolution:awakened_draconium_dust'},
        secondaries: []
    }).id(`allthemods:immersive/crushing/awakened_draconium_dust`)

    allthemods.custom({
        type: 'mekanism:crushing',
        input: {ingredient: {item: 'draconicevolution:awakened_draconium_ingot'}},
        output: {item: 'draconicevolution:awakened_draconium_dust'}
    }).id(`allthemods:mekanism/crushing/awakened_draconium_dust`)

    allthemods.custom({
        type: 'create:crushing',
        ingredients: [{item: 'draconicevolution:draconium_ingot'}],
        processingTime: 300,
        results: [
          {item: 'draconicevolution:draconium_dust'}
        ]
    }).id(`allthemods:create/crushing/draconium_dust`)

    allthemods.custom({
        type: 'thermal:pulverizer',
        ingredient: {item: 'draconicevolution:draconium_ingot'},
        result: [
            {item: 'draconicevolution:draconium_dust'}
        ],
        experience: 0.1
    }).id(`allthemods:thermal/pulverizing/draconium_dust`)

    allthemods.custom({
        type: "occultism:crushing",
        ingredient: {item: 'draconicevolution:draconium_ingot'},
        result: {item: 'draconicevolution:draconium_dust'},
        crushing_time: 200,
        ignore_crushing_multiplier: true
    }).id(`allthemods:occultism/crushing/draconium_dust`)

    allthemods.custom({
        type: 'immersiveengineering:crusher',
        energy: 3200,
        input: {item: 'draconicevolution:draconium_ingot'},
        result: {count: 1,item: 'draconicevolution:draconium_dust'},
        secondaries: []
    }).id(`allthemods:immersive/crushing/draconium_dust`)

    allthemods.custom({
        type: 'mekanism:crushing',
        input: {ingredient: {item: 'draconicevolution:draconium_ingot'}},
        output: {item: 'draconicevolution:draconium_dust'}
    }).id(`allthemods:mekanism/crushing/draconium_dust`)

})

// This File has been authored by AllTheMods Staff (me, Mitchell52) for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.