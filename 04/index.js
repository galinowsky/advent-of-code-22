const { input } = require('./input.js')

inputSplit = input.split('\n')
// console.log(inputSplit)

let fullyOverlapCounter = 0
let partlyOverlapCounter = 0

inputSplit.forEach(input => {
x1 = Number(input.split(',')[0].split('-')[0])
x2 = Number(input.split(',')[0].split('-')[1])
y1 = Number(input.split(',')[1].split('-')[0])
y2= Number(input.split(',')[1].split('-')[1])
if(((x1 <= y1) && (x2 >= y2))||((y1 <= x1) && (y2 >= x2))){
    fullyOverlapCounter+=1
}
if(( x1<= y2 && y2 <= x2  )||( y1<= x2 && x2 <= y2)){
    partlyOverlapCounter +=1
}

})
