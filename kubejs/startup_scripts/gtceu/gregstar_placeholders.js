// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const $RotorHolderPartMachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.part.RotorHolderPartMachine')
const $IRotorHolderMachine = Java.loadClass('com.gregtechceu.gtceu.api.machine.feature.multiblock.IRotorHolderMachine')
const $IMultiController = Java.loadClass('com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiController')

StartupEvents.registry('item', allthemods => {
    // G*
    allthemods.create('star_housing').displayName('Robust Star Housing')
    allthemods.create('absolute_reaction_plating').displayName('Absolute Reaction Plating')
    allthemods.create('star_compression_module').displayName('Star Compression Module')
    allthemods.create('superthermal_transference_coil').displayName('Superthermal Transference Coil')
    allthemods.create('cable_of_hyperconductivity').displayName('Cable of Hyperconductivity')
    allthemods.create('greg_star_shard').displayName('Greg Star Shard').glow(true)

    // Micro Universe Orb
    allthemods.create('micro_universe_catalyst')
        .displayName('Micro Universe Catalyst')
        .tooltip({ translate: 'item.kubejs.micro_universe_catalyst.tooltip', italic: true, color: 'red' })
    allthemods.create('micro_universe_drill_ship')
        .displayName('Micro Universe Drill Ship')
})

GTCEuStartupEvents.registry('gtceu:machine', allthemods => {
    allthemods.create('uhv_rotor_holder', 'custom')
        .tiers(GTValues.UHV)
        .definition((tier, builder) => { builder
            .rotationState(RotationState.ALL)
            .abilities(PartAbility.ROTOR_HOLDER)
            .modelPropertyBool($IMultiController.IS_FORMED_PROPERTY, false)
            .modelPropertyBool($IRotorHolderMachine.HAS_ROTOR_PROPERTY, false)
            .modelPropertyBool($IRotorHolderMachine.ROTOR_SPINNING_PROPERTY, false)
            .modelPropertyBool($IRotorHolderMachine.EMISSIVE_ROTOR_PROPERTY, false)
            .model(GTMachineModels.createRotorHolderModel())
        }).machine((holder) => { return new $RotorHolderPartMachine(holder, GTValues.UHV) })

    allthemods.create('uev_rotor_holder', 'custom')
        .tiers(GTValues.UEV)
        .definition((tier, builder) => { builder
            .rotationState(RotationState.ALL)
            .abilities(PartAbility.ROTOR_HOLDER)
            .modelPropertyBool($IMultiController.IS_FORMED_PROPERTY, false)
            .modelPropertyBool($IRotorHolderMachine.HAS_ROTOR_PROPERTY, false)
            .modelPropertyBool($IRotorHolderMachine.ROTOR_SPINNING_PROPERTY, false)
            .modelPropertyBool($IRotorHolderMachine.EMISSIVE_ROTOR_PROPERTY, false)
            .model(GTMachineModels.createRotorHolderModel())
        }).machine((holder) => { return new $RotorHolderPartMachine(holder, GTValues.UEV) })

    allthemods.create('uiv_rotor_holder', 'custom')
        .tiers(GTValues.UIV)
        .definition((tier, builder) => { builder
            .rotationState(RotationState.ALL)
            .abilities(PartAbility.ROTOR_HOLDER)
            .modelPropertyBool($IMultiController.IS_FORMED_PROPERTY, false)
            .modelPropertyBool($IRotorHolderMachine.HAS_ROTOR_PROPERTY, false)
            .modelPropertyBool($IRotorHolderMachine.ROTOR_SPINNING_PROPERTY, false)
            .modelPropertyBool($IRotorHolderMachine.EMISSIVE_ROTOR_PROPERTY, false)
            .model(GTMachineModels.createRotorHolderModel())
        }).machine((holder) => { return new $RotorHolderPartMachine(holder, GTValues.UIV) })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.