
GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
  GTWorldGenLayers.STONE.levels = [new ResourceLocation("minecraft", "overworld"), new ResourceLocation("allthemodium", "mining")];
  GTWorldGenLayers.DEEPSLATE.levels = [new ResourceLocation("minecraft", "overworld"), new ResourceLocation("allthemodium", "mining")];
  GTWorldGenLayers.NETHERRACK.levels = [new ResourceLocation("minecraft", "the_nether"), new ResourceLocation("allthemodium", "mining")];
  GTWorldGenLayers.ENDSTONE.levels = [new ResourceLocation("minecraft", "the_end"), new ResourceLocation("allthemodium", "mining")];
})