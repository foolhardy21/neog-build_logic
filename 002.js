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


//Medium
//1
const arrLength = arr => arr.length
console.log(arrLength([1,2,123,4,4,5]))

//2
const itemInArr = (arr,item) => arr.indexOf(item)
console.log(itemInArr([1,2,3,4,5],5))

//3
const replaceinArr = (arr,num1,num2) => arr.map(num => {
    if(num === num1) return num2
    else return num
})
console.log(replaceinArr([1,5,3,5,6,8],5,10))

//4
const mergeArrays = (arr1, arr2) => [...arr1,...arr2]
console.log(mergeArrays([1,2],[3,4]))

//5
const charAt = (str, index) => str[index]
console.log(charAt('neogCamp',4))

//6
const compareDates = (d1, d2) => {
    const d1Time = new Date(d1).getTime()
    const d2Time = new Date(d2).getTime()
    if(d1Time <= d2Time) return d1
    else return d2
} 
console.log(compareDates('05/01/2021','04/01/2021'))
