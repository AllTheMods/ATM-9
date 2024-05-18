// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.entityLootTables(allthemods => {
    allthemods.modifyEntity('cataclysm:deepling_brute', table => {
        table.addPool(pool => {
            pool.addItem('minecraft:heart_of_the_sea').randomChanceWithLooting(0.05, 0.05).killedByPlayer()
        })
    })
    allthemods.modifyEntity('cataclysm:the_leviathan', table => {
        table.addPool(pool => {
            pool.addItem('minecraft:heart_of_the_sea').killedByPlayer()
        })
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
