onEvent('recipes', event => {
	function mirrorStoneCutting(input, output) {
		event.stonecutting(output, input)
		event.stonecutting(input, output)
	}

	/*
	  Copper
	*/

	mirrorStoneCutting('minecraft:copper_block', 'iceandfire:copper_block')

	/*
	  Silver
	*/

	mirrorStoneCutting('thermal:raw_silver_block', 'galosphere:raw_silver_block')
	mirrorStoneCutting('thermal:silver_block', 'galosphere:silver_block')
	mirrorStoneCutting('thermal:silver_block', 'iceandfire:silver_block')
	mirrorStoneCutting('galosphere:silver_block', 'iceandfire:silver_block')
})
