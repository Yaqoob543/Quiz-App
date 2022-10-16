function signUp() {
    var signUpName = document.getElementById('signUp_Name').value
    var signUpEmail = document.getElementById('signUp_Email').value
    var signUpPass = document.getElementById('signUp_Pass').value
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var nameRegex = /^[a-zA-Z]/;


    // Validation of Registration From
    if (emailRegex.test(signUpEmail)) {
        if (nameRegex.test(signUpName)) {
            if (signUpPass.length > 7) {
                swal("Registration Successful", "Now Please Log In to Take Quiz", "success");

                // Saving Data in Localstorage
                window.localStorage.setItem('data', JSON.stringify({
                    name: signUpName,
                    email: signUpEmail,
                    password: signUpPass
                }))
                var obj = JSON.parse(localStorage.getItem('data'))
                var reqName = obj.name
                console.log(reqName)
            } else {
                swal("Short Password", "Password Should Contain 8 Characters", "error");
            }
        } else {
            swal("Invalid Name", "Name Should Not Contain Numbers", "error");
        }
    } else {
        swal("Invalid Email", "Please Enter a Valid Email Address", "error");

    }
}

function login() {
    // Checking User Login Details then Login
    var loginEmail = document.getElementById('loginEmail').value
    var loginPass = document.getElementById('loginPass').value
    var storage = JSON.parse(localStorage.getItem('data'))

    if (loginEmail === storage.email) {
        if (loginPass === storage.password) {

            location.href = '/sections/welcome.html'; // redirect to the next page
        } else {
            swal("Incorrect Password", "Please Enter the Correct Password", "error");
        }
    } else {
        swal("User Not Found", "Please Register Your Account First", "error");

    }


}
//Logout Function 
function logout() {
    swal({
            title: "LogOut?",
            text: "Are You sure want to Logout ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                window.location.href = '/index.html'
            } else {}
        });

}

function python() {
    window.location.href = '/sections/python.html'
}

function web() {
    window.location.href = '/sections/web.html'
}

function jswindow() {
    window.location.href = '/sections/jsQuiz.html'
}


function moduleExam() {
    window.location.href = '/sections/module.html'
}

function scores() {
    window.location.href = '/sections/results.html'
}

var htmlCssQuiz = [{
        que: 'What does HTML stand for?',
        ans1: 'Hyper Text Markup Language',
        ans2: 'How to meet Ladies',
        ans3: 'Hyperlink and Text Markup Language',
        ans4: 'Home Tool Markup Language',
        anskey: 'Hyper Text Markup Language'
    },
    {
        que: 'Who is Making the Web Standards?',
        ans1: 'The World Wide Web Consortium',
        ans2: 'Google',
        ans3: 'Microsoft',
        ans4: 'IBM',
        anskey: 'The World Wide Web Consortium'
    },
    {
        que: 'What is the correct HTML for referring to an external style sheet?',
        ans1: "< link rel = 'stylesheet' type = 'text/css' href = 'mystyle.css'",
        ans2: "< style src  'mystyle.css' >",
        ans3: "< stylesheet > mystyle.css < /stylesheet >",
        ans4: '< rel style.css >',
        anskey: "< link rel = 'stylesheet' type = 'text/css' href = 'mystyle.css'"

    },
    {
        que: 'How do you insert a comment in a CSS file?',
        ans1: "'this is comment",
        ans2: "//this is a comment",
        ans3: "......this is a comment",
        ans4: "/* this is a comment */ ",
        anskey: "/* this is a comment */ "
    }, {
        que: 'What is the correct HTML Element for inserting a line Break',
        ans1: "break",
        ans2: '< Ib >',
        ans3: "< break >",
        ans4: "< br > ",
        anskey: "< br > "
    }, {
        que: 'How can you make a numbered list ?',
        ans1: '< list >',
        ans2: '< ol >',
        ans3: '< dl >',
        ans4: '< ul >',
        ans5: '< ol >'
    }, {
        que: 'What is the difference between HTML and CSS?',
        ans1: 'CSS is one type of HTML',
        ans2: 'HTML gives a webpage structure. CSS provides styling.',
        ans3: 'There is no difference.',
        ans4: 'CSS structures a webpage. HTML strictly provides styling.',
        anskey: 'HTML gives a webpage structure. CSS provides styling.'
    }, {
        que: 'Which of the following property is used to set the text direction?',
        ans1: 'color',
        ans2: 'direction',
        ans3: 'letter-spacing',
        ans4: 'word-spacing',
        anskey: 'direction'
    }, {
        que: "Which of the following property changes the color of bottom border?",
        ans1: 'border-color',
        ans2: 'border-width',
        ans3: 'border-style',
        ans4: 'border-bottom-color',
        anskey: 'border-bottom-color'
    }, {
        que: "Which of the following property is used to set the width of an image border?",
        ans1: 'border',
        ans2: 'height',
        ans3: 'width',
        ans4: 'moz-opacity',
        anskey: 'width'
    }, {
        que: 'What is the function of a title tag?',
        ans1: 'stores webpage title for browser and search engine results',
        ans2: 'show server how to index the website',
        ans3: 'shows meta information about the title',
        ans4: 'shows server how to title the website',
        anskey: 'stores webpage title for browser and search engine results'
    }, {
        que: 'How to resize a background image using CSS3?',
        ans1: 'bg-dimensions: 80px 60px;',
        ans2: 'background-size: 80px 60px;',
        ans3: 'background-proportion: 80px 60px;',
        ans4: 'alpha-effect: bg-resize 80px 60px;',
        anskey: 'background-size: 80px 60px;'
    }, {
        que: 'What is used to signify a closing tag?',
        ans1: ':',
        ans2: '/',
        ans3: '*',
        ans4: '$',
        anskey: '/'
    }, {
        que: 'Which tag makes bold text ?',
        ans1: '<bold>',
        ans2: '<strong>',
        ans3: '<bigtext>',
        ans4: '<big>',
        anskey: '<strong>'
    }, {
        que: 'What does CSS Stand for',
        ans1: 'Creative Style Sheets',
        ans2: 'Computer Style Spread',
        ans3: 'Colorful Style Spread',
        ans4: 'Cascading Style Sheets'
    }
]



var question = document.getElementById('question')
var opt1 = document.getElementById('textOpt1')
var opt2 = document.getElementById('textOpt2')
var opt3 = document.getElementById('textOpt3')
var opt4 = document.getElementById('textOpt4')
var ans = document.getElementsByClassName('answer1')
var btn = document.getElementById('next')
var inp1 = document.getElementById('ans1')
var inp2 = document.getElementById('ans2')
var inp3 = document.getElementById('ans3')
var inp4 = document.getElementById('ans4')


function htmlWindow() {
    window.location.href = '/sections/htmlquiz.html'

}

var queCount = 0
var score = 0


function htmlQuiz() {
    var getQuestion = htmlCssQuiz[queCount]
    question.innerHTML = getQuestion.que
    opt1.innerHTML = getQuestion.ans1
    opt2.innerHTML = getQuestion.ans2
    opt3.innerHTML = getQuestion.ans3
    opt4.innerHTML = getQuestion.ans4
    inp1.value = getQuestion.ans1
    inp2.value = getQuestion.ans2
    inp3.value = getQuestion.ans3
    inp4.value = getQuestion.ans4
}
window.onload = htmlQuiz()

function next() {
    //Reading and checking value of selected option
    for (var i = 0; i < ans.length; i++) {
        if (ans[i].checked) {
            console.log(ans[i].value)
            if (ans[i].value === htmlCssQuiz[queCount].anskey) {
                score++
            }
        }
    }
    console.log(score)
    queCount++
    //Next Question
    if (queCount < htmlCssQuiz.length) {
        htmlQuiz()
        deSelect()

    } else {


        //Showing Result with Score
        document.getElementById('quizWindow').style.display = 'none'
        document.getElementById('resultWindow').style.display = 'block'
        var totalQue = document.getElementById('totalQue')
        var correctQue = document.getElementById('correctQue')
        totalQue.innerText = htmlCssQuiz.length
        correctQue.innerText = score
        var per = document.getElementById('per')
        var CalculatePer = (score / htmlCssQuiz.length) * 100
        var calculation = Math.round(CalculatePer) + "%"
        per.innerText = calculation


        //Setting score in loal storage

        // window.localStorage.setItem('htmlScore', JSON.stringify({
        //     'Score': calculation
        // }))
        // var check = JSON.parse(localStorage.getItem('htmlScore'))
        // document.getElementById('html').innerHTML = check

        //Conditions of Result display as per score
        if (CalculatePer < 70) {
            var msg = document.getElementById('result')

            var dial = document.getElementById('dial')
            msg.innerText = 'Better Luck Next Time ! You Failed'
            msg.style.color = 'red'
            dial.style.borderColor = 'red'
            CalculatePer.style.color = 'red'
        } else {
            var msg = document.getElementById('result')
            var dial = document.getElementById('dial')
            msg.innerText = 'Congratulations ! You Passed'
            msg.style.color = 'green'
            dial.style.borderColor = 'green'
            CalculatePer.style.color = 'green !important'
        }
    }
}
//Deselect next radio
function deSelect() {
    for (var i = 0; i < ans.length; i++) {
        ans[i].checked = false
    }
}

//return to home from result
function back() {
    window.location.href = '/sections/welcome.html'
}