ServerEvents.recipes(event => {
 event.recipes.gtceu.assembly_line('superheated_pyrolyzing_oven')
     .itemInputs('6x #gtceu:circuits/luv',
      '3x gtceu:luv_electric_piston',
      '2x gtceu:luv_electric_pump',
      '1x gtceu:luv_machine_hull',
      '4x gtceu:osmiridum_gear',
   '2x gtceu:niobium_nitride_quadruple_cable',
     )
     .inputFluids('gtceu:soldering_alloy 1152','gtceu:vanadium_gallium')
     .itemOutputs('gtceu:superheated_pyrolyzing_oven')
     .duration(750)
     .EUt(GTValues.VA[GTValues.ZPM]/2)
     .stationResearch(b => b.researchStack(Item.of('gtceu:pyrolyse_oven')).EUt(GTValues.VA[GTValues.ZPM]/2).CWUt(16, 32000))
  event.recipes.gtceu.assembly_line('advanced_cracking_unit')
     .itemInputs('2x #gtceu:circuits/luv',
      '8x gtceu:hssg_coil_block',
      '3x gtceu:luv_electric_pump',
      '1x gtceu:luv_machine_hull',
      '8x gtceu:tungsten_carbide_huge_fluid_pipe',
   '4x gtceu:indium_tin_barium_titanium_cuprate_double_wire',
     )
     .inputFluids('gtceu:soldering_alloy 1152','gtceu:light_fuel 6000')
     .itemOutputs('gtceu:advanced_cracking_unit')
     .duration(600)
     .EUt(GTValues.VA[GTValues.ZPM]/2)
     .stationResearch(b => b.researchStack(Item.of('gtceu:cracker')).EUt(30720).CWUt(20, 32000))
 event.recipes.gtceu.assembly_line('highly_reactive_molten_blast_smeltery')
     .itemInputs('16x #gtceu:circuits/uhv',
      '8x gtceu:uv_field_gen',
      '4x gtceu:blacklight',
      '2x gtceu:tritanium_coil_block',
      '16x gtceu:high_temperature_smelting_casing',
      '1x gtceu:auto_maintenance_hatch',
   '14x gtceu:ruthenium_trinium_americium_neutronate_quadruple_wire',
   '64x gtceu:fine_americium_wire',
   '12x gtceu:neutronium_frame',
     )
     .inputFluids('gtceu:soldering_alloy 1152','gtceu:tritanium 1152', 'gtceu:naquadria 5000')
     .itemOutputs('gtceu:highly_reactive_molten_blast_smeltery')
     .duration(600)
     .EUt(GTValues.VA[GTValues.UHV]/2)
     .stationResearch(b => b.researchStack(Item.of('gtceu:alloy_blast_smelter')).EUt(2097152).CWUt(144, 32000))

     })
