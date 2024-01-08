ServerEvents.recipes(event => {
        for (const type of ['unobtainium', 'vibranium', 'allthemodium']) {
        event.recipes.gtceu.lathe('gtceu:lathe_'+type+'_to_rod')
                .itemInputs('allthemodium:'+type+'_ingot')
                .itemOutputs('2x allthemodium:'+type+'_rod')
                .duration(400)
                .EUt(16);

        event.recipes.gtceu.extruder('gtceu:extrude_'+type+'_to_rod')
                .itemInputs('allthemodium:'+type+'_ingot')
                .notConsumable('gtceu:rod_extruder_mold')
                .itemOutputs('2x allthemodium:'+type+'_rod')
                .duration(400)
                .EUt(40);

        event.recipes.gtceu.extruder('gtceu:extrude_'+type+'_to_gear')
                .itemInputs('4x allthemodium:'+type+'_ingot')
                .notConsumable('gtceu:gear_extruder_mold')
                .itemOutputs('allthemodium:'+type+'_gear')
                .duration(960)
                .EUt(180);

        event.recipes.gtceu.extruder('gtceu:extrude_'+type+'_to_plate')
                .itemInputs('allthemodium:'+type+'_ingot')
                .notConsumable('gtceu:plate_extruder_mold')
                .itemOutputs('allthemodium:'+type+'_plate')
                .duration(192)
                .EUt(240);

        event.recipes.gtceu.bender('gtceu:bend_'+type+'_to_plate')
                .notConsumable(Item.of('gtceu:programmed_circuit', '{Configuration:1}').strongNBT())
                .itemInputs('allthemodium:'+type+'_ingot')
                .itemOutputs('allthemodium:'+type+'_plate')
                .duration(192)
                .EUt(24);
    }
})