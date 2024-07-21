// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const Tags = Java.loadClass('dev.latvian.mods.kubejs.util.Tags')
const $FluidStackJS = Java.loadClass('dev.latvian.mods.kubejs.fluid.FluidStackJS')

ServerEvents.recipes(allthemods => {

    let jsonFolder = global.readJsonFolderFromMod("data", "productivebees", "productivebees")
    let data = Object.keys(jsonFolder)
    let goodBeeGenes = '{bee_weather_tolerance: 2, bee_productivity: 3, bee_behavior: 2, '

    function makeName(inputString) {
        let underscore = inputString.split('_')
        let returnString = ''
        // account for special bee names
        if (underscore.length == 1 && inputString != 'bee' && inputString != 'creeper_bee') { // && inputString != 'chocolate' && inputString != 'pepto_bismol' && inputString != 'zombie' && inputString != 'basalz' && inputString != 'ruby' && inputString != 'cheese' && inputString != 'sky_ingot' && inputString != 'grave' && inputString != 'spacial' && inputString != 'neutronium' && inputString != 'soul_shard' && inputString != 'prosperity' && inputString != 'blitz' && inputString != 'gregstar' && inputString != 'red_shroom' && inputString != 'aluminum' && inputString != 'blizz' && inputString != 'infinity' && inputString != 'arcance_crystal' && inputString != 'netherite') {
            returnString = inputString.charAt(0).toUpperCase() + inputString.slice(1) + ' Bee'
        } else if (inputString == 'bee') {
            returnString = 'Bee'
        } else if (inputString == 'creeper_bee') {
            returnString = 'CreeBee'
        } else if (inputString == 'chocolate') {
            returnString = 'Choco Bee'
        } else if (inputString == 'pepto_bismol') {
            returnString = 'Pepto Beesmol'
        } else if (inputString == 'zombie') {
            returnString = 'ZomBee'
        } else if (inputString == 'basalz') {
            returnString = 'BazBee'
        } else if (inputString == 'ruby') {
            returnString = 'RuBee'
        } else if (inputString == 'cheese') {
            returnString = 'CheezyB'
        } else if (inputString == 'sky_ingot') {
            returnString = 'Bee of the Sky'
        } else if (inputString == 'grave') {
            returnString = 'Grave\'s Bee'
        } else if (inputString == 'spacial') {
            returnString = 'Spatial Bee'
        } else if (inputString == 'neutronium') {
            returnString = 'Not a Neutronium Bee'
        } else if (inputString == 'soul_shard') {
            returnString = 'Soul Bee'
        } else if (inputString == 'prosperity') {
            returnString = 'ProsperiBee'
        } else if (inputString == 'blitz') {
            returnString = 'BitzBee'
        } else if (inputString == 'gregstar') {
            returnString = 'GregStar Bee'
        } else if (inputString == 'red_shroom') {
            returnString = 'Red Shroombee'
        } else if (inputString == 'aluminum') {
            returnString = 'Aluminium Bee'
        } else if (inputString == 'blizz') {
            returnString = 'BizBee'
        } else if (inputString == 'infinity') {
            returnString = 'Bee of Infinity'
        } else if (inputString == 'arcane_crystal') {
            returnString = 'Arcanus Bee'
        } else if (inputString == 'netherite') {
            returnString = 'Ancient Bee'
        } else {
            returnString = underscore[0].charAt(0).toUpperCase() + underscore[0].slice(1) + ' ' + underscore[1].charAt(0).toUpperCase() + underscore[1].slice(1) + ' Bee'
        }
        return returnString
    }

    function addOutputs(recipeBuilder, output, count) {
        let i = count
        while (i > 127) {
            recipeBuilder.itemOutputs(output.withCount(127))
            i = i - 127
        }
        recipeBuilder.itemOutputs(output.withCount(i))
    }

    function addChancedOutputs(recipeBuilder, output, chance, count) {
        let i = count
        while (i > 127) {
            recipeBuilder.chancedOutput(output.withCount(127), chance, 0)
            i = i - 127
        }
        recipeBuilder.chancedOutput(output.withCount(i), chance, 0)
    }

    function makeCircuitRecipes(id, input, flower, outputs) {
        // id is base id name, circuit number gets appended to it
        // input is the bee cage with appropriate NBT
        // flower is the flower block/tag/item/fluid
        // outputs looks like [ { item: 'minecraft:dirt', chance: 10000 }, { item: 'minecraft:egg', chance: 4000 } ]

        for (let i = 1; i < 33; i++) {
            let recipeBuilder = allthemods.recipes.gtceu.apiary_ii(id + '/circuit_' + i.toString())
                .circuit(i)
                .EUt(EV)
                .duration(5250)
                .notConsumable(IngredientHelper.weakNBT(Item.of(input)).withCount(i))
                .notConsumable(Item.of('productivebees:upgrade_productivity_4', (Math.floor((i - 1)/5) + 1) * 4))
            outputs.forEach( (output) => {
                if (output.chance == 10000) {
                    if (40 * i > 127 && output.item.hasNBT()) {
                        // multiply output by 40 because 1 perfect bee with 4 omegas produces 40 comb blocks in one cycle
                        addOutputs(recipeBuilder, Item.of(output.item), 40 * i)
                    } else {
                        recipeBuilder.itemOutputs(Item.of(output.item, 40 * i))
                    }
                } else {
                    if (40 * i > 127 && output.item.hasNBT()) {
                        addChancedOutputs(recipeBuilder, Item.of(output.item), output.chance, 40 * i)
                    } else {
                        recipeBuilder.chancedOutput(Item.of(output.item, 40 * i), output.chance, 0)
                    }
                }
            })
            if (flower instanceof $FluidStackJS) {
                recipeBuilder.chancedFluidInput(flower, 0, 0)
            } else {
                recipeBuilder.notConsumable(flower)
            }
        } // end of 1-32 loop
    }

    //////////////// machine controllers ////////////////
    allthemods.shaped('gtceu:apiary_i', ['BAB', 'ACA', 'WSW'],
    {
        A: '#gtceu:circuits/mv',
        W: 'gtceu:gold_single_cable',
        S: 'gtceu:clean_machine_casing',
        C: 'productivebees:upgrade_simulator',
        B: 'productivebees:upgrade_comb_block'
    }).id('gtceu:shaped/apiary_i')

    allthemods.shaped('gtceu:apiary_ii', ['CAC', 'ACA', 'WSW'],
    {
        A: '#gtceu:circuits/ev',
        W: 'gtceu:black_steel_single_cable',
        S: 'gtceu:stable_machine_casing',
        C: 'productivebees:upgrade_productivity_4',
    }).id('gtceu:shaped/apiary_ii')

    allthemods.shaped('gtceu:comb_processor', ['BAB', 'ACA', 'WSW'],
    {
        A: '#gtceu:circuits/mv',
        W: 'gtceu:gold_single_cable',
        S: 'gtceu:clean_machine_casing',
        C: 'productivebees:heated_centrifuge',
        B: 'gtceu:stainless_steel_rotor'
    }).id('gtceu:shaped/comb_processor')

    //////////////// apiary_i recipes ////////////////

    // allthemods.recipes.gtceu.apiary_i('kubejs:test')
    //     .EUt(MV)
    //     .duration(5250)
    //     .chancedInput(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', '{name: \"CreeBee\", entity: \"productivebees:creeper_bee\"}')), 500, 500)
    //     .notConsumable(Item.of('minecraft:coal_ore'))
    //     .itemOutputs(Item.of('productivebees:comb_powdery'))

    // allthemods.recipes.gtceu.apiary_ii('kubejs:test')
    //     .EUt(EV)
    //     .duration(5250)
    //     .notConsumable(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', '{name: \"CreeBee\", entity: \"productivebees:creeper_bee\"}')).withCount(128))
    //     .notConsumable(Item.of('minecraft:coal_ore'))
    //     .itemOutputs(Item.of('productivebees:configurable_comb', '{EntityTag: {type: "productivebees:starry"}}').withCount(127))
    //     .itemOutputs(Item.of('productivebees:configurable_comb', '{EntityTag: {type: "productivebees:starry"}}').withCount(127))
    
    // copy all beehive production recipes
    allthemods.forEachRecipe({type: 'productivebees:advanced_beehive'}, rawRecipe => {
        let recipe = JSON.parse(rawRecipe.json)
        let duration = 5250 // time in ticks spent in hive (4800) + pollinating time (450)
        let beeType = recipe.ingredient.split(':')[1] // recipe.ingredient looks like productivebees:experience

        // skip rancher_bee, ether_gas, and hematophagous bees because they use entities
        if (beeType != "rancher_bee" && beeType != "ether_gas" && beeType != "hematophagous") {
            let input
            let input_ii
            if (beeType == 'creeper_bee') { // account for creeper_bee which is not a configurable bee
                input = Item.of('productivebees:bee_cage', 1, '{name: "CreeBee", entity: "productivebees:creeper_bee"}')
                input_ii = Item.of('productivebees:bee_cage', 1, goodBeeGenes + 'name: "CreeBee", entity: "productivebees:creeper_bee"}')
            } else if (beeType == "bee") { // account for regular bee which is not a configurable bee
                input = Item.of('productivebees:bee_cage', '{name: "Bee", entity: "minecraft:bee"}')
                input_ii = input.copy()
            } else {
                input = Item.of('productivebees:bee_cage', 1, '{type:"' + recipe.ingredient + '", entity: "productivebees:configurable_bee", name: "' + makeName(beeType) +'"}')
                input_ii = Item.of('productivebees:bee_cage', 1, goodBeeGenes + 'type:"' + recipe.ingredient + '", entity: "productivebees:configurable_bee", name: "' + makeName(beeType) +'"}')
            }
            let results = recipe.results // array of objects like { item: { }, chance: 40 }
            let flower
    
            let index = data.findIndex((key) => key.includes("/" + beeType + ".json"))
            let beeData = jsonFolder[data[index]]
    
            let recipeBuilder = allthemods.recipes.gtceu.apiary_i('kubejs:gtceu/apiary_i/' + beeType)
                .EUt(MV)
                .duration(duration)
                .chancedInput(IngredientHelper.weakNBT(input), 100, 50)
            
            let outputs = []
            results.forEach((result) => {
                // reset outputItem and chance
                let outputItem = null
                let chance = 10000
    
                if (result.hasOwnProperty('item')) {
                    // result.item - all results should have item key
                    if (result.item.hasOwnProperty('item')) {
                        // result.item.item
                        if (result.item.item == "productivebees:configurable_honeycomb") {
                            // give NBT {EntityTag: {type: recipe.ingredient}} where recipe.ingredient looks like productivebees:experience 
                            outputItem = Item.of("productivebees:configurable_comb", '{EntityTag:{type:"' + recipe.ingredient + '"}}')
                        } else if (result.item.item != "productivebees:configurable_honeycomb" && result.item.hasOwnProperty('nbt')) {
                            // shouldn't be anything like this, so log it if there is
                            console.log(beeType + " bee produces items with nbt")
                            console.log(JsonIO.toPrettyString(result.item))
                        } else if (result.item.item == 'productivebees:honeycomb_powdery') {
                            outputItem = Item.of("productivebees:comb_powdery")
                        } else if (result.item.item == 'minecraft:honeycomb') {
                            outputItem = Item.of("minecraft:honeycomb_block")
                        } else {
                            // just a regular old item
                            outputItem = Item.of(result.item.item)
                        }
                    } else if (result.item.hasOwnProperty('tag')) {
                        if (result.item.tag == "forge:pollen") {
                            // skip pollen
                            outputItem = Item.empty
                        } else if (result.item.tag == "tombstone:essence_of_undeath") {
                            // this is just the tombstone:essence_of_undeath, which is an item, not a tag
                            outputItem = Item.of(result.item.tag)
                        } else {
                            // haven't accounted for this, log it
                            console.log(beeType + " bee outputs a tag other than pollen and essence of undeath")
                            console.log(JsonIO.toPrettyString(result.item))
                        }
                    } else {
                        // log it - shouldn't be any result like this, but just in case we have result.item.fluid pop up
                        console.log(beeType + " bee has an item property that isn't item or tag")
                        console.log(JsonIO.toPrettyString(result.item))
                    }
                } else {
                    // log it if there is no result.item
                    console.log("result has no item key for bee " + beeType)
                    console.log(JsonIO.toPrettyString(result))
                }
    
                if (result.hasOwnProperty('chance') && outputItem != null) {
                    // there is a chance associated with this output, no extra for overclocking
                    // multiply by 100 to convert to GT's base 10000 chance functions
                    chance = result.chance * 100
                    if (outputItem.hasNBT()) {
                        recipeBuilder.chancedOutput(IngredientHelper.strongNBT(outputItem), chance, 0)
                        outputs.push({item: outputItem.copy(), chance: chance})
                    } else {
                        recipeBuilder.chancedOutput(outputItem, chance, 0)
                        outputs.push({item: outputItem.copy(), chance: chance})
                    }
                } else if (outputItem != null && chance == 10000) {
                    // chance is 100% by default if result.chance doesn't exist
                    if (outputItem.hasNBT()) {
                        recipeBuilder.itemOutputs(IngredientHelper.strongNBT(outputItem))
                        outputs.push({item: outputItem.copy(), chance: chance})
                    } else {
                        recipeBuilder.itemOutputs(outputItem)
                        outputs.push({item: outputItem.copy(), chance: chance})
                    }
                } else {
                    if (!outputItem.isEmpty()) {
                        // something went wrong somewhere, log it
                        console.log("something went wrong for " + beeType + " bee")
                        console.log("chance: " + chance + " and outputItem: " + outputItem)
                        console.log(JsonIO.toPrettyString(result))
                    }
                }
            }) // end of loop over all results
    
            let flowerThing
            if (index != -1) { // e.g. we found the bee's JSON file
                if (beeData.hasOwnProperty('flowerFluid')) {
                    flower = beeData.flowerFluid
                    if (beeType == "oily") { // special case, I couldn't figure out fluid tags
                        flower = "thermal:crude_oil"
                    } else if (beeType == "salty") {
                        flower = "mekanism:brine" // I think the salty bee should use brine as a flower and not water
                    }
                    recipeBuilder.chancedFluidInput(Fluid.of(flower, 1000), 0, 0)
                    flowerThing = Fluid.of(flower, 1000)
                } else if (beeData.hasOwnProperty('flowerBlock')) {
                    flower = beeData.flowerBlock
                    if (beeType == "chocolate") { // special case, listed as minecraft:cocoa in PB for some reason
                        flower = "minecraft:cocoa_beans"
                    }
                    recipeBuilder.notConsumable(Item.of(flower))
                    flowerThing = Item.of(flower)
                } else if (beeData.hasOwnProperty('flowerTag')) {
                    flower = beeData.flowerTag
                    recipeBuilder.notConsumable(Ingredient.of(Tags.item(flower)))
                    flowerThing = Ingredient.of(Tags.item(flower))
                } else if (beeData.hasOwnProperty('flowerItem')) {
                    flower = beeData.flowerItem
                    recipeBuilder.notConsumable(Item.of(flower))
                    flowerThing = Item.of(flower)
                } else {
                    // account for cases where no flower listed - default to minecraft:flowers
                    if (beeType == "pepto_bismol" || beeType == "zombie" || beeType == "plastic" || beeType == "sticky_resin" || beeType == "menril" || beeType == "energized_glowstone") {
                        flower = 'kubejs:bee/' + beeType + '/flowers'
                        // flower = "minecraft:flowers"
                        recipeBuilder.notConsumable(Ingredient.of(Tags.item(flower)))
                        flowerThing = Ingredient.of(Tags.item(flower))
                    } else {
                        console.log(beeType + " bee has no flower??")
                        console.log(beeData)
                    }
                }
            } else {
                // account for the not configurable bees
                if (beeType == "creeper_bee") {
                    flower = "productivebees:flowers/powdery"
                    recipeBuilder.notConsumable(Ingredient.of(Tags.item(flower)))
                    flowerThing = Ingredient.of(Tags.item(flower))
                } else if (beeType == "bee") {
                    flower = "minecraft:flowers"
                    recipeBuilder.notConsumable(Ingredient.of(Tags.item(flower)))
                    flowerThing = Ingredient.of(Tags.item(flower))
                } else {
                    console.log(beeType + " bee has no entry???")
                }
            } // end of finding the flower logic

            makeCircuitRecipes('kubejs:gtceu/apiary_ii/' + beeType, input_ii, flowerThing, outputs)
    
        } // end of if loop to skip certain bees

    }) // end of loop over all advanced beehive produce recipes

    // copy all centrifuge recipes
    allthemods.forEachRecipe({type: 'productivebees:centrifuge'}, rawRecipe => {
        let recipe = JSON.parse(rawRecipe.json)
        let duration = 300 / 9 // default centrifuge processing time in ticks = 300, heated centrifuge is 9 times faster
        let inputObj = recipe.ingredient // ingredient should always exist
        let input
        let inputBlock
        let id = 'kubejs:gtceu/comb_processor' + rawRecipe.getId().replace('productivebees:centrifuge', '')
        let outputs = recipe.outputs // looks like [ { item: { item/tag: "stuff" }, chance: 80 }, { amount: 50, fluid: { fluid: productivebees:honey } } ]
        
        if (inputObj.hasOwnProperty('nbt')) { // check for nbt, handle string and object formats
            // console.log("typeof nbt is " + typeof(inputObj.nbt))
            if (typeof(inputObj.nbt) == 'string') {
                input = Item.of(inputObj.item, 1, inputObj.nbt).strongNBT()
                inputBlock = Item.of(inputObj.item.replace('honey', ''), 1, inputObj.nbt).strongNBT()
            } else {
                input = Item.of(inputObj.item, 1, '{EntityTag:{type:"' + inputObj.nbt.EntityTag.type + '"}}').strongNBT()
                inputBlock = Item.of(inputObj.item.replace('honey', ''), 1, '{EntityTag:{type:"' + inputObj.nbt.EntityTag.type + '"}}').strongNBT()
            }
        } else {
            input = Item.of(inputObj.item)
            if (inputObj.item == 'minecraft:honeycomb') {
                inputBlock = Item.of('minecraft:honeycomb_block')
            } else {
                inputBlock = Item.of(inputObj.item.replace('honey',''))
            }
        }
        // console.log("input looks like " + JsonIO.toPrettyString(input.toJson()))

        let combRecipeBuilder = allthemods.recipes.gtceu.comb_processor(id)
            .duration(duration)
            .EUt(MV)
            .itemInputs(input)
        
        let combBlockRecipeBuilder = allthemods.recipes.gtceu.comb_processor(id + '_block')
            .duration(duration)
            .EUt(MV)
            .itemInputs(inputBlock)
        
        outputs.forEach( (output) => {
            let chance = 10000
            let count = 1

            // set chance and count if applicable
            if (output.hasOwnProperty('chance')) {
                chance = output.chance * 100 // convert to base 10000 for GT
            }
            if (output.hasOwnProperty('max')) {
                count = output.max // max roll! woo!
            }

            // actually handle the output
            if (output.hasOwnProperty('fluid')) {
                // handle fluids, should have amount key
                let amount = output.amount
                if (output.fluid.hasOwnProperty('fluid')) {
                    if (chance != 10000) {
                        combRecipeBuilder.chancedFluidOutput(Fluid.of(output.fluid.fluid, amount), chance, 0)
                        combBlockRecipeBuilder.chancedFluidOutput(Fluid.of(output.fluid.fluid, amount * 4), chance, 0)
                    } else {
                        combRecipeBuilder.outputFluids(Fluid.of(output.fluid.fluid, amount))
                        combBlockRecipeBuilder.outputFluids(Fluid.of(output.fluid.fluid, amount * 4))
                    }
                } else {
                    // fluid tags, manually take care of each one
                    if (output.fluid.tag == 'forge:honey') {
                        combRecipeBuilder.chancedFluidOutput(Fluid.of('productivebees:honey', amount), chance, 0)
                        combBlockRecipeBuilder.chancedFluidOutput(Fluid.of('productivebees:honey', amount * 4), chance, 0)
                    } else if (output.fluid.tag == 'forge:life') {
                        combRecipeBuilder.chancedFluidOutput(Fluid.of('bloodmagic:life_essence_fluid', amount), chance, 0)
                        combBlockRecipeBuilder.chancedFluidOutput(Fluid.of('bloodmagic:life_essence_fluid', amount * 4), chance, 0)
                    } else if (output.fluid.tag == 'forge:glowstone') {
                        combRecipeBuilder.chancedFluidOutput(Fluid.of('gtceu:glowstone', amount), chance, 0)
                        combBlockRecipeBuilder.chancedFluidOutput(Fluid.of('gtceu:glowstone', amount * 4), chance, 0)
                    } else if (output.fluid.tag == 'forge:experience') {
                        combRecipeBuilder.chancedFluidOutput(Fluid.of('mob_grinding_utils:fluid_xp', amount), chance, 0)
                        combBlockRecipeBuilder.chancedFluidOutput(Fluid.of('mob_grinding_utils:fluid_xp', amount * 4), chance, 0)
                    } else if (output.fluid.tag == 'forge:crude_oil') {
                        combRecipeBuilder.chancedFluidOutput(Fluid.of('thermal:crude_oil', amount), chance, 0)
                        combBlockRecipeBuilder.chancedFluidOutput(Fluid.of('thermal:crude_oil', amount * 4), chance, 0)
                    } else if (output.fluid.tag == 'forge:chocolate') {
                        combRecipeBuilder.chancedFluidOutput(Fluid.of('create:chocolate', amount), chance, 0)
                        combBlockRecipeBuilder.chancedFluidOutput(Fluid.of('create:chocolate', amount * 4), chance, 0)
                    } else if (output.fluid.tag == 'forge:ender') {
                        combRecipeBuilder.chancedFluidOutput(Fluid.of('thermal:ender', amount), chance, 0)
                        combBlockRecipeBuilder.chancedFluidOutput(Fluid.of('thermal:ender', amount * 4), chance, 0)
                    } else if (output.fluid.tag == 'forge:pink_slime') {
                        combRecipeBuilder.chancedFluidOutput(Fluid.of('industrialforegoing:pink_slime', amount), chance, 0)
                        combBlockRecipeBuilder.chancedFluidOutput(Fluid.of('industrialforegoing:pink_slime', amount * 4), chance, 0)
                    } else if (output.fluid.tag == 'forge:redstone') {
                        combRecipeBuilder.chancedFluidOutput(Fluid.of('gtceu:redstone', amount), chance, 0)
                        combBlockRecipeBuilder.chancedFluidOutput(Fluid.of('gtceu:redstone', amount * 4), chance, 0)
                    } else {
                        console.log("Fluid Tag unaccounted for in Comb Processor recipes: " + output.fluid.tag)
                    }
                }
            } else if (output.hasOwnProperty('item')) {
                // handle items, should have either item or tag key
                if (output.item.hasOwnProperty('tag')) {
                    if (chance != 10000) {
                        combRecipeBuilder.chancedOutput(IngredientHelper.tag(output.item.tag).withCount(count).kjs$asIngredient(), chance, 0)
                        combBlockRecipeBuilder.chancedOutput(IngredientHelper.tag(output.item.tag).withCount(count * 4).kjs$asIngredient(), chance, 0)
                    } else {
                        combRecipeBuilder.itemOutputs(IngredientHelper.tag(output.item.tag).withCount(count).kjs$asIngredient())
                        if (output.item.tag != 'forge:wax') {
                            // don't give wax for combBlockRecipes
                            combBlockRecipeBuilder.itemOutputs(IngredientHelper.tag(output.item.tag).withCount(count * 4).kjs$asIngredient())
                        }
                    }
                } else if (output.item.hasOwnProperty('item')) {
                    // console.log("output item item is " + output.item.item)
                    if (chance != 10000) {
                        combRecipeBuilder.chancedOutput(Item.of(output.item.item, count), chance, 0)
                        combBlockRecipeBuilder.chancedOutput(Item.of(output.item.item, count * 4), chance, 0)
                    } else {
                        combRecipeBuilder.itemOutputs(Item.of(output.item.item, count))
                        combBlockRecipeBuilder.itemOutputs(Item.of(output.item.item, count * 4))
                    }
                } else {
                    // this item is neither an item nor a tag, log it
                    console.log("This item is neither an item nor a tag! " + JsonIO.toPrettyString(output.item))
                }
            } else {
                // output not accounted for, log it!
                console.log("Centrifuge recipe has no item or fluid outputs: " + JsonIO.toPrettyString(recipe))
            }
        }) // end of outputs loop



    }) // end of loop over all centrifuge recipes


}) // end of recipes event

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
