addEventListener("DOMContentLoaded", function() {
console.log("Form Script Loaded")
let isPurchased = false;

let nameCheck = false;
let nameErrorCheck = false;

let cardNumCheck = false;
let cardNumError = false;
let securityCodeCheck = false;
let securityPasswordCheck = false;
let expirationDateICheck = false;
let expirationDateIError = false;

 this.document.querySelector(".myContinueButton").innerHTML = "متابعة";
 this.document.querySelector(".mainPurchasedPara").innerHTML = "اختر وسيلة الدفع";
 this.document.querySelector(".myPurchasedPara").innerHTML = "الرجاء اختيار وسيلة الدفع المفضلة لإتمام عمليتك";

 let myCardData = {}


 myCardData.wayOfPayment = "visa-card"
    // Choosing a way of payment (master, visa, ...stc)
    const chosenCircles = document.querySelectorAll('.chosenCircle');
    const innerCircles = document.querySelectorAll('.myVeryInnerCircle');

    chosenCircles.forEach(chosenCircle => {
        chosenCircle.addEventListener('click', () => {
            const target = chosenCircle.getAttribute('data-target');
            hideAllOptions(innerCircles);
            document.querySelector(`.${target}`).classList.remove('hidden');
            
            myCardData.wayOfPayment = this.document.querySelector(`.choice-${target.toString().slice(17, 18)}`).id

        });
    });

    // Function to hide all inner circles
    function hideAllOptions(innerCircles) {
        innerCircles.forEach(innerCircle => {
            innerCircle.classList.add('hidden');
        });
    }

 this.document.querySelector(".myContinueButton").addEventListener("click", () => {

    
     if (isPurchased){
         if (this.document.getElementById("userInput").value === "") {
             this.document.getElementById("userInput").classList.replace("myUserName-input", "myWarningInput-input");
             this.document.querySelector(".myPasswordWarning-para0").classList.remove("hidden");

             nameCheck = false;

         }else {
             this.document.getElementById("userInput").classList.replace("myWarningInput-input", "myUserName-input");
             this.document.querySelector(".myPasswordWarning-para0").classList.add("hidden");
             nameCheck = true;
         }

         if (this.document.getElementById("cardNumInput1").value === "") {
             this.document.getElementById("cardNumInput1").classList.replace("myUserName-input", "myWarningInput-input");
             this.document.querySelector(".myPasswordWarning-para1").classList.remove("hidden");

             cardNumCheck = false;

         }else {
             this.document.getElementById("cardNumInput1").classList.replace("myWarningInput-input", "myUserName-input");
             this.document.querySelector(".myPasswordWarning-para1").classList.add("hidden");
             cardNumCheck = true;
         }

         if (this.document.getElementById("securityCodeInput").value === "") {
             this.document.getElementById("securityCodeInput").classList.replace("myUserName-input", "myWarningInput-input");
             this.document.querySelector(".myPasswordWarning-para2").classList.remove("hidden");

             securityCodeCheck = false;

         }else {
             this.document.getElementById("securityCodeInput").classList.replace("myWarningInput-input", "myUserName-input");
             this.document.querySelector(".myPasswordWarning-para2").classList.add("hidden");
             securityCodeCheck = true;
         }

         if (this.document.getElementById("expirationDateInput").value === "") {
             this.document.getElementById("expirationDateInput").classList.replace("myUserName-input", "myWarningInput-input");
             this.document.querySelector(".myPasswordWarning-para3").classList.remove("hidden");

             expirationDateICheck = false;

         }else {
             this.document.getElementById("expirationDateInput").classList.replace("myWarningInput-input", "myUserName-input");
             this.document.querySelector(".myPasswordWarning-para3").classList.add("hidden");
             expirationDateICheck = true;
         }
         
         if (stringIncNum(this.document.getElementById("userInput").value) === true && this.document.getElementById("userInput").value !== "") {
           
            this.document.querySelector(".myPasswordError-para1").classList.remove("hidden");
            this.document.getElementById("userInput").classList.replace("myUserName-input" ,"myErrorInput-input");
            nameErrorCheck = false;
        }else {
   
            this.document.querySelector(".myPasswordError-para1").classList.add("hidden");
            this.document.getElementById("userInput").classList.replace("myErrorInput-input", "myUserName-input");
            nameErrorCheck = true;
            
        }

        if (this.document.getElementById("cardNumInput1").value !== "" && NumIncString(this.document.getElementById("cardNumInput1").value) === true) {
            this.document.getElementById("cardNumInput1").classList.replace("myUserName-input", "myErrorInput-input");
            this.document.querySelector(".myPasswordError-para2").classList.remove("hidden");
           
            cardNumError = false;

        }else {
            this.document.getElementById("cardNumInput1").classList.replace("myErrorInput-input", "myUserName-input");
            this.document.querySelector(".myPasswordError-para2").classList.add("hidden");
 
            cardNumError = true;
        }



        if (this.document.getElementById("securityCodeInput").value !== "" && NumIncString(this.document.getElementById("securityCodeInput").value) === true) {
            this.document.getElementById("securityCodeInput").classList.replace("myUserName-input", "myErrorInput-input");
            this.document.querySelector(".myPasswordError-para3").classList.remove("hidden");
           
            securityPasswordCheck = false;

        }else {
            this.document.getElementById("securityCodeInput").classList.replace("myErrorInput-input", "myUserName-input" )
            this.document.querySelector(".myPasswordError-para3").classList.add("hidden");
 
            securityPasswordCheck = true;
        }
        if (this.document.getElementById("expirationDateInput").value !== "" && NumIncString(this.document.getElementById("expirationDateInput").value) === true) {
            this.document.getElementById("expirationDateInput").classList.replace("myUserName-input", "myErrorInput-input");
            this.document.querySelector(".myPasswordError-para4").classList.remove("hidden");
           
            expirationDateIError = false;

        }else {
            this.document.getElementById("expirationDateInput").classList.replace("myErrorInput-input", "myUserName-input")
            this.document.querySelector(".myPasswordError-para4").classList.add("hidden");

            expirationDateIError = true;
        }

         if (nameCheck && cardNumCheck && securityCodeCheck && expirationDateICheck && expirationDateIError && nameErrorCheck && cardNumError && securityPasswordCheck){
             this.document.querySelector(".payingContainer").classList.remove("hidden");

            myCardData.name = this.document.getElementById("userInput").value;
            myCardData.cardNum = this.document.getElementById("cardNumInput1").value;
            myCardData.securityCode = this.document.getElementById("securityCodeInput").value;
            myCardData.expirationDate = this.document.getElementById("securityCodeInput").value;

            console.log(myCardData)

             
             
         }


     }else {
     this.document.querySelector(".mainPurchasedPara").innerHTML = "معلومات البطاقة"
     this.document.querySelector(".myContinueButton").innerHTML = "شراء"
     this.document.querySelector(".myPurchasedPara").innerHTML = "يرجى تقديم تفاصيل بطاقتك لإكمال عملية الدفع بنجاح"
     this.document.querySelector(".myInnerContent").innerHTML = `

     <p class="myInfoPara"> اسم حامل البطاقة </p>
     <input class="myUserName-input" id="userInput" placeholder="ادخل اسمك" /> 
     <p class="hidden myPasswordWarning-para myPasswordWarning-para0"> لايمكن ترك الحقل فارغ </p>
     <p class="hidden myPasswordError-para myPasswordError-para1"> يجب ان لايحتوي الاسم على رموز او ارقام </p>

     <p class="myInfoPara"> رقم البطاقة </p>
     <input id="cardNumInput1" class="myUserName-input" placeholder="4000 - 1234 - 5678 - 9010" /> 
     <p class="hidden myPasswordWarning-para myPasswordWarning-para1"> لايمكن ترك الحقل فارغ </p>
     <p class="hidden myPasswordError-para myPasswordError-para2"> تجب ان لا يحتوي على احرف </p>

     <div style="display: flex; justify-content: space-between;"> 
         <div > 
             <p class="myInfoPara" > CVV / كود الحماية </p>
             <input id="securityCodeInput" class="myUserName-input" type="password" placeholder="******" /> 
             <p class=" myPasswordWarning-para myPasswordWarning-para2 hidden" > لايمكن ترك الحقل فارغ </p>
             <p   class="hidden myPasswordError-para myPasswordError-para3"> تجب ان لا يحتوي على احرف </p>
         </div>
         
         <div > 
             <p class="myInfoPara" > تاريخ الانتهاء </p>
             <input id="expirationDateInput" class="myUserName-input"  placeholder=" 2023 / 01 "/> 
             <p class=" myPasswordWarning-para myPasswordWarning-para3 hidden" > لايمكن ترك الحقل فارغ </p>
             <p  class="hidden myPasswordError-para myPasswordError-para4"> تجب ان لا يحتوي على احرف </p>
         </div>
     </div>
     `

     this.document.getElementById("circlePara2").classList.replace("unselectedCirclePara", "circlePara");
     this.document.getElementById("circle2").classList.replace("unselectedCircle", "circle");

     this.document.getElementById("myLine1").classList.replace("myUnselectedLine", "myLine");

     isPurchased = true
     }
     
 })

 this.document.querySelector(".changePassword-para").addEventListener("click", () => {
     this.document.querySelector(".AccountContainder").classList.add("hidden");

     this.document.querySelector(".ForgetPasswordContainer").classList.remove("hidden");



 })

 let emptyPassword1 = false;
 let emptyPassword2 = false;
 let emptyPassword3 = false;

 let errorPassword4 = false;

 this.document.querySelector(".mySaveInfoButton").addEventListener("click", () => {
 if (this.document.getElementById("password1").value === ""){
     this.document.getElementById("warning1").classList.remove("hidden");
     this.document.getElementById("password1").classList.replace("myPasswordInput-input", "myWarningInput-input")
     emptyPassword1 = false
     
 }else {
     
     this.document.getElementById("warning1").classList.add("hidden");
     this.document.getElementById("password1").classList.replace("myWarningInput-input", "myPasswordInput-input");
     emptyPassword1 = true
 }
 
 if (this.document.getElementById("password2").value === ""){
     this.document.getElementById("warning2").classList.remove("hidden");
     this.document.getElementById("password2").classList.replace("myPasswordInput-input", "myWarningInput-input")
     emptyPassword2 = false
 }else {
     emptyPassword2 = true
     this.document.getElementById("warning2").classList.add("hidden");
     this.document.getElementById("password2").classList.replace("myWarningInput-input", "myPasswordInput-input")
 }

 if (this.document.getElementById("password3").value === ""){
     this.document.getElementById("warning3").classList.remove("hidden");
     this.document.getElementById("password3").classList.replace("myPasswordInput-input", "myWarningInput-input")
     emptyPassword3 = false
 }else {
     
     this.document.getElementById("warning3").classList.add("hidden");
     this.document.getElementById("password3").classList.replace("myWarningInput-input", "myPasswordInput-input");
     emptyPassword3 = true
 }
 if (this.document.getElementById("password3").value !== "" && this.document.getElementById("password2").value !== this.document.getElementById("password3").value) {
     this.document.getElementById("error1").classList.remove("hidden");
     this.document.getElementById("password3").classList.replace("myPasswordInput-input", "myErrorInput-input");
     errorPassword4 = false;

 }else {
     this.document.getElementById("error1").classList.add("hidden");
     this.document.getElementById("password3").classList.replace("myErrorInput-input", "myPasswordInput-input");
     errorPassword4 = true
 }

 if (emptyPassword1 && emptyPassword2 && emptyPassword3 && errorPassword4){
    this.document.querySelector(".InfoSaved").classList.remove("hidden")
     console.log("Correct!!")
 }

})

this.document.querySelector(".myCancelButton").addEventListener("click", () => {

 this.document.querySelector(".AccountContainder").classList.remove("hidden");
 this.document.querySelector(".ForgetPasswordContainer").classList.add("hidden");

})



let show0 = true
this.document.querySelector(".myShowPasswordButton-btn0").addEventListener("click", () => {
if (show0){
 this.document.getElementById("password0").type = ""
 this.document.getElementById("myPasswordImage-img0").src = "/Site/myImages/Svg/eye_svgrepo.com.png"
 show0 = false
}else {
 this.document.getElementById("password0").type = "password";
 this.document.getElementById("myPasswordImage-img0").src = "/Site/myImages/Svg/eye-closed_svgrepo.com.png"
 show0 = true
}
})

let show1 = true
 this.document.querySelector(".myShowPasswordButton-btn1").addEventListener("click", () => {
   if (show1){
     this.document.getElementById("password1").type = ""
     this.document.getElementById("myPasswordImage-img1").src = "/Site/myImages/Svg/eye_svgrepo.com.png"
     show1 = false
   }else {
     this.document.getElementById("password1").type = "password";
     this.document.getElementById("myPasswordImage-img1").src = "/Site/myImages/Svg/eye-closed_svgrepo.com.png"
     show1 = true
   }
 })

let show2 = true
this.document.querySelector(".myShowPasswordButton-btn2").addEventListener("click", () => {
if (show2){
 this.document.getElementById("password2").type = ""
 this.document.getElementById("myPasswordImage-img2").src = "/Site/myImages/Svg/eye_svgrepo.com.png"
 show2 = false
}else {
 this.document.getElementById("password2").type = "password";
 this.document.getElementById("myPasswordImage-img2").src = "/Site/myImages/Svg/eye-closed_svgrepo.com.png"
 show2 = true
}
})

let show3 = true
this.document.querySelector(".myShowPasswordButton-btn3").addEventListener("click", () => {
if (show3){
 this.document.getElementById("password3").type = ""
 this.document.getElementById("myPasswordImage-img3").src = "/Site/myImages/Svg/eye_svgrepo.com.png"
 show3 = false
}else {
 this.document.getElementById("password3").type = "password";
 this.document.getElementById("myPasswordImage-img3").src = "/Site/myImages/Svg/eye-closed_svgrepo.com.png"
 show3 = true
}
})


let errorPassword5 = false;
let errorPassword6 = false;
let errorPassword7 = false;
let errorPassword8 = false

this.document.getElementById("mySaveInfoButton").addEventListener("click", () => {
 if (this.document.getElementById("userNameInput1").value === ""){
     this.document.querySelector(".emptyInputWarning5").classList.remove("hidden");
     this.document.getElementById("userNameInput1").classList.replace("myUserName-input", "myWarningInput-input")

     errorPassword5 = false;
 }else {
     this.document.querySelector(".emptyInputWarning5").classList.add("hidden");
     this.document.getElementById("userNameInput1").classList.replace( "myWarningInput-input", "myUserName-input")

     errorPassword5 = true;
 }

 if (stringIncNum(this.document.getElementById("userNameInput1").value) === true){
    this.document.querySelector(".emptyInputError5").classList.remove("hidden");
    this.document.getElementById("userNameInput1").classList.replace("myUserName-input", "myErrorInput-input");
    errorPassword8 = false;
   

}else {
    this.document.querySelector(".emptyInputError5").classList.add("hidden");
    this.document.getElementById("userNameInput1").classList.replace( "myErrorInput-input", "myUserName-input");
    errorPassword8 = true;
}
 

 if (this.document.getElementById("userEmailInput1").value === ""){
     this.document.querySelector(".emptyInputWarning6").classList.remove("hidden");
     this.document.getElementById("userEmailInput1").classList.replace("myUserName-input", "myWarningInput-input")

     errorPassword6 = false;
 }else {
     this.document.querySelector(".emptyInputWarning6").classList.add("hidden");

     this.document.getElementById("userEmailInput1").classList.replace("myWarningInput-input", "myUserName-input")

     errorPassword6 = true;
 }

 if (this.document.getElementById("password0").value === ""){
     this.document.querySelector(".emptyInputWarning7").classList.remove("hidden");
     this.document.getElementById("password0").classList.replace("myPasswordInput-input", "myWarningInput-input" )

     errorPassword7 = false;
 }else {
     this.document.querySelector(".emptyInputWarning7").classList.add("hidden");
     this.document.getElementById("password0").classList.replace("myWarningInput-input", "myPasswordInput-input" )

     errorPassword7 = true;
 }

 if (errorPassword5 && errorPassword6 && errorPassword7 && errorPassword8){
    this.document.querySelector(".InfoSaved").classList.remove("hidden")
 }

})

   let showMyPassword = true;

    this.document.querySelector(".myShowPasswordButton-btn0").addEventListener("click", () => {
        if (showMyPassword === true){
            this.document.getElementById("myPasswordImage-img0").src = "/Site/myImages/Svg/eye_svgrepo.com.png"
            this.document.getElementById("password0").type = ""
            showMyPassword = false;

        }else if (showMyPassword === false){
            this.document.getElementById("myPasswordImage-img0").src = "/Site/myImages/Svg/eye-closed_svgrepo.com.png"
            this.document.getElementById("password0").type = "password"
            showMyPassword = true;
            
        }

    })

    this.document.getElementById("option5").addEventListener("click", () => {
        this.document.querySelector(".SignOutContainer").classList.remove("hidden");
    })

    this.document.querySelector(".continue-btn").addEventListener("click", () => {
        this.document.querySelector(".SignOutContainer").classList.add("hidden");
    })
       // To check if a string includes a number
    
       const stringIncNum = (value) => {
      

        if (/\d/.test(value) || /[!??؟/@#$^&*()]/.test(value)) {
            return true
        }else {return false}

    }

    // To check if a string includes a number
    const NumIncString = (value) => {
    

        if (/[^0-9 -/]/.test(value)) {
            return true
        }else {return false}

    }
})


     