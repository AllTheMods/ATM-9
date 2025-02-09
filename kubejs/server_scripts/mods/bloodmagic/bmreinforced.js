// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.


// temp fix to fix Blood magic reinforced blocks not dropping when mined, due to missing block tags
// Remove when BM updates, and when https://github.com/WayofTime/BloodMagic/pull/2048 or similar is merged
// covers https://github.com/AllTheMods/All-the-mods-9-Sky/issues/731 and was mentioned in discord for atm9 (but i swear there was an issue for it)

ServerEvents.tags('block', allthemods =>{
    allthemods.add('minecraft:mineable/pickaxe',[
        "bloodmagic:speedrune2","bloodmagic:sacrificerune2","bloodmagic:selfsacrificerune2",
        "bloodmagic:dislocationrune2","bloodmagic:altarcapacityrune2","bloodmagic:bettercapacityrune2",
        "bloodmagic:orbcapacityrune2","bloodmagic:accelerationrune2","bloodmagic:chargingrune2"])
    allthemods.add('minecraft:needs_diamond_tool',[
        "bloodmagic:speedrune2","bloodmagic:sacrificerune2","bloodmagic:selfsacrificerune2",
        "bloodmagic:dislocationrune2","bloodmagic:altarcapacityrune2","bloodmagic:bettercapacityrune2",
        "bloodmagic:orbcapacityrune2","bloodmagic:accelerationrune2","bloodmagic:chargingrune2"])
})


// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.