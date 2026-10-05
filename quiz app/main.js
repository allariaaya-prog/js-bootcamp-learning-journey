//select elements
let countSpan = document.querySelector(".quiz_info .count span");
let bulletsSpanContainer = document.querySelector(".bullets .spans");
let quizArea = document.querySelector(".quiz_area");
let answersArea = document.querySelector(".answers_area");
let submitButton = document.querySelector(".submit_btn");
let bullets = document.querySelector(".bullets");
let resultsContainer = document.querySelector(".results");
let countdownElement = document.querySelector(".countdown");


//set options
let currentIndex = 0;
let rightAnswers = 0;
let countdownInterval;

function get() {

    // Create a new XMLHttpRequest object
    // This object allows us to send a request to get data from a file or server
    let myRequest = new XMLHttpRequest();


    // This function runs whenever the state of the request changes
    myRequest.onreadystatechange = function() {

        // readyState === 4 means the request is completely finished
        // status === 200 means the request was successful (OK)
        if (this.readyState === 4 && this.status === 200) {

            // Convert the JSON string from the response into a JavaScript object/array
            let questionsObject = JSON.parse(this.responseText);

            // Get the number of questions
            let questionsCount = questionsObject.length;

            // Create the question navigation bullets
            createBullets(questionsCount);

            //add question data for the first question
            addData(questionsObject[currentIndex], questionsCount);

            //start countdown for the first question
            countDown(10, questionsCount);

            //click on submit button
            submitButton.onclick = () => {

                // Get the right answer for the current question
                let theRightAnswer = questionsObject[currentIndex].right_answer;

                // Increase the current index to move to the next question
                currentIndex++;

                // Check the answer and update the score
                checkAnswer(theRightAnswer, questionsCount);

                // Clear the previous question and answers from the UI
                quizArea.innerHTML = "";
                answersArea.innerHTML = "";

                //add question data for the next question
                addData(questionsObject[currentIndex], questionsCount);

                //handle bullets class on
                handleBullets();

                //remove the previous countdown interval to avoid multiple intervals running
                clearInterval(countdownInterval);

                //start countdown for the next question
                countDown(10, questionsCount);

                //show results
                showResults(questionsCount);

            };
        }
    }

    // Open the request: GET method, file name, true = asynchronous
    myRequest.open('GET', 'questions.json', true);

    // Send the request to the server/file
    myRequest.send();
}

get();

function createBullets(num) {

    // Set the total number of questions in the UI
    countSpan.innerHTML = num;

    //create spans for each question
    for (let i = 0; i < num; i++) {

        // Create a new span element
        let theBullet = document.createElement("span");

        // If it's the first question, give it the "on" class to highlight it
        if(i === 0){
            theBullet.className = "on";
        }

        //append it to the bullets container
        bulletsSpanContainer.appendChild(theBullet);
    }
}



function addData(obj, count) {

    // Only add data if there are still questions left
    // (after the last question, obj is undefined)
    if (currentIndex < count) {

        //create h2 question title
        let questionTitle = document.createElement("h2");

        //create question text
        let questionText = document.createTextNode(obj.title);

        //append text to h2
        questionTitle.appendChild(questionText);

        //append h2 to quiz area
        quizArea.appendChild(questionTitle);

        //create the answers
        for (let i = 1; i <= 4; i++) {

            //create main answer div
            let mainDiv = document.createElement("div");

            //add class to main div
            mainDiv.className = "answer";

            //create radio input
            let radioInput = document.createElement("input");

            //add type + name + id + data-attribute
            radioInput.type = "radio";
            radioInput.name = "question";
            radioInput.id = `answer_${i}`;
            radioInput.dataset.answer = obj[`answer_${i}`];

            //make first option selected
            if(i === 1){
                radioInput.checked = true;
            }

            //create label
            let theLabel = document.createElement("label");

            //add for attribute
            theLabel.htmlFor = `answer_${i}`;

            //append answer text to label
            theLabel.appendChild(document.createTextNode(obj[`answer_${i}`]));

            //append elements to main div
            mainDiv.appendChild(radioInput);
            mainDiv.appendChild(theLabel);

            //append main div to answers area
            answersArea.appendChild(mainDiv);
        }
    }
}


function checkAnswer(rAnswer, count) {

    let answers = document.getElementsByName("question");
    let theChoosenAnswer;

    for (let i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            theChoosenAnswer = answers[i].dataset.answer;
            break;
        }
    }

    //print the right answer and the chosen answer to the console
    console.log(`Right Answer: ${rAnswer}`);
    console.log(`Choosen Answer: ${theChoosenAnswer}`);

    // Compare the chosen answer with the right answer
    if (theChoosenAnswer === rAnswer) {
        rightAnswers++;
        console.log(`Right Answers Count: ${rightAnswers}`);

    }
}

function handleBullets() {

    let bulletsSpans = document.querySelectorAll(".bullets .spans span");
    let arrayOfSpans = Array.from(bulletsSpans);

    arrayOfSpans.forEach((span, index) => {

        if (currentIndex === index) {
            span.className = "on";
        }
    })
}

function showResults(count) {

    let theResults;

    if(currentIndex === count) {

        //remove quiz area and answers area
        quizArea.remove();
        answersArea.remove();
        submitButton.remove();
        bullets.remove();

        if(rightAnswers > (count / 2) && rightAnswers < count) {
            theResults = `<span class="good">Good</span>, ${rightAnswers} From ${count}`;
        }

        else if(rightAnswers === count) {
            theResults = `<span class="perfect">Perfect</span>, All Answers Are Good`;
        }

        else{
            theResults = `<span class="bad">Bad</span>, ${rightAnswers} From ${count}`;
        }

        // Show the result only at the end of the quiz
        resultsContainer.innerHTML = theResults;
        resultsContainer.style.padding = "10px";
        resultsContainer.style.backgroundColor = "white";
        resultsContainer.style.marginTop = "10px";
    }
}

function countDown(duration, count) {
    if(currentIndex < count) {
        let minutes, seconds;

        countdownInterval = setInterval(function () {

            // Calculate the minutes and seconds from the duration
            minutes = parseInt(duration / 60);
            seconds = parseInt(duration % 60);

            countdownElement.innerHTML = `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

            if(--duration < 0) {
                clearInterval(countdownInterval);
                submitButton.click();
            }
        }, 1000);
    }
}