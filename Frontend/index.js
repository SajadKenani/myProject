import SignUpPassword from "/Static/js/SignUpPassword"
import SignUp from "/Static/js/SignUpPage"

// To navigate to the next page
const navigateTo = url => {
  history.pushState(null, null, url);
  router()
}


const router = async () => {

  // setting up the routes
const routes = [
    {path: "/Error", view: () => console.log("404")},
    {path: "/signUp", view: SignUp},
    {path: "/signUpPassword", view: SignUpPassword},

]

// Testing each route to get the matching ones
const matchingRoutes = routes.map(r => {
return {
    route: r,
    isMatching: location.pathname === r.path,
}

})

// To find the matching route
let myMatch = matchingRoutes.find(matchingRoute => matchingRoute.isMatching);

if (!myMatch){
myMatch = routes[0];
matchingRoutes.isMatching = true;
};


const view = new myMatch.route.view();

document.querySelector("#app").innerHTML = await view.getHTML()
}

window.addEventListener("popstate", router);

// to load the router
document.addEventListener("DOMContentLoaded", () => {
router();

// to check if the button was clicked
document.body.addEventListener("click", event => {
  if(event.target.matches("[button-link]")) {
    event.preventDefault();

    // navigating to the next page
    navigateTo("/signUpPassword")
  }

})
})