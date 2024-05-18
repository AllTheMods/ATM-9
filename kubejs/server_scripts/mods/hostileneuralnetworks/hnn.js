// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes( allthemods => {
    allthemods.shaped('minecraft:dragon_head', ['AAA','BPB','AAA'],{
        A: 'hostilenetworks:end_prediction',
        P: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:ender_dragon"}}').strongNBT(),
        B: 'minecraft:dragon_breath'
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
