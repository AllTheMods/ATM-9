ServerEvents.recipes( event => {
    event.remove('extradisks:disk/shaped/infinite_storage_disk')
    event.remove('extradisks:blocks/infinite_storage_block')
    event.remove('extradisks:part/infinite_storage_part')
    event.remove('extradisks:disk/shaped/infinite_fluid_storage_disk')
    event.remove('extradisks:part/infinite_fluid_storage_part')
    event.remove('extradisks:blocks/infinite_fluid_storage_block')
})