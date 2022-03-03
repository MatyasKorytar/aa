RunComp.SetLightLevel()
radio.setGroup(24)
RunComp.OnLightDrop(function on_light_drop() {
    radio.sendNumber(0)
})
