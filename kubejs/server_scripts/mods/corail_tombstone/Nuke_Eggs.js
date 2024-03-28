EntityEvents.spawned("item", e => {
    if (e.entity.item.id == "tombstone:easter_egg") {
      if (!e.entity.nbt.Thrower) e.cancel()
    }
  })