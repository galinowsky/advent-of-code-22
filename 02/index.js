const { input } = require("./input");


// const input = `B X
// C Z`

const SHAPES = {
    ROCK: 'ROCK',
    PAPER: 'PAPER',
    SCISSORS: 'SCISSORS'
}
const RESULTS = {
    LOSE: 'LOSE',
    DRAW: 'DRAW',
    WIN: 'WIN'
}

const inputMapper = {
    A: SHAPES.ROCK,
    B: SHAPES.PAPER,
    C: SHAPES.SCISSORS,
    X: RESULTS.LOSE,
    Y: RESULTS.DRAW,
    Z: RESULTS.WIN,

}

const scoreGetter = {
    ROCK: {
        score: 1,
        against: {
            ROCK: 4,
            PAPER: 1,
            SCISSORS: 7
        },
        setResult: {
            WIN: SHAPES.PAPER,
            DRAW: SHAPES.ROCK,
            LOSE: SHAPES.SCISSORS,
        }
    },
    PAPER: {
        score: 2,
        against: {
            ROCK: 8,
            PAPER: 5,
            SCISSORS: 2
        },
        setResult: {
            WIN: SHAPES.SCISSORS,
            DRAW: SHAPES.PAPER,
            LOSE: SHAPES.ROCK,
        }
    },
    SCISSORS: {
        score: 3,
        against: {
            ROCK: 3,
            PAPER: 9,
            SCISSORS: 6
        }
        , setResult: {
            WIN: SHAPES.ROCK,
            DRAW: SHAPES.SCISSORS,
            LOSE: SHAPES.PAPER,
        }
    }
}

const countScore = (input) => {
    const tranformedInput = input.split('\n').map(pair => pair.replace(' ', ''))
    const scoreArrray = tranformedInput.map(round => {

        if (round) {
            const opponentShape = inputMapper[round.split('')[0]]
            // const playerShape = inputMapper[round.split('')[1]]
            const result = inputMapper[round.split('')[1]]
            // const score = scoreGetter[playerShape].against[opponentShape]
            const playerChoice = scoreGetter[opponentShape].setResult[result]
            const score2 = scoreGetter[playerChoice].against[opponentShape]
            return score2
        }
    })
    const totalScore = scoreArrray.reduce((prev, curr) => prev + curr)
    console.log(totalScore)
}

countScore(input) 