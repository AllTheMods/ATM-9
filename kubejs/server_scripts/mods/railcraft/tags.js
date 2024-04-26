ServerEvents.tags('item', event => {
	event.remove('forge:salt', 'railcraft:saltpeter_dust')
	event.remove('forge:dusts/salt', 'railcraft:saltpeter_dust')
	event.remove('forge:salts', 'railcraft:saltpeter_dust')
	
	event.add('forge:dusts/potassium_nitrate', 'railcraft:saltpeter_dust')
	event.add('forge:dusts', 'railcraft:saltpeter_dust')
	event.add('forge:dusts/saltpeter', 'railcraft:saltpeter_dust')
	event.add('forge:dusts/niter', 'railcraft:saltpeter_dust')
	event.add('mysticalagriculture:material/saltpeter', 'railcraft:saltpeter_dust')
	event.add('supplementaries:hourglass_dusts', 'railcraft:saltpeter_dust')
});