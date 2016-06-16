addLoadEvent(banner);

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

function banner() {
    picture = $(".banner_picture");
    point_nav = $(".circle");
    banner_text = $(".banner_text");
    picture_length = picture.length;
    cur_picture = 0;
    $(picture[cur_picture]).css({"opacity": "1", "z-index": "1"});
    $(point_nav[cur_picture]).css({"background": "white"});
    $(banner_text[cur_picture]).css({"opacity": "1", "top": "62%"});
    $("#banner .left").click(moveLeft);
    $("#banner .right").click(moveRight);
    move_state = setInterval(moveRight, 8000);
    $(".left, .right").hover(function () {
        clearInterval(move_state);
    }, function () {
        if (move_state) clearInterval(move_state);
        move_state = setInterval(moveRight, 8000);
    });
    setInterval(moveDown, 2000);
}

function moveLeft() {
    $(picture[cur_picture]).css({"opacity": "0", "z-index": "0"});
    $(point_nav[cur_picture]).css({"background": ""});
    $(banner_text[cur_picture]).css({"transition": "opacity, top, 0.2s linear"});
    $(banner_text[cur_picture]).css({"opacity": "0", "top": "65%"});
    cur_picture == 0 ? cur_picture = picture_length - 1 : cur_picture--;
    $(picture[cur_picture]).css({"opacity": "1", "z-index": "1"});
    $(point_nav[cur_picture]).css({"background": "white"});
    $(banner_text[cur_picture]).css({"transition": "opacity, top, 0.3s linear 1s"});
    $(banner_text[cur_picture]).css({"opacity": "1", "top": "62%"});
}

function moveRight() {
    $(picture[cur_picture]).css({"opacity": "0", "z-index": "0"});
    $(point_nav[cur_picture]).css({"background": ""});
    $(banner_text[cur_picture]).css({"transition": "opacity, top, 0.2s linear"});
    $(banner_text[cur_picture]).css({"opacity": "0", "top": "65%"});
    cur_picture == picture_length - 1 ? cur_picture = 0 : cur_picture++;
    $(picture[cur_picture]).css({"opacity": "1", "z-index": "1"});
    $(point_nav[cur_picture]).css({"background": "white"});
    $(banner_text[cur_picture]).css({"transition": "opacity, top, 0.3s linear 1s"});
    $(banner_text[cur_picture]).css({"opacity": "1", "top": "62%"});
}

function moveDown() {
    var arrow_1 = $("#arrow1");
    var arrow_2 = $("#arrow2");
    if(arrow_1.css("opacity") == "0") {
        arrow_1.css({"opacity": "1"});
        arrow_2.css({"opacity": "1"});
    } else {
        arrow_1.css({"opacity": "0"});
        arrow_2.css({"opacity": "0"});
    }
}
