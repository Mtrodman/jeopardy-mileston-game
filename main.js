// const startButton = document.getElementById('start-btn')
// const nextButton = document.getElementById('next-btn')
// const questionContainerElement = document.getElementById('questionbox')
// const questionElement = document.getElementById('question')
// const answerButtonsElement = document.getElementById('answer-buttons')

// let shuffledQuestions, currentQuestionIndex

// startButton.addEventListener('click', startGame)
// nextButton.addEventListener('click', () => {
//   currentQuestionIndex++
//   setNextQuestion()
// })

// function startGame() {
//   startButton.classList.add('hide')
//   shuffledQuestions = questions.sort(() => Math.random() - .5)
//   currentQuestionIndex = 0
//   questionContainerElement.classList.remove('hide')
//   setNextQuestion()
// }

// function setNextQuestion() {
//   resetState()
//   showQuestion(shuffledQuestions[currentQuestionIndex])
// }

// function showQuestion(question) {
//   questionElement.innerText = question.question
//   question.answers.forEach(answer => {
//     const button = document.createElement('button')
//     button.innerText = answer.text
//     button.classList.add('btn')
//     if (answer.correct) {
//       button.dataset.correct = answer.correct
//     }
//     button.addEventListener('click', selectAnswer)
//     answerButtonsElement.appendChild(button)
//   })
// }

// function resetState() {
//   clearStatusClass(document.body)
//   nextButton.classList.add('hide')
//   while (answerButtonsElement.firstChild) {
//     answerButtonsElement.removeChild(answerButtonsElement.firstChild)
//   }
// }

// let score = 0;
// function selectAnswer(e) {
//   var selectedButton = e.target
//   const correct = selectedButton.dataset.correct
//   setStatusClass(document.body, correct)
//   Array.from(answerButtonsElement.children).forEach(button => {
//     setStatusClass(button, button.dataset.correct)
//   })
//   if (shuffledQuestions.length > currentQuestionIndex + 1) {
//     nextButton.classList.remove('hide')
//   } else {
//     startButton.innerText = 'Restart'
//     startButton.classList.remove('hide')
//   }
// }

// function setStatusClass(element, correct) {
//   clearStatusClass(element)
//   if (correct) {
//     element.classList.add('correct')
//   } else {
//     element.classList.add('wrong')
//   }
// }

// function clearStatusClass(element) {
//   element.classList.remove('correct')
//   element.classList.remove('wrong')
// }




// // var selectedButton = correct;
// function increase(){
//   var questions = getElementById("questions");
//   question.value = true;
//   score ++;
//   return score;
// }



// const questions = [
//   {
//     question: 'Where is Lazy J Custom Meats Located ?',
//     answers: [
//       { text: 'Lydon, Ks', correct: false },
//       { text: 'Osage City, Ks', correct: true },
//       { text: 'Burlingame, Ks', correct: false},
//       { text: 'Carbondale, Ks', correct: false},
//     ]
//   },
//   {
//     question: 'What services does Lazy J Custom Meats offer',
//     answers: [
//       { text: 'Custom meat processing', correct: false },
//       { text: 'Retail meats', correct: false},
//       { text: 'Both Custom and Retail', correct: true },
//       { text: 'None of the above', correct: false}
//     ]
//   },
//   {
//     question: 'What reatil meats do they sell',
//     answers: [
//       { text: 'Beef', correct: false},
//       { text: 'Pork', correct: false },
//       { text: 'Chicken', correct: false },
//       { text: 'All of the above', correct: true },
//     ]
//   },
//   {
//     question: 'How many differnt sections of meat can you get from a cow?',
//     answers: [
//       { text: '8', correct: true },
//       { text: '6', correct: false },
//       { text: '10', correct: false },
//       { text: '4', correct: false },
//     ]
//   },
//   {
//     question: 'How long to you hang a cow before processing?',
//     answers: [
//       { text: 'At least 5 days', correct: false },
//       { text: 'At least 3 days', correct: false },
//       { text: 'At least 7 days', correct: false },
//       { text: 'At least 10 days', correct: true },
//     ]
//   },
//   {
//     question: 'How many different types of steak are there?',
//     answers: [
//       { text: '13', correct: false },
//       { text: '12', correct: false },
//       { text: '8', correct: true },
//       { text: '5', correct: false },
//     ]
//   },
//   {
//     question: 'Whats the most tender cut of steak?',
//     answers: [
//       { text: 'KC Strip', correct: false },
//       { text: 'Rib Eye', correct: false },
//       { text: 'Sirloin', correct: false },
//       { text: 'Filet Mignon', correct: true },
//     ]
//   },
//   {
//     question: 'What is the toughest part of meat on a cow?',
//     answers: [
//       { text: 'The Shanks', correct: false },
//       { text: 'Shoulder', correct: false },
//       { text: 'Brisket', correct: false },
//       { text: 'All of the above', correct: true },
//     ]
//   },
//   {
//     question: 'How many sections of meat are on a pig?',
//     answers: [
//       { text: '3', correct: false },
//       { text: '5', correct: true },
//       { text: '10', correct: false },
//       { text: '7', correct: false },
//     ]
//   },
//   {
//     question: 'What are some common cuts of meat from a pig?',
//     answers: [
//       { text: 'chops', correct: false },
//       { text: 'Boston Butt', correct: false},
//       { text: 'Ham', correct: false },
//       { text: 'All of the above', correct: true },
//     ]
//   },
//   {
//     question: 'How long do you wait before processing a pig?',
//     answers: [
//       { text: '2 Days', correct: false },
//       { text: '8 Hours', correct: false},
//       { text: '24 Hours', correct: true },
//       { text: '10 Hours', correct: false },
//     ]
//   },
  
//   {
//     question: 'What is the toughest part of meat on a pig?',
//     answers: [
//       { text: 'Ham', correct: false },
//       { text: 'Hock', correct: false},
//       { text: 'Pork Shoulder', correct: true },
//       { text: 'Head', correct: false },
//     ]
//   },
//   {
//     question: 'How many different sections is on a chicken',
//     answers: [
//       { text: '8', correct: false },
//       { text: '4', correct: true},
//       { text: '7', correct: false },
//       { text: '3', correct: false },
//     ]
//   },
//   {
//     question: 'How long do you wait before processing a chicken',
//     answers: [
//       { text: '6 to 8 Hours', correct: true },
//       { text: '2 to 3 Hours', correct: false},
//       { text: '5 to 10 Hours', correct: false },
//       { text: '2 Hours', correct: false },
//     ]
//   },
//   {
//     question: 'How many different sections are on a deer',
//     answers: [
//       { text: '6', correct: false},
//       { text: '5', correct: false},
//       { text: '4', correct: true },
//       { text: '2', correct: false },
//     ]
//   },
 

// ]

//Question bank
var questionBank= [
  {
      question : 'Where is Lazy J Custom Meats Located ?',
      option : ['Lyndon', 'Osage City', 'Burlingame', 'Carbondle'],
      answer : 'Osage City '
  },
  {
      question : 'What services does Lazy J Custom Meats offer',
      option : ['Custom Meat Processing', 'Retail Meats', 'Both Custom & Retail', 'None The Above'],
      answer : 'Both Custom & Retail'
  },
  {
      question : 'What reatil meats do they sell',
      option : ['Beef', 'Pork', 'Chicken', 'All of the Above'],
      answer : 'All of the above'
  },
  {
      question : 'How many differnt sections of meat can you get from a cow?',
      option : ['8', '10', '9', '6'],
      answer : '8'
  },
  {
      question : 'How long to you hang a cow before processing?',
      option : ['5 days', '7 days', '10 days', '3 days'],
      answer : '10 days'
  },
  {
      question : 'How many different types of steak are there?',
      option : ['8', '10', '12', '5'],
      answer : '8'
  },
  {
      question : 'Whats the most tender cut of steak?',
      option : ['KC Strip', 'Sirloin', 'Rib Eye', 'Filet Mignon'],
      answer : 'Filet Mignon'
  },
  {
      question : 'What is the toughest part of meat on a cow?',
      option : ['Shanks', 'Shoulders', 'Brisket', 'All of the above'],
      answer : 'All of the above'
  },
  {
      question : 'How many sections of meat are on a pig?',
      option : ['5', '8', '3', '10'],
      answer : '5'
  },
  {
      question : 'What are some common cuts of meat from a pig?',
      option : ['Chops', 'Boston Butt', 'Ham', 'All of the above'],
      answer : 'All of the above'
  },
  {
      question : 'What is the toughest part of meat on a pig?',
      option : ['Ham', 'Hock', 'Pork Shoulder', 'Head'],
      answer : 'Pork Shoulder'
  },
  {
      question : 'How many different sections is on a chicken',
      option : ['7', '4', '5 ', '8'],
      answer : '4'
  },
  {
      question : 'How long do you wait before processing a chicken',
      option : [' 6 to 8 hours', '2 hours', '5 hours', '24 hours'],
      answer : '6 to 8'
  },
  {
      question : 'How many different sections are on a deer',
      option : ['4', '10 ', '5 ', '2 '],
      answer : '4'
  },
  {
      question : 'How long do you let a deer hand before processing?',
      option : ['24 hours', '8 hours', '5 hours', '2 to 4 days'],
      answer : '2 to 4 days'
  },
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();