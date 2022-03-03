RunComp.SetLightLevel()
radio.setGroup(24)
RunComp.OnLightDrop(function on_light_drop() {
    // cas = control.millis()
    radio.sendNumber(0)
})
