ServerEvents.recipes( e=> {
    e.shaped('minecraft:dragon_head', ['AAA','BPB','AAA'],{
        A: 'hostilenetworks:end_prediction',
        P: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:ender_dragon"}}').strongNBT(),
        B: 'minecraft:dragon_breath'
    })
})