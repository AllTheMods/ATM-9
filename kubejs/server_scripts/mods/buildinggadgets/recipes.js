ServerEvents.recipes(event => {
  event.remove({ id: 'buildinggadgets:gadget_exchanging' })
  event.shaped('buildinggadgets:gadget_exchanging', ['IRI', 'DLD', 'IAI'], {
    I: '#forge:ingots/iron',
    R: '#forge:dusts/redstone',
    L: '#forge:gems/lapis',
    D: '#forge:gems/diamond',
    A: '#forge:nuggets/allthemodium'
  }).id('kubejs:buildinggadgets/gadget_exchanging')
})
