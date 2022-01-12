//1
const add = (a,b) => a+b
console.log(add(20,40))

//2
const SI = (p,r,t) => (p*r*t)/100
console.log(SI(100,6,2))

//3
const KE = (m,v) => 0.5*m*v*v
console.log(KE(10,1))

//4
const toCelsius = fahrenheit => (fahrenheit-32)*5/9
console.log(toCelsius(56))

//5
const square = a => ({
    area: a*a,
    perimeter: 4*a,
    sa: 6*a*a,
    vol: a*a*a
})
console.log(square(3))

//6
const profitLoss = (cp, sp) => cp>sp ? `${cp-sp} Loss` : `${sp-cp} Profit`
console.log(profitLoss(1500,2000))

//7
const sumOfNatural = n => n*(n+1)/2
console.log(sumOfNatural(100))

//8
const oddInDescending = n => {
    for(let i = n; i > 0; --i) {
        if(i%2 !== 0) console.log(i)
    }
}
oddInDescending(5)

//9
const sumDigits = str => str.split('').reduce((total, curr) => total+Number(curr),0)
console.log(sumDigits('1234'))

//10
const reverseNumber = num => Number(num.toString().split('').reverse().join(''))
console.log(reverseNumber(1234))

//11
const rotateNumber = (num, rot) => {
    let numArr = num.toString().split('')
    for(let i = 0; i<rot; i++) {
        const last = numArr.pop()
        numArr.unshift(last)
    }
    return Number(numArr.join(''))
}
console.log(rotateNumber(1234,2))

//12
const toBinary = num => num.toString(2)
console.log(toBinary(5))

const toDecimal = num => parseInt(num,8)
console.log(toDecimal(116))