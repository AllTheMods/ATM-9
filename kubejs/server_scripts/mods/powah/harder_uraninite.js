
/// TODO ADD OTHER MODS' MACHINES
ServerEvents.recipes(event => {
    event.recipes.gtceu.autoclave('atm:crystallize_uraninite')
        .itemInputs('1x gtceu:uraninite_dust')
        .itemOutputs('1x powah:uraninite')
        .inputFluids('gtceu:distilled_water 250')
        .duration(100).EUt(GTValues.VA[GTValues.LV])
})