// addLoadEvent(showNav);
// addLoadEvent(showBanner);
// addLoadEvent(showMedia);
$(document).ready(showMedia);
$(document).ready(showBanner);
$(document).ready(returnTop);
$(document).ready(showNav);
$(document).ready(showfullPage);
$(document).ready(clickSwitchTab);
$(document).ready(function () {
    $(".banner_zero").css({"opacity": "1", "top": "62%"});
    $(".p50").css({"transition-delay": "0.7s"});
    $(".product_pic0").css({"transition-delay": "0.7s"});
});

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

function showNav() {
    $(".nav #product").mouseenter(function () {
        $(".nav .productmenu").stop();
        $(".nav .productmenu").animate({height: "180px"}, 500);
        old_back = $(".nav").css("background-color");
        $(".nav .productmenu").css("background-color", old_back);
        if (old_back != "rgb(40, 40, 40)") {
            // $(".nav .productmenu").css("border-bottom", "1px solid #ccc");
            $(".nav .productmenu").css("border-bottom", "1px solid #ccc");
        } else {
            $(".nav .productmenu").css("border-bottom", "none");
        }
    });

    $(".nav .nav_menu_item").mouseenter(function () {
        if ($(this).attr("id") != "product") {
            $(".nav .productmenu").stop();
            $(".nav .productmenu").animate({height: "0"}, 500, function () {
            }).css("border-bottom", "none");
        }
    });

    $(".nav .productmenu").mouseleave(function () {
        $(".nav .productmenu").stop();
        $(".nav .productmenu").animate({height: "0"}, 500, function () {
        }).css("border-bottom", "none");
    });
}

// function showBanner() {
//     picture = $(".banner_picture");
//     point_nav = $(".circle");
//     banner_text = $(".banner_text");
//     picture_length = picture.length;
//     cur_picture = 0;
//     $(picture[cur_picture]).css({"opacity": "1", "z-index": "1"});
//     $(point_nav[cur_picture]).css({"background": "white"});
//     $(banner_text[cur_picture]).css({"opacity": "1", "top": "62%"});
//     $("#banner .left").click(moveLeft);
//     $("#banner .right").click(moveRight);
//     move_state = setInterval(moveRight, 8000);
//     $(".left, .right").hover(function () {
//         clearInterval(move_state);
//     }, function () {
//         if (move_state) clearInterval(move_state);
//         move_state = setInterval(moveRight, 8000);
//     });
//     setInterval(moveDown, 2000);
// }
//
// function moveLeft() {
//     $(picture[cur_picture]).css({"opacity": "0", "z-index": "0"});
//     $(point_nav[cur_picture]).css({"background": ""});
//     $(banner_text[cur_picture]).css({"transition": "opacity, top, 0.2s linear"});
//     $(banner_text[cur_picture]).css({"opacity": "0", "top": "65%"});
//     cur_picture == 0 ? cur_picture = picture_length - 1 : cur_picture--;
//     $(picture[cur_picture]).css({"opacity": "1", "z-index": "1"});
//     $(point_nav[cur_picture]).css({"background": "white"});
//     $(banner_text[cur_picture]).css({"transition": "opacity, top, 0.3s linear 1s"});
//     $(banner_text[cur_picture]).css({"opacity": "1", "top": "62%"});
// }
//
// function moveRight() {
//     $(picture[cur_picture]).css({"opacity": "0", "z-index": "0"});
//     $(point_nav[cur_picture]).css({"background": ""});
//     $(banner_text[cur_picture]).css({"transition": "opacity, top, 0.2s linear"});
//     $(banner_text[cur_picture]).css({"opacity": "0", "top": "65%"});
//     cur_picture == picture_length - 1 ? cur_picture = 0 : cur_picture++;
//     $(picture[cur_picture]).css({"opacity": "1", "z-index": "1"});
//     $(point_nav[cur_picture]).css({"background": "white"});
//     $(banner_text[cur_picture]).css({"transition": "opacity, top, 0.3s linear 1s"});
//     $(banner_text[cur_picture]).css({"opacity": "1", "top": "62%"});
// }
//
// function moveDown() {
//     var arrow_1 = $("#arrow1");
//     var arrow_2 = $("#arrow2");
//     if (arrow_1.css("opacity") == "0") {
//         arrow_1.css({"opacity": "1"});
//         arrow_2.css({"opacity": "1"});
//     } else {
//         arrow_1.css({"opacity": "0"});
//         arrow_2.css({"opacity": "0"});
//     }
// }
function showBanner() {
    setInterval(function () {
        $.fn.fullpage.moveSlideRight();
    }, 8000);
}

function returnTop() {
    $(".fa-arrow-circle-up").click(function () {
        $.fn.fullpage.moveTo(1);
    });
}

function changeSwitchTab(index) {
    for (var i = 0; i < switch_tab.length; i++) {
        if ($(switch_tab[i]).css("border-bottom") == "2px solid rgb(68, 168, 242)") {
            $(switch_tab[i]).css({"border-bottom": "0 solid #44a8f2"});
            $(switch_table_p5[i]).css({"transition-delay": ""});
            $(switch_table_p5[i]).css({"left": "112%", "opacity": "0"});
            $(switch_table_img[i]).css({"transition-delay": ""});
            $(switch_table_img[i]).css({"margin-left": "-100%", "opacity": "0"});
            $(switch_tab[index]).css({"border-bottom": "2px solid #44a8f2"});
            $(switch_table_p5[index]).css({"transition-delay": "0.7s"});
            $(switch_table_p5[index]).css({"left": "50%", "opacity": "1"});
            $(switch_table_img[index]).css({"transition-delay": "0.7s"});
            $(switch_table_img[index]).css({"margin-left": "-480px", "opacity": "1"});
        }
    }
}

function clickSwitchTab() {
    switch_tab = $(".pro");
    switch_table_p5 = $(".switch-table-content p");
    switch_table_img = $(".switch-table-content img");
    $("#pro0").click(function () {
        changeSwitchTab(0)
    });
    $("#pro1").click(function () {
        changeSwitchTab(1)
    });
    $("#pro2").click(function () {
        changeSwitchTab(2)
    });
    $("#pro3").click(function () {
        changeSwitchTab(3)
    });
    $("#pro4").click(function () {
        changeSwitchTab(4)
    });
}

function showMedia() {
    $(".fancybox-picture").fancybox({
        padding: 0,
        openEffect: "elastic",
        openSpeed: 400
    });

    $(".fancybox-media").fancybox({
        padding: 0,
        openEffect: "none",
        closeEffect: "'none",
        prevEffect: "none",
        nextEffect: "none",
        arrows: false
    });
}

function showfullPage() {
    $("#layout").fullpage({
        sectionsColor: ["#fff", "#fff", "#fff", "#fff", "#fff"],
        navigationTooltips: ["首页", "影视航拍", "智慧城市", "自研产品", "关于我们"],
        // showActiveTooltip: true,
        // navigation: true,
        controlArrows: false,
        easing: "easeInQuart",
        onLeave: function (index, nextIndex, direction) {
            if (nextIndex == 2) {
                $(".fa-arrow-circle-up").css({"opacity": "0.75"});
            } else if (nextIndex == 1) {
                $(".fa-arrow-circle-up").css({"opacity": "0"});
            } else if (nextIndex == 5) {
                for (var i = 0; i < switch_tab.length; i++) {
                    if ($(switch_tab[i]).css("border-bottom") == "2px solid rgb(68, 168, 242)") {
                        $(switch_table_p5[i]).css({"left": "112%", "opacity": "0"});
                        $(switch_table_img[i]).css({"margin-left": "-100%", "opacity": "0"});
                    }
                }
            } else if (nextIndex == 4) {
                for (var i = 0; i < switch_tab.length; i++) {
                    if ($(switch_tab[i]).css("border-bottom") == "2px solid rgb(68, 168, 242)") {
                        $(switch_table_p5[i]).css({"left": "50%", "opacity": "1"});
                        $(switch_table_img[i]).css({"margin-left": "-480px", "opacity": "1"});
                    }
                }
            }
        },
        onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
            banner_text = $("#banner .text");
            $(banner_text[slideIndex]).css({"transition": "opacity, top, 0.2s linear"});
            $(banner_text[slideIndex]).css({"opacity": "0", "top": "65%"});
            $(banner_text[nextSlideIndex]).css({"transition": "opacity, top, 0.3s linear 1s"});
            $(banner_text[nextSlideIndex]).css({"opacity": "1", "top": "62%"});
        }
    });
}