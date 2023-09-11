ServerEvents.recipes(event => {
  event.remove({ id: 'buildinggadgets2:gadget_building' })
  event.shaped('buildinggadgets2:gadget_building', ['IRI', 'DLD', 'IAI'], {
    I: '#forge:ingots/iron',
    R: '#forge:dusts/redstone',
    L: '#forge:gems/lapis',
    D: '#forge:gems/diamond',
    A: '#forge:nuggets/allthemodium'
  })
})
