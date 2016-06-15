window.onload = banner;

function banner() {
    picture = $(".banner_picture");
    picture_length = picture.length;
    cur_picture = 0;
    $(picture[cur_picture]).css({"opacity": "1", "z-index": "1"});
    $("#banner .left").click(moveLeft);
    $("#banner .right").click(moveRight);
    setInterval(moveLeft, 8000);
}

function moveLeft() {
    $(picture[cur_picture]).css({"opacity": "0", "z-index": "0"});
    cur_picture == picture_length - 1 ? cur_picture = 0 : cur_picture++;
    $(picture[cur_picture]).css({"opacity": "1", "z-index": "1"});
}

function moveRight() {
    $(picture[cur_picture]).css({"opacity": "0", "z-index": "0"});
    cur_picture == 0 ? cur_picture = picture_length - 1 : cur_picture--;
    $(picture[cur_picture]).css({"opacity": "1", "z-index": "1"});
}
