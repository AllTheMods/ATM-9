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
ServerEvents.recipes(event => {
    missingCreateOres.forEach(ore => {
        event.smelting('alltheores:' + ore + '_ingot', 'create:crushed_raw_' + ore + '').xp(0.1).id('create:smelting/' + ore + '_ingot_from_crushed')
        event.blasting('alltheores:' + ore + '_ingot', 'create:crushed_raw_' + ore + '').xp(0.1).id('create:blasting/' + ore + '_ingot_from_crushed')
        event.custom({
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
