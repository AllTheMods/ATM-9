const Tags = Java.loadClass('dev.latvian.mods.kubejs.util.Tags')



ServerEvents.recipes(event => {

    let jsonFolder = global.readJsonFolderFromMod("data", "productivebees", "productivebees")
    let data = Object.keys(jsonFolder)

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
        // } else if (inputString == 'chocolate') {
        //     returnString = 'Choco Bee'
        // } else if (inputString == 'pepto_bismol') {
        //     returnString = 'Pepto Beesmol'
        // } else if (inputString == 'zombie') {
        //     returnString = 'ZomBee'
        // } else if (inputString == 'basalz') {
        //     returnString = 'BazBee'
        // } else if (inputString == 'ruby') {
        //     returnString = 'RuBee'
        // } else if (inputString == 'cheese') {
        //     returnString = 'CheezyB'
        // } else if (inputString == 'sky_ingot') {
        //     returnString = 'Bee of the Sky'
        // } else if (inputString == 'grave') {
        //     returnString = 'Grave\'s Bee'
        // } else if (inputString == 'spacial') {
        //     returnString = 'Spatial Bee'
        // } else if (inputString == 'neutronium') {
        //     returnString = 'Not a Neutronium Bee'
        // } else if (inputString == 'soul_shard') {
        //     returnString = 'Soul Bee'
        // } else if (inputString == 'prosperity') {
        //     returnString = 'ProsperiBee'
        // } else if (inputString == 'blitz') {
        //     returnString = 'BitzBee'
        // } else if (inputString == 'gregstar') {
        //     returnString = 'GregStar Bee'
        // } else if (inputString == 'red_shroom') {
        //     returnString = 'Red Shroombee'
        // } else if (inputString == 'aluminum') {
        //     returnString = 'Aluminium Bee'
        // } else if (inputString == 'blizz') {
        //     returnString = 'BizBee'
        // } else if (inputString == 'infinity') {
        //     returnString = 'Bee of Infinity'
        // } else if (inputString == 'arcane_crystal') {
        //     returnString = 'Arcanus Bee'
        // } else if (inputString == 'netherite') {
        //     returnString = 'Ancient Bee'
        } else {
            returnString = underscore[0].charAt(0).toUpperCase() + underscore[0].slice(1) + ' ' + underscore[1].charAt(0).toUpperCase() + underscore[1].slice(1) + ' Bee'
        }
        return returnString
    }

    //////////////// machine controllers ////////////////
    event.shaped('gtceu:apiary_i', ['BAB', 'ACA', 'WSW'],
    {
        A: '#gtceu:circuits/mv',
        W: 'gtceu:gold_single_cable',
        S: 'gtceu:clean_machine_casing',
        C: 'productivebees:upgrade_simulator',
        B: 'productivebees:upgrade_comb_block'
    }).id('gtceu:shaped/apiary_i')

    event.shaped('gtceu:apiary_ii', ['CAC', 'ACA', 'WSW'],
    {
        A: '#gtceu:circuits/ev',
        W: 'gtceu:black_steel_single_cable',
        S: 'gtceu:stable_machine_casing',
        C: 'productivebees:upgrade_productivity_4',
    }).id('gtceu:shaped/apiary_ii')

    event.shaped('gtceu:comb_processor', ['BAB', 'ACA', 'WSW'],
    {
        A: '#gtceu:circuits/mv',
        W: 'gtceu:gold_single_cable',
        S: 'gtceu:clean_machine_casing',
        C: 'productivebees:heated_centrifuge',
        B: 'gtceu:stainless_steel_rotor'
    }).id('gtceu:shaped/comb_processor')

    //////////////// apiary_i recipes ////////////////

    // event.recipes.gtceu.apiary_i('kubejs:test')
    //     .EUt(MV)
    //     .duration(5250)
    //     .chancedInput(IngredientHelper.weakNBT(Item.of('productivebees:bee_cage', '{name: \"CreeBee\", entity: \"productivebees:creeper_bee\"}')), 500, 500)
    //     .notConsumable(Item.of('minecraft:coal_ore'))
    //     .itemOutputs(Item.of('productivebees:comb_powdery'))
    
    

    // copy all beehive production recipes
    event.forEachRecipe({type: 'productivebees:advanced_beehive'}, rawRecipe => {
        let recipe = JSON.parse(rawRecipe.json)
        let duration = 5250 // time in ticks spent in hive (4800) + pollinating time (450)
        let beeType = recipe.ingredient.split(':')[1] // recipe.ingredient looks like productivebees:experience

        // skip rancher_bee, ether_gas, and hematophagous bees because they use entities
        if (beeType != "rancher_bee" && beeType != "ether_gas" && beeType != "hematophagous") {
            let input
            if (beeType == 'creeper_bee') { // account for creeper_bee which is not a configurable bee
                input = Item.of('productivebees:bee_cage', 1, '{name: "CreeBee", entity: "productivebees:creeper_bee"}')
            } else if (beeType == "bee") { // account for regular bee which is not a configurable bee
                input = Item.of('productivebees:bee_cage', '{name: "Bee", entity: "minecraft:bee"}')
            } else {
                input = Item.of('productivebees:bee_cage', 1, '{type:"' + recipe.ingredient + '", entity: "productivebees:configurable_bee", name: "' + makeName(beeType) +'"}')
            }
            let results = recipe.results // array of objects like { item: { }, chance: 40 }
            let flower
    
            let index = data.findIndex((key) => key.includes("/" + beeType + ".json"))
            let beeData = jsonFolder[data[index]]
    
            let recipeBuilder = event.recipes.gtceu.apiary_i('kubejs:gtceu/apiary_i/' + beeType)
                .EUt(MV)
                .duration(duration)
                .chancedInput(IngredientHelper.weakNBT(input), 500, 500)
    
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
                    } else {
                        recipeBuilder.chancedOutput(outputItem, chance, 0)
                    }
                } else if (outputItem != null && chance == 10000) {
                    // chance is 100% by default if result.chance doesn't exist
                    if (outputItem.hasNBT()) {
                        recipeBuilder.itemOutputs(IngredientHelper.strongNBT(outputItem))
                    } else {
                        recipeBuilder.itemOutputs(outputItem)
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
    
    
            if (index != -1) { // e.g. we found the bee's JSON file
                if (beeData.hasOwnProperty('flowerFluid')) {
                    flower = beeData.flowerFluid
                    if (beeType == "oily") { // special case, I couldn't figure out fluid tags
                        flower = "thermal:crude_oil"
                    } else if (beeType == "salty") {
                        flower = "mekanism:brine" // I think the salty bee should use brine as a flower and not water
                    }
                    recipeBuilder.chancedFluidInput(Fluid.of(flower, 1000), 0, 0)
                } else if (beeData.hasOwnProperty('flowerBlock')) {
                    flower = beeData.flowerBlock
                    if (beeType == "chocolate") { // special case, listed as minecraft:cocoa in PB for some reason
                        flower = "minecraft:cocoa_beans"
                    }
                    recipeBuilder.notConsumable(Item.of(flower))
                } else if (beeData.hasOwnProperty('flowerTag')) {
                    flower = beeData.flowerTag
                    recipeBuilder.notConsumable(Ingredient.of(Tags.item(flower)))
                } else if (beeData.hasOwnProperty('flowerItem')) {
                    flower = beeData.flowerItem
                    recipeBuilder.notConsumable(Item.of(flower))
                } else {
                    // account for cases where no flower listed - default to minecraft:flowers
                    if (beeType == "pepto_bismol" || beeType == "zombie" || beeType == "plastic" || beeType == "sticky_resin" || beeType == "menril" || beeType == "energized_glowstone") {
                        flower = 'kubejs:bee/' + beeType + '/flowers'
                        // flower = "minecraft:flowers"
                        recipeBuilder.notConsumable(Ingredient.of(Tags.item(flower)))
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
                } else if (beeType == "bee") {
                    flower = "minecraft:flowers"
                    recipeBuilder.notConsumable(Ingredient.of(Tags.item(flower)))
                } else {
                    console.log(beeType + " bee has no entry???")
                }
            } // end of finding the flower logic
    
        } // end of if loop to skip certain bees

    }) // end of loop over all advanced beehive produce recipes
    


}) // end of recipes event