input.onButtonPressed(Button.A, function () {
    modeHapus = true
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
let modeHapus = false
let PosisiX = 2
let PosisiY = 2
basic.forever(function () {
    PosisiX = Math.map(input.acceleration(Dimension.X), -1024, 1024, 0, 5)
    PosisiY = Math.map(input.acceleration(Dimension.Y), -1024, 1024, 0, 5)
    if (modeHapus) {
        led.unplot(PosisiX, PosisiY)
    } else {
        led.plot(PosisiX, PosisiY)
    }
    basic.pause(50)
})
