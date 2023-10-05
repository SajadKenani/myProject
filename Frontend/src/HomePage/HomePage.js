import { myData, myMessagesDataSection} from ".MyData.js";

addEventListener("DOMContentLoaded", function() {

    const myContentInfo = this.document.querySelector(".myContentInfo-div");

    const myLeftButton = this.document.querySelector(".myLeftButton-btn");
    const myRightButton = this.document.querySelector(".myRightButton-btn");

    const myLeftButtonImage = this.document.getElementById("myLeftButtonImage");
    const myRightButtonImage = this.document.getElementById("myRightButtonImage");

    const myCard = this.document.querySelector(".myCard");
    const myCard2 = this.document.querySelector(".myCard2");

    const myMainForm = this.document.querySelector(".myMainForm");
    const myCardForm = this.document.querySelector(".myCardForm");
    const myRateAndReviewsForm = this.document.querySelector(".RateAndReviews");

    let myCardImage = this.document.querySelector(".myCardImage-img");

    let myCardPara = this.document.querySelector(".myCardPara-para");

    const myCardMainPara = this.document.querySelector(".rateAndReviewsDiv-div")

    const paraOne = this.document.querySelector(".myCardMiniPara-paraOne");
    const paraTwo = this.document.querySelector(".myCardMiniPara-paraTwo");

    const myPurchasedButton = this.document.querySelector(".myPurchased-btn");


    const myMoreCardsDiv = this.document.querySelector(".myMoreCards-div")

    let myNumber = 1;


   const createCards = (i, j, myId) => {

    
    let myOuterDiv = this.document.createElement("div");
    myOuterDiv.classList = "myCardOuter-div";
    myOuterDiv.id = j;

    let myImage = this.document.createElement("img");
    myImage.src = myMessagesDataSection[i][j].messageImage;
    myImage.classList = "myMiniCardImage-img";
    myImage.id = j;

    let myAdjustedDescription = myMessagesDataSection[i][j].messageDescription.split("").splice(0, 43).join(""); 
    let myDescription = this.document.createElement("p");
    myDescription.innerHTML = myAdjustedDescription + "...";
    myDescription.classList = "myMiniCardPara-para";
    

    let myLowerContentDiv = this.document.createElement("div");

    let myLowerInfo = this.document.createElement("div");
    myLowerInfo.classList = "myStartsDiv";
    myLowerInfo.id = j;

    let myStartsRate = this.document.createElement("p");
    myStartsRate.innerHTML =  myMessagesDataSection[i][j].messageRate;
    myStartsRate.classList = "myStartsRate-para"
    myStartsRate.id = j;

    let myWriterName = this.document.createElement("p");
    myWriterName.innerHTML = myMessagesDataSection[i][j].messageWriterName;
    myWriterName.classList = "myWriterNamePara-para";
    myWriterName.id = +j;

    let myStartsContainter = this.document.createElement("div");
    myStartsContainter.classList = "myStartsContainter-div"
    myStartsContainter.id = j;

    let myStartsRateImage = this.document.createElement("img");
    myStartsRateImage.classList = "myStartsImage-img";
    myStartsRateImage.src = "/Frontend/src/HomePage/myImages/Star.png";
    myStartsRateImage.style = "margin-top: 15px"
    myStartsRateImage.id = j;


    myStartsContainter.appendChild(myStartsRateImage)
    myStartsContainter.appendChild(myStartsRate)
    

    myLowerInfo.appendChild(myStartsContainter);
    myLowerInfo.appendChild(myWriterName);

    myLowerContentDiv.appendChild(myLowerInfo)
   
    myOuterDiv.appendChild(myImage);
    myOuterDiv.appendChild(myDescription);
    myOuterDiv.appendChild(myLowerContentDiv);
    myOuterDiv.appendChild(myLowerInfo);
 
    if (myId === 1){
        if (i === 0 ){
            myCard.appendChild(myOuterDiv);
        
        }else if (i === 1){
            myCard2.appendChild(myOuterDiv);
        
        }
    }else if (myId === 2) {
        myOuterDiv.classList.add("card")
        myMoreCardsDiv.appendChild(myOuterDiv);
        
    }
   
}

for (let i = 0; i < myMessagesDataSection.length; i++){

    for (let j = 0; j < 5; j++){

        createCards(i, j, 1);
    }
}

    myCard.addEventListener("click", (event) => {
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

    const cardMoreInfo = (num, id) => {

        myMainForm.classList.add("hidden");
        myCardForm.classList.remove("hidden");

        this.scroll(0, 0);


        myCardImage.src = myMessagesDataSection[id][num].cardMoreInfo.cardImage;

        // Create the <a> element with class "myStartsRate-para" and style attribute
        var aElement = document.createElement('a');
        aElement.className = 'myStartsRate-para';
        aElement.style.marginRight = '7px';
       
        aElement.textContent = myMessagesDataSection[id][num].messageRate; // Set the text content
        

        // Create the <img> element with class "myStartsImage-img" and src attribute
        var imgElement = document.createElement('img');
        imgElement.className = 'myStartsImage-img';
        imgElement.src = '/Frontend/src/HomePage/myImages/Star.png';
        imgElement.title = 'arab'; // Set the title attribute
        
        // Append the <a> and <img> elements to a container element (e.g., a div)
        var containerElement = document.createElement('div');
        containerElement.textContent = myMessagesDataSection[id][num].cardMoreInfo.cardMainDescription;
        containerElement.appendChild(aElement);
        containerElement.appendChild(imgElement);

        myCardPara.appendChild(containerElement)
        
        paraOne.innerHTML = myMessagesDataSection[id][num].cardMoreInfo.cardDescription;
 
        paraTwo.innerHTML = myMessagesDataSection[id][num].messageWriterName;
 
        myPurchasedButton.innerHTML = myMessagesDataSection[id][num].cardPrise;

 
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

 

    const myContent = (num) => {
        let myImage = this.document.createElement("img");
        myImage.src = myData[myNumber].image;
        myImage.classList = "myMainContentInfoImage-img";
    
        let myName = this.document.createElement("p");
        myName.classList = "myNamePara-para"
        myName.innerHTML = myData[myNumber].name
    
        let myWritedName = this.document.createElement("p");
        myWritedName.classList = "myWritedNamePara-para"
        myWritedName.innerHTML = myData[myNumber].writerName;
    
        let myFinalDiv = this.document.createElement("div");
        myFinalDiv.classList = "myFinalDiv-div";
    
        myFinalDiv.appendChild(myImage);
        myFinalDiv.appendChild(myName);
    
        myFinalDiv.appendChild(myWritedName);
        myContentInfo.appendChild(myFinalDiv);
    
        console.log(myImage);

        if (myNumber === 0 ){
       
            myRightButtonImage.style.display = 'none';
            
        } else { 
            myRightButtonImage.style.display = "";
            myRightButtonImage.src = myData[myNumber - 1].image;
        }

        if (myNumber === myData.length - 1){
            myLeftButtonImage.style.display = 'none';
        }else { 
            myLeftButtonImage.style.display = '';
            myLeftButtonImage.src = myData[myNumber + 1].image; 
        }

        
    }

    const myRateAndReviews = (num, id) => {
        console.log((myMessagesDataSection[id][num]))

        if ((myMessagesDataSection[id][num].rateAndReviews).length === 0){
            console.log("Empty");

            var myEmptyDiv = this.document.createElement("div");
            myEmptyDiv.classList.add("myEmptyDiv");

            var myEmptyImage = this.document.createElement("img");
            myEmptyImage.classList.add("myEmptyImage");
            myEmptyImage.src = "myImages/No Chat History@3x (1).png"

            var myEmptyPara = this.document.createElement("p");
            myEmptyPara.classList.add("myEmptyPara");
            myEmptyPara.innerHTML = "نتطلع إلى سماع تجربتك! لا يوجد تقييمات أو مراجعات حتى الآن"

            myEmptyDiv.appendChild(myEmptyImage);
            myEmptyDiv.appendChild(myEmptyPara);

            myRateAndReviewsForm.appendChild(myEmptyDiv);

        }else {

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
        
                let myStarts = ["false", "false", "false", "false", "false"]
                    
                for (let j = 0; j <= 4; j++){
           
                    if (j < (myMessagesDataSection[id][num]).rateAndReviews[i].raterRate){
                        myStarts[j] = "myImages/Star.png"
                    }else {
                        myStarts[j] = "myImages/hiddenStar.png"
                    }
                }
        
        
                starsElement0.src = myStarts[4]
                starsElement1.src = myStarts[3]
                starsElement2.src = myStarts[2]
                starsElement3.src = myStarts[1]
                starsElement4.src = myStarts[0]
        
        
                rightDivElement.appendChild(starsElement0);
                rightDivElement.appendChild(starsElement1);
                rightDivElement.appendChild(starsElement2);
                rightDivElement.appendChild(starsElement3);
                rightDivElement.appendChild(starsElement4);
        
                rightElement.appendChild(rightDivElement);
        
                // Create the second <div> element and add <ProfilePicture> to it
                var profilePictureDivElement = document.createElement('div');
                contentElement.appendChild(profilePictureDivElement);
                var profilePictureElement = document.createElement('img');
                profilePictureElement.classList.add("myProfilePicture");
                profilePictureElement.src = "myImages/Ellipse 828.png"
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

    myLeftButton.addEventListener("click", (event) => {
        event.preventDefault();    

        if (myNumber >= myData.length - 1){
            myNumber = myData.length - 1;
        }else {
            myNumber++;
        }

        myContentInfo.removeChild(myContentInfo.children[0])


        myContent("++")

    })

    myRightButton.addEventListener("click", (event) => {
        event.preventDefault();

        if (myNumber <= 0){
            myNumber = 0;
        }else {
            myNumber--;
        }
        

        myContentInfo.removeChild(myContentInfo.children[0])

        myContent("--")

    })

    myContent();
        
})
