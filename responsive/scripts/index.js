$(document).ready(showMedia);
$(document).ready(returnTop);
$(document).ready(showFullPage);

function showMedia() {
    $(".fancybox-picture").fancybox();
    $(".fancybox-media").fancybox({
        padding: 0,
        openEffect: "none",
        closeEffect: "'none",
        prevEffect: "none",
        nextEffect: "none",
        arrows: false
    });
}

function returnTop() {
    $(".glyphicon-circle-arrow-up").click(function () {
        $.fn.fullpage.moveTo(1);
    });
}

function showFullPage() {
    $("#layout").fullpage({
        sectionsColor: ["#242834", "white", "#242834", "white", "white"],
        controlArrows: false,
        easing: "easeInQuart",
        onLeave: function (index, nextIndex, direction) {
            if (nextIndex == 1) {
                $(".navbar-default .navbar-nav > li > a").css({"color": "white"});
                $(".navbar-default .navbar-header > a").css({"color": "white"});
                $(".glyphicon-circle-arrow-up").css({"opacity": "0"});
            } else if (nextIndex == 2) {
                $(".navbar-default .navbar-nav > li > a").css({"color": "#777"});
                $(".navbar-default .navbar-header > a").css({"color": "#777"});
                $(".glyphicon-circle-arrow-up").css({"opacity": "0"});
            } else if (nextIndex == 3) {
                $(".navbar-default .navbar-nav > li > a").css({"color": "white"});
                $(".navbar-default .navbar-header > a").css({"color": "white"});
                $(".glyphicon-circle-arrow-up").css({"opacity": "0"});
            } else if (nextIndex == 4) {
                $(".navbar-default .navbar-nav > li > a").css({"color": "#777"});
                $(".navbar-default .navbar-header > a").css({"color": "#777"});
                $(".glyphicon-circle-arrow-up").css({"opacity": "0"});
            } else {
                $(".navbar-default .navbar-nav > li > a").css({"color": "white"});
                $(".navbar-default .navbar-header > a").css({"color": "white"});
                $(".glyphicon-circle-arrow-up").css({"opacity": "1"});
            }
        },
        afterLoad: function (anchorLink, index) {
            if (index == 5) {
                $(".top-cover").css({"height": "16%"});
                $(".bottom-cover").css({"height": "16%"});
            } else {
                $(".top-cover").css({"height": "60%"});
                $(".bottom-cover").css({"height": "60%"});
            }
        }
    });
}