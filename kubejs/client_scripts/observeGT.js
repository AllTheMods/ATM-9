const mapGTMachineIdToTaskId = {
    /* Replace with block id -> task id mapping */
	"gtceu:electric_blast_furnace": "3F5D1730023562C7",
	"gtceu:cleanroom": "3DA6D564BBFB1F50"
}

/*const mapGTFluidToTaskId = {
    // fluid id -> task id mapping
	"gtceu:rubber": "4B25F32D88057B65"
}*/

const $MetaMachine = Java.loadClass('com.gregtechceu.gtceu.api.blockentity.MetaMachineBlockEntity')
const $MultiController = Java.loadClass('com.gregtechceu.gtceu.api.machine.feature.multiblock.IMultiController')
//const $WorkableMachine = Java.loadClass('com.gregtechceu.gtceu.api.machine.WorkableTieredMachine')
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
				/*
				// None of the following works for checking what fluid is in a gtceu machine because that data is not synced with the client
				// All attempts return minecraft:empty
                // Capability machines
                else if (blockEntity.metaMachine instanceof $WorkableMachine) {
					//console.info(JSON.stringify(blockEntity.compoundTag))
					console.info(JSON.stringify(block.entityData))
					console.info(block.entityData.toString())
                    // let tanks = blockEntity.metaMachine.importFluids.storages;
					let tanks = blockEntity.metaMachine.exportFluids.storages;
                    for (let i = 0; i < tanks.length; ++i) {
                        let tank = tanks[i]
						//console.info(tank.fluid + ' is tank.fluid')
						//console.info(tank.fluid.getFluid() + ' is tank.fluid.getFluid')
						//console.info(tank.fluid.getFluid().fluidName + ' is tank.fluid.getFluid.name')
                        let fluid = tank.fluid.rawFluid.builtInRegistryHolder().key().location()
                        let taskString = mapGTFluidToTaskId[fluid.toString()]
						//console.info(fluid.toString() + ' is fluid ' + i + ', corresponding to ' + taskString)
						//console.info(tank.fluid.rawFluid.toString() + ' is tank.fluid.rawFluid')
                        if (taskString) {
                            let tag = new $CompoundTag()
                            tag.putString('task', taskString)
                            event.player.sendData('customTask', tag)
                        }
                    }
                } */
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