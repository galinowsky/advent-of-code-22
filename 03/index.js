const { inputt } = require("./input");
input = inputt.split("\n");

const getUniques = (elem, index, arr) => {
    return arr.indexOf(elem) === index
}

const getUniqueLettersFromHalves = (input) => {
    const half = Math.ceil(input.length / 2)
    const firstHalf = input.slice(0, half)
    const secondHalf = input.slice(half)

    const result = firstHalf.filter(char => secondHalf.includes(char)).filter(getUniques)

    return result
}

const checkIfGroupContainsChar = (input) => {
    // console.log(input)
    const inputsCounter = {

    }

    const arrayOfUniques = input.map(inputLine => inputLine.split('').filter(getUniques))
    // console.log(arrayOfUniques)
    let end = false
    let i = 0

    do {
        if (arrayOfUniques[0][i] || arrayOfUniques[1][i] || arrayOfUniques[2][i]) {
            arrayOfUniques.forEach(inputLine => {
                // console.log(inputLine)
                // console.log(inputsCounter[inputLine[i]])
                if (!inputsCounter[inputLine[i]] && inputLine[i]){
                    inputsCounter[inputLine[i]] = 1
                }
                else if(inputLine[i]) {
                    // console.log(inputsCounter[inputLine[i]]===1)

                    // console.log(inputLine[i])                   
                    inputsCounter[inputLine[i]] = inputsCounter[inputLine[i]] + 1
                    // console.log(inputsCounter[inputLine[i]])
                    // console.log('________')
                }
            })

        
            i += 1
        } else {
            end = true
        }
    } while (!end)
    // console.log(inputsCounter)
    const sortedInputsCounter =  Object.entries(inputsCounter).find(char => char[1] == 3)[0]
    // console.log(sortedInputsCounter)
    return sortedInputsCounter
}
const uniqueCharsInput = input.map(input => getUniqueLettersFromHalves(input.split(''))).flat()
let scoreLetters = []

for (let i = 0; i< input.length; i = i + 3) {
    const inputChunk = input.slice(i, i + 3)
    const groupBadge = checkIfGroupContainsChar(inputChunk)
    scoreLetters.push(groupBadge)
}
console.log(scoreLetters)

const mapLetterToAsciiCodes = (input) => input.map(char => {
    const asciiOffset = char.toLowerCase() === char ? 96 : 38
    return char.charCodeAt() - asciiOffset
})

const asciiArray = mapLetterToAsciiCodes(scoreLetters)
const score = asciiArray.reduce((prev, curr) => prev + curr)
