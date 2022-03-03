RunComp.set_light_level()
radio.set_group(24)
def on_light_drop():
    #cas = control.millis()
    radio.sendNumber(0)
RunComp.on_light_drop(on_light_drop)
