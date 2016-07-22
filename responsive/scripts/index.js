$(document).ready(showMedia);
$(document).ready(returnTop);
$(document).ready(clickSwitchTab);
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

function changeSwitchTab(index) {
    for (var i = 0; i < switch_tab.length; i++) {
        if ($(switch_tab[i]).css("border-bottom") == "2px solid rgb(68, 168, 242)") {
            $(switch_tab[i]).css({"border-bottom": "0 solid #44a8f2"});
            $(switch_tab[index]).css({"border-bottom": "2px solid #44a8f2"});
            if (index == 0) {
                $(".section4 .thumbnail h4 strong").text("华航创新");
                $(".section4 .thumbnail p").text("华航泽睿并不满足于每一次技术上的小小领先，不断创新是我们的常态，也是品质，于是我们成立了华航创新。华航创新与华航泽睿均为华航旗下企业，主要进行相关硬件产品的研发并提供企业级定制服务。");
            } else if (index == 1) {
                $(".section4 .thumbnail h4 strong").text("大型四旋翼");
                $(".section4 .thumbnail p").text("采用gopro3+高清运动摄像机，搭载基于zenmuse技术的H33D增稳云台，帮助您第一时间快捷捕获现场珍贵影像。能够快速机动，适于移动场面拍摄；动静结合，获得稳定的画面。适合与八旋翼航拍机配合拍摄。");
            } else if (index == 2) {
                $(".section4 .thumbnail h4 strong").text("大型八旋翼");
                $(".section4 .thumbnail p").text("采用电影级/影视级高清摄像机，其中松下GH2相机，1600万像素，图片尺寸4608×3456，视频全高清拍摄1080P。该机型具有大载重、高抗风性、高稳定性的显著特点，八个旋翼电机提供了稳定强劲的动力输出，实现大载重飞行器在大场景空中的精确飞行。");
            } else if (index == 3) {
                $(".section4 .thumbnail h4 strong").text("TIMEONE长航四轴");
                $(".section4 .thumbnail p").text("全新的TIMEONE设计轴距840mm，折叠后小于300mm，结合桨叶快拆，为转场带来极大便利。采用的标准155mm挂载杆，支持零度、大疆全系云台，兼容佳能5D系列，As7，GH3/4等主流机型。经过特殊设计后TIMEONE可以达到26分钟的滞空时间，比传统重型四旋翼平均提高58%。TIMEONE每片螺旋桨均经过激光平衡仪的精密平衡，误差仅为0.01g，能够有效削弱振动。");
            } else {
                $(".section4 .thumbnail h4 strong").text("WM-PRO无人机地面站");
                $(".section4 .thumbnail p").text("WISEMUSE·睿思Pro全功能无人机地面站是一款功能高度集成的无人机地面站。与普通地面站相比，不但集成了飞行控制、图像传输模块、还配备两块15寸高清高亮显示器、使用双5.8G通道传输高清飞行影像、优化无人机通讯链路、超便携设计展开即可使用，方便转场。大大缩减无人机飞行准备时间，降低用户的使用成本和学习成本，提高无人机使用效率。");
            }
        }
    }
}

function clickSwitchTab() {
    switch_tab = $(".section4 .switch-tab li a");
    $("#protag1").click(function () {
        changeSwitchTab(0)
    });
    $("#protag2").click(function () {
        changeSwitchTab(1)
    });
    $("#protag3").click(function () {
        changeSwitchTab(2)
    });
    $("#protag4").click(function () {
        changeSwitchTab(3)
    });
    $("#protag5").click(function () {
        changeSwitchTab(4)
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