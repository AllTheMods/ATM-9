// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

// Add missing ore crushing recipes for Create

let missingCreateOres = [
    'aluminum',
    'lead',
    'nickel',
    'osmium',
    'platinum',
    'silver',
    'tin',
    'uranium',
]
ServerEvents.recipes(allthemods => {
    missingCreateOres.forEach(ore => {
        allthemods.smelting('alltheores:' + ore + '_ingot', 'create:crushed_raw_' + ore + '').xp(0.1).id('create:smelting/' + ore + '_ingot_from_crushed')
        allthemods.blasting('alltheores:' + ore + '_ingot', 'create:crushed_raw_' + ore + '').xp(0.1).id('create:blasting/' + ore + '_ingot_from_crushed')
        allthemods.custom({
            type: 'create:splashing',
            ingredients: [
                {
                    'item': 'create:crushed_raw_' + ore
                }
            ],
            results: [
                {
                    'count': 9,
                    'item': 'alltheores:' + ore + '_nugget'
                }
            ]
        }).id('create:splashing/crushed_raw_' + ore)
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
