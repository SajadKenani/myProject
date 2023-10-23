addEventListener("DOMContentLoaded", function() {
    // Getting The forms to change their content...
    const  MainSignInForm = this.document.querySelector(".MainSignInForm");
    const  forgotPassForm = this.document.querySelector(".forgotPassForm");
    const  sendingEmailForm = this.document.querySelector(".sendingEmailForm");
    const  Checking_Password_Form = this.document.querySelector(".Checking_Password_Form");
    const  Password_Sucsessfuly_Changed = this.document.querySelector(".Password_Sucsessfuly_Changed")
    
    // getting the links and buttons (the content will be changed after clicking on these)...
    const sendingEmailButton = this.document.getElementById("sendingEmailButton-btn");
    const sending_Checking_Password_Button = this.document.getElementById("sending_Checking_Password_Button-btn");
    const verifying_Changing_Password_Button_btn = this.document.getElementById("verifying_Changing_Password_Button_btn")
    const forgotPasswordPara = this.document.querySelector(".forgotPassword-para");
    const myLowerRightPara = this.document.querySelector(".myLowerRightPara-para");
    
    const myEmailInput = this.document.querySelector(".myEmailInput-input");
    const myEmailInput1 = this.document.querySelector(".myEmailInput-input1");
    
    const myForgottenEmailInput = this.document.getElementById("myForgottenEmailInput-input");

    const myPasswordInput = this.document.querySelector(".myPasswordInput-input");

    const myNewPasswordInput = this.document.querySelector(".myNewPasswordInput-input");
    const myCheckedPasswordInput = this.document.querySelector(".myVerifiedPasswordInput-input");
   

    const emailExistanceError = this.document.getElementById("emailExistanceError");
    const emailLengthError = this.document.getElementById("emailLengthError");

    const emailSendingExistanceError = this.document.getElementById("emailSendingExistanceError");
    const emailSendingLengthError = this.document.getElementById("emailSendingLengthError");

    const passwordExistanceError = this.document.getElementById("passwordExistanceError");
    const passwordLengthError = this.document.getElementById("passwordLengthError");

    const newPasswordExistanceError = this.document.getElementById("newPasswordExistanceError");
    const newPasswordLengthError = this.document.getElementById("newPasswordLengthError");

    const newPasswordCheckedExistanceError = this.document.getElementById("newPasswordCheckedExistanceError");
    const newPasswordTrueError = this.document.getElementById("newPasswordTrueError");

    const mySignInbutton = this.document.getElementById("mySignInbutton-btn");

    const myBoxInputOne = this.document.querySelector(".myBoxInputOne-input");
    const myBoxInputTwo = this.document.querySelector(".myBoxInputTwo-input");
    const myBoxInputThree = this.document.querySelector(".myBoxInputThree-input");
    const myBoxInputFour = this.document.querySelector(".myBoxInputFour-input");
    

    const myShowPasswordButton = this.document.querySelector(".myShowPasswordButton-btn");
    const myShowPasswordButton2 = this.document.querySelector(".myShowPasswordButton-btn2");
    const myShowPasswordButton3 = this.document.querySelector(".myShowPasswordButton-btn3");

    const myPasswordImage = this.document.getElementById("myPasswordImage-img");
    const myPasswordImage2 = this.document.getElementById("myPasswordImage-img2");
    const myPasswordImage3 = this.document.getElementById("myPasswordImage-img3");

    let activeImage = false;
    let activeImage2 = false;
    let activeImage3 = false;

    let forgottenAccout = {
        userName: "",
        userPassword: "",
    }

    let userTypedEmail = {
        newUserEmail: "",
    }

    let newUsersPassword = {
        newUserPassword: "",
    }

    let userTypedCheckingNumbers = {
        newUserCheckingNumbers: "",
    }


    myShowPasswordButton.addEventListener("click", (event) => {
        event.preventDefault();
        activeImage = !activeImage;

        if (activeImage) {
            myPasswordImage.src = "/Site/myImages/Svg/eye_svgrepo.com.png";
            myPasswordInput.type = "";

        }else {
            myPasswordImage.src = "/Site/myImages/Svg/eye-closed_svgrepo.com.png";
            myPasswordInput.type = "password";

        }
    })

    myShowPasswordButton2.addEventListener("click", (event) => {
        event.preventDefault();
        activeImage2 = !activeImage2;

        if (activeImage2) {
            myPasswordImage2.src = "/Site/myImages/Svg/eye_svgrepo.com.png";
            myNewPasswordInput.type = "";

        }else {
            myPasswordImage2.src = "/Site/myImages/Svg/eye-closed_svgrepo.com.png";
            myNewPasswordInput.type = "password";
   
        }
    })

    myShowPasswordButton3.addEventListener("click", (event) => {
        event.preventDefault();
        activeImage3 = !activeImage3;

        if (activeImage3) {
            myPasswordImage3.src = "/Site/myImages/Svg/eye_svgrepo.com.png";
            myCheckedPasswordInput.type = "";

        }else {
            myPasswordImage3.src = "/Site/myImages/Svg/eye-closed_svgrepo.com.png";
            myCheckedPasswordInput.type = "password";
 
        }
    })


    let myVerifiedEmail = false;
    let myVerifiedPassword = false;

    let userTypedNumbers = [[], [], [], []]

    myBoxInputOne.addEventListener("input", (event) => {
        myBoxInputOne.value = (myBoxInputOne.value).split("").slice(0, 1).join();
        userTypedNumbers[0] =  myBoxInputOne.value;
 
        myBoxInputTwo.focus()
    })
    myBoxInputTwo.addEventListener("input", (event) => {
        myBoxInputTwo.value = (myBoxInputTwo.value).split("").slice(0, 1).join();
        userTypedNumbers[1] = myBoxInputTwo.value;
   
        myBoxInputThree.focus()
    })
    myBoxInputThree.addEventListener("input", (event) => {
        myBoxInputThree.value = (myBoxInputThree.value).split("").slice(0, 1).join();
        userTypedNumbers[2] = myBoxInputThree.value;

        myBoxInputFour.focus()
    })
    myBoxInputFour.addEventListener("input", (event) => {
        myBoxInputFour.value = (myBoxInputFour.value).split("").slice(0, 1).join();
        userTypedNumbers[3] = myBoxInputFour.value;

    })

  


mySignInbutton.addEventListener("click", (event) => {
    
    if (myEmailInput.value === "" || myEmailInput.value === null){
        emailExistanceError.classList.remove("hiddenError");
        emailLengthError.classList.add("hiddenError");

        myEmailInput.classList.add("myWarningInput-input");
        myEmailInput.classList.remove("myErrorInput-input");

        event.preventDefault();

        myVerifiedEmail = false;

    }else if ((myEmailInput.value).split("").length < 7){
        emailExistanceError.classList.add("hiddenError");
        emailLengthError.classList.remove("hiddenError");

        myEmailInput.classList.remove("myWarningInput-input");
        myEmailInput.classList.add("myErrorInput-input");

        event.preventDefault();

        myVerifiedEmail = false;

    }else {
        myVerifiedEmail = true;

        emailExistanceError.classList.add("hiddenError");
        emailLengthError.classList.add("hiddenError");

        myEmailInput.classList.remove("myWarningInput-input");
        myEmailInput.classList.remove("myWarningInput-input");

        event.preventDefault();

        console.log("Email is verified");

    }
    if (myPasswordInput.value === "" || myPasswordInput.value === null){
        passwordExistanceError.classList.remove("hiddenError");
        passwordLengthError.classList.add("hiddenError");

        myPasswordInput.classList.add("myWarningInput-input");
        myPasswordInput.classList.remove("myErrorInput-input");

        event.preventDefault();

        myVerifiedPassword = false;

    }else if ((myPasswordInput.value).split("").length < 7){
        passwordExistanceError.classList.add("hiddenError");
        passwordLengthError.classList.remove("hiddenError");

        myPasswordInput.classList.remove("myWarningInput-input");
        myPasswordInput.classList.add("myErrorInput-input");

        event.preventDefault();

        myVerifiedPassword = false;

    }else {
        passwordExistanceError.classList.add("hiddenError");
        passwordLengthError.classList.add("hiddenError");

        myPasswordInput.classList.remove("myWarningInput-input");
        myPasswordInput.classList.remove("myErrorInput-input");

        event.preventDefault();

        myVerifiedPassword = true;

    }
    if (myVerifiedPassword && myVerifiedEmail){
        console.log("Account Checked!!")

        forgottenAccout.userName = myEmailInput.value;
        forgottenAccout.userPassword = myPasswordInput.value;

        console.log(forgottenAccout)

        window.location.replace("/HomePage.html");
    }
})

    forgotPasswordPara.addEventListener("click", function(event) {

        event.preventDefault();
        // hiding all the forms...
        hideAllForms();

        // to make this form appear
        forgotPassForm.classList.remove("form--hidden");
        
       
    })

    sendingEmailButton.addEventListener("click", function (event) {
        if (myForgottenEmailInput.value === "" || myForgottenEmailInput.value === null){
            event.preventDefault();
            emailSendingExistanceError.classList.remove("hiddenError");
            emailSendingLengthError.classList.add("hiddenError");

            myEmailInput1.classList.add("myWarningInput-input");
            myEmailInput1.classList.remove("myErrorInput-input");
            
            
        }else if ((myForgottenEmailInput.value).split("").length < 7) {
            event.preventDefault();
            emailSendingExistanceError.classList.add("hiddenError");
            emailSendingLengthError.classList.remove("hiddenError");
            
            myEmailInput1.classList.remove("myWarningInput-input");
            myEmailInput1.classList.add("myErrorInput-input");
            
        }else {
        event.preventDefault();

        emailSendingExistanceError.classList.add("hiddenError");
        emailSendingLengthError.classList.add("hiddenError");

        myEmailInput1.classList.remove("myWarningInput-input");

        userTypedEmail.newUserEmail = myForgottenEmailInput.value;
        console.log(userTypedEmail.newUserEmail);

        // hiding all the forms...
        hideAllForms();

        // to make this form appear
        Checking_Password_Form.classList.remove("form--hidden");
        }
    })

    let myBoxInputOneBoolean = false;
    let myBoxInputTwoBoolean = false;
    let myBoxInputThreeBoolean = false;
    let myBoxInputFourBoolean = false;

    sending_Checking_Password_Button.addEventListener("click", (event) => {
 
        
        if (myBoxInputOne.value === "" || myBoxInputOne.value === null || Number(myBoxInputOne.value) === false){
            myBoxInputOneBoolean = false;
            event.preventDefault();

        }else {myBoxInputOneBoolean = true; event.preventDefault();}

        if (myBoxInputTwo.value === "" || myBoxInputTwo.value === null || Number(myBoxInputTwo.value) === false){
            myBoxInputTwoBoolean = false;
            event.preventDefault();

        }else {myBoxInputTwoBoolean = true; event.preventDefault();}

        if (myBoxInputThree.value === "" || myBoxInputThree.value === null || Number(myBoxInputThree.value) === false){
            myBoxInputThreeBoolean = false;
            event.preventDefault();

        }else {myBoxInputThreeBoolean = true; event.preventDefault();}

        if (myBoxInputFour.value === "" || myBoxInputFour.value === null || Number(myBoxInputFour.value) === false){
            myBoxInputFourBoolean = false;
            event.preventDefault();

        }else {myBoxInputFourBoolean = true; event.preventDefault();}

       
       if (myBoxInputOneBoolean && myBoxInputTwoBoolean && myBoxInputThreeBoolean && myBoxInputFourBoolean){
        event.preventDefault();
        // hiding all the forms...
        hideAllForms();

        userTypedCheckingNumbers.newUserCheckingNumbers = userTypedNumbers;
        console.log("User's Typed Numbers: " +  userTypedCheckingNumbers.newUserCheckingNumbers);

        // to make this form appear
        sendingEmailForm.classList.remove("form--hidden");

        
       }
       
    })

    let newVerifiedPassword = false;
    let newVerifiedPasswordCheck = false;

    verifying_Changing_Password_Button_btn.addEventListener("click", (event) => {
       
        if (myNewPasswordInput.value === "" || myNewPasswordInput.value == null){
            console.log("Existace Error");
            event.preventDefault();
            
            newPasswordExistanceError.classList.remove("hiddenError");
            newPasswordLengthError.classList.add("hiddenError");

            myNewPasswordInput.classList.add("myWarningInput-input");
            myNewPasswordInput.classList.remove("myErrorInput-input");

            newVerifiedPassword = false;
        } else if ((myNewPasswordInput.value).length < 7){
            console.log("Length Error");
            event.preventDefault();

            newPasswordLengthError.classList.remove("hiddenError");
            newPasswordExistanceError.classList.add("hiddenError");

            myNewPasswordInput.classList.remove("myWarningInput-input");
            myNewPasswordInput.classList.add("myErrorInput-input");

            newVerifiedPassword = false;
        }else {
            event.preventDefault();
            newPasswordLengthError.classList.add("hiddenError");
            newPasswordExistanceError.classList.add("hiddenError");

            myNewPasswordInput.classList.remove("myWarningInput-input");
            myNewPasswordInput.classList.remove("myErrorInput-input");

            newVerifiedPassword = true;

        }

        if (myCheckedPasswordInput.value === "" || myCheckedPasswordInput.value === null){
            event.preventDefault();

            newPasswordCheckedExistanceError.classList.remove("hiddenError");
            newPasswordTrueError.classList.add("hiddenError");

            myCheckedPasswordInput.classList.add("myWarningInput-input");
            myCheckedPasswordInput.classList.remove("myErrorInput-input");

            newVerifiedPasswordCheck = false;
         }else if(myCheckedPasswordInput.value !== myNewPasswordInput.value){

            newPasswordTrueError.classList.remove("hiddenError")
            newPasswordCheckedExistanceError.classList.add("hiddenError");
         
            myCheckedPasswordInput.classList.remove("myWarningInput-input");
            myCheckedPasswordInput.classList.add("myErrorInput-input");

            newVerifiedPasswordCheck = false;
         }else {

            newPasswordTrueError.classList.add("hiddenError")
            newPasswordCheckedExistanceError.classList.add("hiddenError");

            myCheckedPasswordInput.classList.remove("myWarningInput-input");
            myCheckedPasswordInput.classList.remove("myErrorInput-input");

            newVerifiedPasswordCheck = true
         }

        // To check if the both of passwords are typed properly
        if(newVerifiedPasswordCheck && newVerifiedPassword){
            console.log("Passwords Checked!!");
            newUsersPassword.newUserPassword = myCheckedPasswordInput.value;

            // User's New Password //////////////////////
            console.log("User's New Password: " + newUsersPassword.newUserPassword )
            // to make this form appear
            Password_Sucsessfuly_Changed.classList.remove("form--hidden");

            this.document.querySelector(".myButton-btn").addEventListener("click", () => {
                // To go to the home page
                window.location.replace("/HomePage.html");
   
           })
         

        }
    })

    myLowerRightPara.addEventListener("click", (event) => {
        event.preventDefault();

        // going to another page..
        window.location.replace("/signUp.html");
    })

    // To hide all the forms
    function hideAllForms(){
        MainSignInForm.classList.add("form--hidden");
        forgotPassForm.classList.add("form--hidden");
        sendingEmailForm.classList.add("form--hidden");
        Checking_Password_Form.classList.add("form--hidden");
    }

   
})
