ServerEvents.recipes(event => {
	event.recipes.gtceu.large_chemical_reactor('gtceu:greg_star_covered_block_mk_ii')
        .itemInputs([
            'allthetweaks:atm_star_block',
            '6x apotheosis:infused_breath',
            '6x ars_nouveau:glyph_infuse'
        ])
        .inputFluids([
            Fluid.of('kubejs:gregstar_fluid', 1296)
        ])
        .itemOutputs('kubejs:gregstar_block')
        .duration(1000).EUt(GTValues.VA[9])

    event.recipes.gtceu.arc_furnace('gtceu:greg_star_liquid_mk_ii')
        .itemInputs([
            'kubejs:greg_star_shard',
        ])
        .inputFluids([
            Fluid.of('gtceu:star_matter_plasma', 1000)
        ])
        .outputFluids(Fluid.of('kubejs:gregstar_fluid', 144))
        .duration(10000).EUt(GTValues.VA[9])
})
