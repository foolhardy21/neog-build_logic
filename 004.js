//BEGINNER TO INTERMEDIATE

//1
const toUpper = str => str.toUpperCase()
console.log(toUpper('asdsd'))

//2
const appendStr = (a,b) => `${a}${b}`
console.log(appendStr('nice','meme'))

//3
const countChar = str => str.length
console.log(countChar('ivnay'))

//4
const toNumber = str => Number(str)
console.log(toNumber('123'))

//5
const removeVowels = str => {
    const vowels = ['a','e','i','o','u']

    return str
        .split('')
        .filter(char => vowels.indexOf(char) === -1)
        .join('')
}
// const removeVowels = str => str.replace(/[aeiou]/g,'')
console.log(removeVowels('vinay'))

//6
const ifAlphaNumeric = str => str.match(/\d/g)
console.log(ifAlphaNumeric('vin112'))

//7
const threeStrings = (...strArr) => {
    const lengthArr = strArr.map(str => str.length)
    
    console.log(strArr[lengthArr.indexOf(Math.max(...lengthArr))])
    console.log(strArr[lengthArr.indexOf(Math.min(...lengthArr))])
}
threeStrings('a','bb','cccc')

//8
const countVowelsConsonants = str => ({
    vowels: str.toLowerCase().match(/[aeiou]/g).length,
    consonants: str.length - str.toLowerCase().match(/[aeiou]/g).length
})
console.log(countVowelsConsonants('apple'))

//9
const checkLength = str => str.length > 7 ? true : false
console.log(checkLength('assjsjsjs'))

//10
const copyStr = (big, small) => big+small
console.log(appendStr('asdasdas','ooo')) 

//11
const ifPalindrome = str => (str === str.split('').reverse().join(''))
console.log(ifPalindrome('hannaha'))

//12
const substringsArr = str => {
    let substrArr = []
    for(let i=0; i<str.length; i++) {
        for(let j=i; j<str.length+1; j++) {
            substrArr.push(str.slice(i,j)) 
        }
    }
    return substrArr.filter(str => str.length>0)
}
console.log(substringsArr('vinay'))

//13
const removeTime = str => str.slice(0,-5)
console.log(removeTime('Wed April 15, 7pm'))

//14
const maskStr = str => str.split('').map((char, index) => {
    if(index < str.length-4) return '#'
    else return char
}).join('')
console.log(maskStr('5565534276455423'))

//15
const firstSixCapital = str => str.split('').map((char, index) => {
        if(index <= 6) return char.toUpperCase()
        else return char
    }).join('')
console.log(firstSixCapital('tic tac toe is a fun game'))