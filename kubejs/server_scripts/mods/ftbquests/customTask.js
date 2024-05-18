// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

NetworkEvents.dataReceived('customTask', allthemods => {
    const { entity, data, level } = allthemods
    let taskString = data.task
    let task = FTBQuests.getObject(level, taskString)
    let playerQuestData = FTBQuests.getData(entity)
    if (task && playerQuestData && !playerQuestData.isCompleted(task) && playerQuestData.canStartTasks(task.quest)) {
        playerQuestData.addProgress(task, 1)
    }
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
