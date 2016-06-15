window.onload = banner;

function banner() {
    picture = $(".banner_picture");
    picture_length = picture.length;
    cur_picture = 0;
    point_nav = $(".circle");
    $(picture[cur_picture]).css({"opacity": "1", "z-index": "1"});
    $(point_nav[cur_picture]).css({"background": "white"});
    $("#banner .left").click(moveLeft);
    $("#banner .right").click(moveRight);
    move_state = setInterval(moveRight, 8000);
    $(".left, .right").hover(function () {
        clearInterval(move_state);
    }, function () {
        if (move_state) clearInterval(move_state);
        move_state = setInterval(moveRight, 8000);
    });
}

function moveLeft() {
    $(picture[cur_picture]).css({"opacity": "0", "z-index": "0"});
    $(point_nav[cur_picture]).css({"background": ""});
    cur_picture == 0 ? cur_picture = picture_length - 1 : cur_picture--;
    $(picture[cur_picture]).css({"opacity": "1", "z-index": "1"});
    $(point_nav[cur_picture]).css({"background": "white"});
}

function moveRight() {
    $(picture[cur_picture]).css({"opacity": "0", "z-index": "0"});
    $(point_nav[cur_picture]).css({"background": ""});
    cur_picture == picture_length - 1 ? cur_picture = 0 : cur_picture++;
    $(picture[cur_picture]).css({"opacity": "1", "z-index": "1"});
    $(point_nav[cur_picture]).css({"background": "white"});
}
