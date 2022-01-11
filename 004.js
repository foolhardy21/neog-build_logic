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

