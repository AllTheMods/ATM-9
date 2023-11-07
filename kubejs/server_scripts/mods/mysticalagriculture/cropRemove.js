// priority: 10

let cropRemove = [
    'steel',
    'tungsten',
    'titanium',
    'invar',
    'iridium',
    "bronze",
    "brass",
    "certus_quartz",
    "fluix",
    "constantan",
    "cyanite",
    "yellorium",
    "graphite",
    "rubber",
    "grains_of_infinity",
    "soularium",
    "dark_steel",
    "pulsating_alloy",
    "energetic_alloy",
]

ServerEvents.recipes(event => {
    cropRemove.forEach(id => {
        event.remove({id:`mysticalagriculture:seed/infusion/${id}`})
        event.remove({id:`mysticalagriculture:seed/reprocessor/${id}`})
        event.remove({id:`mysticalagriculture:essence/common/${id}_ingot`})
        event.remove({id:`botanypots:mysticalagriculture/crop/${id}`})
    })
})