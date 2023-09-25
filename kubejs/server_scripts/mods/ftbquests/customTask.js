NetworkEvents.dataReceived('customTask', event => {
    const { entity, data, level } = event
    let taskString = data.task
    let task = FTBQuests.getObject(level, taskString)
    let playerQuestData = FTBQuests.getData(entity)
    if (task && playerQuestData && !playerQuestData.isCompleted(task) && playerQuestData.canStartTasks(task.quest)) {
        playerQuestData.addProgress(task, 1)
    }
})