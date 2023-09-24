ServerEvents.recipes(event => {
  event.custom({
    "type": "industrialforegoing:fluid_extractor",
    "input": {
      "item": "integrateddynamics:menril_log"
    },
    "result": "integrateddynamics:menril_log_stripped",
    "breakChance": 0.010,
    "output": "{FluidName:\"integrateddynamics:menril_resin\",Amount:2}",
    "defaultRecipe": false
  }).id('kubejs:industrialforegoing/fluid_extractor/menril')
})
