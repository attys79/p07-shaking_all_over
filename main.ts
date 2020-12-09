let die = 0
input.onGesture(Gesture.Shake, function () {
    die = randint(1, 6)
    if (die == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (die == 2) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
    } else if (die == 3) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
    } else if (die == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (die == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    }
})
basic.forever(function () {
	
})
