// priority: 1

const duplicatedPlates = ['copper', 'iron', 'gold', 'netherite']
const thermalPlates = ['tin', 'lead', 'silver', 'nickel', 'bronze', 'electrum', 'invar', 'constantan', 'signalum', 'lumium', 'enderium']

onEvent('item.tags', event => {
	/*
	============================================================
	                          Copper
	============================================================
	*/

	event.get('forge:ores/copper').remove('iceandfire:copper_ore')
	event.get('forge:storage_blocks/copper').remove('iceandfire:copper_block')

	event.get('forge:ingots/copper').remove('iceandfire:copper_ingot')
	event.get('forge:nuggets/copper').remove(['iceandfire:copper_nugget', 'tconstruct:copper_nugget', 'create:copper_nugget'])
	event.get('forge:nuggets').remove('create:copper_nugget')

	/*
	============================================================
	                          Silver
	============================================================
	*/

	event.get('forge:ores/silver').remove('iceandfire:silver_ore')
	event.get('forge:storage_blocks/raw_silver').remove('galosphere:raw_silver_block')
	event.get('forge:storage_blocks/silver').remove(['galosphere:silver_block', 'iceandfire:silver_block'])

	event.get('forge:raw_ores/silver').remove('galosphere:raw_silver')
	event.get('forge:ingots/silver').remove(['galosphere:silver_ingot', 'iceandfire:silver_ingot'])
	event.get('forge:nuggets/silver').remove(['galosphere:silver_nugget', 'iceandfire:silver_nugget'])

	/*
	============================================================
	                          Electrum
	============================================================
	*/

	event.get('forge:ingots/electrum').remove('createaddition:electrum_ingot')
	event.get('forge:nuggets/electrum').remove('createaddition:electrum_nugget')
	event.get('forge:ingots/all_metal').remove('createaddition:electrum_ingot')
	event.get('forge:nuggets/all_metal').remove('createaddition:electrum_nugget')
	event.get('forge:ingots').remove('createaddition:electrum_ingot')
	event.get('forge:nuggets').remove('createaddition:electrum_nugget')

	/*
	============================================================
	                          Diamond
	============================================================
	*/

	event.get('forge:dusts/diamond').remove('createaddition:diamond_grit')

	/*
	============================================================
	                           Plates
	============================================================
	*/

	duplicatedPlates.forEach(material => {
		event.get('forge:plates/' + material).remove('thermal:' + material + '_plate')
	})

	event.get('forge:plates/electrum').remove('createaddition:electrum_sheet')
	event.get('forge:plates/zinc').remove('createdeco:zinc_sheet')

	/*
	============================================================
	                          Silicon
	============================================================
	*/

	event.get('forge:silicon').remove('tinyredstone:silicon')

	/*
	============================================================
	                       Wither Bone
	============================================================
	*/

	event.get('forge:wither_bones').remove('bhc:wither_bone')

	/*
	============================================================
	                        Misc Stuff
	============================================================
	*/

	event.get('forge:ores').remove(['iceandfire:copper_ore', 'iceandfire:silver_ore'])
})

onEvent('recipes', event => {
	/*
	============================================================
	                          Copper
	============================================================
	*/

	//Blocks
	event.remove({input: 'iceandfire:copper_ore'})
	event.remove({output: 'iceandfire:copper_block'})

	//Ingots
	event.remove({output: 'iceandfire:copper_ingot'})

	//Nuggets
	event.remove({input: 'tconstruct:copper_nugget'})
	event.remove({output: 'tconstruct:copper_nugget'})
	event.remove({output: 'iceandfire:copper_nugget'})
	event.remove({output: 'create:copper_nugget'})
	event.remove({id: 'thermal:compat/create/pulverizer_create_veridium_recycle'})

	event.recipes.createCrushing([
		Item.of('minecraft:flint').withChance(0.25),
		Item.of('minecraft:gold_nugget').withChance(0.1),
		Item.of('thermal:copper_nugget').withChance(0.1),
		Item.of('create:zinc_nugget').withChance(0.1),
		Item.of('minecraft:iron_nugget').withChance(0.1)
	], 'minecraft:tuff').processingTime(350)

	event.recipes.createCrushing([
		Item.of('minecraft:flint').withChance(0.25),
		Item.of('minecraft:gold_nugget').withChance(0.1),
		Item.of('thermal:copper_nugget').withChance(0.1),
		Item.of('create:zinc_nugget').withChance(0.1),
		Item.of('minecraft:iron_nugget').withChance(0.1)
	], '#create:stone_types/tuff').processingTime(350)

	event.recipes.createCrushing([
		Item.of('create:crushed_raw_copper').withChance(0.8),
		Item.of('thermal:copper_nugget').withChance(0.8),
	], 'create:veridium').processingTime(250)

	event.recipes.createCrushing([
		Item.of('create:crushed_raw_copper').withChance(0.8),
		Item.of('thermal:copper_nugget').withChance(0.8),
	], '#create:stone_types/veridium').processingTime(250)

	event.recipes.createSplashing([
		'9x thermal:copper_nugget',
		Item.of('minecraft:clay_ball').withChance(0.5)
	], 'create:crushed_raw_copper')

	event.recipes.thermal.pulverizer([
		Item.of('create:crushed_raw_copper').withChance(0.8),
		Item.of('thermal:copper_nugget').withChance(0.8)
	], 'create:veridium').energy(4000)

	event.recipes.thermal.pulverizer([
		Item.of('create:crushed_raw_copper').withChance(0.8),
		Item.of('thermal:copper_nugget').withChance(0.8)
	], '#create:stone_types/veridium').energy(4000)

	/*
	============================================================
	                          Silver
	============================================================
	*/


	//Blocks
	event.remove({input: 'iceandfire:silver_ore'})
	event.remove({output: 'iceandfire:silver_block'})
	event.remove({output: 'galosphere:raw_silver_block'})
	event.remove({output: 'galosphere:silver_block'})

	//Raw Ingots
	event.remove({output: 'galosphere:raw_silver'})

	//Ingots
	event.remove({output: 'galosphere:silver_ingot'})
	event.remove({output: 'iceandfire:silver_ingot'})

	//Nuggets
	event.remove({output: 'galosphere:silver_nugget'})
	event.remove({output: 'iceandfire:silver_nugget'})

	/*
	============================================================
	                          Electrum
	============================================================
	*/

	event.remove({output: 'createaddition:electrum_ingot'})
	event.remove({output: 'createaddition:electrum_nugget'})

	event.recipes.createMixing('2x thermal:electrum_ingot', ['minecraft:gold_ingot', 'thermal:silver_ingot']).heated()

	/*
	============================================================
	                          Diamond
	============================================================
	*/

	event.recipes.createCrushing('thermal:diamond_dust', 'minecraft:diamond')
		.processingTime(100)

	/*
	============================================================
	                           Plates
	============================================================
	*/

	event.remove({input: 'tconstruct:plate_sand_cast'})
	event.remove({input: 'tconstruct:plate_red_sand_cast'})
	event.remove({input: 'tconstruct:plate_cast'})
	event.remove({output: 'tconstruct:plate_sand_cast'})
	event.remove({output: 'tconstruct:plate_red_sand_cast'})
	event.remove({output: 'tconstruct:plate_cast'})

	duplicatedPlates.forEach(material => {
		event.remove({output: 'thermal:' + material + '_plate'})
	})

	thermalPlates.forEach(material => {
		let plateItem = 'thermal:' + material + '_plate'

		event.remove({output: plateItem})
		event.recipes.createPressing(plateItem, 'thermal:' + material + '_ingot')
	})

	event.remove({output: 'createaddition:electrum_sheet'})
	event.remove({output: 'createdeco:zinc_sheet'})

	/*
	============================================================
	                          Silicon
	============================================================
	*/
	
	event.remove({output: 'tinyredstone:silicon_compound'})
	event.remove({output: 'tinyredstone:silicon'})
})
