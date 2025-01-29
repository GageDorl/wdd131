//activity 1
const steps = ["one", "two", "three"];
const listTemplate = step => `<li>${step}</li>`;//the html string made from step
const stepsHtml =steps.map(listTemplate);// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join("");// set the innerHTML

//activity 2
const grades = ['A','B','A'];
const gradeToGPA = grade => {
    grade = grade.toUpperCase();
    switch(grade){
        case 'A':
            return 4.0;
        case 'B':
            return 3.0;
        default:
            return 0.0;
  }
};
const gpas = grades.map(gradeToGPA);
const gpa = gpas.reduce((sum, gpa) => sum + gpa, 0)/gpas.length;
console.log(gpa);

//activity 3
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const smallFruits = fruits.filter(fruit => fruit.length < 6);
console.log(smallFruits);

//activity 4
const numbers = [12, 34, 21, 54];
let luckyNumber = 21;
console.log(numbers.indexOf(luckyNumber));