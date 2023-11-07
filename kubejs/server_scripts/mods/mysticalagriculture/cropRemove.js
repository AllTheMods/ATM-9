let cropRemove = [
    'tungsten',
    'titanium',
    'invar',
    'steel',
    'iridium'
]

ServerEvents.recipes(event => {
    cropRemove.forEach(id => {
        event.remove({id:`mysticalagriculture:seed/infusion/${id}`})
        event.remove({id:`mysticalagriculture:seed/reprocessor/${id}`})
        event.remove({id:`mysticalagriculture:essence/common/${id}_ingot`})
        event.remove({id:`botanypots:mysticalagriculture/crop/${id}`})
    })
})