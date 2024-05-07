// priority 100

// huge thanks to Uncandango for this!
let $ResourcePackLoader = Java.loadClass("net.minecraftforge.resource.ResourcePackLoader")


const $Collectors = Java.loadClass("java.util.stream.Collectors")
const $ServerPacksSource = Java.loadClass("net.minecraft.server.packs.repository.ServerPacksSource")
const $FallbackResourceManager = Java.loadClass("net.minecraft.server.packs.resources.FallbackResourceManager")

global.readJsonFileFromMod = (type, modId, resourceLocation) => {
    let pack = loadPack(type, modId)
    if (pack.listPacks().toList().empty) return Utils.emptyMap()
    resourceLocation = resourceLocation.endsWith(".json") ? new ResourceLocation(resourceLocation) : new ResourceLocation(resourceLocation + ".json")
    let resource = pack.getResource(resourceLocation).orElse(null)
    if (resource == null){
        console.warn(`Resource "${resourceLocation}" not found.`)
        return Utils.emptyMap()
    }
    let reader = resource.openAsReader()
    let string = reader.lines().collect($Collectors.joining("\n"))
    reader.close()
    pack.listPacks().forEach(packResource => packResource.close())
    return JsonIO.parse(string)
}

global.readJsonFolderFromMod = (type, modId, folder, predicate) => {
    let jsonMap = Utils.newMap()
    let pack = loadPack(type, modId)
    if (pack.listPacks().toList().empty) return jsonMap
    predicate = predicate == null ? (rl => rl.path.endsWith(".json")) : predicate
    let map = Utils.emptyMap().copyOf(pack.listResources(folder, predicate))
    map.forEach((key,val) => {
        if (!key.path.endsWith(".json")) return
        let reader = val.openAsReader()
        let string = reader.lines().collect($Collectors.joining("\n"))
        reader.close()
        jsonMap.put(key.toString(), JsonIO.parse(string))
    })
    pack.listPacks().forEach(packResource => packResource.close())
    return jsonMap
}

function loadPack(type, modId) {
    type = type == "assets" ? 0 : type == "data" ? 1 : -1
    if (type == -1) {
        console.warn(`Package type is not valid, use "assets" or "data"`)
        return
    }
    let pack = new $FallbackResourceManager(type, modId)
    if (modId == "minecraft") {
        if (type == 0){
            pack.push(Client.getVanillaPackResources())
        } else {
            pack.push(new $ServerPacksSource().getVanillaPack())
        }
    } else {
        let resourcePack = loadModForge(type, modId)
        resourcePack && pack.push(resourcePack)
    }
    return pack
}

function loadModForge(type, modId) {
    let resourcePack
    try {
        resourcePack = $ResourcePackLoader.getPackFor(modId).get()
    } catch (error) {
        console.warn(`ModId "${modId}" is not loaded.`)
    }
    if (!resourcePack) return
    return resourcePack
}