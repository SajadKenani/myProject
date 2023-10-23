addEventListener("DOMContentLoaded", function() {

    
    const myEmailInput = this.document.querySelector(".myEmailInput-input");
    const myNameInput = this.document.querySelector(".myNameInput-input");

    const myShowPasswordButton = this.document.querySelector(".myShowPasswordButton-btn");
    const myShowPasswordButton2 = this.document.querySelector(".myShowPasswordButton-btn2");

    const myPasswordImage = this.document.getElementById("myPasswordImage-img");
    const myPasswordImage2 = this.document.getElementById("myPasswordImage-img2")

    const myPasswordInput = this.document.querySelector(".myPasswordInput-input");
    const myPasswordInput2 = this.document.querySelector(".myPasswordInput-input2")
    const myVerifiedPasswordInput = this.document.querySelector(".myVerifiedPasswordInput-input");
    
    let verifiedName = false;
    let verifiedEmail = false;
    
    let verifiedPassword = false;
    let verifiedPasswordCheck = false;

    const emailExistanceError = this.document.getElementById("emailExistanceError");
    const emailLengthError = this.document.getElementById("emailLengthError");
    const nameLengthError = this.document.getElementById("NameExistanceError");

    const passwordExistanceError = this.document.getElementById("passwordExistanceError");
    const passwordLengthError = this.document.getElementById("passwordLengthError");

    const passwordCheckedError = this.document.getElementById("passwordCheckedError");
    const passwordCheckedExistanceError = this.document.getElementById("passwordCheckedExistanceError");

    // Getting The forms to change their content...
    let myEmailForm = this.document.querySelector(".formEmail");
    let myPasswordForm = this.document.querySelector(".formPassword");

    // getting the links and buttons (the content will be changed after clicking on these)...
    let myLowerRightPara = this.document.querySelector(".myLowerRightPara-para");

    let myButton = this.document.querySelector(".myButton-btn");
    let mySubmitButton = this.document.querySelector(".mySubmitButton-btn");

    let myUserSignUpAccountInfo = {

        userName: "",
        userEmail: "",
        userPassword: "",
    }

    // changing the content after clicking the button
    myButton.addEventListener("click", function(event) {

        // Checking If the user typed their email correctly
       
        if (myEmailInput.value === "" || myEmailInput.value == null){
            console.log("Existace Error");
            event.preventDefault();

            emailExistanceError.classList.remove("hiddenError");
            emailLengthError.classList.add("hiddenError");

            myEmailInput.classList.add("myWarningInput-input");
            myEmailInput.classList.remove("myErrorInput-input");

            verifiedEmail = false;
        }else if ((myEmailInput.value).split("").length < 10 ){
            console.log("Length Error");
            event.preventDefault();

            emailLengthError.classList.remove("hiddenError");
            emailExistanceError.classList.add("hiddenError");

            myEmailInput.classList.remove("myWarningInput-input");
            myEmailInput.classList.add("myErrorInput-input");
            verifiedEmail = false;
        }else {
            verifiedEmail = true;

            emailLengthError.classList.add("hiddenError");
            emailExistanceError.classList.add("hiddenError");

            myEmailInput.classList.remove("myErrorInput-input");
            myEmailInput.classList.remove("myWarningInput-input");
        }

        // Checking If the user typed their name correctly

        if (myNameInput.value === "" || myNameInput.value == null){
            console.log("Existace Error");
            event.preventDefault();

            verifiedName = false
            nameLengthError.classList.remove("hiddenError");
            myNameInput.classList.add("myWarningInput-input");
           


        }else {
            event.preventDefault();
            verifiedName = true
            nameLengthError.classList.add("hiddenError");
            myNameInput.classList.remove("myWarningInput-input");
            
        }

        // Going to the next page if there are no errors 

        if (verifiedName && verifiedEmail){
            event.preventDefault();
            // adding this class to make the new content appear
            myEmailForm.classList.add("form--hidden");
            // to hide the old content
            myPasswordForm.classList.remove("form--hidden");

            myUserSignUpAccountInfo.userName = myNameInput.value;
            myUserSignUpAccountInfo.userEmail = myEmailInput.value;

        }
        
    })

    

    let showPassword = false;
    let showPassword2 = false;

    myShowPasswordButton.addEventListener("click", (event) => {

        if (showPassword){
            event.preventDefault();
            showPassword = !showPassword;
            myPasswordInput.type = "password"
            myPasswordImage.src = "/Site/myImages/Svg/eye-closed_svgrepo.com.png"
           
        }else {
            event.preventDefault();
            showPassword = !showPassword;
            myPasswordInput.type = ""
            myPasswordImage.src = "/Site/myImages/Svg/eye_svgrepo.com.png"

        }

        console.log(showPassword);

    })

    myShowPasswordButton2.addEventListener("click", (event) => {

        if (showPassword2){
            event.preventDefault();
            showPassword2 = !showPassword2;
            myVerifiedPasswordInput.type = "password"
            myPasswordImage2.src = "/Site/myImages/Svg/eye-closed_svgrepo.com.png"
           
        }else {
            event.preventDefault();
            showPassword2 = !showPassword2;
            myVerifiedPasswordInput.type = ""
            myPasswordImage2.src = "/Site/myImages/Svg/eye_svgrepo.com.png"

        }

    })
    

      // changing the content after clicking the button
      mySubmitButton.addEventListener("click", function(event) {
        if (myPasswordInput2.value === "" || myPasswordInput2.value == null){
            console.log("Existace Error");
            event.preventDefault();
            passwordExistanceError.classList.remove("hiddenError");
            passwordLengthError.classList.add("hiddenError");


            myPasswordInput2.classList.add("myWarningInput-input");
            myPasswordInput2.classList.remove("myErrorInput-input");

            verifiedPassword = false;
        } else if ((myPasswordInput2.value).split("").length < 10){
            console.log("Length Error");
            event.preventDefault();
            passwordLengthError.classList.remove("hiddenError");
            passwordExistanceError.classList.add("hiddenError");


            myPasswordInput2.classList.add("myErrorInput-input");
            myPasswordInput2.classList.remove("myWarningInput-input");
            

            verifiedPassword = false;
        }else {

            event.preventDefault();
            passwordLengthError.classList.add("hiddenError");
            passwordExistanceError.classList.add("hiddenError");

            myPasswordInput2.classList.remove("myErrorInput-input");
            myPasswordInput2.classList.remove("myWarningInput-input");
            verifiedPassword = true;

        }

        if (myVerifiedPasswordInput.value === "" || myVerifiedPasswordInput.value === null){
            event.preventDefault();

            passwordCheckedExistanceError.classList.remove("hiddenError");
            passwordCheckedError.classList.add("hiddenError");

            myVerifiedPasswordInput.classList.add("myWarningInput-input");
            myVerifiedPasswordInput.classList.remove("myErrorInput-input");

            verifiedPasswordCheck = false;
        }else if(myPasswordInput2.value !== myVerifiedPasswordInput.value && myVerifiedPasswordInput.value !== ""){
            event.preventDefault();

            passwordCheckedError.classList.remove("hiddenError");
            passwordCheckedExistanceError.classList.add("hiddenError");

            myVerifiedPasswordInput.classList.add("myErrorInput-input");
            myVerifiedPasswordInput.classList.remove("myWarningInput-input");


            verifiedPasswordCheck = false;
        } else {
            event.preventDefault();

            passwordCheckedError.classList.add("hiddenError")
            passwordCheckedExistanceError.classList.add("hiddenError");

            myVerifiedPasswordInput.classList.remove("myErrorInput-input");
            myVerifiedPasswordInput.classList.remove("myWarningInput-input");

            verifiedPasswordCheck = true
        }

        // To check if the both of passwords are typed properly
        if(verifiedPasswordCheck && verifiedPassword){
            console.log("Passwords Checked!!")
            myUserSignUpAccountInfo.userPassword = myPasswordInput2.value;
            ///////// User's Info ///////////
            console.log(myUserSignUpAccountInfo);
        }

    })

    // changing the content after clicking the paragraph
    myLowerRightPara.addEventListener("click", function(event) {
        event.preventDefault();
        // Go to sign in page (whole different page)
        window.location.replace("/signIn.html")
    })
})

