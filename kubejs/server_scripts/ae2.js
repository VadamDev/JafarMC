function keepHeldDeployingJSON(input, tool, output) {
	return {
		type: 'create:deploying',
		ingredients: [
			Ingredient.of(input),
			Ingredient.of(tool)
		],
		results: [
			Item.of(output)
		],
		keepHeldItem: true
	}
}

onEvent('recipes', event => {
	let keepHeldDeploying = (input, tool, output) => event.custom(keepHeldDeployingJSON(input, tool, output))

	const processorTypes = ['engineering', 'logic', 'calculation']

	function removeRecipes() {
		//Press
		event.remove({id: 'mysticalagriculture:essence/appliedenergistics2/silicon_press'})
		event.remove({id: 'mysticalagriculture:essence/appliedenergistics2/engineering_press'})
		event.remove({id: 'mysticalagriculture:essence/appliedenergistics2/logic_press'})
		event.remove({id: 'mysticalagriculture:essence/appliedenergistics2/calculation_press'})

		//Inscriber
		event.remove({id: 'ae2:inscriber/certus_quartz_dust'})
		event.remove({id: 'ae2:inscriber/ender_dust'})
		event.remove({id: 'ae2:inscriber/fluix_dust'})
		event.remove({id: 'ae2:inscriber/sky_stone_dust'})
		event.remove({id: 'lazierae2:compat/ae2/inscriber/resonating_dust'})
		event.remove({id: 'lazierae2:compat/ae2/inscriber/coal_dust'})

		//Processors
		event.remove({output: 'ae2:printed_silicon'})

		processorTypes.forEach(type => {
			event.remove({output: 'ae2:printed_' + type + '_processor'})
			event.remove({output: 'ae2:' + type + '_processor'})
		})

		event.remove({output: 'lazierae2:parallel_printed'})
		event.remove({output: 'lazierae2:parallel_processor'})

		//Cable Color
		event.remove({id: 'ae2:network/cables/glass_fluix_clean'})
		event.remove({id: 'ae2:network/cables/covered_fluix_clean'})
		event.remove({id: 'ae2:network/cables/smart_fluix_clean'})
		event.remove({id: 'ae2:network/cables/dense_covered_fluix_clean'})
		event.remove({id: 'ae2:network/cables/dense_smart_fluix_clean'})

		//Components
		event.remove({output: 'ae2:cell_component_1k'})
		event.remove({output: 'ae2:cell_component_16k'})

		//Machines
		event.remove({output: 'ae2:controller'})
		event.remove({output: 'ae2:drive'})
		event.remove({output: 'ae2:chest'})
		event.remove({id: 'ae2:network/blocks/interfaces_interface'})
		event.remove({output: 'ae2:condenser'})
		event.remove({output: 'ae2:crafting_unit'})
		event.remove({output: 'ae2:pattern_provider'})
		event.remove({output: 'ae2:molecular_assembler'})

		//Infinity Booster
		event.remove({output: 'aeinfinitybooster:infinity_card'})
		event.remove({output: 'aeinfinitybooster:dimension_card'})
	}

	function addRecipes() {
		//Raw Processors
		keepHeldDeploying('ae2:silicon', 'ae2:silicon_press', 'ae2:printed_silicon')

		keepHeldDeploying('minecraft:diamond', 'ae2:engineering_processor_press', 'ae2:printed_engineering_processor')
		keepHeldDeploying('minecraft:gold_ingot', 'ae2:logic_processor_press', 'ae2:printed_logic_processor')
		keepHeldDeploying('ae2:certus_quartz_crystal', 'ae2:calculation_processor_press', 'ae2:printed_calculation_processor')
		keepHeldDeploying('lazierae2:resonating_crystal', 'lazierae2:universal_press', 'lazierae2:parallel_printed')

		//Printed Processors
		processorTypes.forEach(type => {
			let incomplete = 'kubejs:incomplete_' + type + '_processor'

			event.recipes.createSequencedAssembly(['ae2:' + type + '_processor'], 'ae2:printed_silicon', [
				event.recipes.createDeploying(incomplete, [incomplete, 'ae2:printed_' + type + '_processor']),
				event.recipes.createFilling(incomplete, [incomplete, Fluid.of('thermal:redstone', 100)]),
				event.recipes.createPressing(incomplete, incomplete)
			]).transitionalItem(incomplete).loops(1)
		})

		let parallel_incomplete = 'kubejs:incomplete_parallel_processor'
		event.recipes.createSequencedAssembly(['lazierae2:parallel_processor'], 'ae2:printed_silicon', [
			event.recipes.createDeploying(parallel_incomplete, [parallel_incomplete, 'lazierae2:parallel_printed']),
			event.recipes.createFilling(parallel_incomplete, [parallel_incomplete, Fluid.of('thermal:redstone', 100)]),
			event.recipes.createFilling(parallel_incomplete, [parallel_incomplete, Fluid.of('thermal:ender', 500)]),
			event.recipes.createPressing(parallel_incomplete, parallel_incomplete)
		]).transitionalItem(parallel_incomplete).loops(1)

		//Inscriber replacement
		event.recipes.thermal.pulverizer('lazierae2:resonating_dust', 'lazierae2:resonating_crystal').energy(250)
		event.recipes.createCrushing('lazierae2:resonating_dust', 'lazierae2:resonating_crystal')

		event.recipes.thermal.pulverizer('lazierae2:coal_dust', '#minecraft:coals').energy(250)
		event.recipes.createCrushing('lazierae2:coal_dust', '#minecraft:coals')

		//Etcher Compat
		event.recipes.lazierae2.etcher('lazierae2:parallel_processor', ['lazierae2:resonating_crystal', 'minecraft:redstone', 'minecraft:ender_pearl'])
			.processingTime(80)
			.energyCost(750)
			.id('jafarmc:etcher/parallel_processor')
		event.recipes.lazierae2.etcher('ae2:engineering_processor', ['minecraft:diamond', 'minecraft:redstone', 'ae2:silicon'])
			.processingTime(80)
			.energyCost(750)
			.id('jafarmc:etcher/engineering_processor')
		event.recipes.lazierae2.etcher('ae2:logic_processor', ['minecraft:gold_ingot', 'minecraft:redstone', 'ae2:silicon'])
			.processingTime(80)
			.energyCost(750)
			.id('jafarmc:etcher/logic_processor')
		event.recipes.lazierae2.etcher('ae2:calculation_processor', ['ae2:certus_quartz_crystal', 'minecraft:redstone', 'ae2:silicon'])
			.processingTime(80)
			.energyCost(750)
			.id('jafarmc:etcher/calculation_processor')

		//Pulverizer Compat
		event.recipes.thermal.pulverizer('ae2:certus_quartz_dust', '#forge:gems/certus_quartz').energy(250)
		event.recipes.thermal.pulverizer('ae2:fluix_dust', 'ae2:fluix_crystal').energy(250)
		event.recipes.thermal.pulverizer('ae2:sky_dust', 'ae2:sky_stone_block').energy(250)

		//Carbonic Fluix Create Compat
		event.recipes.createMixing('2x lazierae2:fluix_steel_ingot', ['ae2:fluix_crystal', '2x lazierae2:carbonic_fluix_dust', 'minecraft:iron_ingot']).superheated()

		//Fluix Mechanism
		let fluix_incomplete = 'kubejs:incomplete_fluix_mechanism'
		event.recipes.createSequencedAssembly([Item.of('kubejs:fluix_mechanism').withChance(0.8), Item.of('ae2:fluix_dust').withChance(0.2)], 'ae2:fluix_crystal', [
			event.recipes.createDeploying(fluix_incomplete, [fluix_incomplete, 'ae2:sky_dust']),
			event.recipes.createDeploying(fluix_incomplete, [fluix_incomplete, 'ae2:energy_cell']),
			event.recipes.createPressing(fluix_incomplete, fluix_incomplete),
			event.recipes.createDeploying(fluix_incomplete, [fluix_incomplete, 'ae2:fluix_glass_cable'])
		]).transitionalItem(fluix_incomplete).loops(1)

		//Sorting Mechanism
		let sorting_incomplete = 'kubejs:incomplete_sorting_mechanism'
		event.recipes.createSequencedAssembly(['kubejs:sorting_mechanism'], 'ae2:charged_certus_quartz_crystal', [
			event.recipes.createDeploying(sorting_incomplete, [sorting_incomplete, 'minecraft:redstone']),
			event.recipes.createDeploying(sorting_incomplete, [sorting_incomplete, 'minecraft:quartz']),
			event.recipes.createPressing(sorting_incomplete, sorting_incomplete)
		]).transitionalItem(sorting_incomplete).loops(3)

		//Storage Component
		event.shaped('ae2:cell_component_1k', [
			'FSF',
			'RPR',
			'FSF'
		], {
			F: 'ae2:fluix_dust',
			S: 'kubejs:sorting_mechanism',
			R: 'minecraft:redstone',
			P: 'ae2:logic_processor'
		})

		event.shaped('ae2:cell_component_16k', [
			'QPQ',
			'CGC',
			'QCQ'
		], {
			Q: 'create:polished_rose_quartz',
			P: 'ae2:calculation_processor',
			C: 'ae2:cell_component_4k',
			G: 'ae2:quartz_glass'
		})

		//Cable Color
		event.shapeless('ae2:fluix_glass_cable', ['#ae2:glass_cable'])
		event.shapeless('ae2:fluix_covered_cable', ['#ae2:covered_cable'])
		event.shapeless('ae2:fluix_smart_cable', ['#ae2:smart_cable'])
		event.shapeless('ae2:fluix_covered_dense_cable', ['#ae2:covered_dense_cable'])
		event.shapeless('ae2:fluix_smart_dense_cable', ['#ae2:smart_dense_cable'])

		//Machines
		event.shaped('2x ae2:controller', [
			'SMS',
			'FPF',
			'SMS'
		], {
			S: 'ae2:smooth_sky_stone_block',
			M: 'kubejs:fluix_mechanism',
			F: 'ae2:fluix_dust',
			P: 'ae2:engineering_processor'
		})

		event.shaped('ae2:drive', [
			'IPI',
			'CMC',
			'IPI'
		], {
			I: 'minecraft:iron_ingot',
			P: 'ae2:engineering_processor',
			C: 'ae2:fluix_glass_cable',
			M: 'kubejs:fluix_mechanism'
		})

		event.shaped('ae2:chest', [
			'GTG',
			'CMC',
			'IOI'
		], {
			G: '#forge:glass',
			T: 'ae2:terminal',
			C: 'ae2:fluix_glass_cable',
			M: 'kubejs:fluix_mechanism',
			I: 'minecraft:iron_ingot',
			O: 'minecraft:copper_ingot'
		})

		event.shaped('ae2:interface', [
			'IGI',
			'CMV',
			'IGI'
		], {
			I: 'minecraft:iron_ingot',
			G: '#forge:glass',
			C: 'ae2:annihilation_core',
			M: 'kubejs:fluix_mechanism',
			V: 'ae2:formation_core'
		})

		event.shaped('ae2:condenser', [
			'IFI',
			'PMP',
			'IFI'
		], {
			I: 'minecraft:iron_ingot',
			F: 'ae2:fluix_dust',
			P: 'create:mechanical_press',
			M: 'kubejs:fluix_mechanism'
		})

		event.shaped('2x ae2:crafting_unit', [
			'SLS',
			'IPI',
			'SCS'
		], {
			S: 'lazierae2:fluix_steel_ingot',
			L: 'ae2:logic_processor',
			I: 'kubejs:fluix_mechanism',
			P: 'lazierae2:parallel_processor',
			C: 'ae2:calculation_processor'
		})

		event.shaped('ae2:pattern_provider', [
			'ITI',
			'CMV',
			'ITI'
		], {
			I: 'minecraft:iron_ingot',
			T: 'create:electron_tube',
			C: 'ae2:annihilation_core',
			M: 'kubejs:fluix_mechanism',
			V: 'ae2:formation_core'
		})

		event.shaped('ae2:molecular_assembler', [
			'IQI',
			'CTV',
			'IQI'
		], {
			I: 'minecraft:iron_ingot',
			Q: 'ae2:quartz_glass',
			C: 'ae2:annihilation_core',
			T: 'create:mechanical_crafter',
			V: 'ae2:formation_core'
		})

		//Infinity Booster
		event.shaped('aeinfinitybooster:infinity_card', [
			'FGF',
			'BNB',
			'SSS'
		], {
			F: 'lazierae2:logic_unit',
			G: 'thermal:enderium_gear',
			B: 'ae2:wireless_booster',
			N: 'minecraft:nether_star',
			S: 'lazierae2:fluix_steel_ingot'
		})

		event.shaped('aeinfinitybooster:dimension_card', [
			'IPI',
			'UNU',
			'IPI'
		], {
			I: 'aeinfinitybooster:infinity_card',
			P: 'ae2:fluix_pearl',
			U: 'lazierae2:parallel_processor',
			N: 'minecraft:netherite_ingot'
		})
	}

	removeRecipes()
	addRecipes()
})