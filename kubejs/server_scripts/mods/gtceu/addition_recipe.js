ServerEvents.recipes(event => {
	event.recipes.gtceu.large_chemical_reactor('gtceu:greg_star_covered_block_mk_ii')
        .itemInputs([
            'allthetweaks:atm_star_block',
            '6x apotheosis:infused_breath',// felt like "infusing" the star block would be cool to make it a GregStar block
            '6x ars_nouveau:glyph_infuse'
        ])
        .inputFluids([
            Fluid.of('kubejs:gregstar_fluid', 1296) //calculated so that it takes 9 fragments to make 1 block 
        ])
        .itemOutputs('kubejs:gregstar_block')
        .duration(20000).EUt(GTValues.VA[9])//it's UHV (I'm not using UHV because I had problem in the past developping it)

    event.recipes.gtceu.arc_furnace('gtceu:greg_star_liquid_mk_ii') 
        .itemInputs([
            'kubejs:greg_star_shard',// it felt like gregstar shards were a bit underwhelming in the pack so I thought adding it here wasn't a bad idea
        ])
        .inputFluids([
            Fluid.of('gtceu:star_matter_plasma', 10000)
        ])
        .outputFluids(Fluid.of('kubejs:gregstar_fluid', 144))//respecting the value for an ingot
        .duration(200000).EUt(GTValues.VA[9])
})
