import { myData, myMessagesDataSection, myAccountInfo } from "./MyData.js";

addEventListener("DOMContentLoaded", function() {

    // The Form of Main Page Content
    const myMainForm = this.document.querySelector(".myMainForm");

    // The Content of the main sliders on the top 
    const myContentInfo = this.document.querySelector(".myContentInfo-div");

    // The Para of "عرص الكل" beside "رسائل الماجستير"
    const showAllOption1 = this.document.querySelector(".showAllOption-para1");

    // The Para of "عرص الكل" beside "اطروحة الدكتوراة"
    const showAllOption2 = this.document.querySelector(".showAllOption-para2");

    // To display the cards below "رسائل الماجستير" 
    const myCard = this.document.querySelector(".myCard");

    // To display the cards below "اطروحة الدكتوراة"
    const myCard2 = this.document.querySelector(".myCard2");

    // Showing all the cards when "عرص الكل" para is clicked beside "رسائل الماجستير" 
    const myMoreCardsDiv1 = this.document.querySelector(".myMoreCards-div1");

     // Showing all the cards when "عرص الكل" para is clicked beside "اطروحة الدكتوراة" 
    const myMoreCardsDiv2 = this.document.querySelector(".myMoreCards-div2");

    // The Main Form of the Card Page
    const myCardForm = this.document.querySelector(".myCardForm");
    // The Image on the background
    let myCardImage = this.document.querySelector(".myCardImage-img");

    // The main paragraph on the top of card page, below the image...
    let myCardPara = this.document.querySelector(".myCardPara-para");

    // The paragraph below "نبذة مختصرة" in the card page
    const paraOne = this.document.querySelector(".myCardMiniPara-paraOne");

     // The paragraph below "اسم المؤلف" in the card page
    const paraTwo = this.document.querySelector(".myCardMiniPara-paraTwo");

    // The section of rate and reviews in card page
    const myCardMainPara = this.document.querySelector(".rateAndReviewsDiv-div")

    // The purchased button...
    const myPurchasedButton = this.document.querySelector(".myPurchased-btn");

    // To display all the cards below rate and reviews section
    const myMoreCardsDiv = this.document.querySelector(".myMoreCards-div");
    
    const myRateAndReviewsForm = this.document.querySelector(".RateAndReviews");

    const myRateInput = this.document.querySelector(".myRateInput-inp");
    const myShareRate = this.document.querySelector(".myShareRate-btn");


    // Append the <a> and <img> elements to a container element 
    const containerElement = document.createElement('div');


    // Rates and Reviews section
    const addRateButton = this.document.querySelector(".addRateButton-btn")
    const outerShareComment = this.document.querySelector(".outerShareComment-div");
    const myShareCommentImage = this.document.querySelector(".myShareComment-Img");
    const RaterName = this.document.querySelector(".RaterName-para")
 
    // showing all the cards when "عرض الكل" paragraph is clicked
    const showAllCards1 = this.document.querySelector(".showAllCards1");
    const showAllCards2 = this.document.querySelector(".showAllCards2");

    // in search page
    const mainSearchDiv = this.document.querySelector(".mainSearchDiv-div");

   

    // To go to search page
    this.document.querySelector(".searchLogoDiv-div").addEventListener("click", () => {
        console.log("searchClicked");
        // hiding the other pages...
        this.document.querySelector(".myHomePage").classList.add("hidden");
        this.document.querySelector(".myAccountPage").classList.add("hidden");
        // revealing the search page
        this.document.querySelector(".mySearchPage").classList.remove("hidden");
    })

    // when Dhad paragraph is ckliced...
    this.document.querySelector(".LeftTopContent-div").addEventListener("click", () => {

        // hiding the other pages...
        this.document.querySelector(".mySearchPage").classList.add("hidden");
        this.document.querySelector(".myAccountPage").classList.add("hidden");

        // revealing the home page
        this.document.querySelector(".myHomePage").classList.remove("hidden")  
    })

    // To reveal the catagory main div from the rigth of the page
    this.document.querySelector(".categoryLogoDiv-div").addEventListener("click", () => {

    // To reveal the catagory contents
        // The main options...
        this.document.querySelector(".mainDivOption").classList.remove("hidden");

        this.document.querySelector(".myAccountImage-img").classList.remove("hidden");
        this.document.querySelector(".myAccountName-para").classList.remove("hidden");

        // setting the profile picture of the account 
        this.document.querySelector(".myAccountImage-img").src = myAccountInfo[0].accountProfilePicture

        // setting the user name
        this.document.querySelector(".myAccountName-para").innerHTML = myAccountInfo[0].accountName
        this.document.querySelector(".myAccountPage").classList.remove("hidden");


    })

    // The shadow beside the catagory div
    this.document.querySelector(".shadowDiv-div").addEventListener("click", () => {
  
        // To hide the catagory div when the shadow is clicked
        this.document.querySelector(".mainDiv-div").classList.add("mainDivBack-div");
        this.document.querySelector(".shadowDiv-div").classList.add("shadowBack-div");

        this.document.querySelector(".mainDivOption").classList.add("hidden");
        this.document.querySelector(".myAccountImage-img").classList.add("hidden");
        this.document.querySelector(".myAccountName-para").classList.add("hidden");

        // Giving some time for the animation to operate before hiding
        setTimeout(function() {
            this.document.querySelector(".myAccountPage").classList.add("hidden");
            
            this.document.querySelector(".mainDiv-div").classList.remove("mainDivBack-div");
            this.document.querySelector(".shadowDiv-div").classList.remove("shadowBack-div");

        }, 300);
        
    })

     // To Go To Home Page...
     this.document.getElementById("option0").addEventListener("click", () => {

        // to clear everything
        this.window.location.reload()

    })

    // To Go To Services Page...
    this.document.getElementById("option1").addEventListener("click", () => {
        // hiding everything
        hideThemAll()
        // revealing the services page
        this.document.querySelector(".ServicesContainder").classList.remove("hidden");

    })

    // To Go To Downloads Page...
    this.document.getElementById("option2").addEventListener("click", () => {
        // hiding everything
        hideThemAll()
        // revealing the downloads page
        this.document.querySelector(".DownloadsContainder").classList.remove("hidden");

    })

     // To Go To Account Page...
     this.document.getElementById("option3").addEventListener("click", () => {
        // hiding everything
        hideThemAll()
        // setting the username
        this.document.querySelector(".myAccountPara").innerHTML = myAccountInfo[0].accountName
        // setting user's profile picture
        this.document.querySelector(".myAccount-img").src = myAccountInfo[0].accountProfilePicture
        // relealing the whole page of account
        this.document.querySelector(".AccountContainder").classList.remove("hidden");

    })

    myPurchasedButton.addEventListener("click", () => {
        // hiding everything
        hideThemAll()

        this.scrollTo(0, 0)

        this.document.querySelector(".myPaymentContainer").classList.remove("hidden");

    })



    // myPaymentButton

    const hideThemAll = () => {

        // hiding all the pages
        this.document.querySelector(".mainDivOption").classList.add("hidden");
        this.document.querySelector(".myAccountImage-img").classList.add("hidden");
        this.document.querySelector(".myAccountName-para").classList.add("hidden");
        this.document.querySelector(".myAccountPage").classList.add("hidden");
        myMainForm.classList.add("hidden")
        this.document.querySelector(".ServicesContainder").classList.add("hidden");
        this.document.querySelector(".DownloadsContainder").classList.add("hidden");
        this.document.querySelector(".AccountContainder").classList.add("hidden");
        this.document.querySelector(".DownloadsContainder").classList.add("hidden");
        this.document.querySelector(".myCardForm").classList.add("hidden");
        this.document.querySelector(".showAllCards1").classList.add("hidden");
        this.document.querySelector(".showAllCards2").classList.add("hidden");
        this.document.querySelector(".RateAndReviews").classList.add("hidden");
        this.document.querySelector(".myPaymentContainer").classList.add("hidden");
    }

    this.document.getElementById("chosenCircle1").addEventListener("click", () => {
        hideAllOptions()
        this.document.querySelector(".myVeryInnerCircle1").classList.remove("hidden");
    })

    this.document.getElementById("chosenCircle2").addEventListener("click", () => {
        hideAllOptions()
        this.document.querySelector(".myVeryInnerCircle2").classList.remove("hidden")
    })

    this.document.getElementById("chosenCircle3").addEventListener("click", () => {
        hideAllOptions()
        this.document.querySelector(".myVeryInnerCircle3").classList.remove("hidden")
    })

    this.document.getElementById("chosenCircle4").addEventListener("click", () => {
        hideAllOptions()
        this.document.querySelector(".myVeryInnerCircle4").classList.remove("hidden")
    })

    const hideAllOptions = () => {
        this.document.querySelector(".myVeryInnerCircle1").classList.add("hidden")
        this.document.querySelector(".myVeryInnerCircle2").classList.add("hidden")
        this.document.querySelector(".myVeryInnerCircle3").classList.add("hidden")
        this.document.querySelector(".myVeryInnerCircle4").classList.add("hidden")
    }

    this.document.querySelector(".outerShareComment-div").addEventListener("click", (event) => {
        if (!this.document.querySelector(".innerShareComment-div").contains(event.target)) {
            this.document.querySelector(".outerShareComment-div").classList.add("hidden")   
        }
          
    })



    // To show all the cards of "رسائل الماجستير" when "عرض الكل" is clicked
    showAllOption1.addEventListener("click", () => {
        // To hide the main/home page
        myMainForm.classList.add("hidden");

        // revealing the cards
        showAllCards1.classList.remove("hidden");

        // To go to the top of the page
        this.scrollTo(0, 0);

        // looping throw all the data from "myData.js"
        for (let i = 0; i < myMessagesDataSection[0].length; i++){
            // creating the cards...
            createCards(0, i, 3)
            // 0 for section 1, the cards of "رسائل الماجستير"
            // i to loop throw all the data
            // 3 the id, so i can cheack if the function is performed from here...
        }
    })

    // To show all the cards of "اطروحة الدكتوراة" when "عرض الكل" is clicked
    showAllOption2.addEventListener("click", () => {
        // To hide the main/home page
        myMainForm.classList.add("hidden");

        // revealing the cards
        showAllCards2.classList.remove("hidden");
        
        // To go to the top of the page
        this.scrollTo(0, 0);

        // looping throw all the data from "myData.js"
        for (let i = 0; i < myMessagesDataSection[1].length; i++){
            // creating the cards..
            createCards(1, i, 4)
            // 1 for section 2, the cards of "اطروحة الدكتوراة"
            // i to loop throw all the data
            // 4 the id, so i can cheack if the function is performed from here...
        }

    })

    // Checking info part... ////
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
        errorPassword4 = true
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
        this.document.querySelector(".outerChangePassword-div").classList.remove("hidden");
        this.document.querySelector(".myInnerSucsPassDiv-div").classList.remove("hidden");

        this.document.querySelector(".outerChangePassword-div").style = "display: flex;"
    }




})

this.document.getElementById("option5").addEventListener("click", () => {
    this.document.querySelector(".myAccountPage").classList.add("hidden")
    this.document.querySelector(".signOutContainer").classList.remove("hidden")

})

this.document.getElementById("btn1").addEventListener("click", ()=> {
    this.document.querySelector(".signOutContainer").classList.add("hidden")
})


    // the main contents at the top of the page
    const myContent = () => {
        myData.map(data => {
        
        let myImage = this.document.createElement("img");
        myImage.src = data.image;
        myImage.classList = "myMainContentInfoImage-img";
    
        let myName = this.document.createElement("p");
        myName.classList = "myNamePara-para"
        myName.innerHTML = data.name
    
        let myWritedName = this.document.createElement("p");
        myWritedName.classList = "myWritedNamePara-para"
        myWritedName.innerHTML = data.writerName;
    
        let myFinalDiv = this.document.createElement("div");
    
        myFinalDiv.classList = "myFinalDiv-div swiper-slide";
     
        myFinalDiv.appendChild(myImage);
        myFinalDiv.appendChild(myName);
    
        myFinalDiv.appendChild(myWritedName);
        myContentInfo.appendChild(myFinalDiv);
        })     
    }

   // Function used to create cards
   const createCards = (i, j, myId) => {
    // i fo the section
    // j for looping
    // myId is the id of the function that used this function
    
    // creating the outer div... 
    let myOuterDiv = this.document.createElement("div");
    // setting a class for outer div 
    myOuterDiv.classList = "myCardOuter-div";
    // setting an id for outer div
    myOuterDiv.id = j;

    
    // creating the image of the cards
    let myImage = this.document.createElement("img");
    // setting its value from "myData.js"
    myImage.src = myMessagesDataSection[i][j].messageImage;
    // setting the class
    myImage.classList = "myMiniCardImage-img";
    // setting its id
    myImage.id = j;

    // creating the paragraph below the image 
    let myDescription = this.document.createElement("p");
    // splicing the paragraph
    let myAdjustedDescription = myMessagesDataSection[i][j].messageDescription.split("").splice(0, 43).join(""); 
    // adding the "..." at the end of it
    myDescription.innerHTML = myAdjustedDescription + "...";
    // setting a class for the paragraph
    myDescription.classList = "myMiniCardPara-para";
    
    // the lower section of the card
    let myLowerContentDiv = this.document.createElement("div");

    // creating the right div for the starts
    let myLowerInfo = this.document.createElement("div");
    myLowerInfo.classList = "myStartsDiv";
    myLowerInfo.id = j;

    let myStarsContainter = this.document.createElement("div");
    myStarsContainter.classList = "myStartsContainter-div"
    myStarsContainter.id = j;

    // the rate of the card
    let myStartsRate = this.document.createElement("p");
    myStartsRate.innerHTML =  myMessagesDataSection[i][j].messageRate;
    myStartsRate.classList = "myStartsRate-para"
    myStartsRate.id = j;

    // Creating the picture of the star image
    let myStartsRateImage = this.document.createElement("img");
    myStartsRateImage.classList = "myStartsImage-img";
    myStartsRateImage.src = "myImages/Star.png";
    myStartsRateImage.style = "margin-top: 15px"
    myStartsRateImage.id = j;


    // creating a div for the writer name
    let myWriterName = this.document.createElement("p");
    myWriterName.innerHTML = myMessagesDataSection[i][j].messageWriterName;
    myWriterName.classList = "myWriterNamePara-para";
    myWriterName.id = +j;

    // appending the rate (number) and the star's image inside of stars container
    myStarsContainter.appendChild(myStartsRateImage)
    myStarsContainter.appendChild(myStartsRate)
    
    // appening the stars container and writer name inside of lower info div
    myLowerInfo.appendChild(myStarsContainter);
    myLowerInfo.appendChild(myWriterName);

    myLowerContentDiv.appendChild(myLowerInfo)
   
    // appening everything inside myOuterDiv
    myOuterDiv.appendChild(myImage);
    myOuterDiv.appendChild(myDescription);
    myOuterDiv.appendChild(myLowerContentDiv);
    myOuterDiv.appendChild(myLowerInfo);

    // To display cards on the main/home page
    if (myId === 1){
        // to check if it's for "رسائل الماجستير"
        if (i === 0 ){       
         myCard.appendChild(myOuterDiv);

         // to check if it's for "اطروحة الدكتوراة"
        }else if (i === 1){
        myCard2.appendChild(myOuterDiv);          
        }

    }else if (myId === 2) {
        myOuterDiv.classList.add("card")
        myMoreCardsDiv.appendChild(myOuterDiv);

    // checking if it's for "رسائل الماجستير"
    }else if (myId === 3) {
        myMoreCardsDiv1.appendChild(myOuterDiv);
     
        
    // checking if it's for "اطروحة الدكتوراة"    
    }else if (myId === 4) {
        myMoreCardsDiv2.appendChild(myOuterDiv);
       
    }
}

// To display the cards on the home/main page
for (let i = 0; i < myMessagesDataSection.length; i++){

    // to only display five cards (j < 5)
    for (let j = 0; j < 5; j++){

        createCards(i, j, 1);
        // i, 1 and 2, for section one and section tow
        // j to loop throw all the data
        // 1 the id, so i can cheack if the function is performed from here...
    }
}

    myCard.addEventListener("click", (event) => {
        event.preventDefault();
        if (event.target.id){
            cardMoreInfo(event.target.id, 0);
        }
        
    })
    myMoreCardsDiv1.addEventListener("click", (event) => {
        event.preventDefault();
        if (event.target.id){
            cardMoreInfo(event.target.id, 0);
        }
        
    })

    myCard2.addEventListener("click", (event) => {
        event.preventDefault()
        if (event.target.id){
           cardMoreInfo(event.target.id, 1)
        }
 
    })

    myMoreCardsDiv2.addEventListener("click", (event) => {
        event.preventDefault();
        if (event.target.id){
            cardMoreInfo(event.target.id, 1);
        } 
    })

    // to show more info when the user clickes on the card
    const cardMoreInfo = (num, id) => {

        // hiding everything 
        myCardForm.classList.add("hidden");
        showAllCards1.classList.add("hidden");
        showAllCards2.classList.add("hidden");
        this.document.querySelector(".myMainForm").classList.add("hidden");

        // revealing the card form
        myCardForm.classList.remove("hidden");

        // go to the top of the page
        this.scroll(0, 0);

        myCardImage.src = myMessagesDataSection[id][num].cardMoreInfo.cardImage; // settiing the image

        // Create the <a> element with class "myStartsRate-para" and style attribute
        const aElement = document.createElement('a');
        aElement.className = 'myStartsRate-para';
        aElement.style.marginRight = '7px';
       
        aElement.textContent = myMessagesDataSection[id][num].messageRate; // Set the text content
        

        // Create the <img> element with class "myStartsImage-img" and src attribute
        const imgElement = document.createElement('img');
        imgElement.className = 'myStartsImage-img';
        imgElement.src = 'myImages/Star.png';
        imgElement.title = 'arab'; // Set the title attribute
        
        containerElement.textContent = myMessagesDataSection[id][num].cardMoreInfo.cardMainDescription;
        containerElement.appendChild(aElement);
        containerElement.appendChild(imgElement);
        myCardPara.appendChild(containerElement)
        
        // setting the text at the top of the page
        paraOne.innerHTML = myMessagesDataSection[id][num].cardMoreInfo.cardDescription; 
 
        // setting the text below "نبذة مختصرة" 
        paraTwo.innerHTML = myMessagesDataSection[id][num].messageWriterName;

        // setting the contents of purchased button
        myPurchasedButton.innerHTML = `
        <img class="myButtonBagImage" src="/Frontend/src/HomePage/myImages/CardMoreInfoImg/Bag.png" />`
        + myMessagesDataSection[id][num].cardPrise;

        myCardImage.classList.add("myCardImage-img");

        

        for (let i = 0; i < (myMessagesDataSection[id]).length; i++){
            if (myMessagesDataSection[id][i] !== myMessagesDataSection[id][num]){
                createCards(id, i, 2)

            }
        }

        myCardMainPara.addEventListener("click", (event) => {
            event.preventDefault();
    
            myRateAndReviewsForm.classList.remove("hidden");
    
            this.scrollTo(0, 0);  
    
            myCardForm.classList.add("hidden");
            myMainForm.classList.add("hidden");

            myRateAndReviews(num, id)
          
    
        })

    }




    const myRateAndReviews = (num, id) => {

        for (let i = 0; i < 2; i++){
                
        const myRaterStars = this.document.querySelector(".myRaterStars-div");
        let myStarsDiv = this.document.createElement("div");
        myStarsDiv.id = "myStarsDiv"
        
        // creating the stars 
        let myStar0 = this.document.createElement("img");
        myStar0.classList.add("myMiniStar");
        myStar0.id = "star-0"
        myStar0.src = "myImages/hiddenBorderStar.png"

        let myStar1 = this.document.createElement("img");
        myStar1.classList.add("myMiniStar");
        myStar1.id = "star-1"
        myStar1.src = "myImages/hiddenBorderStar.png"

        let myStar2 = this.document.createElement("img");
        myStar2.classList.add("myMiniStar");
        myStar2.id = "star-2"
        myStar2.src = "myImages/hiddenBorderStar.png"
            
        let myStar3 = this.document.createElement("img");
        myStar3.classList.add("myMiniStar");
        myStar3.id = "star-3"
        myStar3.src = "myImages/hiddenBorderStar.png"

        let myStar4 = this.document.createElement("img");
        myStar4.classList.add("myMiniStar");
        myStar4.id = "star-4"
        myStar4.src = "myImages/hiddenBorderStar.png"


        myStarsDiv.appendChild(myStar0)
        myStarsDiv.appendChild(myStar1)
        myStarsDiv.appendChild(myStar2)
        myStarsDiv.appendChild(myStar3)
        myStarsDiv.appendChild(myStar4);

        let myFinalRate = {
            raterRate: 0,
            raterComment: "",
        }

        let myRaterFinalRate = 0

        // add comment & rate section
     addRateButton.addEventListener("click", () => {
        // revealing the add comment div
     outerShareComment.classList.remove("hidden");
     for (let h = 0; h < 5; h++){
         const starElement = document.getElementById(`star-${h}`);
         if (starElement) { // Check if the element exists
             starElement.addEventListener("click", (event) => {
             const clickedIndex = Number(event.target.id.split('-')[1]);
             for (let k = 0; k <= clickedIndex; k++) {
             document.getElementById(`star-${k}`).src = "myImages/Star.png";
             // Get a reference to myStarsDiv
             const myStarsDiv = document.getElementById('myStarsDiv');
             if (myRaterStars && myStarsDiv) {
                 myRaterStars.removeChild(myStarsDiv);
                 myRaterStars.appendChild(myStarsDiv);
                 myRaterFinalRate = (clickedIndex + 1)
             }
             if (k === clickedIndex){
                 for (let s = k; s < 5; s++){
                 if (s < 4){
                 document.getElementById(`star-${s + 1}`).src = "myImages/hiddenBorderStar.png";
                 myRaterFinalRate = (clickedIndex + 1)
                }
                }          
                }
            }
        })             
     }                
    }
    if (i === 0 ){myRaterStars.appendChild(myStarsDiv);}
        if (i === 1){
            myShareRate.addEventListener("click", () => {
            myFinalRate.raterRate = myRaterFinalRate;
            myFinalRate.raterComment = myRateInput.value;
            console.log(myFinalRate)
            
        }) 
    }
    })
}

        // to check if rates & reviews are empty
        if ((myMessagesDataSection[id][num].rateAndReviews).length === 0){
            console.log("Empty");

            var myEmptyDiv = this.document.createElement("div");
            myEmptyDiv.classList.add("myEmptyDiv");

            var myEmptyImage = this.document.createElement("img");
            myEmptyImage.classList.add("myEmptyImage");
            myEmptyImage.src = "myImages/No Chat History@3x (1).png"

            var myEmptyPara = this.document.createElement("p");
            myEmptyPara.classList.add("myEmptyPara");
            myEmptyPara.innerHTML = "نتطلع إلى سماع تجربتك! لا يوجد تقييمات أو مراجعات حتى الآن";

            myEmptyDiv.appendChild(myEmptyImage);
            myEmptyDiv.appendChild(myEmptyPara);

            myRateAndReviewsForm.appendChild(myEmptyDiv);

        }else {

          
            // if there are commnents and rates
            for (let i = 0; i < (myMessagesDataSection[id][num].rateAndReviews).length; i++){
         
                // Create the <Outer> element
                var outerElement = document.createElement("div");
                outerElement.classList.add("myOuterDiv");
                
                // Create the <Upper> element
                var upperElement = document.createElement("div");
                upperElement.classList.add("myUpperDiv")
                
                // Create the <Date> element and add it to <Upper>
                var dateElement = document.createElement("div");
                dateElement.classList.add("myDate");
                dateElement.innerHTML = (myMessagesDataSection[id][num]).rateAndReviews[i].RaterDate;
                upperElement.appendChild(dateElement);
                
                // Create the <Content> element and add it to <Upper>
                var contentElement = document.createElement("div");
                contentElement.classList.add("myContentDiv")
                upperElement.appendChild(contentElement);
                
                // Create the <Right> element and add it to <Content>
                var rightElement = document.createElement("div");
                rightElement.classList.add("myRightDiv");
                contentElement.appendChild(rightElement);
                
                // Create the <Name> element and add it to <Right>
                var nameElement = document.createElement("p");
                nameElement.classList.add("myNamePara");
                nameElement.innerHTML = (myMessagesDataSection[id][num]).rateAndReviews[i].reterName;
                rightElement.appendChild(nameElement);
                
                // Create the <div> element inside <Right> and add <Starts> to it
                var rightDivElement = document.createElement('div');
                rightDivElement.classList.add("myStarsDiv")
               
                // create element for each star
                var starsElement0 = document.createElement("img");
                starsElement0.classList.add("myStarsImage");
                starsElement0.classList.add("myStarsImage0");
                
                var starsElement1 = document.createElement("img");
                starsElement1.classList.add("myStarsImage");
                starsElement1.classList.add("myStarsImage1");
        
                var starsElement2 = document.createElement("img");
                starsElement2.classList.add("myStarsImage");
                starsElement2.classList.add("myStarsImage2");
        
                var starsElement3 = document.createElement("img");
                starsElement3.classList.add("myStarsImage");
                starsElement3.classList.add("myStarsImage3");
        
                var starsElement4 = document.createElement("img");
                starsElement4.classList.add("myStarsImage");
                starsElement4.classList.add("myStarsImage4");


                // setting all of them to false, or could be just ""
                let myStarts = ["false", "false", "false", "false", "false"]
                    
                for (let j = 0; j <= 4; j++){
           
                    // setting the starrs according to rater's rate
                    if (j < (myMessagesDataSection[id][num]).rateAndReviews[i].raterRate){
                        myStarts[j] = "myImages/Star.png"
                    }else {
                        // hiding the others
                        myStarts[j] = "myImages/hiddenStar.png"
                    }
                }
        
        
                // resetting their new values
                starsElement0.src = myStarts[4]
                starsElement1.src = myStarts[3]
                starsElement2.src = myStarts[2]
                starsElement3.src = myStarts[1]
                starsElement4.src = myStarts[0]
        
        
                // appening all of them to the parent element
                rightDivElement.appendChild(starsElement0);
                rightDivElement.appendChild(starsElement1);
                rightDivElement.appendChild(starsElement2);
                rightDivElement.appendChild(starsElement3);
                rightDivElement.appendChild(starsElement4);
        
                rightElement.appendChild(rightDivElement);
        
                // Create the second <div> element and add <ProfilePicture> class to it
                var profilePictureDivElement = document.createElement('div');
                contentElement.appendChild(profilePictureDivElement);
                var profilePictureElement = document.createElement('img');
                profilePictureElement.classList.add("myProfilePicture");
                profilePictureElement.src = (myMessagesDataSection[id][num]).rateAndReviews[i].raterProfilePicture
                profilePictureDivElement.appendChild(profilePictureElement);

                // Create the <Lower> element
                var lowerElement = document.createElement("div");
                lowerElement.classList.add("myLowerContent-div")
                
                // Create the <p> element and add it to <Lower>
                var pElement = document.createElement('p');
                pElement.classList.add("myRaterComment-para");
                pElement.innerHTML = (myMessagesDataSection[id][num]).rateAndReviews[i].RaterDescription
                lowerElement.appendChild(pElement);
                
                // Append <Upper> and <Lower> to <Outer>
                outerElement.appendChild(upperElement);
                outerElement.appendChild(lowerElement);
                
                myRateAndReviewsForm.appendChild(outerElement)

                    
                            console.log(myRateAndReviewsForm)
            
              
                        }
                    }
                }

    myShareCommentImage.src = myAccountInfo[0].accountProfilePicture
         
    RaterName.innerHTML = myAccountInfo[0].accountName

    myContent();


        
})