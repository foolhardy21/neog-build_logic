//EASY

//1
const powerTo = (a,b) => {
    let counter = 1
    let ans = 1
    while(counter++ <= b) {
        ans = a*ans 
    }
    return ans
    //Math.pow(a,b)
} 
// console.log(powerTo(2,3))

//2
const hexArea = side => 3*Math.sqrt(3)/2*powerTo(side,2)
// console.log(hexArea(10))

//3
const noOfWords = sentence => {
    let counter = 0
    for(const word of sentence) {
        if(word === ' ') counter++
    }
    return ++counter
    // sentence.split(' ').length
} 
// console.log(noOfWords('Hey u r cool'))

//4
const findMin = (...nums) => {
    let min = nums[0]
    for(const num of nums) {
        if(num < min) min = num
    }
    return min
    // Math.min(...nums)
} 
// console.log(findMin(11,22,3,4))

//5
const findMax = (...nums) => {
    let max = nums[0]
    for(const num of nums) {
        if(num > max) max = num
    }
    return max
    // Math.max(...nums)
} 
// console.log(findMax(11,2,3,4))

//6
const typeOfTriangle = (a,b,c) => {
    return (a === b && b === c) ?
        'Equivalent'
    : (a === b || b === c || c === a) 
    ? 'Isosceles'
    : 'Scalene'
    
}
// console.log(typeOfTriangle(30,30,90))


//Medium
//1
const arrLength = arr => {
    let counter = 0
    for(const num of arr) {
        counter++
    }
    return counter
    // arr.length
} 
// console.log(arrLength([1,2,123,4,4,5]))

//2
const itemInArr = (arr,item) => {
    let i = 0
    while(arr[i]) {
        if(arr[i] === item) {
            return i 
        }
        ++i
    }
    return -1 
    // arr.indexOf(item)
} 
// console.log(itemInArr([1,2,3,4,5],5))

//3
const replaceinArr = (arr,num1,num2) => arr.map(num => {
    if(num === num1) return num2
    else return num
})
// console.log(replaceinArr([1,5,3,5,6,8],5,10))

//4
const mergeArrays = (arr1, arr2) => [...arr1,...arr2]
// console.log(mergeArrays([1,2],[3,4]))

//5
const charAt = (str, index) => str[index]
// console.log(charAt('neogCamp',4))

//6
const compareDates = (d1, d2) => (new Date(d1) <= new Date(d2)) ? d1 : d2
// console.log(compareDates('06/01/2021','05/02/2021'))


//ADVANCED
//1
const encodeString = str => {
    let newstrArr = []
    for(let i = 0 ; i<str.length; i++) {
        newstrArr.push(String.fromCharCode(str.charCodeAt(i)+2))
    }
    return newstrArr.join('')
}
// console.log(encodeString('neogcamp'))

//2
const capitalize = str => str.split(' ')
    .map(word => word[0].toUpperCase()+word.slice(1,))
    .join(' ')

// console.log(capitalize('we are neogrammars'))

//3
const sortArr = arr => arr.sort((a,b) => a-b)
// console.log(sortArr([100,83,32,9,45,61]))

//4
const reverseWord = str =>
    str.split(' ').map(word => 
        word.split('').reverse().join('')
    ).join(' ')
// console.log(reverseWord('we are neogrammars'))