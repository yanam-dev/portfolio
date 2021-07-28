$(function(){
    // PRELOADER start
    var $preloader = $('#spinner'),
    $spinner = $preloader.find('.spinner-load');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
    // PRELOADER end
    
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
    // NAV MENU rightside
    $('.menu__btn').on('click', function () {
        $('.menu__btn').toggleClass('menu__btn--active');
    });

    // TWEENMAX ANIMAtion
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

    $(".navigation-link-1").hover(function() {
        $(".project-preview").css({ "background-image": "url(images/content/img-2.jpg)", "top": "5%" });
    });

    $(".navigation-link-2").hover(function() {
        $(".project-preview").css({ "background-image": "url(images/content/img-11.jpg)", "top": "14%"});
    });

    $(".navigation-link-3").hover(function() {
        $(".project-preview").css({ "background-image": "url(images/content/img-3.jpg)", "top": "28%" });
    });

    $(".navigation-link-4").hover(function() {
        $(".project-preview").css({ "background-image": "url(images/content/img-4.jpg)", "top": "44%" });
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop(),
            dh = $(document).height(),
            wh = $(window).height();
        scrollPercent = (scroll / (dh - wh)) * 100;
        $(".progressbar").css("height", scrollPercent + "60%");
    });
    // TWEENMAX ANIMAtion end

    // BARBA.js
    // Barba.Pjax.start();

    // var FadeTransition = Barba.BaseTransition.extend({
    //     start: function() {

    //         Promise.all([this.newContainerLoading, this.fadeOut()]).then(
    //             this.fadeIn.bind(this)
    //         );
    //     },
    //     fadeOut: function(){
    //         this.oldContainer //home
    //     },

    //     fadeIn: function() {
    //         this.newContainer.classList.add ("slide-in");

    //         var that = this;

    //         this.newContainer.addEventListener('animationend', function(){
    //             that.newContainer.classList.remove('slide-in');
    //             that.done();
    //         });
    //     }
    // });

    // Barba.Pjax.getTransition = function() {

    //     return FadeTransition;
    // };

   // BARBA.js
   const swup = new Swup();
});