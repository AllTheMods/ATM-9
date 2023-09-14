const ItemRegistry = Java.loadClass('com.smashingmods.chemlib.registry.ItemRegistry')

// List Gen
/*
    /chemlibhelper
    OP permission required
    only should need to be run on mod changes,
    generates a new chemlibCompat.json file
    helps add chemlib tooltips to items unified away from chemlib
*/
ServerEvents.commandRegistry(event => {
  const { commands: Commands, arguments: Arguments, builtinSuggestions: Suggestions } = event;
  event.register(
    Commands.literal("chemlibhelper")
      .requires(source => source.getServer().isSingleplayer() || source.hasPermission(2))
      .executes((ctx) => Chemlib(ctx.source))
  )
})

function Chemlib(source) {
  let replaced = {}
  // dust, nugget, ingot, plate, storage_block
  let tags = global.auTags.filter(function (val) {
    return /forge:(dust|nugget|ingot|plate|storage_block)s/.test(val)
  })
  tags.forEach(tagString => {
    let material = tagString.replace(/forge:(dust|nugget|ingot|plate|storage_block)s\//, '')
    let oElement = ItemRegistry.getElementByName(material)
    if (oElement.isPresent()) {
      let element = oElement.get()
      let tooltip = []
      tooltip.push(Text.of(`${element.getAbbreviation()} (${element.getAtomicNumber()})`).aqua())
      let group = element.getGroupName()
      if (group != "") {
        tooltip.push(Text.of(group).gray())
      }
      let item = AlmostUnified.getPreferredItemForTag(tagString)
      if (!item.isEmpty() && item.idLocation.namespace != 'chemlib') {
        replaced[item.id] = tooltip
      }
    }
  })
  JsonIO.write('kubejs/client_scripts/chemlibCompat.json', replaced)
  return 1
}