$(document).ready(showNav);
$(document).ready(showFancyBox);

function showNav() {
    $(".nav #product").mouseenter(function () {
        $(".nav .nav_productmenu").stop();
        $(".nav .nav_productmenu").animate({height: "180px"}, 500);
        old_back = $(".nav").css("background-color");
        $(".nav .nav_productmenu").css("background-color", old_back);
        if (old_back != "rgb(40, 40, 40)") {
            // $(".nav .nav_productmenu").css("border-bottom", "1px solid #ccc");
            $(".nav .nav_productmenu").css("border-bottom", "1px solid #ccc");
        } else {
            $(".nav .nav_productmenu").css("border-bottom", "none");
        }
    });

    $(".nav .nav_menu_item").mouseenter(function () {
        if ($(this).attr("id") != "product") {
            $(".nav .nav_productmenu").stop();
            $(".nav .nav_productmenu").animate({height: "0"}, 500, function () {
            }).css("border-bottom", "none");
        }
    });

    $(".nav .nav_productmenu").mouseleave(function () {
        $(".nav .nav_productmenu").stop();
        $(".nav .nav_productmenu").animate({height: "0"}, 500, function () {
        }).css("border-bottom", "none");
    });
}

function showFancyBox() {
    $(".fancybox").fancybox({
        padding: 0
    });
}