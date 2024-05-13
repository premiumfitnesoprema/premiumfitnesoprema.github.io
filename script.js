// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");


// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}


    const body = document.querySelector("body"),
          nav = document.querySelector("nav"),
          modeToggle = document.querySelector(".dark-light"),
          searchToggle = document.querySelector(".searchToggle"),
          sidebarOpen = document.querySelector(".sidebarOpen"),
          siderbarClose = document.querySelector(".siderbarClose");
    
          let getMode = localStorage.getItem("mode");
              if(getMode && getMode === "dark-mode"){
                body.classList.add("dark");
              }
    
    // js code to toggle dark and light mode
          modeToggle.addEventListener("click" , () =>{
            modeToggle.classList.toggle("active");
            body.classList.toggle("dark");
    
            // js code to keep user selected mode even page refresh or file reopen
            if(!body.classList.contains("dark")){
                localStorage.setItem("mode" , "light-mode");
            }else{
                localStorage.setItem("mode" , "dark-mode");
            }
          });
    
    // js code to toggle search box
            searchToggle.addEventListener("click" , () =>{
            searchToggle.classList.toggle("active");
          });
     
          
    //   js code to toggle sidebar
    sidebarOpen.addEventListener("click" , () =>{
        nav.classList.add("active");
    });
    
    body.addEventListener("click" , e =>{
        let clickedElm = e.target;
    
        if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
            nav.classList.remove("active");
        }
    });
    
   
