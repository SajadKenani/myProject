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
    const outerShareComment = this.document.querySelector(".outerShareComment-div");

 
    // showing all the cards when "عرض الكل" paragraph is clicked
    const showAllCards1 = this.document.querySelector(".showAllCards1");
    const showAllCards2 = this.document.querySelector(".showAllCards2");



 // Define a function to extract message data
const extractMessageData = (mainDiv) => {
    const messageData = {};
    for (let i = 0; i < mainDiv.querySelectorAll(".message").length; i++) {
        const messageElement = mainDiv.querySelector(`.mainDiv-${i}`);
        const reviewElements = messageElement.querySelector(".rate-and-reviews").querySelectorAll(".review");
        messageData[`id${i}`] = {
            writerName: messageElement.querySelector(`#writerName`).textContent,
            description: messageElement.querySelector(`#descriptionPara`).textContent,
            rate: messageElement.querySelector(`#myRate`).textContent,
            imageSrc: messageElement.querySelector(`#cardImage`).getAttribute('src'),
            MainImage: messageElement.querySelector(`#MainImage`).getAttribute('src'),
            cardPrice: messageElement.querySelector(`#cardPrice`).textContent,
            cardMainDescription : messageElement.querySelector(`#cardMainDescription`).textContent,
            cardDescription : messageElement.querySelector(`#cardDescription`).textContent,
            rates: {}
        };

        if (reviewElements){
        reviewElements.forEach((reviewElement, j) => {
            messageData[`id${i}`].rates[`id${j}`] = {
                raterName: reviewElement.querySelector(`#reviewerName`).textContent,
                raterRate: reviewElement.querySelector(`#raterRate`).textContent,
                raterComment: reviewElement.querySelector(`#reterDescription`).textContent,
                rateDate: reviewElement.querySelector(`#rateDate`).textContent,
                raterAccountImage: reviewElement.querySelector(`#raterAccountImage`).getAttribute('src')
            };
        });}
    }
    return messageData;
}

const extractMainData = (mainData) => {
    const data = {}
    for (let i = 0; i < mainData.querySelectorAll(".mainDiv").length; i++){
    
    const dataElement = mainData.querySelector(`.mainDiv-${i}`);

    data[`id${i}`] = {
        mainImage: dataElement.querySelector("#myBigImage").getAttribute("src"),
        mainPara: dataElement.querySelector("#myMainPara").textContent,
        para: dataElement.querySelector("#myPara").textContent,
    }   
}
return data;
}

const extractMyAccount = (accountData) => {
    const data = {};

    for (let i = 0; i < accountData.querySelectorAll(".account").length; i++){
        const myData = accountData.querySelector(`.account-${i}`)

        data[`id${i}`] = {
            accountName: myData.querySelector("#userName").textContent,
            accountPassword: myData.querySelector("#userPassword").textContent,
            accountEmail: myData.querySelector("#userEmail").textContent,
            accountProfilePictire: myData.querySelector("#profilePicture").getAttribute("src"),
        }
    }
    return data;
}

let message0
let message1
let mainMessage
let accounts

    // Fetching...
fetch("./MyData.html")
    .then(response => response.text())
    .then(data => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = data;

    // Select the elements with class "mainDiv-0" and "mainDiv-1"
    const mainDiv0 = tempDiv.querySelector('.sectionOne');
    const mainDiv1 = tempDiv.querySelector('.sectionTwo');
    const mainDiv2 = tempDiv.querySelector(".mainSection");
    const myAccounts = tempDiv.querySelector(".accounts");
    
    // Extract data from both mainDiv0 and mainDiv1 using the function
    message0 = extractMessageData(mainDiv0);
    message1 = extractMessageData(mainDiv1);
    mainMessage = extractMainData(mainDiv2);
    accounts = extractMyAccount(myAccounts);

    // the main contents at the top of the page
    for (let i = 0; i < Object.keys(mainMessage).length; i++){
  
    let myImage = this.document.createElement("img");
    myImage.src = mainMessage[`id${i}`].mainImage;
    myImage.classList = "myMainContentInfoImage-img";

    let myName = this.document.createElement("p");
    myName.classList = "myNamePara-para"
    myName.innerHTML = mainMessage[`id${i}`].mainPara

    let myWritedName = this.document.createElement("p");
    myWritedName.classList = "myWritedNamePara-para"
    myWritedName.innerHTML = mainMessage[`id${i}`].para;

    let myFinalDiv = this.document.createElement("div");

    myFinalDiv.classList = "myFinalDiv-div swiper-slide";

    myFinalDiv.appendChild(myImage);
    myFinalDiv.appendChild(myName);

    myFinalDiv.appendChild(myWritedName);
    myContentInfo.appendChild(myFinalDiv);
          
    
 }

        
    // To show all the cards of "رسائل الماجستير" when "عرض الكل" is clicked
    showAllOption1.addEventListener("click", () => {

        // To hide the main/home page
        myMainForm.classList.add("hidden");

        // revealing the cards
        showAllCards1.classList.remove("hidden");

        // To go to the top of the page
        this.scrollTo(0, 0);

        // looping throw all the data from "myData.js"
        for (let loop = 0; loop < Object.keys(message0).length; loop++){
            // creating the cards...
            createCards(0, loop, 3)
            // 0 for section 1, the cards of "رسائل الماجستير"
            // i to loop throw all the data
            // 3 the id, so i can cheack if the function is performed from here...
        }
    })
    // To show all the cards of "رسائل الماجستير" when "عرض الكل" is clicked
    showAllOption2.addEventListener("click", () => {
        // To hide the main/home page
        myMainForm.classList.add("hidden");

        // revealing the cards
        showAllCards2.classList.remove("hidden");

        // To go to the top of the page
        this.scrollTo(0, 0);

        // looping throw all the data from "myData.js"
        for (let loop = 0; loop < Object.keys(message1).length; loop++){
            // creating the cards...
            createCards(1, loop, 4)
            // 0 for section 1, the cards of "رسائل الماجستير"
            // 3 the id, so i can cheack if the function is performed from here...
        }
    })

          // To display the cards on the home/main page
for (let section = 0; section < 2; section++){

    // to only display eight cards (j < 5)
    for (let loop = 0; loop < 7; loop++){

        createCards(section, loop, 1);
        // 1 the id, so i can cheack if the function is performed from here...
    }
}

});
    
    


    // To hide Add Comment Div when the user clicks on the shadow
    this.document.querySelector(".outerShareComment-div").addEventListener("click", (event) => {
        if (!this.document.querySelector(".innerShareComment-div").contains(event.target)) {
            this.document.querySelector(".outerShareComment-div").classList.add("hidden")   
        }
          
    })

    this.document.querySelector(".changePassword-para").addEventListener("click", () => {
        this.document.querySelector(".AccountContainder").classList.add("hidden");
        this.document.querySelector(".ForgetPasswordContainer").classList.remove("hidden");
    })


   // Function used to create cards
   const createCards = (section, loop, myId) => {

    // myId is the id of the function that used this function
    
    // creating the outer div... 
    let myOuterDiv = this.document.createElement("div");

    // setting a class for outer div 
    myOuterDiv.classList = "myCardOuter-div";
    myOuterDiv.classList.add("col-md-3");
    // setting an id for outer div
    myOuterDiv.id = loop;

    myOuterDiv.setAttribute('data-target', `mainDiv-${section}`);

    
    // creating the image of the cards
    let myImage = this.document.createElement("img");
    // setting its value from "myData.js"
    myImage.src = eval(`message${section}.id${loop}`).imageSrc;
 
    // setting the class
    myImage.classList = "myMiniCardImage-img";
    // setting its id
    myImage.id = loop;

    myImage.setAttribute('data-target', `myCard${section}`);

    // creating the paragraph below the image 
    let myDescription = this.document.createElement("p");
    // splicing the paragraph
    let myAdjustedDescription = eval(`message${section}.id${loop}`).description.split("").splice(0, 43).join(""); 
    // adding the "..." at the end of it
    myDescription.innerHTML = myAdjustedDescription + "...";
    // setting a class for the paragraph
    myDescription.classList = "myMiniCardPara-para";
    
    // the lower section of the card
    let myLowerContentDiv = this.document.createElement("div");

    // creating the right div for the starts
    let myLowerInfo = this.document.createElement("div");
    myLowerInfo.classList = "myStartsDiv";
    myLowerInfo.id = loop;

    let myStarsContainter = this.document.createElement("div");
    myStarsContainter.classList = "myStartsContainter-div"
    myStarsContainter.id = loop;

    // the rate of the card
    let myStartsRate = this.document.createElement("p");
    myStartsRate.innerHTML =  eval(`message${section}.id${loop}`).rate;
    myStartsRate.classList = "myStartsRate-para"
    myStartsRate.id = loop;

    // Creating the picture of the star image
    let myStartsRateImage = this.document.createElement("img");
    myStartsRateImage.classList = "myStartsImage-img";
    myStartsRateImage.src = "Site/myImages/Star.png";
    myStartsRateImage.style = "margin-top: 15px"
    myStartsRateImage.id = loop;


    // creating a div for the writer name
    let myWriterName = this.document.createElement("p");
    myWriterName.innerHTML = eval(`message${section}.id${loop}`).writerName;
    myWriterName.classList = "myWriterNamePara-para";
    myWriterName.id = +loop;

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
        if (section === 0 ){       
         myCard.appendChild(myOuterDiv);

         // to check if it's for "اطروحة الدكتوراة"
        }else if (section === 1){
        myCard2.appendChild(myOuterDiv);          
        }

    }else if (myId === 2) {
        myMoreCardsDiv.appendChild(myOuterDiv);


    // checking if it's for "رسائل الماجستير"
    }else if (myId === 3) {
        myMoreCardsDiv1.appendChild(myOuterDiv);
     
        
    // checking if it's for "اطروحة الدكتوراة"    
    }else if (myId === 4) {
        myMoreCardsDiv2.appendChild(myOuterDiv);
       
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

        const parentElement = document.querySelector('.myMoreCards-div'); // Change to the actual parent container
        parentElement.addEventListener("click", (event) => {
            if (event.target.getAttribute('data-target') === "myCard0") {
                event.preventDefault();
                myRateAndReviewsForm.innerHTML = "";
                myMoreCardsDiv.innerHTML = "";
                cardMoreInfo(event.target.id, 0);
            } else if (event.target.getAttribute('data-target') === "myCard1"){
                event.preventDefault();
                myRateAndReviewsForm.innerHTML = "";
                myMoreCardsDiv.innerHTML = "";
                cardMoreInfo(event.target.id, 1);
            }
        });

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

        myCardImage.src = eval(`message${id}`)[`id${[num]}`].MainImage; // settiing the image

        // Create the <a> element with class "myStartsRate-para" and style attribute
        const aElement = document.createElement('a');
        aElement.className = 'myStartsRate-para';
        aElement.style.marginRight = '10px';
        aElement.style.marginTop = '10px';
        aElement.style.marginLeft = '5px';

        aElement.textContent = eval(`message${id}`)[`id${[num]}`].rate; // Set the text content
        

        // Create the <img> element with class "myStartsImage-img" and src attribute
        const imgElement = document.createElement('img');
        imgElement.className = 'myStartsImage-img';
        imgElement.src = './Site/myImages/Star.png';
        imgElement.title = 'arab'; // Set the title attribute

        
        containerElement.textContent =  eval(`message${id}`)[`id${[num]}`].cardMainDescription;
        containerElement.appendChild(aElement);
        containerElement.appendChild(imgElement);
        myCardPara.appendChild(containerElement)
        
        // setting the text at the top of the page
        paraOne.innerHTML = eval(`message${id}`)[`id${[num]}`].cardDescription; 
 
        // setting the text below "نبذة مختصرة" 
        paraTwo.innerHTML = eval(`message${id}`)[`id${[num]}`].writerName;

        // setting the contents of purchased button
        myPurchasedButton.innerHTML = `
        <img class="myButtonBagImage" src="./Site/myImages/CardMoreInfoImg/Bag.png" />`
        + eval(`message${id}`)[`id${[num]}`].cardPrice;

        myCardImage.classList.add("myCardImage-img");
        
        for (let i = 0; i < Object.keys(eval(`message${id}`)).length; i++){
            
            if (eval(`message${id}`)[`id${[i]}`] !== eval(`message${id}`)[`id${[num]}`]){
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

// Rate And Reviews Section
const myRateAndReviews = (num, id) => {

    for (let i = 0; i < 2; i++){
            
    const myRaterStars = this.document.querySelector(".myRaterStars-div");
    let myStarsDiv = document.createElement("div");
    myStarsDiv.id = "myStarsDiv";
    
    for (let i = 0; i < 5; i++) {
        let myStar = document.createElement("img");
        myStar.classList.add("myMiniStar");
        myStar.id = `star-${i}`;
        myStar.src = "./Site/myImages/RateAndReviewsImages/hiddenBorderStar.png";
        myStarsDiv.appendChild(myStar);
    }

     let myFinalRate = {
        raterRate: 0,
        raterComment: "",
    }

    let myRaterFinalRate = 0

    this.setTimeout(() => {

    if (this.document.querySelector(".addRateButton-btn1")){

         // add comment & rate section
        this.document.querySelector(".addRateButton-btn1").addEventListener("click", () => {
        this.document.querySelector(".myShareComment-Img").src = accounts[`id${0}`].accountProfilePictire

        // revealing the add comment div
        outerShareComment.classList.remove("hidden");
        for (let h = 0; h < 5; h++){
        const starElement = document.getElementById(`star-${h}`);
        if (starElement) { // Check if the element exists
            
            starElement.addEventListener("click", (event) => {
            const clickedIndex = Number(event.target.id.split('-')[1]);
            for (let k = 0; k <= clickedIndex; k++) {
            document.getElementById(`star-${k}`).src = "./Site/myImages/Star.png";
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
                document.getElementById(`star-${s + 1}`).src = "./Site/myImages/RateAndReviewsImages/hiddenBorderStar.png";
                myRaterFinalRate = (clickedIndex + 1)} 
                }          
            }
        }
    })             
        }                
    }
    if (i === 0 ){
    myRaterStars.innerHTML = "";
    myRaterStars.appendChild(myStarsDiv);
    }
    if (i === 1){
        myShareRate.addEventListener("click", () => {
        myRaterStars.innerHTML = "";
        myFinalRate.raterRate = myRaterFinalRate;
        myFinalRate.raterComment = myRateInput.value;
        
        this.document.querySelector(".outerShareComment-div").classList.add("hidden");
        console.log(myFinalRate);
    }) 
    }
})

}}, 100)

}



// to check if rates & reviews are empty
if ((eval(`message${id}`)[`id${[num]}`].rates).length === 0){
    myRateAndReviewsForm.innerHTML = "";
    myRateAndReviewsForm.innerHTML = `<p class="myRateAndReview-para"> التقييم والمراجعات </p>`;


    var myEmptyDiv = this.document.createElement("div");
    myEmptyDiv.classList.add("myEmptyDiv");

    var myEmptyImage = this.document.createElement("img");
    myEmptyImage.classList.add("myEmptyImage");
    myEmptyImage.src = "./Site/myImages/RateAndReviewsImages/No Chat History@3x (1).png";

    var myEmptyPara = this.document.createElement("p");
    myEmptyPara.classList.add("myEmptyPara");
    myEmptyPara.innerHTML = "نتطلع إلى سماع تجربتك! لا يوجد تقييمات أو مراجعات حتى الآن";

    myEmptyDiv.appendChild(myEmptyImage);
    myEmptyDiv.appendChild(myEmptyPara);

    myRateAndReviewsForm.appendChild(myEmptyDiv);
    myRateAndReviewsForm.innerHTML += `<div class="addRateButton-btn addRateButton-btn1"> <img class="myAddRate-img" src="./Site/myImages/icon.png" /> </div>`

 }else {
    myRateAndReviewsForm.innerHTML = "";
    myRateAndReviewsForm.innerHTML = `<p class="myRateAndReview-para"> التقييم والمراجعات </p>`;
    // if there are commnents and rates
    for (let i = 0; i < Object.keys(eval(`message${id}`)[`id${[num]}`].rates).length ; i++){

    // Create the <Outer> element
    var outerElement = document.createElement("div");
    outerElement.classList.add("myOuterDiv");
    
    // Create the <Upper> element
    var upperElement = document.createElement("div");
    upperElement.classList.add("myUpperDiv")
    
    // Create the <Date> element and add it to <Upper>
    var dateElement = document.createElement("div");
    dateElement.classList.add("myDate");
    dateElement.innerHTML = eval(`message${id}`)[`id${[num]}`].rates[`id${i}`].rateDate;
    upperElement.appendChild(dateElement);
    
    // Create the <Content> element and add it to <Upper>
    var contentElement = document.createElement("div");
    contentElement.classList.add("myContentDiv");
    upperElement.appendChild(contentElement);
    
    // Create the <Right> element and add it to <Content>
    var rightElement = document.createElement("div");
    rightElement.classList.add("myRightDiv");
    contentElement.appendChild(rightElement);
    
    // Create the <Name> element and add it to <Right>
    var nameElement = document.createElement("p");
    nameElement.classList.add("myNamePara");
    nameElement.innerHTML = eval(`message${id}`)[`id${[num]}`].rates[`id${i}`].raterName;
    rightElement.appendChild(nameElement);
    
    // Create the <div> element inside <rightElement> and add stars to it
    var rightDivElement = document.createElement('div');
    rightDivElement.classList.add("myStarsDiv");

    // Create an array to store star images
    var starImages = [];
    
    for (let j = 4; j >= 0; j--) {
        // Create an <img> element for each star
        var starElement = document.createElement("img");
        starElement.classList.add("myStarsImage");
        starElement.classList.add("myStarsImage" + j);
    
        // Set the star image based on the rater's rate
        starElement.src = (j < eval(`message${id}`)[`id${[num]}`].rates[`id${i}`].raterRate) ? 
        "/Site/myImages/Star.png" : "./Site/myImages/RateAndReviewsImages/hiddenStar.png";
    
        // Append the star element to the array
        starImages.push(starElement);
    }
    
    // Append all star elements to the <div>
    starImages.forEach(function (starElement) {
        rightDivElement.appendChild(starElement);
    });
    
    // Append the <div> to the parent element
    rightElement.appendChild(rightDivElement);

    // Create the second <div> element and add <ProfilePicture> class to it
    var profilePictureDivElement = document.createElement('div');
    contentElement.appendChild(profilePictureDivElement);
    var profilePictureElement = document.createElement('img');
    profilePictureElement.classList.add("myProfilePicture");
    profilePictureElement.src = eval(`message${id}`)[`id${[num]}`].rates[`id${i}`].raterAccountImage
    profilePictureDivElement.appendChild(profilePictureElement);

    // Create the <Lower> element
    var lowerElement = document.createElement("div");
    lowerElement.classList.add("myLowerContent-div");
        
    // Create the <p> element and add it to <Lower>
    var pElement = document.createElement('p');
    pElement.classList.add("myRaterComment-para");
    pElement.innerHTML = eval(`message${id}`)[`id${[num]}`].rates[`id${i}`].raterComment;
    lowerElement.appendChild(pElement);
        
    // Append <Upper> and <Lower> to <Outer>
    outerElement.appendChild(upperElement);
    outerElement.appendChild(lowerElement);
        
    myRateAndReviewsForm.appendChild(outerElement);           

    if (i === 0){
    myRateAndReviewsForm.innerHTML += `
    <div class="addRateButton-btn addRateButton-btn1"> 
        <img class="myAddRate-img" src="./Site/myImages/icon.png" /> 
    </div>`
    }         
}
}
}




        
})
