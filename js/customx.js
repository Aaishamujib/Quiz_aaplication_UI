// Initial load 
window.onload = (event) => {
    timer();
    questionInit(0);
};


// Question button Action 
function radioBtnSelect(event) {
    let val = event.currentTarget.value;
    document.getElementById("answerBtn").setAttribute("attr-val", val);
}


//Questions array

const questions = [
    {

        question: "Which of the following is the correct syntax for referring the external style sheet?",
        option: [
            "<style src = example.css>",
            '<style src = "example.css">',
            '<stylesheet> example.css </stylesheet>',
            '<link rel="stylesheet" type="text/css" href="example.css">'],
        answer: 3
    },
    {
        question: "CSS stands for -",
        option: [
            "Cascade style sheets",
            "Color and style sheets",
            "Cascading style sheets",
            "None of the above"],
        answer: 2
    },
    {
        question: "The property in CSS used to change the background color of an element is -",
        option: [
            "bgcolor",
            "color",
            "background-color",
            "All of the above"],
        answer: 2
    },
    {
        question: "The CSS property used to control the element's font-size is -",
        option: [
            "text-style",
            "text-size",
            "font-size",
            "None of the above"],
        answer: 2
    },
    {
        question: "The HTML attribute used to define the inline styles is -",
        option: [
            "style",
            "styles",
            "class",
            "None of the above"],
        answer: 0
    },
    {
        question: "The HTML attribute used to define the internal stylesheet is -",
        option: [
            "<style>",
            "style",
            "<link>",
            "<script>"],
        answer: 0
    },
    {
        question: "Which of the following CSS property is used to set the background image of an element?",
        option: [
            "background-attachment",
            "background-image",
            "background-color",
            "None of the above"],
        answer: 1
    },
    {
        question: "Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?",
        option: [
            "p {background-color : yellow;}",
            "p {background-color : #yellow;}",
            "all {background-color : yellow;}",
            "all p {background-color : #yellow;}"],
        answer: 0
    },
    {
        question: "Which of the following is the correct syntax to display the hyperlinks without any underline?",
        option: [
            "a {text-decoration : underline;}",
            "a {decoration : no-underline;}",
            "a {text-decoration : none;}",
            "None of the above"],
        answer: 2
    },
    {
        question: "Which of the following property is used as the shorthand property for the padding properties?",
        option: [
            "padding-left",
            "padding-right",
            "padding",
            "All of the above"],
        answer: 2
    },
];


// results array 
var result = 0;

// Integrate Questions with option 
function questionInit(page = 0) {
    document.getElementById("answerBtn").setAttribute("attr-val", "");
    if (page < questions.length) {
        document.getElementById("question").innerHTML = encodeSpecialCharacter(questions[page].question);
        document.getElementById("answerBtn").setAttribute("attr-page", page);
        for (let i = 0; i < document.querySelectorAll(".answer").length; i++) {
            document.querySelectorAll(".answer")[i].checked = false;
            document.querySelectorAll(".answer")[i].value = encodeSpecialCharacter(questions[page].option[i]);
            document.querySelectorAll(".answer_label")[i].innerHTML = encodeSpecialCharacter(questions[page].option[i]);

        }
    }
    else {
        clearInterval();
        document.getElementById("resultDiv").classList.remove("hidediv");
        document.getElementById("quesDiv").classList.add("hidediv");
        document.getElementById("showresult").innerHTML = "Result " + result + " out of " + questions.length + "<br>Total Time : " + fullTime;
    }
}

// on submit answer 
document.getElementById("answerBtn").addEventListener("click", function (event) {
    let pageNo = event.currentTarget.getAttribute("attr-page");
    let tmpVal = event.currentTarget.getAttribute("attr-val");
    if (tmpVal == "" || tmpVal == undefined) {
        alert("you have to select the option");
        return;
    }
    if (pageNo < questions.length) {

        let index = questions[pageNo].answer;
        if (encodeSpecialCharacter(questions[pageNo].option[index]) == tmpVal) {
            result++;
        }
        questionInit(++pageNo);
    }

});

var min = 0;
var sec = 0;
min.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
var fullTime = "";
// Timer function 
function timer() {
    setInterval(function () {
        sec++;
        if (sec > 59) {
            min++;
            sec = 0;
        }
        fullTime = min.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + " : " + sec.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
        document.getElementById("timer").innerHTML = fullTime;
    }, 1000);
}


//encode characters
function encodeSpecialCharacter(str) {
    return str.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}














