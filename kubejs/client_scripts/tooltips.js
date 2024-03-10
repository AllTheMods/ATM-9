// priority: 0
const circuits = [
  //ULV
      {
          id: 'gtceu:vacuum_tube',
          text: 'Your first ULV circuit.',
          tier: 'ULV-Tier Circuit',
          colour: 0xFFFFFF
      },
      {
          id: 'gtceu:nand_chip',
          text: 'Your final ULV circuit.',
          tier: 'ULV-Tier Circuit',
          colour: 0xFFFFFF
      },
  //LV
      {
          id: 'gtceu:basic_electronic_circuit',
          text: 'Your first LV circuit.',
          tier: 'LV-Tier Circuit',
          colour: 0xFFFFFF
      },
      {
          id: 'gtceu:basic_integrated_circuit',
          text: 'Your second LV circuit.',
          tier: 'LV-Tier Circuit',
          colour: 0xFFFFFF
      },
      {
          id: 'gtceu:microchip_processor',
          text: 'Your final LV circuit.',
          tier: 'LV-Tier Circuit',
          colour: 0xFFFFFF
      },
  //MV
      {
          id: 'gtceu:good_electronic_circuit',
          text: 'Your first MV circuit.',
          tier: 'MV-Tier Circuit',
          colour: 0x55FFFF
      },
      {
          id: 'gtceu:good_integrated_circuit',
          text: 'Your second MV circuit.',
          tier: 'MV-Tier Circuit',
          colour: 0x55FFFF
      },
      {
          id: 'gtceu:micro_processor',
          text: 'Your final MV circuit.',
          tier: 'MV-Tier Circuit',
          colour: 0x55FFFF
      },
  //HV
      {
          id: 'gtceu:advanced_integrated_circuit',
          text: 'Your first HV circuit.',
          tier: 'HV-Tier Circuit',
          colour: 0xFFAA00
      },
      {
          id: 'gtceu:micro_processor_assembly',
          text: 'Your second HV circuit.',
          tier: 'HV-Tier Circuit',
          colour: 0xFFAA00
      },
      {
          id: 'gtceu:nano_processor',
          text: 'Your final HV circuit.',
          tier: 'HV-Tier Circuit',
          colour: 0xFFAA00
      },
  //EV
      {
          id: 'gtceu:micro_processor_computer',
          text: 'Your first EV circuit.',
          tier: 'EV-Tier Circuit',
          colour: 0xAA00AA
      },
      {
          id: 'gtceu:nano_processor_assembly',
          text: 'Your second EV circuit.',
          tier: 'EV-Tier Circuit',
          colour: 0xAA00AA
      },
      {
          id: 'gtceu:quantum_processor',
          text: 'Your final EV circuit.',
          tier: 'EV-Tier Circuit',
          colour: 0xAA00AA
      },
  //IV
      {
          id: 'gtceu:micro_processor_mainframe',
          text: 'Your first IV circuit.',
          tier: 'IV-Tier Circuit',
          colour: 0x0000AA
      },
      {
          id: 'gtceu:nano_processor_computer',
          text: 'Your second IV circuit.',
          tier: 'IV-Tier Circuit',
          colour: 0x0000AA
      },
      {
          id: 'gtceu:quantum_processor_assembly',
          text: 'Your third IV circuit.',
          tier: 'IV-Tier Circuit',
          colour: 0x0000AA
      },
      {
          id: 'gtceu:crystal_processor',
          text: 'Your final IV circuit.',
          tier: 'IV-Tier Circuit',
          colour: 0x0000AA
      },
  //LuV
      {
          id: 'gtceu:nano_processor_mainframe',
          text: 'Your first LuV circuit.',
          tier: 'LuV-Tier Circuit',
          colour: 0xFF55FF
      },
      {
          id: 'gtceu:quantum_processor_computer',
          text: 'Your second LuV circuit.',
          tier: 'LuV-Tier Circuit',
          colour: 0xFF55FF
      },
      {
          id: 'gtceu:crystal_processor_assembly',
          text: 'Your third LuV circuit.',
          tier: 'LuV-Tier Circuit',
          colour: 0xFF55FF
      },
      {
          id: 'gtceu:wetware_processor',
          text: 'Your final LuV circuit.',
          tier: 'LuV-Tier Circuit',
          colour: 0xFF55FF
      },
  //ZPM
      {
          id: 'gtceu:quantum_processor_mainframe',
          text: 'Your first ZPM circuit.',
          tier: 'ZPM-Tier Circuit',
          colour: 0xFF5555
      },
      {
          id: 'gtceu:crystal_processor_computer',
          text: 'Your second ZPM circuit.',
          tier: 'ZPM-Tier Circuit',
          colour: 0xFF5555
      },
      {
          id: 'gtceu:wetware_processor_assembly',
          text: 'Your final ZPM circuit.',
          tier: 'ZPM-Tier Circuit',
          colour: 0xFF5555
      },
  //UV
      {
          id: 'gtceu:crystal_processor_mainframe',
          text: 'Your first UV circuit.',
          tier: 'UV-Tier Circuit',
          colour: 0x00AAAA
      },
      {
          id: 'gtceu:wetware_processor_computer',
          text: 'Your final UV circuit.',
          tier: 'UV-Tier Circuit',
          colour: 0x00AAAA
      },
  //UHV
      {
          id: 'gtceu:wetware_processor_mainframe',
          text: 'Your first and only UHV circuit.',
          tier: 'UHV-Tier Circuit',
          colour: 0xAA0000
      }
]

ItemEvents.tooltip(event => {
  // Re-add Chemlib info to unified materials
  let chemlibTooltips = JsonIO.read('kubejs/client_scripts/chemlibCompat.json')
  chemlibTooltips.forEach((item, tooltips) => {
    event.addAdvanced(item, (stack, advanced, text) => {
      text.add(1, tooltips[0])
      if (tooltips.length > 1) {
        text.add(2, tooltips[1])
      }
    })
  })
  
  //AllTheModium
  event.add('allthemodium:teleport_pad',[
    Text.of('Place the pad down in the specified Dimension'),
    Text.of('Sneak Right Click with both hands empty to teleport'),
    Text.of('§aOverworld TO Mining Dimension').red(),
    Text.of('§cThe Nether TO The Other').red(),
    Text.of('§bThe End TO The Beyond')
  ])
  
  //Mekanism
  event.add('mekanism:creative_energy_cube', [ [Text.of('Needs to be Energized').darkPurple()],])
  
  // Mob Grinding Utils
  event.addAdvanced('mob_grinding_utils:rotten_egg', (stack, advanced, text) => {
    text.add(3, Text.of("Created from Cursed Chicken Feed").yellow())
  })
  event.addAdvanced('mob_grinding_utils:golden_egg', (stack, advanced, text) => {
    text.add(3, Text.of("Created from Nutritious Chicken Feed").yellow())
  })
  
  // RS Infinity Booster
  event.add('rsinfinitybooster:infinity_card', [
    Text.of('Infinite range for RS wireless'),
    Text.of('Only works in the same dimension')
  ])
  event.add('rsinfinitybooster:dimension_card', [
    Text.of('Infinite range for RS wireless'),
    Text.of('Works across dimensions')
  ])

  // AE2 Infinity Booster
  event.add('aeinfinitybooster:infinity_card', [
    Text.of('Infinite range for AE2 wireless'),
    Text.of('Only works in the same dimension')
  ])
  event.add('aeinfinitybooster:dimension_card', [
    Text.of('Infinite range for AE2 wireless'),
    Text.of('Works across dimensions')
  ])

  // Extradisks
  event.add('extradisks:infinite_storage_disk', [Text.of('Recipe disabled').red()])
  event.add('extradisks:infinite_storage_block', [Text.of('Recipe disabled').red()])
  event.add('extradisks:infinite_storage_part', [Text.of('Recipe disabled').red()])
  event.add('extradisks:infinite_fluid_storage_disk', [Text.of('Recipe disabled').red()])
  event.add('extradisks:infinite_fluid_storage_block', [Text.of('Recipe disabled').red()])
  event.add('extradisks:infinite_fluid_storage_part', [Text.of('Recipe disabled').red()])

  //pipes
  event.add('pipez:item_pipe', [
    [Text.of('Default:'), ' ', Text.of('4'), ' ', Text.of('items/20t')],
    [Text.of('Basic:'), ' ', Text.of('8'), ' ', Text.of('items/15t')],
    [Text.of('Improved:').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('items/10t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('items/5t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('items/t').darkGray()]
  ])
  event.add('pipez:fluid_pipe', [
    [Text.of('Default:'), ' ', Text.of('50'), ' ', Text.of('mB/t')],
    [Text.of('Basic:'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
    [Text.of('Improved:').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
  ])
  event.add('pipez:gas_pipe', [
    [Text.of('Default:'), ' ', Text.of('200'), ' ', Text.of('mB/t')],
    [Text.of('Basic:'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
    [Text.of('Improved:').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()]
  ])
  event.add('pipez:energy_pipe', [
    [Text.of('Default:'), ' ', Text.of('256'), ' ', Text.of('FE/t')],
    [Text.of('Basic:'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
    [Text.of('Improved:').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
    [Text.of('Advanced:').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
    [Text.of('Ultimate:').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()]
  ])

  //upgrades
  event.add('pipez:basic_upgrade', [
    [Text.of('Item:'), ' ', Text.of('8'), ' ', Text.of('items/15t')],
    [Text.of('Fluid:'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
    [Text.of('Gas:'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
    [Text.of('Energy:'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
  ])
  event.add('pipez:improved_upgrade', [
    [Text.of('Item:').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('items/10t').gold()],
    [Text.of('Fluid:').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Gas:').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('Energy:').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
  ])
  event.add('pipez:advanced_upgrade', [
    [Text.of('Item:').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('items/5t').darkAqua()],
    [Text.of('Fluid:').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Gas:').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('Energy:').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
  ])
  event.add('pipez:ultimate_upgrade', [
    [Text.of('Item:').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('items/t').darkGray()],
    [Text.of('Fluid:').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('Gas:').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('Energy:').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()],
  ])
  
  //GTCEu
    event.add('gtceu:advanced_large_chemical_reactor',
      [
        Text.of('ALCR a LCR that can parallelize.')
      ]
    )

    circuits.forEach((circuit) => {
      event.add(circuit.id, 
              [
                  Text.of(circuit.text),
                  Text.of(circuit.tier).color(circuit.colour)
              ]
          )
      }
    )
})
