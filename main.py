def on_light_drop():
    #cas = control.millis()
    radio.sendNumber(1)
RunComp.on_light_drop(on_light_drop)
