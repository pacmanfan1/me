function myFunction() {
    let topNav = document.getElementById("topnavID");

    if (topNav.className === "topnav") {
        topNav.className += " responsive";
    }
    else {
        topNav.className = "topnav";
    }
}