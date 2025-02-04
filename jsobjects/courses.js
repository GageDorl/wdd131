// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26,
            days: 'TTh',
            instructor: 'Bro T'
        },
        {
            sectionNum: 2,
            roomNum: 'STC 347',
            enrolled: 28,
            days: 'TTh',
            instructor: 'Sis A'
        }
    ],
    changeEnrollment: async function(sectionNum, add=true){
        const section = this.sections.find(section => section.sectionNum == sectionNum);
        if(section){
            if(add){
                section.enrolled++;
                sectionOutput(this);
            } else {
                section.enrolled--;
                sectionOutput(this);
            }
        }
    }
  };

const setCourseInfo = (course) => {
    const courseName = document.querySelector('#courseName');
    const courseCode = document.querySelector('#courseCode');
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

const sectionOutput = course => {
    const sectionTable = document.querySelector('#sections');
    
    sectionTable.innerHTML = '';
    course.sections.map(section => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${section.sectionNum}</td>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instructor}</td>
        `;
        sectionTable.appendChild(tr)
    });
}

document.querySelector('#enrollStudent').addEventListener('click', () => {
    const sectionNum = document.querySelector('#sectionNumber').value;
    aCourse.changeEnrollment(sectionNum);
});
document.querySelector('#dropStudent').addEventListener('click', () => {
    const sectionNum = document.querySelector('#sectionNumber').value;
    aCourse.changeEnrollment(sectionNum, false);
});

setCourseInfo(aCourse);
sectionOutput(aCourse);