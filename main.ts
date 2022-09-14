input.onButtonPressed(Button.A, function () {
    steps = 0
    basic.showString("RESET")
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
    if (steps == 2000) {
        music.playTone(262, music.beat(BeatFraction.Double))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    }
    if (steps == 4000) {
        music.playTone(294, music.beat(BeatFraction.Double))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            . . # . .
            `)
    }
    if (steps == 6000) {
        music.playTone(330, music.beat(BeatFraction.Double))
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . # # # .
            . . # . .
            `)
    }
    if (steps == 8000) {
        music.playTone(349, music.beat(BeatFraction.Double))
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    }
    if (steps == 10000) {
        music.playTone(392, music.beat(BeatFraction.Double))
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.showString("WoW")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
    for (let index = 0; index < 2; index++) {
        basic.showString("Hello!")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(0.6 * steps)
})
let steps = 0
steps = 0
