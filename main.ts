let strip = neopixel.create(DigitalPin.P2, 8, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
pins.digitalWritePin(DigitalPin.P0, 0)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
basic.forever(function () {
    basic.pause(100)
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        strip.showRainbow(1, 360)
    }
})
