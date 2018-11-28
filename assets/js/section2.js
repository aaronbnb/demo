$(document).ready(function() {

    var submitted = false;

    var dynamicDoForm =  $('#dynamic-do-form');
    var brittleDontForm =  $('#dynamic-dont-form');
    
    var emailField = $('#email-address1');
    var passwordField = $('#password1');

    var emailFeedback = $('#sec2-do-email-errors1');
    var passwordFeedback = $('#sec2-do-pw-errors1');

    var errorIcon = $("<span>&#9888;</span>");
    errorIcon.attr('aria-hidden', true);

    var setEmailErrorMessage = function(message) {
        event.preventDefault();
        emailFeedback.attr({
            role: 'alert',

        });
        emailFeedback.text(message);
        emailFeedback.addClass('error');
        emailFeedback.removeClass('valid');
        emailFeedback.prepend(errorIcon);
        emailField.attr({
            "aria-invalid": 'true'
        });
    }

    var setPasswordErrorMessage = function(message) {
        event.preventDefault();
        passwordFeedback.attr({
            role: 'alert',

        })
        passwordFeedback.text(message);
        passwordFeedback.addClass('error');
        passwordFeedback.removeClass('valid');
        passwordFeedback.prepend(errorIcon.clone());
        passwordField.attr({
            "aria-invalid": 'true'
        });
    }

    var acceptPassword = function() {
        passwordFeedback.text("That's a good password!");
        passwordFeedback.removeClass('error');
        passwordFeedback.addClass('valid');
        passwordField.attr({
            "aria-invalid": 'false'
        });
    }

    var acceptEmail = function() {
        emailFeedback.text("That email checks out");
        emailFeedback.removeClass('error');
        emailFeedback.addClass('valid');
        emailField.attr({
            "aria-invalid": 'false'
        });
    }

    var validateEmail = function(email) {
        if(email === "") {
            setEmailErrorMessage(" Email cannot be blank");
        } else if (!email.includes('@')) {
            setEmailErrorMessage(" Email must contain an @");
        } else if (!email.includes('.')) {
            setEmailErrorMessage(" Email must contain an .");
        } else if (email.length < 6) {
            setEmailErrorMessage(" Enter a valid email");
        } else {
            acceptEmail();
            return true;
        }
        return false;
    }

    var validatePassword = function(password) {
        if(password === "") {
            setPasswordErrorMessage(" Password cannot be blank");
        } else if (password.replace(/[^A-Z]/g, "").length === 0) {
            setPasswordErrorMessage(" Password must have a capital letter");
        } else if (password.length < 6) {
            setPasswordErrorMessage(" Enter a password longer than 6 characters");
        } else if (password.replace(/[,|.|,|?]/g, "").length === 0) {
            setPasswordErrorMessage(" Password must have a special character");
        } else {
            acceptPassword();
            return true;
        }
        return false;
    }
    
    dynamicDoForm.on('submit', function(event) {
        submitted = true;

        var emailFieldInput = emailField.val();
        var passwordFieldInput = passwordField.val();
        
        var emailValid = validateEmail(emailFieldInput);
        var passwordValid = validatePassword(passwordFieldInput);

        if(!passwordValid) {
            if(document.activeElement !== emailField) {
                passwordField.focus();
            }
        }
        if(!emailValid) {
            emailField.focus();
        };

        if(emailValid && passwordValid) {
            passwordFeedback.empty();
            passwordFeedback.removeClass('valid error');
            emailField.removeAttr('aria-invalid');

            emailFeedback.empty();
            emailFeedback.removeClass('valid error');
            passwordField.removeAttr('aria-invalid');

            event.preventDefault();

        }
    })

    dynamicDoForm.on('keyup', 'input', function(){
        var input = $(this).val();
        var field = $(this).attr('id');
        if(submitted) {
            if(field === 'email-address1') {
                validateEmail(input); 
            } else {
                validatePassword(input);
            }
        }
    });



    ////// DONT FORM CODE ////////
    brittleDontForm.on('submit', function(event){
        var dontEmailField = $('#email-address2').val();
        var dontPasswordField = $('#password2').val();

        if(dontEmailField.search('[@\.]')) {
            localStorage.setItem('dont-form-errors', 'true');
            localStorage.setItem('dont-form-email', 'true');
        }

        if(dontPasswordField.search('[A-Z]')) {
            localStorage.setItem('dont-form-errors', 'true');
            localStorage.setItem('dont-form-password', 'true');
        }
    })

    if(localStorage.getItem('dont-form-errors')) {
        var brittleErrorBox = $('#brittle-errors');
        brittleErrorBox.addClass('error-box');

        if(localStorage.getItem('dont-form-email')) {
            brittleErrorBox.append('<p class="brittle-error">Email is not valid.</p>')
        }

        if(localStorage.getItem('dont-form-password')) {
            brittleErrorBox.append('<p class="brittle-error">Password is not valid.</p>')
        }

        brittleErrorBox.focus();
        localStorage.removeItem('dont-form-errors');
        localStorage.removeItem('dont-form-password');
        localStorage.removeItem('dont-form-email');
    }


});