ServerEvents.highPriorityData(event => {
    event.addJson('immersiveengineering:forge/biome_modifier/bauxite', {
        type: "forge:remove_features",
        biomes: "#minecraft:is_overworld",
        features: "immersiveengineering:bauxite",
        step: "underground_ores"
    })
})