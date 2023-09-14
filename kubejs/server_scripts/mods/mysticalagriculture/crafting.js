ServerEvents.recipes(event => {
  // essence crafting for custom seeds
  function essenceCircle(result, essenceType) {
    event.shaped(result, ['aaa', 'a a', 'aaa'], { a: `mysticalagriculture:${essenceType}_essence` }).id(`kubejs:mysticalagriculture/${essenceType}_essence_crafting`)
  }
  essenceCircle('allthemodium:allthemodium_nugget', 'allthemodium')
  essenceCircle('allthemodium:vibranium_nugget', 'vibranium')
  essenceCircle('allthemodium:unobtainium_nugget', 'unobtainium')
  essenceCircle('6x silentgear:azure_silver_ingot', 'azure_silver')
  essenceCircle('6x silentgear:crimson_iron_ingot', 'crimson_iron')

  //magical soil crafting
  event.custom({
    type: 'mysticalagriculture:infusion',
    input: { item: 'mysticalagradditions:insanium_farmland' },
    ingredients: [
      { item: 'mysticalagradditions:dragon_scale' },
      { item: 'mysticalagradditions:insanium_block' },
      { item: 'mysticalagradditions:dragon_scale' },
      { item: 'mysticalagradditions:insanium_block' },
      { item: 'mysticalagradditions:dragon_scale' },
      { item: 'mysticalagradditions:insanium_block' },
      { item: 'mysticalagradditions:dragon_scale' },
      { item: 'mysticalagradditions:insanium_block' }
    ],
    result: { item: 'kubejs:magical_soil' }
  })
/*
  //MA EXP droplets to fluid EXP
  event.custom({
    type: "thermal:centrifuge",
    ingredient: {
      item: "mysticalagriculture:experience_droplet"
    },
    result: [
      {
        fluid: "cofh_core:experience",
        amount: 250
      }
    ],
    energy: 400
  })
*/
  //remove gaia crux
  event.remove({ id: "mysticalagradditions:gaia_spirit_crux" })
})
