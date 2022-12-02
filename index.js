const { input } = require("./input");

const mapInput = (input) => {
    const arrayOfValues = input.split('\n\n').map(valuesString => valuesString.split('\n'))

    const arrayOfSums = arrayOfValues.map(elfArray => {
        return elfArray.reduce((prev, curr) => Number(prev) + Number(curr), 0)
    })

    const sortedSums = arrayOfSums.sort((a, b) => b - a)

    console.log(arrayOfSums)
    const answear1 = sortedSums[0]
    const answear2 = sortedSums[0] + sortedSums[1] + sortedSums[2]

console.log(answear1)
console.log(answear2)
}


const splittedInput = mapInput(input)





