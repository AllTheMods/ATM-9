let settings = JsonIO.read('kubejs/CustomPackSettings.json')
if (settings == null) {
    settings = {
        extraLogging: false,
        _comments: "extraLogging is mostly for development work"
    }
    JsonIO.write('kubejs/CustomPackSettings.json', settings)
}

global['devLogging'] = settings.extraLogging