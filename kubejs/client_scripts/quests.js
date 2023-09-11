const mapGTMachineIdToTaskId = {
    /* Replace with block id -> task id mapping */
}

const mapGTFluidToTaskId = {
    /* Replace with fluid id -> task id mapping */
	"gtceu:rubber": "4B25F32D88057B65"
}

const $MetaMachine = Java.loadClass('com.gregtechceu.gtceu.api.blockentity.MetaMachineBlockEntity')
const $MultiController = Java.loadClass('com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiController')
const $WorkableMachine = Java.loadClass('com.gregtechceu.gtceu.api.machine.WorkableTieredMachine')
const $CompoundTag = Java.loadClass('net.minecraft.nbt.CompoundTag')

ClientEvents.tick(event => {
    if (Client.hitResult != null && Client.hitResult.getType() == 'BLOCK') {
        let block = event.level.getBlock(Client.hitResult.getBlockPos())
        if (block && block.id.contains('gtceu')) {
			//console.info('Looking at a GT thing!')
            let blockEntity = block.entity
            // Multiblock handler
            if (blockEntity && blockEntity instanceof $MetaMachine) {
				//console.info('This ' + blockEntity + ' is a MetaMachine')
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
                // Capability machines
                else if (blockEntity.metaMachine instanceof $WorkableMachine) {
					//console.info('We have got ourselves a WorkableMachine')
                    // let tanks = blockEntity.metaMachine.importFluids.storages;
					let tanks = blockEntity.metaMachine.importFluids.storages;
                    for (let i = 0; i < tanks.length; ++i) {
                        let fluid = blockEntity.metaMachine.importFluids.getFluidInTank(i)
                        let fluidId = tank.fluid.rawFluid.builtInRegistryHolder().key().location()
                        let taskString = mapGTFluidToTaskId[fluid.toString()]
						console.info(fluidId.toString() + ' is fluid ' + i + ', corresponding to ' + taskString)
						console.info('{' + fluid.displayName.string + ' ' + fluid.amount + '} is tank.fluid')
						console.info('tank.fluid is empty: ' + fluid.isEmpty())
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