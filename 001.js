//EASY
const readline = require('readline-sync')

//1
// console.log(5+13+7+21+48);

//2
const checkOddEven = () => {
    const input = readline.question('Enter a number\n')
    if(isNaN(input)) {
        console.log('not a number')
    }
    else if(input%2 === 0) {
        console.log('even')
    } else {
        console.log('odd')
    }
}
// checkOddEven()

//3
const findMinMax = (num1, num2) => {
    console.log(Math.max(num1,num2), Math.min(num1,num2))
}
// findMinMax(129,251)

//4
const findMax = (num1, num2, num3) => {
    console.log(Math.max(num1,num2, num3))
}
// findMax(8, 23, 17)

//5
const findMin = (num1, num2, num3) => {
    console.log(Math.min(num1,num2, num3))
}
// findMin(35, 29, 46)

//6
const checkDays = (month) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov',
    'Dec']
    console.log(new Date(2022, months.indexOf(month)+1, 0).getDate())
}
// check0Days('Feb')


//INTERMEDIATE
//1
const fizzBuzz = () => {
    let arr = []
    for(let i = 1; i<=100; i++) {
        if(i%3 === 0 && i%5 === 0) {
            arr.push('FizzBuzz')
        } else if(i%3 === 0) {
            arr.push('Fizz')
        } else if(i%5 === 0) {
            arr.push('Buzz')
        } else arr.push(i)
    }
    return arr
}
// console.log(fizzBuzz())

//2
const starPattern = () => {
    for(let i = 1; i<=5; i++) {
        let str = ''
        for(let j = 1; j<=i; j++) {
            str+='*'
        }
        console.log(str)
    }
}
// starPattern()

//3
const tableTillTwelve = num => {
    for(let i = 1; i <=12; i++) {
        console.log(`${num}x${i} = ${num*i}`)
    }
}
// tableTillTwelve(readline.question('Enter the number'))

//4
const fibonacci = (num) => {
    // let num1=0
    // const num2 = 
    let arr = [0,1]
    let i = 1
    let pos1 = 0, pos2 = 1
    while(i++ <= num) {
        arr.push(arr[pos1]+arr[pos2])
        pos1++
        pos2++
    }
    return arr
}
// console.log(fibonacci(10))

const ifPrime = num => {
    for(let i = 2; i<=Math.sqrt(num); i++) {
        if(num%i === 0) {
            return false
        }
    }
    return true
}
// console.log(ifPrime(18))

const ifWeekday = day => {
    switch(day) {
        case 'Sunday':
        case 'Saturday': return `${day} is weekend`
        break
        default: return `${day} is weekday`
    }
}
// console.log(ifWeekday('Monday'))