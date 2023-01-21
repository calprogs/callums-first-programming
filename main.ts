input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P9, 180)
    music.playMelody("G F G A - F E D ", 120)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C5 G B A F A C5 B ", 120)
    pins.servoWritePin(AnalogPin.P9, 0)
})
makerbit.connectLcd(39)
makerbit.showStringOnLcd1602("Callum's Box", makerbit.position1602(LcdPosition1602.Pos1), 16)
basic.forever(function () {
	
})
