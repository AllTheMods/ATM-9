/*
ServerEvents.recipes((event) => {
    const gtr = event.recipes.gtceu

    const cell_assembler = [
        ["lv", "gtceu:tin_single_cable"],
        ["mv", "gtceu:copper_single_cable"],
        ["hv", "gtceu:gold_single_cable"],
        ["ev", "gtceu:aluminium_single_cable"],
        ["iv", "gtceu:platinum_single_cable"],
        ["luv", "gtceu:niobium_titanium_single_cable"],
        ["zpm", "gtceu:vanadium_gallium_single_cable"],
        ["uv", "gtceu:yttrium_barium_cuprate_single_cable"]]
    cell_assembler.forEach((cell) => {
        event.shaped("gtceu:" + cell[0] + "_cell_assembler", [
            "CDC",
            "BAB",
            "EDE"
        ], {
            A: "gtceu:" + cell[0] + "_machine_hull",
            B: cell[1],
            C: "gtceu:" + cell[0] + "_electric_piston",
            D: "#gtceu:circuits/" + cell[0],
            E: "ae2:controller"
        })
    })

    
    const cells = [
        'ae2:item_storage_cell_1k',
        'ae2:item_storage_cell_4k',
        'ae2:item_storage_cell_16k',
        'ae2:item_storage_cell_64k',
        'ae2:item_storage_cell_256k',
        'megacells:item_storage_cell_1m',
        'megacells:item_storage_cell_4m',
        'megacells:item_storage_cell_16m',
        'megacells:item_storage_cell_64m',
        'megacells:item_storage_cell_256m'
    ]

    const upgrades = [
        { id: 'ae2:inverter_card', key: 'inverter' },
        { id: 'ae2:void_card', key: 'void' },
        { id: 'ae2:fuzzy_card', key: 'fuzzy' }
    ]

    cells.forEach(cell => {
        let cellName = cell.split(':')[1].replace('item_storage_cell_', '')

        upgrades.forEach(upgrade => {
            let cardName = upgrade.key
            event.recipes.gtceu.cell_assembler(`install_${cellName}_with_${cardName}`)
                .circuit(1)
                .itemInputs(cell, upgrade.id) 
                .itemOutputs(cell) 
                .duration(100)
                .EUt(HV)
        })

        event.recipes.gtceu.cell_assembler(`remove_card_from_${cellName}`)
            .circuit(2)
            .itemInputs(Item.of(cell, { "upgrades": [] }).weakNBT()) 
            .itemOutputs(cell, 'ae2:advanced_card') 
            .duration(100)
            .EUt(HV)
        })
    
   
    gtr.cell_assembler('install_bulk_with_comp')
        .circuit(1)
        .itemInputs('megacells:bulk_item_cell', 'megacells:compression_card')
        .itemOutputs('megacells:bulk_item_cell')
        .duration(100)
        .EUt(HV)

    gtr.cell_assembler('remove_card_from_bulk')
        .circuit(2)
        .itemInputs(Item.of('megacells:bulk_item_cell', { "upgrades": [] }).weakNBT())
        .itemOutputs('megacells:bulk_item_cell', 'ae2:advanced_card')
        .duration(100)
        .EUt(HV)
})
        */


/**
 * Rationale:
 * 1. Performance: Bulk cells act as internal compacting drawers. Internal AE2 retrieval 
 *  prevents the lag often caused by external storage interfaces.
 * 2. Throughput: The default MEGA Cells Decompression Module relies on Crafting CPUs. 
 *  Its parallelization speed cannot handle the rapid decompression needed for 
 *  Nonuple (9x) compressed blocks in this environment.
 * 3. Fallback: This recipe replaces a planned GTRecipeModifier implementation which 
 *  faced critical NBT-copying issues. 
 */
ServerEvents.recipes(event => {
    const BULK_CELL = 'megacells:bulk_item_cell'
    const COMP_CARD = 'megacells:compression_card'
    const MATTER_BALL = 'ae2:matter_ball'

    event.shapeless(BULK_CELL, [BULK_CELL, COMP_CARD])
        .modifyResult((grid, result) => {
            let cell = grid.find(Item.of(BULK_CELL).ignoreNBT())
            let nbt = cell.nbt ? cell.nbt.copy() : {}
            
            if (!nbt.upgrades) nbt.upgrades = []
            
            let hasCard = false
            for (let i = 0; i < nbt.upgrades.length; i++) {
                if (nbt.upgrades[i].id == COMP_CARD) {
                    hasCard = true
                    break
                }
            }
            
            if (!hasCard) {
                nbt.upgrades.push({ id: COMP_CARD, Count: 1 })
            }
            
            return cell.withNBT(nbt)
        })
        .id('kubejs:ae2_cell_install_card')

    event.shapeless(BULK_CELL, [BULK_CELL, MATTER_BALL])
        .modifyResult((grid, result) => {
            let cell = grid.find(Item.of(BULK_CELL).ignoreNBT())
            if (!cell.nbt) return cell
            let nbt = cell.nbt.copy()
            
            if (nbt.upgrades) {
                let newUpgrades = []
                for (let i = 0; i < nbt.upgrades.length; i++) {
                    if (nbt.upgrades[i].id != COMP_CARD) {
                        newUpgrades.push(nbt.upgrades[i])
                    }
                }
                nbt.upgrades = newUpgrades
            }
            
            return cell.withNBT(nbt)
        })
        .id('kubejs:ae2_cell_remove_card')

})