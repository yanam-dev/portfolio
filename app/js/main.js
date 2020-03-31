$(function(){
    // PRELOADER start
    var $preloader = $('#spinner'),
    $spinner = $preloader.find('.spinner-load');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
    // PRELOADER end

    // Smooth scrolling
    $("nav li a").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 1000);
    });
    // CURSOR
    let mouseCursor = document.querySelector(".cursor");
    let navLinks = document.querySelectorAll(".main");

    window.addEventListener('mousemove',cursor);

    function cursor (e) {
        mouseCursor.style.top = e.pageY + "px";
        mouseCursor.style.left = e.pageX + "px";
    }

    navLinks.forEach(link => {
        link.addEventListener("mouseleave", () => {
            mouseCursor.classList.remove("link-grow");
            link.classList.remove("hovered-link");
        });
        link.addEventListener("mouseover", () => {
            mouseCursor.classList.add("link-grow");
            link.classList.add("hovered-link");
        });
        });
        
});