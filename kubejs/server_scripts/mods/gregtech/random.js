

ServerEvents.recipes(event => {
    event.custom({
        type: 'mekanism:rotary',
        gasInput: {
            amount: 1,
            gas: 'mekanism:polonium'
        },
        gasOutput: {
            amount: 1,
            gas: 'mekanism:polonium'
        },
        fluidInput: {
            amount: 1,
            fluid: 'gtceu:polonium'
        },
        fluidOutput: {
            amount: 1,
            fluid: 'gtceu:polonium'
        }
    })
    event.custom({
        type: 'mekanism:rotary',
        gasInput: {
            amount: 1,
            gas: 'mekanism:antimatter'
        },
        gasOutput: {
            amount: 1,
            gas: 'mekanism:antimatter'
        },
        fluidInput: {
            amount: 1,
            fluid: 'gtceu:antimatter'
        },
        fluidOutput: {
            amount: 1,
            fluid: 'gtceu:antimatter'
        }
    })

    event.recipes.gtceu.large_phase_shifting_plant('run_10000')
        .inputFluids('gtceu:polonium 10000')
        .outputFluids('gtceu:antimatter 10000')
        .circuit(5)
        .EUt(100000000).duration(10000)
    
    event.recipes.gtceu.large_phase_shifting_plant('run_1000')
        .inputFluids('gtceu:polonium 1000')
        .outputFluids('gtceu:antimatter 1000')
        .circuit(4)
        .EUt(100000000).duration(1000)

    event.recipes.gtceu.large_phase_shifting_plant('run_100')
        .inputFluids('gtceu:polonium 100')
        .outputFluids('gtceu:antimatter 100')
        .circuit(3)
        .EUt(100000000).duration(100)

    event.recipes.gtceu.large_phase_shifting_plant('run_10')
        .inputFluids('gtceu:polonium 10')
        .outputFluids('gtceu:antimatter 10')
        .circuit(2)
        .EUt(100000000).duration(10)

    event.recipes.gtceu.large_phase_shifting_plant('run_1')
        .inputFluids('gtceu:polonium 1')
        .outputFluids('gtceu:antimatter 1')
        .circuit(2)
        .EUt(100000000).duration(1)
    
})