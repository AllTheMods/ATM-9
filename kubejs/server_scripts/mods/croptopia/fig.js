// priority: 10
ServerEvents.recipes(event => {
	event.remove({id: 'croptopia:fig_sapling'})
    event.shapeless('croptopia:fig_sapling', ['#forge:fruits/fig', '#forge:fruits/fig', '#minecraft:saplings'])
    
    event.remove({id: 'croptopia:shaped_figgy_pudding'})
    event.shaped('croptopia:figgy_pudding', ['   ', 'ABC', 'DEF'], {'A': 'croptopia:date', 'B': '#forge:fruits/fig', 'C': 'minecraft:sugar', 'D': 'minecraft:egg', 'E': '#forge:water_bottles', 'F': 'croptopia:whipping_cream'})
});
