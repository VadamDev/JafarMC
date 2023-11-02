onEvent('item.registry', event => {
	['Calculation', 'Logic', 'Engineering', 'Parallel'].forEach(type => {
		let id = type.toLowerCase()
		event.create('incomplete_' + id + '_processor', 'create:sequenced_assembly').texture('kubejs:item/incomplete_' + id + '_processor').displayName('Incomplete ' + type + ' Processor')
	})

	let registerMechanism = (id, displayName) => {
		event.create('incomplete_' + id + '_mechanism', 'create:sequenced_assembly').texture('kubejs:item/incomplete_' + id + '_mechanism').displayName('Incomplete ' + displayName)
		event.create(id + '_mechanism').texture('kubejs:item/' + id + '_mechanism').displayName(displayName)
	}

	registerMechanism('fluix', 'Fluix Mechanism')
	registerMechanism('sorting', 'Sorting Mechanism')

	event.create('fused_helmet').texture('kubejs:item/fused_helmet').displayName('Fused Helmet').rarity('epic')
	event.create('fused_chestplate').texture('kubejs:item/fused_chestplate').displayName('Fused Chestplate').rarity('epic')
	event.create('fused_leggings').texture('kubejs:item/fused_leggings').displayName('Fused Leggings').rarity('epic')
	event.create('fused_boots').texture('kubejs:item/fused_boots').displayName('Fused Boots').rarity('epic')

	event.create('ultimate_soup').food(food => {
		food.hunger(20).saturation(1).alwaysEdible()
	}).texture('kubejs:item/ultimate_soup').displayName('Ultimate Soup').rarity('epic')

	event.create('black_hole').texture('extendedcrafting:item/singularity_overlay').displayName('Black Hole').color(0, "#FF5D00").rarity('epic')
	event.create('stabilized_black_hole').texture('extendedcrafting:item/singularity_overlay').displayName('Stablized Black Hole').color(0, "#FF5D00").glow(true).rarity('epic')
})
