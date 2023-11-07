StartupEvents.registry('item', event => {
    // G*
    event.create('star_housing').displayName('Robust Star Housing')
    event.create('absolute_reaction_plating').displayName('Absolute Reaction Plating')
    event.create('star_compression_module').displayName('Star Compression Module')
    event.create('superthermal_transference_coil').displayName('Superthermal Transference Coil')
    event.create('cable_of_hyperconductivity').displayName('Cable of Hyperconductivity')
    event.create('greg_star_shard').displayName('Greg Star Shard').glow(true)

    // Micro Universe Orb
    event.create('micro_universe_catalyst')
        .displayName('Micro Universe Catalyst')
        .tooltip({translate: 'item.kubejs.micro_universe_catalyst.tooltip', italic: true, color: 'red'})
    event.create('micro_universe_drill_ship')
        .displayName('Micro Universe Drill Ship')
})