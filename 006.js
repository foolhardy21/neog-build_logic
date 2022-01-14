//1
const data = require("./006data");

//1.1
const getTotalMarks = arr => arr.map(student => {
    return {
        name: student.name,
        totalMarks: student.maths+student.science+student.english+student.computer
    }
}) 
console.log(getTotalMarks(data.studentDetails))

//1.2
const highestMarks = arr => {
    let totalMarksArr = getTotalMarks(arr)
    return totalMarksArr
        .sort((a,b) => b.totalMarks-a.totalMarks)[0]
    
}
console.log(highestMarks(data.studentDetails))

//1.3
const lowestMarks = arr => {
    let totalMarksArr = getTotalMarks(arr)
    return totalMarksArr
        .sort((a,b) => a.totalMarks-b.totalMarks)[0]
    
}
console.log(lowestMarks(data.studentDetails))

//1.4
const averageComputer = arr => arr.reduce((total, curr) => total+curr.computer,0)/arr.length
console.log(averageComputer(data.studentDetails))

//1.5
const gradeStudent = arr => {
    return getTotalMarks(arr).map(student => {
        if(student.totalMarks/400 >= 0.75) {
            student.grade = 'A'
        }
        else if(student.totalMarks/400 >= 0.60) {
            student.grade = 'B'
        }
        else if(student.totalMarks/400 >= 0.35) {
            student.grade = 'C'
        }
        else if(student.totalMarks/400 < 0.35) {
            student.grade = 'D'
        }
        return student
    })
}
console.log(gradeStudent(data.studentDetails))

//1.6
const ifPassed = arr => gradeStudent(arr).filter(student => student.grade !== 'D')
console.log(ifPassed(data.studentDetails))


//4
//4.1
const totalItems = arr => arr.reduce((total, curr) => total+curr.count,0)
console.log(totalItems(data.cartItems))

//4.2
const totalValue = arr => arr.reduce((total, curr) => total+(curr.count*curr.price),0)
console.log(totalValue(data.cartItems))

//4.3
const totalDiscount = arr => arr.reduce((total, curr) => total+(curr.count*curr.discount),0)
console.log(totalDiscount(data.cartItems))

//4.4
const totalTax = arr => arr.reduce((total, curr) => total+(curr.count*curr.price),0)*.18
console.log(totalTax(data.cartItems))