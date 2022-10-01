
//Question bank
var questionBank= [
  {
      question : 'Where is Lazy J Custom Meats Located?',
      option : ['Lyndon', 'Osage City', 'Burlingame', 'Carbondle'],
      answer : 'Osage City '
  },
  {
      question : 'What services does Lazy J Custom Meats offer?',
      option : ['Custom Meat Processing', 'Retail Meats', 'Both Custom & Retail', 'None The Above'],
      answer : 'Both Custom & Retail'
  },
  {
      question : 'What reatil meats do they sell?',
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
      question : 'How many different sections is on a chicken?',
      option : ['7', '4', '5 ', '8'],
      answer : '4'
  },
  {
      question : 'How long do you wait before processing a chicken?',
      option : [' 6 to 8 hours', '2 hours', '5 hours', '24 hours'],
      answer : '6 to 8'
  },
  {
      question : 'How many different sections are on a deer?',
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
    next.addEventListener('click',nextQuestion);
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
    // setTimeout(nextQuestion,300);
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