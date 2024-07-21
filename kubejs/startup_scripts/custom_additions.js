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
