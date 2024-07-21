// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const $MysticalAgricultureAPI = Java.loadClass('com.blakebr0.mysticalagriculture.api.MysticalAgricultureAPI')

const CropManualDisableList = ["gaia_spirit", "mithril", "tungsten", "titanium", "chrome", "invar", "iridium", "yellorium"]
const CropManualEnableList = []

StartupEvents.postInit(allthemods => {
  let CropRegistry = $MysticalAgricultureAPI.getCropRegistry()
  for (const disable of CropManualDisableList) {
    CropRegistry.getCropByName(disable).setEnabled(false)
  }
  for (const enable of CropManualEnableList) {
    CropRegistry.getCropByName(enable).setEnabled(true)
  }

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
