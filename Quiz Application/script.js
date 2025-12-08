// JavaScript Quiz Application
//Questions Array
const questions = [
  {
    text: "Which keyword declares a constant in JavaScript?",
    options: ["var", "let", "const", "static"],
    correctIndex: 2
  },
  {
    text: "Which method is used to log to the console?",
    options: ["print()", "log()", "console()", "console.log()"],
    correctIndex: 3
  },
  {
    text: "Which of these is not a JavaScript data type?",
    options: ["number", "string", "boolean", "character"],
    correctIndex: 3
  },
  {
    text: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/*", "#", "&lt;!--"],
    correctIndex: 0
  },
  {
    text: "Which operator is used to compare both value and type?",
    options: ["==", "===", "!=", "!=="],
    correctIndex: 1
  },
  {
    text: "What is the default value of an uninitialized variable?",
    options: ["null", "undefined", "0", "false"],
    correctIndex: 1
  },
  {
    text: "Which method converts a JSON string into a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "toObject()", "parseJSON()"],
    correctIndex: 0
  },
  {
    text: "Which loop is guaranteed to run at least once?",
    options: ["for", "while", "do...while", "foreach"],
    correctIndex: 2
  },
  {
    text: "Which keyword is used to handle errors in JavaScript?",
    options: ["catch", "error", "throw", "try"],
    correctIndex: 3
  },
  {
    text: "Which function is used to schedule code execution after a delay?",
    options: ["setTimeout()", "setInterval()", "delay()", "wait()"],
    correctIndex: 0
  }
];

//Collecting all option buttons for easy access
const optionButtons = [
    document.getElementById("option-1"),
    document.getElementById("option-2"),
    document.getElementById("option-3"),
    document.getElementById("option-4")
];

//Variable declarations
let currentQuestionIndex=0;
const nextBtn=document.getElementById("nextBtn");
let score=0;
let selectedOption=null;

//Function to display the current question and options
function showQuestion(){
    document.getElementById("qnum").innerHTML=`Question ${currentQuestionIndex+1} of ${questions.length}`;
    document.getElementById("ques").innerHTML=questions[currentQuestionIndex].text;
    optionButtons.forEach((btn,index)=>{
        btn.textContent=questions[currentQuestionIndex].options[index];
    })
    selectedOption=null;
    resetClasses();
    document.getElementById("message").textContent = "";
    optionButtons.forEach(btn => {
         btn.disabled = false;
    });

}

//Start Button Event Listener
document.getElementById("startBtn").addEventListener('click',()=>{
   document.getElementById("startScreen").classList.add("hidden");
   document.getElementById("quiz-container").classList.remove("hidden");
   showQuestion();
});

//Function to reset option button classes
function resetClasses() {
    optionButtons.forEach(btn => {
        btn.classList.remove("bg-green-600/20","bg-red-600/20","border","border-green-800","border-red-800");
        btn.classList.add("bg-white/20","hover:bg-white/30","hover:border","border-white");
    });
}

//Function to handle option selection
function selectOption(index) {
    selectedOption = index;
    resetClasses();
    document.getElementById("message").textContent = "";
    optionButtons.forEach(btn => {
        btn.disabled = true;
    });
    const btn = optionButtons[index];
    const correctBtn = optionButtons[questions[currentQuestionIndex].correctIndex];
    if(selectedOption===questions[currentQuestionIndex].correctIndex){
        btn.classList.remove("bg-white/20","hover:bg-white/30","hover:border","border-white");
        btn.classList.add("bg-green-600/20", "border", "border-green-800");
    }
    else{
        btn.classList.remove("bg-white/20","hover:bg-white/30","hover:border","border-white");
        btn.classList.add("bg-red-600/20", "border", "border-red-800");
        correctBtn.classList.remove("bg-white/20","hover:bg-white/30","hover:border","border-white");
        correctBtn.classList.add("bg-green-600/20", "border", "border-green-800");
    }
}

//Option Buttons Event Listener
optionButtons.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
        selectOption(index);
    });
});

//Next Button Event Listener
nextBtn.addEventListener('click',()=>{
    if(selectedOption===null){
        document.getElementById("message").textContent = "Please select an option.";
        return;
    }
    if(selectedOption===questions[currentQuestionIndex].correctIndex){
        score++;
    }
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{ 
        document.getElementById("quiz-container").classList.add("hidden");
        const resultScreen=document.getElementById("resultScreen");
        resultScreen.classList.remove("hidden");
        const resultText=document.getElementById("result");
        resultText.textContent=`You scored ${score} / ${questions.length}`;
        document.getElementById("restartBtn").addEventListener('click',()=>{
          location.reload();
        })
    }
  });