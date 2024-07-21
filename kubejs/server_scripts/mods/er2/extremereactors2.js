// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.remove({ id: 'bigreactors:fluidizer/casing'})
    allthemods.remove({ id: 'bigreactors:fluidizer/controller'})
    allthemods.remove({ id: 'bigreactors:fluidizer/solidinjector'})
    allthemods.shaped('bigreactors:fluidizercasing',['IUI','UWU','IUI'],{
        I: 'minecraft:iron_ingot',
        U: '#forge:ingots/uranium',
        W: 'minecraft:water_bucket'
    }).id('bigreactors:fluidizercasing')
    allthemods.shaped('bigreactors:fluidizercontroller',['CRC','UEU','CGC'],{
        C: 'bigreactors:fluidizercasing',
        R: 'minecraft:comparator',
        U: '#forge:ingots/uranium',
        E: 'minecraft:emerald',
        G: 'minecraft:glowstone_dust'
    }).id('bigreactors:fluidizercontroller')
    allthemods.shaped('bigreactors:fluidizersolidinjector',['CUC','RPR','CUC'],{
        C: 'bigreactors:fluidizercasing',
        U: '#forge:ingots/uranium',
        R: 'minecraft:redstone',
        P: 'minecraft:piston'
    }).id('bigreactors:fluidizersolidinjector')

    allthemods.remove('bigreactors:reactor/basic/casing')
    allthemods.shaped('4x bigreactors:basic_reactorcasing', ['IGI', 'GSG', 'IGI'], {
        I: '#forge:ingots/iron',
        G: '#forge:ingots/graphite',
        S: '#forge:sand'
    })
    allthemods.remove('bigreactors:reactor/reinforced/casing')
    allthemods.shaped('4x bigreactors:reinforced_reactorcasing', ['SGS', 'GIG', 'SGS'], {
        S: '#forge:ingots/steel',
        G: '#forge:ingots/graphite',
        I: 'minecraft:iron_block'
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
