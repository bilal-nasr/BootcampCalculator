let letter ={
    "A+": 97,
    "A":95,
    "A-":90,
    "B+":89,
    "B":85,
    "B-":80,
    "C+":79,
    "C":75,
    "C-":70,
    "D+":69,
    "D":65,
    "D-":60,
    "F":59
} 

let submit = ()=>{
    letterToNumber();
    getCredit();
}

let letterToNumber = ()=>{
    let letterGrade = document.getElementById("Grade").value;
    let number = letter[letterGrade];
    return number
    //console.log(number);
    /*switch(letter){
        case "A+":
            number = 97;
            break;
        case "A":
            number = 95;
            break;
        case "A-":
            number= 90;
            break;

        case "B+":
            number = 89;
            break;
        case "B":
            number = 85;
            break;
        case "B-":
            number= 80;
            break;

        case "C+":
            number = 79;
            break;
        case "C":
            number = 75;
            break;
        case "C-":
            number= 70;
            break;

        case "D+":
            number = 69;
            break;
        case "D":
            number = 65;
            break;
        case "D-":
            number= 60;
            break;

        case "F":
            number = 59;
            break;
        default:
            number = 0
    }*/

}

let creditValidation = (credits) =>{
    
    return (credits>=0 && credits<=4?  true : false);
}

let getCredit = ()=>{
    let credits = document.getElementById("Credits");
    if(!creditValidation(credits.value)){
        let warning = document.getElementById("warning");
        warning.textContent= "Credits must be an integer between 0 and 4.";
        warning.style.display = "block";
    }
    else{
        warning.style.display = "none";
    }
}

//-------------------------------------------------------

var semesterCount = 0;
var calculateButton = document.getElementById("calculate");
addSemester();
function calculateGPA() {
    calculateButton.disabled=false
}

function addSemester() {
    let semesterContainer = document.getElementById("semester-container");
    semesterCount++;
    let newSemester = document.createElement("div");
    newSemester.id = "semester";
    newSemester.className = "semesterClass";
    newSemester.innerHTML = `<h3>semester  ${semesterCount}</h3>`+
                            '<button onclick="addCourse(this.parentNode)" class="btn-primary"> add course </button> '+
                            '<button onclick="removeSemester(this.parentNode)" class="btn-primary"> remove semester </button>';

    semesterContainer.appendChild(newSemester);
    calculateButton.disabled=false;

    addCourse(newSemester);
}

function removeSemester(semester){
    semester.remove();
    semesterCount--;
    (semesterCount==0? calculateButton.disabled=true: calculateButton.disabled=false)
}

function addCourse(semesterDiv){
    let newCourse = document.createElement("div");
    newCourse.className = "Course"

    let courseName = document.createElement("input");
    courseName.type = "text";

    let courseCredit = document.createElement("input");
    courseCredit.type = "number";

    let gradeSelectInput = document.createElement("select");
    let initialOption = document.createElement("option");
    initialOption.text = "Select Grade";
    initialOption.disabled = true;
    initialOption.selected = true;
    gradeSelectInput.appendChild(initialOption);

    let removeCourse = document.createElement("button");
    removeCourse.onclick = function(){
        removeCourseFunction(newCourse);
    }

    let grades = [
        "A+",
        "A",
        "A-",
        "B+",
        "B",
        "B-",
        "C+",
        "C",
        "C-",
        "D+",
        "D",
        "D-",
        "F",
    ]

    for(let i = 0; i<grades.length; i++){
        let option = document.createElement("option");
        option.value = grades[i];
        option.text = grades[i]
        gradeSelectInput.appendChild(option);
    }

    newCourse.appendChild(courseName)
    newCourse.appendChild(gradeSelectInput);
    newCourse.appendChild(courseCredit);

    semesterDiv.appendChild(newCourse);
}

function removeCourseFunction(course){
    course.remove();
}