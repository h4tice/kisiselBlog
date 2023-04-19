// nav renk
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//gecisler
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "hepsi"){
            $(".postt").show("1000")
        } else{
            $(".postt")
                .not("." + value)
                .hide(1000);
            $(".postt")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});

//mod degisimi
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }