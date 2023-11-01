
ServerEvents.recipes(event => {
    event.recipes.gtceu.micro_universe_collector('test')
        .itemInputs('10x dirt').itemOutputs('1x cobblestone')
        .duration(10000).EUt(1000)
})