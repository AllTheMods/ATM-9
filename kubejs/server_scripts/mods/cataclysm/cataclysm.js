ServerEvents.entityLootTables(event => {
    event.modifyEntity('cataclysm:deepling_brute', table => {
        table.addPool(pool => {
            pool.addItem('minecraft:heart_of_the_sea').randomChanceWithLooting(0.05, 0.05).killedByPlayer()
        })
    })
    event.modifyEntity('cataclysm:the_leviathan', table => {
        table.addPool(pool => {
            pool.addItem('minecraft:heart_of_the_sea').killedByPlayer()
        })
    })
})