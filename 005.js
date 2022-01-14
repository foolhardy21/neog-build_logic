//BEGINEER TO INTERMEDIATE

//1
const addArray = arr => arr.reduce((total, curr) => total+curr,0)
console.log(addArray([10,4,5,2,5,6,9]))

//2
const averageArr = arr => arr.reduce((total, curr) => total+curr,0)/arr.length
console.log(averageArr([10,4,5,2,5,6,9]))

//3
const minMax = arr => ({
    min: Math.min(...arr),
    max: Math.max(...arr)
})
console.log(minMax([10,4,5,2,5,6,9]))

//4
const medianMode = arr => {
    let count = {}
    arr.map(num => {
        count[num] ? count[num] = count[num]+1 : count[num] = 1 
    })
    const nums = Object.keys(count)
    const numCount = Object.values(count)
    const maxCountIndex = numCount.indexOf(Math.max(...numCount))

    return {
        median: arr[(arr.length+1)/2],
        mode: Number(nums[maxCountIndex]) 
    }
} 
console.log(medianMode([1,2,3,44,4,4,4,4,4]))

//5
const addTwoArr = (arr1, arr2) => arr1.reduce((total, curr) => total+curr,0)
    + arr2.reduce((total, curr) => total+curr,0)
console.log(addTwoArr([1,2,3],[1,2,3]))

//6
const countVowelsConsonants = str => ({
    vowels: str.toLowerCase().match(/[aeiou]/g).length,
    consonants: str.length - str.toLowerCase().match(/[aeiou]/g).length
})
console.log(countVowelsConsonants('mango'))

//7
const shiftToRight = (arr,x) => {
    for(let i = 0; i < x; i++) {
        arr.unshift(arr.pop())
    }
    return arr
}
console.log(shiftToRight([1,2,3,4,5],2))

//ADVANCED
//1
const addMatrixes = (arr1, arr2) => {
    
}
