const mapGTMachineIdToTaskId = {
	"gtceu:electric_blast_furnace": "3F5D1730023562C7",
	"gtceu:cleanroom": "3DA6D564BBFB1F50",
	"gtceu:distillation_tower": "6DE94C2C7F4B9AC7",
	"gtceu:pyrolyse_oven": "5FAE011B2417FAAA",
	"gtceu:cracker": "04E3568175E66B6D",
	"gtceu:vacuum_freezer": "7536DA5A948671F2",
	"gtceu:large_chemical_reactor": "1038F300D9F8EF3C",
	"gtceu:iv_processing_array": "188A83D9504A8470"
}

const $MetaMachine = Java.tryLoadClass('com.gregtechceu.gtceu.api.blockentity.MetaMachineBlockEntity')
const $MultiController = Java.tryLoadClass('com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiController')
const $CompoundTag = Java.tryLoadClass('net.minecraft.nbt.CompoundTag')

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
    //const {entity, data, level} = event
    //let taskString = data.task
    //let task = FTBQuests.getObject(level, taskString)
    //let playerQuestData = FTBQuests.getData(entity)
    //if (task && playerQuestData && !playerQuestData.isCompleted(task) && playerQuestData.canStartTasks(task.quest)) {
    //    playerQuestData.addProgress(task, 1)
    //}
})