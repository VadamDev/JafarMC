onEvent('recipes', event => {
	function removeRecipes() {
		/*
		  Useless tf book
		*/
		event.remove({output: Item.of('patchouli:guide_book', '{"patchouli:book":"twilightforest:guide"}')})

		/*
		  Useless Create Additions legacy accumulator conversion
		*/
		event.remove({id: 'createaddition:crafting/accumulator_conversion'})

		/*
		  Mob Grinding Utils
		*/

		event.remove({output: 'mob_grinding_utils:fan'})
		event.remove({output: 'mob_grinding_utils:fan_upgrade_width'})
		event.remove({output: 'mob_grinding_utils:fan_upgrade_height'})
		event.remove({output: 'mob_grinding_utils:fan_upgrade_speed'})

		event.remove({output: 'mob_grinding_utils:entity_spawner'})
		event.remove({output: 'mob_grinding_utils:spawner_upgrade_width'})
		event.remove({output: 'mob_grinding_utils:spawner_upgrade_height'})

		event.remove({output: 'mob_grinding_utils:xpsolidifier'})
		event.remove({output: 'mob_grinding_utils:xp_solidifier_upgrade'})
		event.remove({output: 'mob_grinding_utils:solid_xp_mould_blank'})
		event.remove({output: 'mob_grinding_utils:solid_xp_mould_baby'})
		event.remove({output: 'mob_grinding_utils:solid_xp_baby'})
		event.remove({output: 'mob_grinding_utils:solid_xp_block'})

		event.remove({output: 'mob_grinding_utils:nutritious_chicken_feed'})

		event.remove({output: 'mob_grinding_utils:monocle'})
		event.remove({output: 'mob_grinding_utils:entity_conveyor'})
		event.remove({output: 'mob_grinding_utils:tinted_glass'})
		event.remove({output: 'mob_grinding_utils:jumbo_tank'})

		/*
		  Pipez
		*/

		event.remove({output: 'pipez:universal_pipe'})
		event.remove({output: 'pipez:energy_pipe'})
		event.remove({output: 'pipez:fluid_pipe'})
		event.remove({output: 'pipez:item_pipe'})

		event.remove({output: 'pipez:basic_upgrade'})
		event.remove({output: 'pipez:improved_upgrade'})
		event.remove({output: 'pipez:advanced_upgrade'})
		event.remove({output: 'pipez:ultimate_upgrade'})

		/*
		  Energy Meter
		*/
		event.remove({output: 'energymeter:meter'})

		/*
		  Extended Crafting
		*/

		event.remove({output: 'extendedcrafting:ender_star_block'})
		event.remove({output: 'extendedcrafting:ender_star'})

		event.remove({output: 'extendedcrafting:ender_ingot_block'})
		event.remove({output: 'extendedcrafting:ender_ingot'})
		event.remove({output: 'extendedcrafting:ender_nugget'})
		event.remove({output: 'extendedcrafting:ender_catalyst'})
		event.remove({output: 'extendedcrafting:ender_component'})

		event.remove({output: 'extendedcrafting:enhanced_ender_ingot_block'})
		event.remove({output: 'extendedcrafting:enhanced_ender_ingot'})
		event.remove({output: 'extendedcrafting:enhanced_ender_nugget'})
		event.remove({output: 'extendedcrafting:enhanced_ender_catalyst'})
		event.remove({output: 'extendedcrafting:enhanced_ender_component'})

		/*
		  Mystical
		*/
		event.remove({output: 'mysticalagriculture:infusion_altar'})

		/*
		  Angel Ring
		*/
		event.remove({output: 'angelring:itemring'})

		/*
		  Entangled
		*/

		event.remove({id: 'entangled:block'})

		/*
		  Flux Network
		*/

		event.remove({output: 'fluxnetworks:basic_flux_storage'})
		event.remove({output: 'fluxnetworks:herculean_flux_storage'})
		event.remove({output: 'fluxnetworks:gargantuan_flux_storage'})

		event.remove({output: 'fluxnetworks:flux_block'})
		event.remove({output: 'fluxnetworks:flux_core'})
		event.remove({id: 'fluxnetworks:fluxpoint'})
		event.remove({id: 'fluxnetworks:fluxplug'})

		/*
		  Compact Machines
		*/
		event.remove({output: 'compactmachines:wall'})

		event.remove({id: 'compactmachines:tunnels/item'})
		event.remove({id: 'compactmachines:tunnels/fluid'})
		event.remove({id: 'compactmachines:tunnels/energy'})

		/*
		  Travel Anchors
		*/

		event.remove({output: 'travel_anchors:travel_staff'})
		event.remove({output: 'travel_anchors:travel_anchor'})
	}

	function addRecipes() {
		/*
		  Auto Andesite
		*/
		event.recipes.createSplashing('minecraft:andesite', 'minecraft:gravel')

		/*
		  Early game invar
		*/
		event.recipes.createMixing('3x thermal:invar_ingot', ['2x minecraft:iron_ingot', 'thermal:nickel_ingot']).heated()

		/*
		  Create obsidian thermal compat
		*/

		event.recipes.thermal.pulverizer(['create:powdered_obsidian', Item.of('minecraft:obsidian').withChance(0.5)], 'minecraft:obsidian').energy(4000)

		/*
		  Nametag
		*/
		event.shaped('minecraft:name_tag', [
			' IS',
			' PI',
			'P  '
		], {
			I: 'minecraft:iron_ingot',
			S: 'minecraft:string',
			P: 'minecraft:paper'
		})

		/*
		  Wool to string
		*/
		event.shapeless('4x minecraft:string', ['#minecraft:wool'])

		/*
		  Pipez
		*/

		event.shaped('12x pipez:item_pipe', [
			'BBB',
			'GCG',
			'BBB'
		], {
			B: 'create:brass_ingot',
			G: '#forge:glass',
			C: 'create:belt_connector'
		})

		event.shaped('12x pipez:energy_pipe', [
			'III',
			'CRC',
			'III'
		], {
			I: 'thermal:invar_ingot',
			C: 'createaddition:connector',
			R: 'minecraft:redstone'
		})

		event.shaped('pipez:basic_upgrade', [
			'GNG',
			'NRN',
			'GNG'
		], {
			G: 'minecraft:gold_ingot',
			N: 'minecraft:iron_nugget',
			R: 'minecraft:redstone'
		})

		event.shaped('2x pipez:improved_upgrade', [
			'ERE',
			'RUR',
			'ERE'
		], {
			E: 'thermal:electrum_ingot',
			R: 'minecraft:redstone',
			U: 'pipez:basic_upgrade'
		})

		event.shaped('2x pipez:advanced_upgrade', [
			'LRL',
			'RUR',
			'LRL'
		], {
			L: 'thermal:lumium_ingot',
			R: 'minecraft:redstone',
			U: 'pipez:improved_upgrade'
		})

		event.shaped('pipez:ultimate_upgrade', [
			'EDE',
			'UGU',
			'EDE'
		], {
			E: 'thermal:enderium_ingot',
			D: 'thermal:diamond_dust',
			U: 'pipez:advanced_upgrade',
			G: 'thermal:lumium_gear'
		})

		/*
		  Solar Flux
		*/

		event.shaped('3x solarflux:mirror', [
			'GGG',
			'SSS'
		], {
			G: '#forge:glass',
			S: 'thermal:silver_ingot'
		})

		event.shaped('solarflux:photovoltaic_cell_1', [
			'LLL',
			'MMM',
			'RRR'
		], {
			L: 'minecraft:lapis_lazuli',
			M: 'solarflux:mirror',
			R: 'create:polished_rose_quartz'
		})

		event.shaped('solarflux:photovoltaic_cell_2', [
			'LLL',
			'MCM',
			'PPP'
		], {
			L: 'minecraft:lapis_lazuli',
			M: 'solarflux:mirror',
			C: 'solarflux:photovoltaic_cell_1',
			P: 'thermal:electrum_plate'
		})

		event.shaped('solarflux:photovoltaic_cell_3', [
			'LLL',
			'CSC',
			'GGG'
		], {
			L: '#forge:glass',
			C: 'solarflux:photovoltaic_cell_2',
			S: 'create:sturdy_sheet',
			G: 'minecraft:glowstone_dust'
		})

		event.shaped('solarflux:sp_2', [
			'SSS',
			'SMS',
			'SSS'
		], {
			S: 'solarflux:sp_1',
			M: 'thermal:rf_coil'
		})

		event.shaped('solarflux:sp_3', [
			'CCC',
			'SAS',
			'SOS'
		], {
			C: 'solarflux:photovoltaic_cell_1',
			S: 'solarflux:sp_2',
			A: 'createaddition:capacitor',
			O: 'minecraft:copper_ingot'
		})

		event.shaped('2x solarflux:sp_4', [
			'CCC',
			'SAS',
			'SOS'
		], {
			C: 'solarflux:photovoltaic_cell_2',
			S: 'solarflux:sp_3',
			A: 'createaddition:modular_accumulator',
			O: 'createaddition:connector'
		})

		event.shaped('solarflux:sp_5', [
			'CCC',
			'SES',
			'SOS'
		], {
			C: 'solarflux:photovoltaic_cell_3',
			S: 'solarflux:sp_4',
			E: 'thermal:enderium_ingot',
			O: 'createaddition:large_connector'
		})

		/*
		  Energy Meter
		*/
		event.shaped('energymeter:meter', [
			'BCB',
			'NGN',
			'BOB'
		], {
			B: 'create:brass_ingot',
			C: 'minecraft:comparator',
			N: 'createaddition:connector',
			G: "#forge:glass_panes",
			O: 'minecraft:observer'
		})

		/*
		  Mystical
		*/
		event.shaped('mysticalagriculture:infusion_altar', [
			'GWG',
			' S ',
			'STS'
		], {
			G: 'minecraft:gold_ingot',
			W: 'minecraft:red_wool',
			S: 'minecraft:stone',
			T: 'botania:terrasteel_ingot'
		})

		/*
		  Angel Ring
		*/
		event.shaped('angelring:itemring', [
			'F F',
			'PTP',
			'BRB'
		], {
			F: 'minecraft:feather',
			P: 'botania:pixie_dust',
			T: Item.of('botania:flight_tiara', '{variant:0}'),
			B: 'minecraft:blaze_rod',
			R: 'angelring:itemdiamondring'
		})

		/*
		  Entangled
		*/

		event.shaped('2x entangled:block', [
			'SWS',
			'WFW',
			'SWS'
		], {
			S: 'create_things_and_misc:rose_quartz_sheet',
			W: 'waystones:warp_dust',
			F: 'thermal:machine_frame'
		})

		/*
		  Flux Network
		*/

		event.recipes.createMixing('8x fluxnetworks:flux_dust', ['2x create:powdered_obsidian', 'thermal:electrum_dust', 'minecraft:redstone']).superheated()
		event.recipes.createCompacting('fluxnetworks:flux_block', ['8x fluxnetworks:flux_dust']).heated()

		event.shaped('4x fluxnetworks:flux_core', [
			'WFW',
			'FOF',
			'WFW'
		], {
			W: 'waystones:warp_dust',
			F: 'fluxnetworks:flux_dust',
			O: 'minecraft:obsidian'
		})

		event.shaped('2x fluxnetworks:flux_point', [
			' F ',
			'FRF',
			' F '
		], {
			F: 'fluxnetworks:flux_core',
			R: 'minecraft:redstone_block'
		})

		event.shaped('2x fluxnetworks:flux_plug', [
			' F ',
			'FCF',
			' F '
		], {
			F: 'fluxnetworks:flux_core',
			C: 'minecraft:copper_block'
		})

		/*
		  Compact Machines
		*/
		event.replaceInput({output: 'compactmachines:machine_tiny'}, 'minecraft:copper_block', 'minecraft:copper_ingot')
		event.replaceInput({output: 'compactmachines:machine_small'}, 'minecraft:iron_block', 'minecraft:iron_ingot')
		event.replaceInput({output: 'compactmachines:machine_normal'}, 'minecraft:gold_block', 'minecraft:gold_ingot')
		event.replaceInput({output: 'compactmachines:machine_giant'}, 'minecraft:diamond_block', 'minecraft:diamond')
		event.replaceInput({output: 'compactmachines:machine_maximum'}, 'minecraft:netherite_block', 'minecraft:netherite_ingot')

		event.shaped('8x compactmachines:wall', [
			'FFF',
			'FRF',
			'FFF'
		], {
			F: 'fluxnetworks:flux_dust',
			R: 'thermal:rf_coil'
		})

		event.shapeless(Item.of('compactmachines:tunnel', 2, '{definition:{id:"compactmachines:item"}}'), [
			'pipez:item_pipe', 'fluxnetworks:flux_dust',
			'minecraft:redstone'
		])

		event.shapeless(Item.of('compactmachines:tunnel', 2, '{definition:{id:"compactmachines:fluid"}}'), [
			'create:fluid_pipe', 'fluxnetworks:flux_dust',
			'minecraft:redstone'
			
		])

		event.shapeless(Item.of('compactmachines:tunnel', 2, '{definition:{id:"compactmachines:energy"}}'), [
			'pipez:energy_pipe', 'fluxnetworks:flux_dust',
			'minecraft:redstone'
		])

		/*
		  Travel Anchors
		*/

		event.recipes.createMechanicalCrafting('travel_anchors:travel_staff', [
			'PEP',
			'PSP',
			' I ',
			' I '
		], {
			P: 'thermal:enderium_plate',
			E: 'minecraft:ender_pearl',
			S: 'thermal:signalum_gear',
			I: 'minecraft:iron_ingot'
		})

		event.shaped('2x travel_anchors:travel_anchor', [
			' R ',
			'PMP',
			' S '
		], {
			R: 'minecraft:iron_ingot',
			P: 'thermal:enderium_plate',
			M: 'thermal:machine_frame',
			S: 'thermal:lead_gear'
		})

		/*
		  Blue Bomb
		*/
		event.custom({
			type: 'botania:mana_infusion',
			input: {
				item: 'supplementaries:bomb'
			},
			output: {
				item: 'supplementaries:bomb_blue'
			},
			mana: 100000
		})
	}

	removeRecipes()
	addRecipes()
})