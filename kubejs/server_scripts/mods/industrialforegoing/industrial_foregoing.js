// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.remove({id: 'industrialforegoing:ore_laser_base'})
    allthemods.shaped('industrialforegoing:ore_laser_base', ['PTP','OFO','GRG'],{
        P: 'industrialforegoing:plastic',
        T: 'allthemodium:allthemodium_pickaxe',
        O: '#forge:ores/iron',
        F: 'industrialforegoing:machine_frame_advanced',
        G: '#forge:gears/vibranium',
        R: 'minecraft:redstone'
    }).id('allthemods:industrialforegoings/ore_laser_drill')
    //uneeded gears
    allthemods.remove({id: 'industrialforegoing:iron_gear'})
    allthemods.remove({id: 'industrialforegoing:gold_gear'})
    allthemods.remove({id: 'industrialforegoing:diamond_gear'})
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
