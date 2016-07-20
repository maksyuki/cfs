$(document).ready(showMedia);
$(document).ready(showPathNavigation);

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

function showPathNavigation() {
    $(window).scroll(is_scroll);
    $(".big .day1").hover(d_show, d_hide);
    $(".big .day2").hover(d_show, d_hide);
}

function is_scroll() {
    if ($(window).scrollTop() > $(".big").offset().top - 300 && $(".big .blue").css("width") == "0px") {
        $(".big .blue").animate({width: "83%"}, 3000);
        list1 = $(".big .day1");
        list2 = $(".big .day2");
        setTimeout(function () {
            $(list1[0]).animate({opacity: "1"}, 400);
        }, 800);
        setTimeout(function () {
            $(list2[0]).animate({opacity: "1"}, 400);
        }, 1000);
        setTimeout(function () {
            $(list2[1]).animate({opacity: "1"}, 400);
        }, 1200);
        setTimeout(function () {
            $(list1[1]).animate({opacity: "1"}, 400);
        }, 1600);
        setTimeout(function () {
            $(list2[2]).animate({opacity: "1"}, 400);
        }, 1800);
        setTimeout(function () {
            $(list1[2]).animate({opacity: "1"}, 400);
        }, 2000);
        setTimeout(function () {
            $(list1[3]).animate({opacity: "1"}, 400);
        }, 2500);
        setTimeout(function () {
            $(list1[4]).animate({opacity: "1"}, 400);
        }, 2700);
        setTimeout(function () {
            $(list2[3]).animate({opacity: "1"}, 400);
        }, 3000);
    }
}

function d_show() {
    d_id = $(this).attr("id");
    if (d_id == "d1") {
        $(".big .det").text("2014年8月14日，西安华航泽睿广告传播有限公司成立。");
    } else if (d_id == "d2") {
        $(".big .det").text("2015年8月22日，华航泽睿TIMEONE长航时四轴正式发布，专业航拍首选利器。");
    } else if (d_id == "d3") {
        $(".big .det").text("2015年8月26日，华航泽睿首款高精度三维测绘模型服务正式上线。");
    } else if (d_id == "d4") {
        $(".big .det").text("2015年10月19日，受邀参加全国“双创”活动周西安分会场创新创业成果展示。带来了参与多次拍摄任务的经典八旋翼无人机及由团队自主研发的“睿云”全功能地面站。");
    } else if (d_id == "d5") {
        $(".big .det").text("2015年10月22日，华航泽睿WM-PRO无人机全功能地面站正式发布。");
    } else if (d_id == "d6") {
        $(".big .det").text("2015年11月5日，参加第二十二届中国杨凌农业高科技成果博览会，带来了重点在研的专业级无人机系统及地面站解决方案。");
    } else if (d_id == "d7") {
        $(".big .det").text("2015年11月20日，受邀参会并希望通过参展将WISEMUSE·睿思Pro全功能无人机地面站进一步推向市场。");
    } else if (d_id == "d8") {
        $(".big .det").text("2015年12月21日，华航创新成立。华航创新与华航泽睿均为华航旗下企业，主要进行相关硬件产品的研发并提供企业级定制服务。");
    } else if (d_id == "d9") {
        $(".big .det").text("未来，无限的可能等着我们来创造。");
    }
    $(".big .det").stop().animate({opacity: "1"}, 200);
    $(this).find(".title").css("color", "#fff");
}

function d_hide() {
    $(".big .det").stop().animate({opacity: "0"}, 200);
    $(this).find(".title").css("color", "#ccc");
}