ServerEvents.recipes(event => {
    event.remove({ id: 'bigreactors:fluidizer/casing'})
    event.remove({ id: 'bigreactors:fluidizer/controller'})
    event.remove({ id: 'bigreactors:fluidizer/solidinjector'})
    event.shaped('bigreactors:fluidizercasing',['IUI','UWU','IUI'],{
        I: 'minecraft:iron_ingot',
        U: '#forge:ingots/uranium',
        W: 'minecraft:water_bucket'
    }).id('bigreactors:fluidizercasing')
    event.shaped('bigreactors:fluidizercontroller',['CRC','UEU','CGC'],{
        C: 'bigreactors:fluidizercasing',
        R: 'minecraft:comparator',
        U: '#forge:ingots/uranium',
        E: 'minecraft:emerald',
        G: 'minecraft:glowstone_dust'
    }).id('bigreactors:fluidizercontroller')
    event.shaped('bigreactors:fluidizersolidinjector',['CUC','RPR','CUC'],{
        C: 'bigreactors:fluidizercasing',
        U: '#forge:ingots/uranium',
        R: 'minecraft:redstone',
        P: 'minecraft:piston'
    }).id('bigreactors:fluidizersolidinjector')

    event.remove('bigreactors:reactor/basic/casing')
    event.shaped('4x bigreactors:basic_reactorcasing', ['IGI', 'GSG', 'IGI'], {
        I: '#forge:ingots/iron',
        G: '#forge:ingots/graphite',
        S: '#forge:sand'
    })
    event.remove('bigreactors:reactor/reinforced/casing')
    event.shaped('4x bigreactors:reinforced_reactorcasing', ['SGS', 'GIG', 'SGS'], {
        S: '#forge:ingots/steel',
        G: '#forge:ingots/graphite',
        I: 'minecraft:iron_block'
    })
})