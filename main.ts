input.onButtonPressed(Button.A, function () {
	
})
input.onSound(DetectedSound.Loud, function () {
    for (let index = 0; index < randint(4, 100); index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(100)
        strip.clear()
        strip.show()
        basic.pause(100)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < randint(4, 100); index++) {
        strip.setPixelColor(randint(0, 8), neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(100)
        strip.clear()
        strip.show()
        basic.pause(100)
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 9, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
	
})
