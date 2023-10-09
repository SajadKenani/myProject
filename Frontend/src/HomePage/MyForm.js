let isPurchased = false;

let nameCheck = false;
let cardNumCheck = false;
let securityCodeCheck = false;
let expirationDateICheck = false;

 this.document.querySelector(".myContinueButton").innerHTML = "متابعة";
 this.document.querySelector(".mainPurchasedPara").innerHTML = "اختر وسيلة الدفع";
 this.document.querySelector(".myPurchasedPara").innerHTML = "الرجاء اختيار وسيلة الدفع المفضلة لإتمام عمليتك";

 this.document.querySelector(".myContinueButton").addEventListener("click", () => {

     if (isPurchased){
         if (this.document.getElementById("userInput").value === "") {
             this.document.getElementById("userInput").classList.add("myWarningInput-input");
             this.document.querySelector(".myPasswordWarning-para").classList.remove("hidden");
             console.log('error')
             nameCheck = false;

         }else {
             this.document.getElementById("userInput").classList.remove("myWarningInput-input");
             this.document.querySelector(".myPasswordWarning-para").classList.add("hidden");
             nameCheck = true;
         }

         if (this.document.getElementById("cardNumInput1").value === "") {
             this.document.getElementById("cardNumInput1").classList.add("myWarningInput-input");
             this.document.querySelector(".myPasswordWarning-para1").classList.remove("hidden");
             console.log('error')
             cardNumCheck = false;

         }else {
             this.document.getElementById("cardNumInput1").classList.remove("myWarningInput-input");
             this.document.querySelector(".myPasswordWarning-para1").classList.add("hidden");
             cardNumCheck = true;
         }

         if (this.document.getElementById("securityCodeInput").value === "") {
             this.document.getElementById("securityCodeInput").classList.add("myWarningInput-input");
             this.document.querySelector(".myPasswordWarning-para2").classList.remove("hidden");
             console.log('error')
             securityCodeCheck = false;

         }else {
             this.document.getElementById("securityCodeInput").classList.remove("myWarningInput-input");
             this.document.querySelector(".myPasswordWarning-para2").classList.add("hidden");
             securityCodeCheck = true;
         }

         if (this.document.getElementById("expirationDateInput").value === "") {
             this.document.getElementById("expirationDateInput").classList.add("myWarningInput-input");
             this.document.querySelector(".myPasswordWarning-para3").classList.remove("hidden");
             console.log('error')
             expirationDateICheck = false;

         }else {
             this.document.getElementById("expirationDateInput").classList.remove("myWarningInput-input");
             this.document.querySelector(".myPasswordWarning-para3").classList.add("hidden");
             expirationDateICheck = true;
         }

         if (nameCheck && cardNumCheck && securityCodeCheck && expirationDateICheck){
             this.document.querySelector(".payingContainer").classList.remove("hidden")
             
         }


     }else {
     this.document.querySelector(".mainPurchasedPara").innerHTML = "معلومات البطاقة"
     this.document.querySelector(".myContinueButton").innerHTML = "شراء"
     this.document.querySelector(".myPurchasedPara").innerHTML = "يرجى تقديم تفاصيل بطاقتك لإكمال عملية الدفع بنجاح"
     this.document.querySelector(".myInnerContent").innerHTML = `

     <p class="myInfoPara"> اسم حامل البطاقة </p>
     <input class="myUserName-input" id="userInput" placeholder="ادخل اسمك" /> 
     <p class="hidden myPasswordWarning-para"> لايمكن ترك الحقل فارغ </p>

     <p class="myInfoPara"> رقم البطاقة </p>
     <input id="cardNumInput1" class="myUserName-input" placeholder="4000 - 1234 - 5678 - 9010" /> 
     <p class="hidden myPasswordWarning-para myPasswordWarning-para1"> لايمكن ترك الحقل فارغ </p>

     <div style="display: flex; justify-content: space-between;"> 
         <div > 
             <p class="myInfoPara" style= "margin-right: -15px;"> CVV / كود الحماية </p>
             <input id="securityCodeInput" class="myUserName-input" type="password" placeholder="******" style="margin-right: -5px;"/> 
             <p class=" myPasswordWarning-para myPasswordWarning-para2 hidden" style="margin-right: -15px;"> لايمكن ترك الحقل فارغ </p>
         </div>
         
         <div > 
             <p class="myInfoPara" > تاريخ الانتهاء </p>
             <input id="expirationDateInput" class="myUserName-input"  placeholder=" 2023 / 01 " style="margin-left: -20px;" /> 
             <p class=" myPasswordWarning-para myPasswordWarning-para3 hidden" > لايمكن ترك الحقل فارغ </p>
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
     this.document.getElementById("password1").classList.add("myWarningInput-input")
     emptyPassword1 = false
 }else {
     emptyPassword1 = true
     this.document.getElementById("warning1").classList.add("hidden");
     this.document.getElementById("password1").classList.remove("myWarningInput-input")
 }
 
 if (this.document.getElementById("password2").value === ""){
     this.document.getElementById("warning2").classList.remove("hidden");
     this.document.getElementById("password2").classList.add("myWarningInput-input")
     emptyPassword2 = false
 }else {
     emptyPassword2 = true
     this.document.getElementById("warning2").classList.add("hidden");
     this.document.getElementById("password2").classList.remove("myWarningInput-input")
 }

 if (this.document.getElementById("password3").value === ""){
     this.document.getElementById("warning3").classList.remove("hidden");
     this.document.getElementById("password3").classList.add("myWarningInput-input")
     emptyPassword3 = false
 }else {
     emptyPassword3 = true
     this.document.getElementById("warning3").classList.add("hidden");
     this.document.getElementById("password3").classList.remove("myWarningInput-input")
 }
 if (this.document.getElementById("password3").value !== "" && this.document.getElementById("password2").value !== this.document.getElementById("password3").value) {
     this.document.getElementById("error1").classList.remove("hidden");
     this.document.getElementById("password3").classList.add("myErrorInput-input");
     errorPassword4 = false;

 }else {
     this.document.getElementById("error1").classList.add("hidden");
     this.document.getElementById("password3").classList.remove("myErrorInput-input");
     errorPassword1 = true
 }

 if (emptyPassword1 && emptyPassword2 && emptyPassword3 && errorPassword4){
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
 this.document.getElementById("myPasswordImage-img0").src = "/Frontend/src/SvgAndImg/eye_svgrepo.com.png"
 show0 = false
}else {
 this.document.getElementById("password0").type = "password";
 this.document.getElementById("myPasswordImage-img0").src = "/Frontend/src/SvgAndImg/eye-closed_svgrepo.com.png"
 show0 = true
}
})

let show1 = true
 this.document.querySelector(".myShowPasswordButton-btn1").addEventListener("click", () => {
   if (show1){
     this.document.getElementById("password1").type = ""
     this.document.getElementById("myPasswordImage-img1").src = "/Frontend/src/SvgAndImg/eye_svgrepo.com.png"
     show1 = false
   }else {
     this.document.getElementById("password1").type = "password";
     this.document.getElementById("myPasswordImage-img1").src = "/Frontend/src/SvgAndImg/eye-closed_svgrepo.com.png"
     show1 = true
   }
 })

let show2 = true
this.document.querySelector(".myShowPasswordButton-btn2").addEventListener("click", () => {
if (show2){
 this.document.getElementById("password2").type = ""
 this.document.getElementById("myPasswordImage-img2").src = "/Frontend/src/SvgAndImg/eye_svgrepo.com.png"
 show2 = false
}else {
 this.document.getElementById("password2").type = "password";
 this.document.getElementById("myPasswordImage-img2").src = "/Frontend/src/SvgAndImg/eye-closed_svgrepo.com.png"
 show2 = true
}
})

let show3 = true
this.document.querySelector(".myShowPasswordButton-btn3").addEventListener("click", () => {
if (show3){
 this.document.getElementById("password3").type = ""
 this.document.getElementById("myPasswordImage-img3").src = "/Frontend/src/SvgAndImg/eye_svgrepo.com.png"
 show3 = false
}else {
 this.document.getElementById("password3").type = "password";
 this.document.getElementById("myPasswordImage-img3").src = "/Frontend/src/SvgAndImg/eye-closed_svgrepo.com.png"
 show3 = true
}
})

let errorPassword5 = false;
let errorPassword6 = false;
let errorPassword7 = false;

this.document.getElementById("mySaveInfoButton").addEventListener("click", () => {
 if (this.document.getElementById("userNameInput1").value === ""){
     this.document.querySelector(".emptyInputWarning5").classList.remove("hidden");
     this.document.getElementById("userNameInput1").classList.add("myWarningInput-input")

     errorPassword5 = false;
 }else {
     this.document.querySelector(".emptyInputWarning5").classList.add("hidden");
     this.document.getElementById("userNameInput1").classList.remove("myWarningInput-input")

     errorPassword5 = true;
 }

 

 if (this.document.getElementById("userEmailInput1").value === ""){
     this.document.querySelector(".emptyInputWarning6").classList.remove("hidden");
     this.document.getElementById("userEmailInput1").classList.add("myWarningInput-input")

     errorPassword6 = false;
 }else {
     this.document.querySelector(".emptyInputWarning6").classList.add("hidden");
     this.document.getElementById("userEmailInput1").classList.remove("myWarningInput-input")

     errorPassword6 = true;
 }

 if (this.document.getElementById("password0").value === ""){
     this.document.querySelector(".emptyInputWarning7").classList.remove("hidden");
     this.document.getElementById("password0").classList.add("myWarningInput-input")

     errorPassword7 = false;
 }else {
     this.document.querySelector(".emptyInputWarning7").classList.add("hidden");
     this.document.getElementById("password0").classList.remove("myWarningInput-input")

     errorPassword7 = true;
 }

 if (errorPassword5 && errorPassword6 && errorPassword7){
     console.log("checked!")
 }




})
