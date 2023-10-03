const mapGTMachineIdToTaskId = {
	"gtceu:electric_blast_furnace": "3F5D1730023562C7",
	"gtceu:cleanroom": "3DA6D564BBFB1F50"
}

const $MetaMachine = Java.loadClass('com.gregtechceu.gtceu.api.blockentity.MetaMachineBlockEntity')
const $MultiController = Java.loadClass('com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiController')
const $CompoundTag = Java.loadClass('net.minecraft.nbt.CompoundTag')

ClientEvents.tick(event => {
    if (Client.hitResult != null && Client.hitResult.getType() == 'BLOCK') {
        let block = event.level.getBlock(Client.hitResult.getBlockPos())
        if (block && block.id.contains('gtceu')) {
            let blockEntity = block.entity
            // Multiblock handler
            if (blockEntity && blockEntity instanceof $MetaMachine) {
                // Multiblock is complete
                if (blockEntity.metaMachine instanceof $MultiController) {
                    if (blockEntity.metaMachine.isFormed()) {
                        let taskString = mapGTMachineIdToTaskId[block.id]
                        if (taskString) {
                            let tag = new $CompoundTag()
                            tag.putString('task', taskString)
                            event.player.sendData('customTask', tag)
                        }
                    }
                }
            }
        }
    }
})

NetworkEvents.dataReceived('customTask', event => {
    const {entity, data, level} = event
    let taskString = data.task
    let task = FTBQuests.getObject(level, taskString)
    let playerQuestData = FTBQuests.getData(entity)
    if (task && playerQuestData && !playerQuestData.isCompleted(task) && playerQuestData.canStartTasks(task.quest)) {
        playerQuestData.addProgress(task, 1)
    }
})