function getGrades(inputSelector){
    grades = document.querySelector(inputSelector).value.split(',');
    cleanGrades = grades.map(grade => grade.trim().toUpperCase());
    return cleanGrades;
}

function lookupGrade(grade){
    switch (grade){
        case 'A':
            return 4.0;
        case 'B':
            return 3.0;
        case 'C':
            return 2.0;
        case 'D':
            return 1.0;
        default:
            return 0.0;
    }
}

function calculateGPA(grades){
    
    const gradePoints = grades.map(grade => lookupGrade(grade));
    const total = gradePoints.reduce((total,num) => total += num)/grades.length;
    return total.toFixed(2);
}

function outputGPA(gpa, selector){
    document.querySelector(selector).innerText = gpa;
}

function clickHandler(){
    const grades = getGrades('#grades');
    const gpa = calculateGPA(grades);
    outputGPA(gpa, '#output');
}

document.querySelector('#submitButton').addEventListener('click', clickHandler);