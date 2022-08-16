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

            // first try for loader

            // setTimeout(function() {
            //     document.getElementById('container').style.display = 'none'
            //     document.getElementById('loading').style.display = 'block'
            // }, 4000)

            //second try for loader
            /*
            window.onload(
    setTimeout(function() {
        document.getElementById('container').style.display = 'none'
        document.getElementById('loading').style.display = 'block'
    }, 4000)
)  */


            location.href = '/sections/welcome.html'; // redirect to the next page
        } else {
            swal("Incorrect Password", "Please Enter the Correct Password", "error");
        }
    } else {
        swal("User Not Found", "Please Register Your Account First", "error");

    }


}

function logout() {
    window.location.href = '/index.html'
}

function python() {
    window.location.href = '/sections/python.html'
}

//  After login Page Functionality