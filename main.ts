input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Angry)
    pins.servoWritePin(AnalogPin.P9, 0)
    pins.servoWritePin(AnalogPin.P8, 180)
    music.playMelody("B A G A G F A C5 ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
    pins.servoWritePin(AnalogPin.P8, 0)
    pins.servoWritePin(AnalogPin.P9, 180)
    music.playMelody("E D G F B A C5 B ", 120)
})
makerbit.connectLcd(39)
makerbit.showStringOnLcd1602("Callum's box", makerbit.position1602(LcdPosition1602.Pos1), 16)
makerbit.showStringOnLcd1602("yes no", makerbit.position1602(LcdPosition1602.Pos17), 16, TextOption.AlignLeft)
basic.forever(function () {
	
})
