//EASY

//1
const powerTo = (a,b) => Math.pow(a,b)
console.log(powerTo(2,3))

//2
const hexArea = side => 3*Math.sqrt(3)/2*powerTo(side,2)
console.log(hexArea(10))

//3
const noOfWords = sentence => sentence.split(' ').length
console.log(noOfWords('Hey u r cool'))

//4
const findMin = (...nums) => Math.min(...nums)
console.log(findMin(11,2,3,4))

//5
const findMax = (...nums) => Math.max(...nums)
console.log(findMax(11,2,3,4))

//6
const typeOfTriangle = (a,b,c) => {
    if(a === b && b === c) {
        return 'Equivalent'
    } else if(a === b || b === c || c === a) {
        return 'Isosceles'
    } else {
        return 'Scalene'
    }
}
console.log(typeOfTriangle(30,30,90))