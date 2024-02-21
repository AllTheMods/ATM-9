StartupEvents.registry('block', event => {
    event.create("gregstar_block")
    .displayName("Greg-Star Infused Block")
    .hardness(1.0)
    .resistance(100.0)
})

StartupEvents.registry('fluid', event => {
    event.create('gregstar_fluid')
    .displayName('Liquid GregStar')
    .noBlock()
    .rarity('epic')
    .thickTexture(0x000066)
    .noBucket()
})