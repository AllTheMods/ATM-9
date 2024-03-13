WorldgenEvents.remove(event => {
  event.removeOres(props => {
    props.worldgenLayer = 'underground_ores';
    props.blocks = [
      "railcraft:lead_ore",
      "railcraft:deepslate_lead_ore",
      "railcraft:nickel_ore",
      "railcraft:deepslate_nickel_ore",
      "railcraft:tin_ore",
      "railcraft:deepslate_tin_ore",
      "railcraft:silver_ore",
      "railcraft:deepslate_silver_ore",
      "railcraft:zinc_ore",
      "railcraft:deepslate_zinc_ore",
      "create:zinc_ore",
      "create:deepslate_zinc_ore",
      "occultism:silver_ore",
      "occultism:silver_ore_deepslate",
      "bigreactors:yellorite_ore",
      "eidolon:lead_ore",
      "eidolon:deep_lead_ore",
      "eidolon:silver_ore",
      "eidolon:deep_silver_ore",
      "immersiveengineering:ore_aluminum",
      "immersiveengineering:deepslate_ore_aluminum"
    ]
  })
})
