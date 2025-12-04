const questions = [
{
    text: "Which keyword declares a constant in Javascript?",
    options:["var","let","const","static"],
    correctIndex:2
},
{
    text: "Which method is used to log to the console?",
    options:["print()","log()","console()","console.log()"],
    correctIndex:3
},
{
    text: "Which of these is not a JavaScript data type?",
    options:["number","string","boolean","character"],
    correctIndex:3
}];
let currentQuestionIndex=0;
showQuestion();

function showQuestion(){
    document.getElementById("qnum").innerHTML=`Question ${currentQuestionIndex+1} of ${questions.length}`;
    document.getElementById("ques").innerHTML=questions[currentQuestionIndex].text;
    document.getElementById("option-1").innerHTML=questions[currentQuestionIndex].options[0];
    document.getElementById("option-2").innerHTML=questions[currentQuestionIndex].options[1];
    document.getElementById("option-3").innerHTML=questions[currentQuestionIndex].options[2];
    document.getElementById("option-4").innerHTML=questions[currentQuestionIndex].options[3];
}

nextBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(currentQuestionIndex<questions.length-1){
        currentQuestionIndex++;
        showQuestion();
    }
})