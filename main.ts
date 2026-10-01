input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.A, function () {
    sonido = input.soundLevel()
    basic.showString("Sonido:")
    basic.showNumber(sonido)
})
input.onButtonPressed(Button.B, function () {
    direccion = input.compassHeading()
    basic.showString("Dir:")
    basic.showNumber(direccion)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
let direccion = 0
let sonido = 0
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . # # # .
    . # # # .
    `)