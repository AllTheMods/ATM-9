// priority: 0

// Visit the wiki for more info - https://kubejs.com/

WorldgenEvents.remove(event => {
    event.removeFeatureById('underground_ores', ['theurgy:sal_ammoniac_ore'])
    event.removeFeatureById('underground_ores', ['create:zinc_ore'])
    event.removeFeatureById('underground_ores', [
        'bigreactors:yellorite_ore',
        'bigreactors:yellorite_deepslate_ore'
    ])
    event.removeFeatureById('underground_ores', [
        'railcraft:lead_ore',
        'railcraft:nickel_ore_middle',
        'railcraft:nickel_ore_upper',
        'railcraft:nickel_ore_small',
        'railcraft:saltpeter',
        'railcraft:silver_ore',
        'railcraft:silver_ore_lower',
        'railcraft:sulfur_ore_lower',
        'railcraft:sulfur_ore_upper',
        'railcraft:tin_ore_large',
        'railcraft:tin_ore_small',
        'railcraft:zinc_ore',
    ])
    event.removeFeatureById('underground_ores', [
        'occultism:ore_silver',
        'occultism:ore_silver_deepslate'
    ])
    /*
    event.removeFeatureById('underground_ores', [
        'powah:uraninite_ore',
        'powah:uraninite_ore_dense',
        'powah:uraninite_ore_poor',
    ])
    */
    event.removeFeatureById('underground_ores', [
        'alltheores:ore_aluminum_placed',
        'alltheores:ore_iridium_placed',
        'alltheores:ore_lead_placed',
        'alltheores:ore_nickel_placed',
        'alltheores:ore_osmium_placed',
        'alltheores:ore_peridot_placed',
        'alltheores:ore_platinum_placed',
        'alltheores:ore_ruby_placed',
        'alltheores:ore_sapphire_placed',
        'alltheores:ore_silver_placed',
        'alltheores:ore_tin_placed',
        'alltheores:ore_uranium_placed',
        'alltheores:ore_uranium_placed_mining',
        'alltheores:ore_zinc_placed',

        'allthemodium:ore_coal_upper',
        'allthemodium:ore_coal_lower',
        'allthemodium:ore_copper_large',
        'allthemodium:ore_diamond_large',
        'allthemodium:ore_emerald',
        'allthemodium:ore_gold',
        'allthemodium:ore_gold_lower',
        'allthemodium:ore_iron_middle',
        'allthemodium:ore_iron_small',
        'allthemodium:ore_iron_upper',
        'allthemodium:ore_lapis',
        'allthemodium:ore_netherite',
        'allthemodium:ore_quartz_nether',
        'allthemodium:ore_redstone',
        'allthemodium:ore_redstone_lower',
    ])


    event.removeOres(props => {
        props.worldgenLayer = 'underground_ores'
        props.blocks = [
            'alltheores:nickel_ore',
            'alltheores:aluminum_ore',
            'alltheores:zinc_ore',
            'alltheores:tin_ore',
            'alltheores:silver_ore',
            'alltheores:lead_ore',
            'alltheores:osmium_ore',
            'alltheores:platinum_ore',
            'alltheores:uranium_ore',
            
            'alltheores:nether_nickel_ore',
            'alltheores:nether_aluminum_ore',
            'alltheores:nether_zinc_ore',
            'alltheores:nether_tin_ore',
            'alltheores:nether_silver_ore',
            'alltheores:nether_lead_ore',
            'alltheores:nether_osmium_ore',
            'alltheores:nether_platinum_ore',
            'alltheores:nether_uranium_ore',

            'alltheores:end_nickel_ore',
            'alltheores:end_aluminum_ore',
            'alltheores:end_zinc_ore',
            'alltheores:end_tin_ore',
            'alltheores:end_silver_ore',
            'alltheores:end_lead_ore',
            'alltheores:end_osmium_ore',
            'alltheores:end_platinum_ore',
            'alltheores:end_uranium_ore',
        ]
    })

})
