// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    //////////////// machine controller ////////////////
    allthemods.shaped('gtceu:greenhouse', ['AWA', 'ASA', 'WAW'],
        {
            A: '#gtceu:circuits/mv',
            W: 'gtceu:copper_single_cable',
            S: 'gtceu:solid_machine_casing'
        }).id('gtceu:shaped/greenhouse')

    //////////////// greenhouse recipes ////////////////

    function grow(id, input, output, duration, boostItem, boosted) {
        if (boosted) {
            allthemods.recipes.gtceu.greenhouse(id)
                .circuit(2)
                .notConsumable(InputItem.of(input))
                .itemInputs(boostItem)
                .inputFluids(Fluid.of('minecraft:water', 1000))
                .itemOutputs(output)
                .duration(duration / 2)
                .EUt(MV)
        } else {
            allthemods.recipes.gtceu.greenhouse(id)
                .circuit(1)
                .notConsumable(InputItem.of(input))
                .inputFluids(Fluid.of('minecraft:water', 1000))
                .itemOutputs(output)
                .duration(duration)
                .EUt(MV)
        }
    }

    function grow_max(id, input, output, duration, boostItem, boosted, scale) {
        if (boosted) {
            allthemods.recipes.gtceu.greenhouse(id)
                .circuit(4)
                .notConsumable(InputItem.of(input))
                .itemInputs(boostItem)
                .inputFluids(Fluid.of('minecraft:water', 1000 * scale))
                .itemOutputs(output)
                .duration(duration / 2)
                .EUt(UHV)
        } else {
            allthemods.recipes.gtceu.greenhouse(id)
                .circuit(3)
                .notConsumable(InputItem.of(input))
                .inputFluids(Fluid.of('minecraft:water', 1000 * scale))
                .itemOutputs(output)
                .duration(duration)
                .EUt(UHV)
        }
    }

    // copy every botany pot recipe into the greenhouse
    allthemods.forEachRecipe({ type: 'botanypots:crop' }, rawRecipe => {
        let recipe = JSON.parse(rawRecipe.json)
        let duration = recipe.growthTicks
        let drops = recipe.drops // array of objects { chance, output { item }, minRolls, maxRolls }
        let seed = recipe.seed
        if (seed.hasOwnProperty('item')) {
            let input = recipe.seed.item // hope this is always an item
            let affix = input.split(':')
            if (affix[0].includes('mystical')) {
                // do nothing, MA taken care of below
                // console.log("skipping over MA " + input)
            } else {
                if ((rawRecipe.getId().split(':')[0].includes('botanytrees') && input.includes('croptopia')) || rawRecipe.getId().split(':')[0].includes('supplementaries')) {
                    // do nothing because these are duplicate recipes
                    // console.log("skipping over recipe " + rawRecipe.getId())
                } else {
                    var recipeMAXBuilder = allthemods.recipes.gtceu.greenhouse('kubejs:gtceu/greenhouse/' + affix[0] + "/" + affix[1] + "_max")
                    var recipeBuilder = allthemods.recipes.gtceu.greenhouse('kubejs:gtceu/greenhouse/' + affix[0] + "/" + affix[1])
                    recipeBuilder.EUt(MV)
                        .notConsumable(InputItem.of(input))
                        .inputFluids(Fluid.of('minecraft:water', 1000))
                        .duration(duration / 4)
                        .circuit(0)
                    recipeMAXBuilder.EUt(UHV)
                        .notConsumable(InputItem.of(input))
                        .inputFluids(Fluid.of('minecraft:water', 1000 * 1310720))
                        .duration(duration / 4 * 1024 / 15)
                        .circuit(5)
                    drops.forEach((drop) => {
                        if (drop.hasOwnProperty('maxRolls')) {
                            recipeBuilder.chancedOutput(Item.of(drop.output.item, drop.maxRolls), drop.chance * 10000, drop.chance * 10000)
                            recipeMAXBuilder.itemOutputs(Item.of(drop.output.item, drop.maxRolls * 1310720))
                        } else {
                            recipeBuilder.chancedOutput(drop.output.item, drop.chance * 10000, drop.chance * 10000)
                            recipeMAXBuilder.itemOutputs(Item.of(drop.output.item, 1310720))
                        }
                    })
                }
            }
        } else { // special cases - pitcher plant, chorus, torchflower
            // console.log('seed has no item property for recipe ' + rawRecipe.getId())
            let input = recipe.seed[1].item
            let affix = input.split(':')
            var recipeMAXBuilder = allthemods.recipes.gtceu.greenhouse('kubejs:gtceu/greenhouse/' + affix[0] + "/" + affix[1] + "_max")
            var recipeBuilder = allthemods.recipes.gtceu.greenhouse('kubejs:gtceu/greenhouse/' + affix[0] + "/" + affix[1])
            recipeBuilder.EUt(MV)
                .notConsumable(InputItem.of(input))
                .inputFluids(Fluid.of('minecraft:water', 1000))
                .duration(duration / 4)
                .circuit(0)
            recipeMAXBuilder.EUt(UHV)
                .notConsumable(InputItem.of(input))
                .inputFluids(Fluid.of('minecraft:water', 1000 * 1310720))
                .duration(duration / 4 * 1024 / 15)
                .circuit(5)
            drops.forEach((drop) => {
                if (drop.hasOwnProperty('maxRolls')) {
                    recipeBuilder.chancedOutput(Item.of(drop.output.item, drop.maxRolls), drop.chance * 10000, drop.chance * 10000)
                    recipeMAXBuilder.itemOutputs(Item.of(drop.output.item, drop.maxRolls * 1310720))
                } else {
                    recipeBuilder.chancedOutput(drop.output.item, drop.chance * 10000, drop.chance * 10000)
                    recipeMAXBuilder.itemOutputs(Item.of(drop.output.item, 1310720))
                }
            })
        }
    })

    //////////////// MA ////////////////

    //////////////// Tiers one and two ////////////////
    const infTier = ['air', 'earth', 'water', 'fire', 'inferium', 'stone', 'dirt', 'wood', 'ice']
    const prudTier = ['nature', 'dye', 'nether', 'coal', 'coral', 'honey', 'amethyst', 'pig', 'chicken', 'cow', 'sheep', 'squid', 'fish', 'slime',
        'turtle', 'rubber', 'silicon', 'sulfur', 'aluminum', 'saltpeter', 'apatite', 'grains_of_infinity', 'mystical_flower', 'limestone', 'menril']

    infTier.forEach((base) => {
        let id = 'kubejs:gtceu/greenhouse/mysticalagriculture/' + base
        let inp = 'mysticalagriculture:' + base + '_seeds'
        let out = 'mysticalagriculture:' + base + '_essence'
        let boostOut = '4x mysticalagriculture:' + base + '_essence'
        let duration = 9600 / 2
        let scale = 163840

        grow(id, inp, out, duration, 'minecraft:air', false)
        grow(id + '_boosted', inp, boostOut, duration, '4x mysticalagriculture:inferium_essence', true)
        grow_max(id + '_max', inp, Item.of(out, scale), duration * 1024 / 120, 'minecraft:air', false, scale)
        grow_max(id + '_max_boosted', inp, Item.of(out, scale * 4), duration * 1024 / 120, Item.of('mysticalagriculture:inferium_essence', 4 * scale), true, scale)
    })

    prudTier.forEach((base) => {
        let id = 'kubejs:gtceu/greenhouse/mysticalagriculture/' + base
        let inp = 'mysticalagriculture:' + base + '_seeds'
        let out = 'mysticalagriculture:' + base + '_essence'
        let boostOut = '4x mysticalagriculture:' + base + '_essence'
        let duration = 9600 / 2
        let scale = 163840

        grow(id, inp, out, duration, 'minecraft:air', false)
        grow(id + '_boosted', inp, boostOut, duration, '4x mysticalagriculture:prudentium_essence', true)
        grow_max(id + '_max', inp, Item.of(out, scale), duration * 1024 / 120, 'minecraft:air', false, scale)
        grow_max(id + '_max_boosted', inp, Item.of(out, scale * 4), duration * 1024 / 120, Item.of('mysticalagriculture:prudentium_essence', 4 * scale), true, scale)
    })

    //////////////// Tiers three and four ////////////////
    const tertTier = ['azure_silver', 'crimson_iron', 'iron', 'copper', 'nether_quartz', 'glowstone', 'redstone', 'obsidian', 'prismarine', 'zombie',
        'skeleton', 'creeper', 'spider', 'rabbit', 'tin', 'bronze', 'zinc', 'brass', 'silver', 'lead', 'graphite', 'blizz', 'blitz', 'basalz', 'copper_alloy',
        'redstone_alloy', 'conductive_alloy', 'manasteel', 'steeleaf', 'ironwood', 'sky_stone', 'certus_quartz', 'quartz_enriched_iron']
    const impTier = ['gold', 'lapis_lazuli', 'end', 'experience', 'blaze', 'ghast', 'enderman', 'steel', 'nickel', 'constantan', 'electrum', 'uranium', 'ruby',
        'sapphire', 'peridot', 'soulium', 'signalum', 'lumium', 'flux_infused_ingot', 'hop_graphite', 'soularium', 'dark_steel', 'pulsating_alloy',
        'energetic_alloy', 'elementium', 'osmium', 'fluorite', 'refined_glowstone', 'refined_obsidian', 'knightmetal', 'fiery_ingot', 'compressed_iron', 'fluix',
        'energized_steel', 'blazing_crystal']

    tertTier.forEach((base) => {
        let id = 'kubejs:gtceu/greenhouse/mysticalagriculture/' + base
        let inp = 'mysticalagriculture:' + base + '_seeds'
        let out = 'mysticalagriculture:' + base + '_essence'
        let boostOut = '4x mysticalagriculture:' + base + '_essence'
        let duration = 9600
        let scale = 163840

        grow(id, inp, out, duration, 'minecraft:air', false)
        grow(id + '_boosted', inp, boostOut, duration, '4x mysticalagriculture:tertium_essence', true)
        grow_max(id + '_max', inp, Item.of(out, scale), duration * 1024 / 120, 'minecraft:air', false, scale)
        grow_max(id + '_max_boosted', inp, Item.of(out, scale * 4), duration * 1024 / 120, Item.of('mysticalagriculture:tertium_essence', 4 * scale), true, scale)
    })

    impTier.forEach((base) => {
        let id = 'kubejs:gtceu/greenhouse/mysticalagriculture/' + base
        let inp = 'mysticalagriculture:' + base + '_seeds'
        let out = 'mysticalagriculture:' + base + '_essence'
        let boostOut = '4x mysticalagriculture:' + base + '_essence'
        let duration = 9600
        let scale = 163840

        grow(id, inp, out, duration, 'minecraft:air', false)
        grow(id + '_boosted', inp, boostOut, duration, '4x mysticalagriculture:imperium_essence', true)
        grow_max(id + '_max', inp, Item.of(out, scale), duration * 1024 / 120, 'minecraft:air', false, scale)
        grow_max(id + '_max_boosted', inp, Item.of(out, scale * 4), duration * 1024 / 120, Item.of('mysticalagriculture:imperium_essence', 4 * scale), true, scale)
    })

    //////////////// Tier five ////////////////
    const supTier = ['diamond', 'emerald', 'netherite', 'wither_skeleton', 'platinum', 'enderium', 'flux_infused_gem', 'vibrant_alloy', 'end_steel',
        'terrasteel', 'cyanite', 'niotic_crystal', 'spirited_crystal', 'uraninite']

    supTier.forEach((base) => {
        let id = 'kubejs:gtceu/greenhouse/mysticalagriculture/' + base
        let inp = 'mysticalagriculture:' + base + '_seeds'
        let out = 'mysticalagriculture:' + base + '_essence'
        let boostOut = '4x mysticalagriculture:' + base + '_essence'
        let duration = 9600 * 3
        let scale = 163840

        grow(id, inp, out, duration, 'minecraft:air', false)
        grow(id + '_boosted', inp, boostOut, duration, '4x mysticalagriculture:supremium_essence', true)
        grow_max(id + '_max', inp, Item.of(out, scale), duration * 1024 / 120, 'minecraft:air', false, scale)
        grow_max(id + '_max_boosted', inp, Item.of(out, scale * 4), duration * 1024 / 120, Item.of('mysticalagriculture:supremium_essence', 4 * scale), true, scale)
    })

    //////////////// Tier six ////////////////
    const cruxTier = ['nether_star', 'dragon_egg', 'nitro_crystal', 'allthemodium', 'unobtainium', 'vibranium']

    cruxTier.forEach((base) => {
        let id = 'kubejs:gtceu/greenhouse/mysticalagriculture/' + base
        let inp = 'mysticalagriculture:' + base + '_seeds'
        let crux = ''
        if (base.includes('ium')) {
            crux = 'kubejs:magical_soil'
        } else {
            crux = 'mysticalagradditions:' + base + '_crux'
        }
        let out = 'mysticalagriculture:' + base + '_essence'
        let boostOut = '4x mysticalagriculture:' + base + '_essence'
        let duration = 9600 * 9
        let scale = 163840

        allthemods.recipes.gtceu.greenhouse(id)
            .circuit(2)
            .notConsumable(InputItem.of(inp))
            .notConsumable(InputItem.of(crux))
            .itemInputs('4x mysticalagradditions:insanium_essence')
            .inputFluids(Fluid.of('minecraft:water', 1000))
            .itemOutputs(boostOut)
            .duration(duration / 2)
            .EUt(MV)
        allthemods.recipes.gtceu.greenhouse(id + '_boosted')
            .circuit(1)
            .notConsumable(InputItem.of(inp))
            .notConsumable(InputItem.of(crux))
            .inputFluids(Fluid.of('minecraft:water', 1000))
            .itemOutputs(out)
            .duration(duration)
            .EUt(MV)

        allthemods.recipes.gtceu.greenhouse(id + '_max')
            .circuit(4)
            .notConsumable(InputItem.of(inp))
            .notConsumable(InputItem.of(crux))
            .itemInputs(Item.of('mysticalagradditions:insanium_essence', 4 * scale))
            .inputFluids(Fluid.of('minecraft:water', 1000 * scale))
            .itemOutputs(Item.of('mysticalagriculture:' + base + '_essence', 4 * scale))
            .duration(duration / 2 * 1024 / 120)
            .EUt(UHV)
        allthemods.recipes.gtceu.greenhouse(id + '_max_boosted')
            .circuit(3)
            .notConsumable(InputItem.of(inp))
            .notConsumable(InputItem.of(crux))
            .inputFluids(Fluid.of('minecraft:water', 1000 * scale))
            .itemOutputs(Item.of(out, scale))
            .duration(duration * 1024 / 120)
            .EUt(UHV)
    })

    //////////////// GT Rubber trees ////////////////
    let scale = 163840
    grow('rubber_sapling', 'gtceu:rubber_sapling', ['32x gtceu:rubber_log', '8x gtceu:sticky_resin', '4x gtceu:rubber_sapling'], 9600.0 / 2, 'minecraft:air', false)
    grow('rubber_sapling_boosted', 'gtceu:rubber_sapling', ['64x gtceu:rubber_log', '16x gtceu:sticky_resin', '4x gtceu:rubber_sapling'], 9600.0 / 2, '4x gtceu:fertilizer', true)
    grow_max('rubber_sapling_max', 'gtceu:rubber_sapling', [Item.of('gtceu:rubber_log', 32 * scale), Item.of('gtceu:sticky_resin', 8 * scale), Item.of('gtceu:rubber_sapling', 2 * scale)], 9600.0 / 2 * 1024 / 120, 'minecraft:air', false, scale)
    grow_max('rubber_sapling_max_boosted', 'gtceu:rubber_sapling', [Item.of('gtceu:rubber_log', 64 * scale), Item.of('gtceu:sticky_resin', 16 * scale), Item.of('gtceu:rubber_sapling', 4 * scale)], 9600.0 / 2 * 1024 / 120, Item.of('gtceu:fertilizer', 4 * scale), true, scale)
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
