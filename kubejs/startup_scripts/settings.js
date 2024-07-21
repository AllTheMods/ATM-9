// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

let settings = JsonIO.read('kubejs/CustomPackSettings.json')
if (settings == null) {
    settings = {
        extraLogging: false,
        _comments: "extraLogging is mostly for development work"
    }
    JsonIO.write('kubejs/CustomPackSettings.json', settings)
}

global['devLogging'] = settings.extraLogging

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
