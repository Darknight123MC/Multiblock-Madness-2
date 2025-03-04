var parts = [
	'ingot',
	//'gear',
	//'dust',
	//'plate',
	//'rod',
	//'wire',
	//'nugget',
	//'storage_block',
]
var oreProcessingParts = [
	'raw',
	'crushed',
	'chunk',
	//'clump',
	'leached',
	'deposit',
	'crystal',
]
var oreRefiningParts = [
	'wet',
	'washed',
	'cluster',
	'infused',
	'brick',
	'shard',
]


var mods = [
	'allomancy',
	'kubejs',
	'thermal',
	'create',
	'minecraft',
	'malum', 
	'tconstruct', 
	'mythicbotany', 
	'mna', 
	'createbigcannons', 
	'forbidden_arcanus',
	'extendedcrafting',
	'pneumaticcraft',
	'mekanism',
	'chemlib',
	'biggerreactors',
	'beyond_earth',
	'extendedcrafting'
]
onEvent('item.tooltip', tooltip => {
	
	global.newMaterialParts.forEach((item) => {
		if (item.type == 'base_metal') {
			mods.forEach((mod) => {
				parts.forEach((part) => {
					if (mod == 'pneumaticcraft' || mod == 'mekanism') {
						if (Item.of(`${mod}:${part}_${item.material}`) != null)
						tooltip.add(`${mod}:${part}_${item.material}`, `Tier `+item.tier+` Metal`)
					} else if (mod == 'naturesaura') {
						if (Item.of(`${mod}:${item.material}`) != null)
						tooltip.add(`${mod}:${item.material}`, `Tier `+item.tier+` Metal`)
					} else {
						if (Item.of(`${mod}:${item.material}_${part}`) != null)
						tooltip.add(`${mod}:${item.material}_${part}`, `Tier `+item.tier+` Metal`)
					}
				})
			
			oreProcessingParts.forEach((part) => {
				if (part == 'raw') { // tier 0 processed
					if (Item.of(`${mod}:${part}_${item.material}`) != null)
					tooltip.addAdvanced(`${mod}:${part}_${item.material}`, (items, advanced, text) => {
							text.add(1, [Text.of(`Metal Tier: `).white(), Text.of(`${item.tier}`).gold()])
							text.add(2, [Text.of(`Processing Grade: `).white(),Text.of(`F`).gray()])
						if (!tooltip.ctrl) {
							  text.add(3, [Text.of('Hold ').gold(), Text.of('Ctrl ').green(), Text.of('to see processing information.').gold()])
						} else {
							text.add(3, [Text.of(`Next processing step:`).white(), Text.of(` Crushing Wheel`).green()])
							if (item.tier <= 1) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Furnace`).yellow()])
							} else if (item.tier > 1) {
								text.add(4, [Text.of(`Must be processed further to be smelted`).red()])
							}
						}
					})
				} else if (part == 'crushed') { // tier 1 processed
					if (mod == 'create') {
						if (Item.of(`${mod}:${part}_${item.material}_ore`) != null)
					tooltip.addAdvanced(`${mod}:${part}_${item.material}_ore`, (items, advanced, text) => {
						text.add(1, [Text.of(`Metal Tier: `).white(),Text.of(`${item.tier}`).gold()])
						text.add(2, [Text.of(`Processing Grade: `).white(),Text.of(`E`).white()])
						if (!tooltip.ctrl) {
							  text.add(3, [Text.of('Hold ').gold(), Text.of('Ctrl ').green(), Text.of('to see processing information.').gold()])
						} else {
							text.add(3, [Text.of(`Next processing step:`).white(), Text.of(` Flotation`).green()])
							if (item.tier <= 1) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Furnace`).yellow()])
							} else if (item.tier == 2) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Foundry`).yellow()])
							}  else if (item.tier == 3) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Arc Furnace`).yellow()])
							}  else if (item.tier > 3) {
								text.add(4, [Text.of(`Must be processed further to be smelted.`).red()])
							}
						}
					})
					} else  {
						if (Item.of(`${mod}:${part}_${item.material}`) != null)
						tooltip.addAdvanced(`${mod}:${part}_${item.material}`, (items, advanced, text) => {
							text.add(1, [Text.of(`Metal Tier: `).white(),Text.of(`${item.tier}`).gold()])
							text.add(2, [Text.of(`Processing Grade: `).white(),Text.of(`E`).white()])
							if (!tooltip.ctrl) {
								  text.add(3, [Text.of('Hold ').gold(), Text.of('Ctrl ').green(), Text.of('to see processing information.').gold()])
							} else {
								text.add(3, [Text.of(`Next processing step:`).white(), Text.of(` Flotation`).green()])
								if (item.tier <= 1) {
									text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Furnace`).yellow()])
								} else if (item.tier == 2) {
									text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Foundry`).yellow()])
								}  else if (item.tier == 3) {
									text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Arc Furnace`).yellow()])
								}  else if (item.tier > 3) {
									text.add(4, [Text.of(`Must be processed further to be smelted.`).red()])
								}
							}
						})
					} 
				} else if (part == 'chunk') { // tier 2 processed
					if (Item.of(`${mod}:${item.material}_${part}`) != null)
					tooltip.addAdvanced(`${mod}:${item.material}_${part}`, (items, advanced, text) => {
						text.add(1, [Text.of(`Metal Tier: `).white(),Text.of(`${item.tier}`).gold()])
						text.add(2, [Text.of(`Processing Grade: `).white(),Text.of(`D`).green()])
						if (!tooltip.ctrl) {
							  text.add(3, [Text.of('Hold ').gold(), Text.of('Ctrl ').green(), Text.of('to see processing information.').gold()])
						} else {
							text.add(3, [Text.of(`Next processing step:`).white(), Text.of(` Leaching`).green()])
							if (item.tier <= 1) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Furnace`).yellow()])
							}  else if (item.tier == 2) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Foundry`).yellow()])
							}  else if (item.tier == 3) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Arc Furnace`).yellow()])
							}  else if (item.tier == 4) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace`).yellow()])
							}  else if (item.tier == 5) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace 2000k`).yellow()])
							}  else if (item.tier > 5) {
								text.add(4, [Text.of(`Must be processed further to be smelted.`).red()])
							}
						}
					})
				} else if (part == 'leached') { // tier 3 processed
					if (Item.of(`${mod}:${part}_${item.material}`) != null)
					tooltip.addAdvanced(`${mod}:${part}_${item.material}`, (items, advanced, text) => {
						text.add(1, [Text.of(`Metal Tier: `).white(),Text.of(`${item.tier}`).gold()])
						text.add(2, [Text.of(`Processing Grade: `).white(),Text.of(`C`).green()])
						if (!tooltip.ctrl) {
							  text.add(3, [Text.of('Hold ').gold(), Text.of('Ctrl ').green(), Text.of('to see processing information.').gold()])
						} else {
							text.add(3, [Text.of(`Next processing step:`).white(), Text.of(` Depositing`).green()])
							if (item.tier <= 1) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Furnace`).yellow()])
							}  else if (item.tier == 2) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Foundry`).yellow()])
							}  else if (item.tier == 3) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Arc Furnace`).yellow()])
							}  else if (item.tier == 4) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace`).yellow()])
							}  else if (item.tier == 5) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace 2000k`).yellow()])
							}  else if (item.tier == 6) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace 3000k`).yellow()])
							}  else if (item.tier > 6) {
								text.add(4, [Text.of(`Must be processed further to be smelted.`).red()])
							}
						}
					})
				} else if (part == 'deposit') { // tier 4 processed
					if (Item.of(`${mod}:${item.material}_${part}`) != null)
					tooltip.addAdvanced(`${mod}:${item.material}_${part}`, (items, advanced, text) => {
						text.add(1, [Text.of(`Metal Tier: `).white(),Text.of(`${item.tier}`).gold()])
						text.add(2, [Text.of(`Processing Grade: `).white(),Text.of(`B`).green()])
						if (!tooltip.ctrl) {
							  text.add(3, [Text.of('Hold ').gold(), Text.of('Ctrl ').green(), Text.of('to see processing information.').gold()])
						} else {
							text.add(3, [Text.of(`Next processing step:`).white(), Text.of(` Crystalizing`).green()])
							if (item.tier <= 1) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Furnace`).yellow()])
							}  else if (item.tier == 2) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Foundry`).yellow()])
							}  else if (item.tier == 3) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Arc Furnace`).yellow()])
							}  else if (item.tier == 4) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace`).yellow()])
							}  else if (item.tier == 5) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace 2000k`).yellow()])
							}  else if (item.tier == 6) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace 3000k`).yellow()])
							}  else if (item.tier == 7) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace 4000k`).yellow()])
							}  else if (item.tier > 7) {
								text.add(4, [Text.of(`Must be processed further to be smelted.`).red()])
							}
						}
					})
				} else if (part == 'crystal') { // tier 5 processed
					if (Item.of(`${mod}:${item.material}_${part}`) != null)
					tooltip.addAdvanced(`${mod}:${item.material}_${part}`, (items, advanced, text) => {
						text.add(1, [Text.of(`Metal Tier: `).white(),Text.of(`${item.tier}`).gold()])
						text.add(2, [Text.of(`Processing Grade: `).white(),Text.of(`A`).green()])
						if (!tooltip.ctrl) {
							  text.add(3, [Text.of('Hold ').gold(), Text.of('Ctrl ').green(), Text.of('to see processing information.').gold()])
						} else {
							text.add(3, [Text.of(`Next processing step:`).white(), Text.of(` MAX`).green()])
							if (item.tier <= 1) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Furnace`).yellow()])
							}  else if (item.tier == 2) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Foundry`).yellow()])
							}  else if (item.tier == 3) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Arc Furnace`).yellow()])
							}  else if (item.tier == 4) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace`).yellow()])
							}  else if (item.tier == 5) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace 2000k`).yellow()])
							}  else if (item.tier == 6) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace 3000k`).yellow()])
							}  else if (item.tier == 7) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace 4000k`).yellow()])
							}  else if (item.tier == 8) {
								text.add(4, [Text.of(`Can smelted in:`).white(), Text.of(` Blast Furnace 5000k`).yellow()])
							}  else if (item.tier > 8) {
								text.add(4, [Text.of(`Must be processed further to be smelted.`).red()])
							}
						}
					})
				}
			})
		})
		} else if (item.type == 'alloy') {
			mods.forEach((mod) => {
				parts.forEach((part) => {
					if (mod == 'pneumaticcraft' || mod == 'mekanism') {
						if (Item.of(`${mod}:${part}_${item.material}`) != null)
						tooltip.add(`${mod}:${part}_${item.material}`, `Tier `+item.tier+` Alloy`)
					} else if (mod == 'naturesaura') {
						if (Item.of(`${mod}:${item.material}`) != null)
						tooltip.add(`${mod}:${item.material}`, `Tier `+item.tier+` Alloy`)
					} else {
						if (Item.of(`${mod}:${item.material}_${part}`) != null)
						tooltip.add(`${mod}:${item.material}_${part}`, `Tier `+item.tier+` Alloy`)
					}
				})
			})
		} else if (item.type == 'rare_metal') {
			mods.forEach((mod) => {
				parts.forEach((part) => {
					if (mod == 'pneumaticcraft' || mod == 'mekanism') {
						if (Item.of(`${mod}:${part}_${item.material}`) != null)
						tooltip.add(`${mod}:${part}_${item.material}`, `Tier `+item.tier+` Rare Metal`)
					} else if (mod == 'naturesaura') {
						if (Item.of(`${mod}:${item.material}`) != null)
						tooltip.add(`${mod}:${item.material}`, `Tier `+item.tier+` Rare Metal`)
					} else {
						if (Item.of(`${mod}:${item.material}_${part}`) != null)
						tooltip.add(`${mod}:${item.material}_${part}`, `Tier `+item.tier+` Rare Metal`)
					}
				})
			})
		}
	})
});