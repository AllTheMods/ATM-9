StartupEvents.registry('block', event => {
    event.create("gregstar_block")              //added the gregstar_block to the assets, I'm quite proud of it ain't the best but it's my first ever animated block
    .displayName("Greg-Star Infused Block")
    .hardness(1.0)
    .resistance(100.0)
})

StartupEvents.registry('fluid', event => {
    event.create('gregstar_fluid')
    .displayName('Liquid GregStar')
    .noBlock()
    .rarity('epic')
    .thickTexture(0x000066)                     // A bit "disappointed" in the texture for this but didn't have a clear idea of what I wanted so I made it dark blue
    .noBucket()
})