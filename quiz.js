$(function () {

    var quizTime = $('#quiz-time')


    var questionAnswers = [
        {
            question: "Who is the First Prime Minister Of India ?",
            options: ["Mahathma Gandhi", "Jawaharlal Nahru", "Rajendra Prasad", "Narendra Modi"],
            correctAnswer: "Jawaharlal Nahru"
        },
        {
            question: "Who is the Father of English language ?",
            options: ["Shakespear", "Chaucer", "H.G wells", "Doyel"],
            correctAnswer: "Chaucer"
        },
        {
            question: "Who is the current prime minister of India ?",
            options: ["Mahathma Gandhi", "Jawaharlal Nahru", "Rajendra Prasad", "Narendra Modi"],
            correctAnswer: "Narendra Modi"
        },
        {
            question: "Who is the current Cheif minister of Kerala ?",
            options: ["Umman chandi", "Ramesh chennithala", "Pinarayi Vijayan", "AK Anthony"],
            correctAnswer: "Pinarayi Vijayan"
        },
        {
            question: "Where is Delhi ?",
            options: ["India", "China", "America", "Pakisthan"],
            correctAnswer: "India"
        },
        {
            question: "Who is the First Prime Minister Of India ?",
            options: ["Mahathma Gandhi", "Jawaharlal Nahru", "Rajendra Prasad", "Narendra Modi"],
            correctAnswer: "Jawaharlal Nahru"
        },
        {
            question: "Who is the Father of English language ?",
            options: ["Shakespear", "Chaucer", "H.G wells", "Doyel"],
            correctAnswer: "Chaucer"
        },
        {
            question: "Who is the current prime minister of India ?",
            options: ["Mahathma Gandhi", "Jawaharlal Nahru", "Rajendra Prasad", "Narendra Modi"],
            correctAnswer: "Narendra Modi"
        },
        {
            question: "Who is the current Cheif minister of Kerala ?",
            options: ["Umman chandi", "Ramesh chennithala", "Pinarayi Vijayan", "AK Anthony"],
            correctAnswer: "Pinarayi Vijayan"
        },
        {
            question: "Where is Delhi ?",
            options: ["India", "China", "America", "Pakisthan"],
            correctAnswer: "India"
        },
        {
            question: "Who is the First Prime Minister Of India ?",
            options: ["Mahathma Gandhi", "Jawaharlal Nahru", "Rajendra Prasad", "Narendra Modi"],
            correctAnswer: "Jawaharlal Nahru"
        },
        {
            question: "Who is the Father of English language ?",
            options: ["Shakespear", "Chaucer", "H.G wells", "Doyel"],
            correctAnswer: "Chaucer"
        },
        {
            question: "Who is the current prime minister of India ?",
            options: ["Mahathma Gandhi", "Jawaharlal Nahru", "Rajendra Prasad", "Narendra Modi"],
            correctAnswer: "Narendra Modi"
        },
        {
            question: "Who is the current Cheif minister of Kerala ?",
            options: ["Umman chandi", "Ramesh chennithala", "Pinarayi Vijayan", "AK Anthony"],
            correctAnswer: "Pinarayi Vijayan"
        },
        {
            question: "Where is Delhi ?",
            options: ["India", "China", "America", "Pakisthan"],
            correctAnswer: "India"
        }

    ];

    var participentForm = $('#participent-form')
    participentForm.on('submit', (e) => {
        var participentNameInput = $('#participent:text').val()
        e.preventDefault()
        var participentForm = $('#participent-form')
        $('#start-quiz').hide()
        quizTime.show()
        $('.participent-name').html(participentNameInput)
        makeQuestion()
        quizTime.removeClass('hide-option')
    })

    var next = $('#next');
    next.on('click', function () {
        $('.answer-options').remove()
        makeQuestion();
    })

    $('#checkScore').on('click', function () {
        showScore()
    })







    var questionCount = 0
    var score = 0;
    var answeredQuestion = [];
    var randNum,optionsData,questionAnswersOptions,correctAnswer;

    function makeQuestion() {
        randNum = Math.floor((Math.random() * questionAnswers.length))
       

        function showQuestion() {
       
            questionAnswersOptions = questionAnswers[randNum];
            $('#question').html('<b>' + questionAnswersOptions.question + '</b>')
            for (var i = 0; i < questionAnswersOptions.options.length; i++) {
                optionsData = questionAnswersOptions.options[i].replace(' ', '-')
                correctAnswer = questionAnswersOptions.correctAnswer.replace(' ', '-')
                var optionNum = i + 1;
                $('#question-num').html(questionCount + 1)
                var options = '<button data="' + optionsData + '" id="answer' + i + '" class="btn col-md-5 bg-white box-shadow m-2 mt-3 pt-3 answer-options"><p><b><span>' + optionNum + '- </span><span>' + questionAnswersOptions.options[i] + '</span></b></p></button>'
                $('#options').append(options)
                $('#next-div').addClass('hide-option')
            }
        }
        if(answeredQuestion.length==0){
            answeredQuestion.push(randNum)
            showQuestion()
        }else{
            for (var i = 0; i < answeredQuestion.length; i++) {
                if (randNum == answeredQuestion[i]) {
                    console.log(randNum)
                } else {
                    answeredQuestion.push(randNum)
                    console.log("hi")
              
                }
            }
        }
        





        var done = false;
        $('.answer-options').on('click', function (e) {
            if (done == false) {
                var $this = $(this);
                var clickedData = $this.attr('data')
                if (clickedData !== correctAnswer) {
                    $this.removeClass('bg-white').addClass('bg-danger')
                    $('.answer-options[data="' + correctAnswer + '"]').removeClass('bg-white').addClass('bg-success')
                } else {
                    $('.answer-options[data="' + correctAnswer + '"]').removeClass('bg-white').addClass('bg-success')
                    score += 1;
                }
                questionCount += 1;
                if (questionAnswers.length == questionCount) {
                    $('#checkScore-div').removeClass('hide-option')

                } else {
                    $('#next-div').removeClass('hide-option');
                }

                done = true;
            } else {
                done = true;
            }

        })
    }

    function showScore() {
        $('#welcome-participent').addClass('hide-option')
        $('#question-section').addClass('hide-option')
        $('#score-section').removeClass('hide-option')
        $('#score').html(score)
        $('#total-score').html(questionAnswers.length);

    }








})