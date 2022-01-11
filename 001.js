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