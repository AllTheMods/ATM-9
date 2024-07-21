// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

// priority: 1000

global['auTags'] = {
    dusts: [],
    gears: [],
    ingots: [],
    nuggets: [],
    plates: [],
    raw_materials: [],
    rods: [],
    storage_blocks: [],
    wires: []
}

global['loaded'] = {
    IE_Loaded: Platform.isLoaded('immersiveengineering'),
    Mek_Loaded: Platform.isLoaded('mekanism'),
    Create_Loaded: Platform.isLoaded('create'),
    CreateAdd_Loaded: Platform.isLoaded('createaddition'),
    Thermal_Loaded: Platform.isLoaded('thermal'),
    FTBIC_Loaded: Platform.isLoaded('ftbic'),
    Tinkers_Loaded: Platform.isLoaded('tconstruct'),
    Occult_Loaded: Platform.isLoaded('occultism'),
    ATO_Loaded: Platform.isLoaded('alltheores'),
    AdAstra_Loaded: Platform.isLoaded('ad_astra')
}

global['alloys'] = [
    'steel',
    'invar',
    'electrum',
    'bronze',
    'enderium',
    'lumium',
    'signalum',
    'constantan',
    'brass'
]

global['blueskies'] = [
    'aquite',
    'charoite',
    'falsite',
    'horizonite',
    'ventium'
]

/**
 * 
 * @param {string} type 
 * @param {string} material 
 * @returns Internal.ItemStack
 */
global['itemFromTag'] = function (type, material) {
    let item = AlmostUnified.getPreferredItemForTag(`forge:${type}/${material}`)
    if (item.isEmpty()) {
        let ing = Ingredient.of(`#forge:${type}/${material}`)
        if (ing.itemIds.length > 1 && global.devLogging) {
            console.log(`${type}/${material} has more than 1 item and is not unified by AU`)
        }
        item = ing.getFirst()
    }
    return item
}

ServerEvents.recipes(allthemods => {
    AlmostUnified.getTags().forEach(tag => {
        let tagString = tag.toString()
        let match = /forge:(dusts|gears|ingots|nuggets|plates|raw_materials|rods|storage_blocks|wires)\/(.+?)$/.exec(tagString)
        if (match) {
            global.auTags[match[1]].push(match[2])
        }
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
