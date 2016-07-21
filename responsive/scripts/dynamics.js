$(document).ready(showMedia);

function showMedia() {
    $(".fancybox-picture").fancybox({});
    $(".fancybox-media").fancybox({
        padding: 0,
        openEffect: "none",
        closeEffect: "'none",
        prevEffect: "none",
        nextEffect: "none",
        arrows: false
    });
}