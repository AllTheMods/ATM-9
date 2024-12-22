// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

StartupEvents.registry('block', allthemods => {
	allthemods.create('magical_soil').displayName('§bMagical Soil').grassSoundType().mapColor('grass').hardness(0.6);
})

StartupEvents.registry('item', allthemods => {
	allthemods.create('inert_nether_star').displayName('Inert Nether Star').texture(`minecraft:item/nether_star`).tooltip('Needs activating...')//.parentModel('minecraft:nether_star')
})

StartupEvents.modifyCreativeTab('ironfurnaces:ironfurnaces_tab', allthemods => {
	allthemods.add('ironfurnaces:allthemodium_furnace')
	allthemods.add('ironfurnaces:vibranium_furnace')
	allthemods.add('ironfurnaces:unobtainium_furnace')
	allthemods.add('ironfurnaces:upgrade_allthemodium')
	allthemods.add('ironfurnaces:upgrade_vibranium')
	allthemods.add('ironfurnaces:upgrade_unobtainium')
})

StartupEvents.modifyCreativeTab('expatternprovider:tab_main', allthemods => {
    allthemods.add(Item.of('expatternprovider:infinity_cell', '{record: {"#c": "ae2:f", id: "gtceu:soldering_alloy"}}'))
    allthemods.add(Item.of('expatternprovider:infinity_cell', '{record: {"#c": "appmek:chemical", gasName: "mekanism:polonium", t:0b, amount: 1000L}}'))
    allthemods.add(Item.of('expatternprovider:infinity_cell', '{record: {"#c": "appmek:chemical", gasName: "mekanism:plutonium", t:0b, amount: 1000L}}'))
    allthemods.add(Item.of('expatternprovider:infinity_cell', '{record: {"#c": "ae2:f", id: "gtceu:chlorine"}}'))
    allthemods.add(Item.of('expatternprovider:infinity_cell', '{record: {"#c": "ae2:f", id: "gtceu:sulfuric_acid"}}'))
    allthemods.add(Item.of('expatternprovider:infinity_cell', '{record: {"#c": "ae2:f", id: "gtceu:hydrogen"}}'))
    allthemods.add(Item.of('expatternprovider:infinity_cell', '{record: {"#c": "ae2:f", id: "gtceu:oxygen"}}'))
    allthemods.add(Item.of('expatternprovider:infinity_cell', '{record: {"#c": "ae2:f", id: "gtceu:styrene_butadiene_rubber"}}'))
    allthemods.add(Item.of('expatternprovider:infinity_cell', '{record: {"#c": "ae2:f", id: "minecraft:lava"}}'))
    allthemods.add(Item.of('expatternprovider:infinity_cell', '{record: {"#c": "ae2:f", id: "gtceu:polytetrafluoroethylene"}}'))
    allthemods.add(Item.of('expatternprovider:infinity_cell', '{record: {"#c": "ae2:f", id: "gtceu:polybenzimidazole"}}'))
    allthemods.add(Item.of('expatternprovider:infinity_cell', '{record: {"#c": "ae2:f", id: "gtceu:ethylene"}}'))
    allthemods.add(Item.of('expatternprovider:infinity_cell', '{record: {"#c": "ae2:f", id: "gtceu:lubricant"}}'))
    allthemods.add(Item.of('expatternprovider:infinity_cell', '{record: {"#c": "ae2:f", id: "gtceu:air"}}'))
    allthemods.add(Item.of('expatternprovider:infinity_cell', '{record: {"#c": "ae2:f", id: "gtceu:ender_air"}}'))
    allthemods.add(Item.of('expatternprovider:infinity_cell', '{record: {"#c": "ae2:f", id: "gtceu:nether_air"}}'))
    allthemods.add(Item.of('expatternprovider:infinity_cell', '{record: {"#c": "ae2:f", id: "gtceu:fluorine"}}'))
})

StartupEvents.modifyCreativeTab('functional_blocks', allthemods => {
    [
    'ancient',      'azalea',       'blossom',          'oak',
    'spruce',       'birch',        'jungle',           'acacia',
    'dark_oak',     'crimson',      'warped',           'mangrove',
    'bamboo',       'cherry',       'nether_brick',     'prismarine', 
    'purpur'
    ].forEach(type => {
        allthemods.add(`quark:${type}_chest`)
        allthemods.add(`quark:${type}_trapped_chest`)       
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
