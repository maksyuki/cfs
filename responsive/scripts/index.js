$(document).ready(showMedia);
$(document).ready(showFullPage);

function showMedia() {
    $(".fancybox-media").fancybox({
        padding: 0,
        openEffect: "none",
        closeEffect: "'none",
        prevEffect: "none",
        nextEffect: "none",
        arrows: false
    });
}

function showFullPage() {
    $("#layout").fullpage({
        sectionsColor: ["#242834", "white", "#242834", "white", "white"],
        controlArrows: false,
        easing: "easeInQuart"
    });
}