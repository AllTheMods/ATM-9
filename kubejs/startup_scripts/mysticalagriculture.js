const $MysticalAgricultureAPI = Java.loadClass('com.blakebr0.mysticalagriculture.api.MysticalAgricultureAPI')

const CropManualDisableList = ["gaia_spirit", "mithril", "tungsten", "titanium", "chrome", "invar", "iridium", "yellorium"]
const CropManualEnableList = []

StartupEvents.postInit(event => {
  let CropRegistry = $MysticalAgricultureAPI.getCropRegistry()
  for (const disable of CropManualDisableList) {
    CropRegistry.getCropByName(disable).setEnabled(false)
  }
  for (const enable of CropManualEnableList) {
    CropRegistry.getCropByName(enable).setEnabled(true)
  }

})