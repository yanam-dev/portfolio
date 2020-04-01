$(function(){
    // PRELOADER start
    var $preloader = $('#spinner'),
    $spinner = $preloader.find('.spinner-load');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
    // PRELOADER end

    // Smooth scrolling
    // $("nav li a").click(function () {
    //     elementClick = $(this).attr("href");
    //     destination = $(elementClick).offset().top;
    //     $("body,html").animate({scrollTop: destination }, 1000);
    // });
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
    // TWEENMAX ANIMAtion
    // $(document).ready(function() {
        TweenMax.set(".project-preview", { width: 0 });
        var tl = new TimelineLite();

        $(document)
            .on("mouseover", ".navigation-item", function(evt) {
                tl = new TimelineLite();
                tl.to($(".project-preview"), 1, {
                width: "600px",
                ease: Expo.easeInOut
                });
            })
            .on("mouseout", ".navigation-item", function(evt) {
                tl = new TimelineLite();
                tl.to($(".project-preview"), 0.5, {
                width: 0,
                ease: Expo.easeInOut
                });
          });
    //   });

    $(".navigation-link-1").hover(function() {
        $(".project-preview").css({ "background-image": "url(images/content/img-1.jpg)" });
    });

    $(".navigation-link-2").hover(function() {
        $(".project-preview").css({ "background-image": "url(images/content/img-2.jpg)" });
    });

    $(".navigation-link-3").hover(function() {
        $(".project-preview").css({ "background-image": "url(images/content/img-3.jpg)" });
    });

    $(".navigation-link-4").hover(function() {
        $(".project-preview").css({ "background-image": "url(images/content/img-4.jpg)" });
    });

    $(".navigation-link-5").hover(function() {
        $(".project-preview").css({ "background-image": "url(images/content/img-5.jpg)" });
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop(),
            dh = $(document).height(),
            wh = $(window).height();
        scrollPercent = (scroll / (dh - wh)) * 100;
        $(".progressbar").css("height", scrollPercent + "60%");
    });  
    // TWEENMAX ANIMAtion end
});