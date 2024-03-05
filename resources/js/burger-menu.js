function toggleDrawer() {
    let nav = document.getElementById("nav");
    let burgerMenu = document.querySelector(".burger-menu");
    nav.classList.toggle('opened');
    burgerMenu.classList.toggle('clicked');

    let navLinkWrappers = document.querySelectorAll(".nav-link-wrapper");
    let increment = 6; //This is the % with which we increment the top position.
    navLinkWrappers.forEach(function(wrapper, index){
        let topValue = 30 + index * increment;
        wrapper.style.top = topValue + "%";
        wrapper.style.animationDelay = (0.2 * (index /10 + 1)) + 's';
    });
}
