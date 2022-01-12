//1
const studentDetails = require("./006data");

//1.1
const getTotalMarks = arr => studentDetails.map(student => {
    return {
        name: student.name,
        totalMarks: student.maths+student.science+student.english+student.computer
    }
}) 
console.log(getTotalMarks(studentDetails))

//1.2
const highestMarks = arr => {
    let totalMarksArr = getTotalMarks(arr)
    return totalMarksArr
        .sort((a,b) => b.totalMarks-a.totalMarks)[0]
    
}
console.log(highestMarks(studentDetails))

//1.3
const lowestMarks = arr => {
    let totalMarksArr = getTotalMarks(arr)
    return totalMarksArr
        .sort((a,b) => a.totalMarks-b.totalMarks)[0]
    
}
console.log(lowestMarks(studentDetails))

//1.4
const averageComputer = arr => arr.reduce((total, curr) => total+curr.computer,0)/arr.length
console.log(averageComputer(studentDetails))

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
console.log(gradeStudent(studentDetails))

//1.5
const ifPassed = arr => {
    return gradeStudent(arr).filter(student => student.grade !== 'D')
}
console.log(ifPassed(studentDetails))