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