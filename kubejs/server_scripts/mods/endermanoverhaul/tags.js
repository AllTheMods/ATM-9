ServerEvents.tags('block', event => {
    const stones = event.get('minecraft:base_stone_overworld').getObjectIds()
    stones.forEach(stone => {
        event.remove('endermanoverhaul:cave_enderman_holdable',stone);
    })
})
