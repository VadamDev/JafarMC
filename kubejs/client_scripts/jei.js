onEvent('jei.hide.items', event => {
	//Unify
	event.hide([
		'iceandfire:copper_ore', 'iceandfire:silver_ore',
		'galosphere:raw_silver',
		'iceandfire:copper_ingot', 'iceandfire:silver_ingot', 'galosphere:silver_ingot', 'createaddition:electrum_ingot',
		'iceandfire:copper_nugget', 'tconstruct:copper_nugget', 'create:copper_nugget', 'galosphere:silver_nugget', 'iceandfire:silver_nugget', 'createaddition:electrum_nugget',

		'tconstruct:plate_sand_cast', 'tconstruct:plate_red_sand_cast', 'tconstruct:plate_cast',
		'thermal:copper_plate', 'thermal:iron_plate', 'thermal:gold_plate', 'createaddition:electrum_sheet', 'createdeco:zinc_sheet', 'thermal:netherite_plate',

		'createaddition:diamond_grit'
	])

	//Mob grinding utils
	event.hide([
		'mob_grinding_utils:null_sword',
		'mob_grinding_utils:dark_oak_stone',

		'mob_grinding_utils:fan',
		'mob_grinding_utils:fan_upgrade_width',
		'mob_grinding_utils:fan_upgrade_height',
		'mob_grinding_utils:fan_upgrade_speed',

		'mob_grinding_utils:entity_spawner',
		'mob_grinding_utils:spawner_upgrade_width',
		'mob_grinding_utils:spawner_upgrade_height',

		'mob_grinding_utils:xpsolidifier',
		'mob_grinding_utils:xp_solidifier_upgrade',
		'mob_grinding_utils:solid_xp_mould_blank',
		'mob_grinding_utils:solid_xp_mould_baby',
		'mob_grinding_utils:solid_xp_baby',
		'mob_grinding_utils:solid_xp_block',

		'mob_grinding_utils:nutritious_chicken_feed',
		'mob_grinding_utils:golden_egg',
		'mob_grinding_utils:delightful_dirt',

		'mob_grinding_utils:monocle',
		'mob_grinding_utils:entity_conveyor',
		'mob_grinding_utils:tinted_glass',
		'mob_grinding_utils:jumbo_tank'
	])

	//Extended Crafting
	event.hide([
		'extendedcrafting:ender_star_block',
		'extendedcrafting:ender_star',

		'extendedcrafting:ender_ingot_block',
		'extendedcrafting:ender_ingot',
		'extendedcrafting:ender_nugget',
		'extendedcrafting:ender_catalyst',
		'extendedcrafting:ender_component',

		'extendedcrafting:enhanced_ender_ingot_block',
		'extendedcrafting:enhanced_ender_ingot',
		'extendedcrafting:enhanced_ender_nugget',
		'extendedcrafting:enhanced_ender_catalyst',
		'extendedcrafting:enhanced_ender_component'
	])

	//Random Tweaks
	event.hide([
		Item.of('ae2:facade').ignoreNBT(),
		'tinyredstone:silicon_compound',
		'tinyredstone:silicon',

		Item.of('tconstruct:crafting_station').ignoreNBT(),
		Item.of('tconstruct:tinker_station').ignoreNBT(),
		Item.of('tconstruct:part_builder').ignoreNBT(),

		Item.of('patchouli:guide_book', '{"patchouli:book":"twilightforest:guide"}'),

		'twilightforest:uncrafting_table',

		'paraglider:heart_container',
		'paraglider:stamina_vessel',
		'paraglider:spirit_orb',
		'paraglider:anti_vessel',
		'paraglider:essence',

		'solarflux:photovoltaic_cell_4',
		'solarflux:photovoltaic_cell_5',
		'solarflux:photovoltaic_cell_6',
		'solarflux:blazing_coating',
		'solarflux:emerald_glass',
		'solarflux:ender_glass',
		'solarflux:furnace_upgrade',
		'solarflux:sp_6',
		'solarflux:sp_7',
		'solarflux:sp_8',

		'pipez:universal_pipe',
		'pipez:gas_pipe',
		'pipez:fluid_pipe',

		'fluxnetworks:admin_configurator',
		'fluxnetworks:basic_flux_storage',
		'fluxnetworks:herculean_flux_storage',
		'fluxnetworks:gargantuan_flux_storage',

		'artifacts:everlasting_beef',
		'artifacts:eternal_steak',
		'artifacts:crystal_heart',

		'upgradednetherite_creative:creative_upgraded_netherite_ingot',

		'bhc:wither_bone'
	])
})

onEvent('jei.add.items', event => {
	event.add([
		Item.of('ae2:facade', '{item:"minecraft:stone"}'),

		'tconstruct:crafting_station',
		'tconstruct:tinker_station',
		'tconstruct:part_builder'
	])
})

onEvent('item.tooltip', event => {
	["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"].forEach(color => {
		event.add("elevatorid:elevator_" + color, "32 blocks of range on the Y axis")
	})

	event.add(
		['paraglider:goddess_statue', 'paraglider:kakariko_goddess_statue', 'paraglider:goron_goddess_statue', 'paraglider:rito_goddess_statue', 'paraglider:horned_statue'],
		['', '§cDecoration Only', '']
	)

	event.add('bhc:red_heart', ['', '§cDrop from all mobs', ''])
    event.add('bhc:yellow_heart', ['', '§eDrop from bosses', ''])
    event.add('bhc:green_heart', ['', '§2Drop from Ender Dragon', ''])
    event.add('bhc:blue_heart', ['', '§9Drop from Evoker', ''])

    event.add('createaddition:connector', ['', '§c2048 FE/t', ''])
    event.add('createaddition:large_connector', ['', '§c8192 FE/t', ''])

    event.add('pipez:item_pipe', ['', '§b4 items per second', ''])
    event.add('pipez:energy_pipe', ['', '§c4096 FE/t', ''])

    event.add('pipez:basic_upgrade', ['', '§c8192 FE/t', '§b10 items per seconds', '', '§a+ Redstone modes', ''])
    event.add('pipez:improved_upgrade', ['', '§c32768 FE/t', '§b32 items per seconds', '', '§a+ Redstone modes', '§a+ Distribution modes', ''])
    event.add('pipez:advanced_upgrade', ['', '§c131072 FE/t', '§b128 items per seconds', '', '§a+ Redstone modes', '§a+ Distribution modes', '§a+ Filter modes', '§a+ Filters', ''])
    event.add('pipez:ultimate_upgrade', ['', '§c524288 FE/t', '§b1280 items per seconds', '', '§a+ Redstone modes', '§a+ Distribution modes', '§a+ Filter modes', '§a+ Filters', ''])

    event.add('createaddition:modular_accumulator', ['', '§7Capacity: 1M FE per block', '§7Max Size: 5x5x7', ''])
})
