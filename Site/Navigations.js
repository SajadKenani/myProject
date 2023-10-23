addEventListener("DOMContentLoaded", function() {

    let accounts

    const extractMyAccount = (accountData) => {
        const data = {};
    
        for (let i = 0; i < accountData.querySelectorAll(".account").length; i++){
            const myData = accountData.querySelector(`.account-${i}`)
    
            data[`id${i}`] = {
                accountName: myData.querySelector("#userName").textContent,
                accountPassword: myData.querySelector("#userPassword").textContent,
                accountProfilePictire: myData.querySelector("#profilePicture").getAttribute("src"),
            }
    
        }
        return data;
    
        
    
    }

    // Fetch and parse the HTML data as before
    fetch("./MyData.html")
    .then(response => response.text())
    .then(data => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = data;
    
        // Select the elements with class "mainDiv-0" and "mainDiv-1"
        const myAccountInfo = tempDiv.querySelector('.accounts');
    
    
        accounts = extractMyAccount(myAccountInfo)
    
    
    
    });

   
    const myPurchasedButton = this.document.querySelector(".myPurchased-btn");

    // The Form of Main Page Content
    const myMainForm = this.document.querySelector(".myMainForm");
    
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
        this.document.querySelector(".myAccountImage-img").src = accounts[`id${0}`].accountProfilePictire
        

        // setting the user name
        this.document.querySelector(".myAccountName-para").innerHTML = accounts[`id${0}`].accountName
        this.document.querySelector(".myAccountPage").classList.remove("hidden");


    })

    // The shadow beside the catagory div
    this.document.querySelector(".shadowDiv-div").addEventListener("click", () => {
  
        // To hide the catagory div when the shadow is clicked
        this.document.querySelector(".mainDiv-div").classList.add("mainDivBack-div");
        this.document.querySelector(".shadowDiv-div").classList.add("shadowBack-div");


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
        this.document.querySelector(".myAccountPara").innerHTML =  accounts[`id${0}`].accountName
        // setting user's profile picture
        this.document.querySelector(".myAccount-img").src = accounts[`id${0}`].accountProfilePictire
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

})
