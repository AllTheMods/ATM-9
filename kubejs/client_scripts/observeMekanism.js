const $TileEntityMultiblock = Java.loadClass('mekanism.common.tile.prefab.TileEntityMultiblock')
const $TileEntityMekanism = Java.loadClass('mekanism.common.tile.base.TileEntityMekanism')
//const $CompoundTag = Java.loadClass('net.minecraft.nbt.CompoundTag')

const mapMekanismMultiblockToTaskID = {
    "dynamicTank":"",
    "inductionMatrix":"621A4E28BD50F96C",
    "thermoelectricBoiler":"",
    "evaporation":"",
    "sps":"2A13A1B1A85C2981",
    "industrialTurbine":"71DB5E5857993B3F",
    "fissionReactor":"34D8628732B36EDF",
    "fusionReactor": "0B31B1E6089BB33E"
}

const mapMekanismGasToTaskID = {
    "mekanism:fissile_fuel": "4E04F8F091D18EA4",
	"mekanism:uranium_oxide": "29D6CA9A77ACACC6",
	"mekanism:sulfuric_acid": "66C97246C3EEFB7C",
	"mekanism:hydrofluoric_acid": "510CE57C709D5A44",
	"mekanism:uranium_hexafluoride": "05A215BE7EE2F35D"
	
}

ClientEvents.tick(event => {
    if (Client.hitResult != null && Client.hitResult.getType() == 'BLOCK') {
        let block = event.level.getBlock(Client.hitResult.getBlockPos())
        if (block.id.contains('mekanism')) {
            let blockEntity = block.entity
            // Multiblock handler
            if (blockEntity && blockEntity instanceof $TileEntityMultiblock) {
                // Multiblock is complete
                if (blockEntity.getMultiblock().isFormed()) {
                    let manager = blockEntity.getManager()
                    if (manager) {
                        let managerName = manager.getName()
                        if (managerName) {
                            let taskString = mapMekanismMultiblockToTaskID[managerName]
                            if (taskString) {
                            let tag = new $CompoundTag
                            tag.putString('task', taskString)
                            event.player.sendData('customTask', tag)
                            }
                        }
                    }
                }
            }
            // Capability TE's
            if (blockEntity instanceof $TileEntityMekanism) {
                // Handles Gas
                if (blockEntity.canHandleGas()) {
                    let tanks = blockEntity.getGasTanks(null)
                    tanks.forEach(tank => {
                        let gas = tank.getStack().getTypeRegistryName()
                        let taskString = mapMekanismGasToTaskID[gas.toString()]
                        if (taskString) {
                            let tag = new $CompoundTag
                            tag.putString('task', taskString)
                            event.player.sendData('customTask', tag)
                        }
                    })
                }
            }
        }
    }
})

NetworkEvents.dataReceived('customTask', event => {
    //const {entity, data, level} = event
    //let taskString = data.task
    //let task = FTBQuests.getObject(level, taskString)
    //let playerQuestData = FTBQuests.getData(entity)
    //if (task && playerQuestData && !playerQuestData.isCompleted(task) && playerQuestData.canStartTasks(task.quest)) {
    //    playerQuestData.addProgress(task, 1)
    //}
})