ServerEvents.recipes(event => {  
    [
    'ancient',      'azalea',       'blossom',          'oak',
    'spruce',       'birch',        'jungle',           'acacia',
    'dark_oak',     'crimson',      'warped',           'mangrove',
    'bamboo',       'cherry',       'nether_brick',     'prismarine', 
    'purpur'
    ].forEach(type => {
        event.shapeless(`quark:${type}_chest`, 'minecraft:chest')
        event.shapeless('minecraft:chest', `quark:${type}_chest`)
        event.shapeless(`quark:${type}_trapped_chest`, [`quark:${type}_chest`, 'minecraft:tripwire_hook'])
    })
})