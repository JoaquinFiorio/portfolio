window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("menuFixed", window.scrollY>50);
});