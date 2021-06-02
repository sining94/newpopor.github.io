$(function () {
    var a = true;

    $(window).scroll(function () {


        var scroll = $(window).scrollTop();
        console.log(scroll);
        var i = 1;


        if (scroll > 300) {
            $(" .circle").css({ "opacity": "1", "marginTop": "15vh" });
            $("#sect2 > h1").css({ "opacity": "1", "transform": "translateY(0vh)" });

            if (a == true) {
                var func1 = setInterval(function () {
                    if (i < 70) {
                        i++;
                        color1(i);
                    }
                }, 25);
                var func2 = setInterval(function () {
                    if (i < 80) {
                        i++;
                        color2(i);
                    }
                }, 25);
                var func3 = setInterval(function () {
                    if (i < 65) {
                        i++;
                        color3(i);
                    }
                }, 25);
                var func4 = setInterval(function () {
                    if (i < 85) {
                        i++;
                        color4(i);
                    }
                }, 25);

            }
            a = false;

            function color1(i) {
                $(".sect2_1 > .circle").css({
                    "background": "conic-gradient(#bb7bff  0% " + i + "%, #eaeaea " + i + "% 100%)"
                });

            }
            function color2(i) {
                $(".sect2_2 > .circle").css({
                    "background": "conic-gradient(#bb7bff  0% " + i + "%, #eaeaea " + i + "% 100%)"
                });

            }
            function color3(i) {
                $(".sect2_3 > .circle").css({
                    "background": "conic-gradient(#bb7bff   0% " + i + "%, #eaeaea " + i + "% 100%)"
                });

            }
            function color4(i) {
                $(".sect2_4 > .circle").css({
                    "background": "conic-gradient(#bb7bff  0% " + i + "%, #eaeaea " + i + "% 100%)"
                });

            }
        }

        else if (scroll > 0) {
            $("header").css({ "background": "rgba(0,0,0,0.2)" });
        }
        else if (scroll == 0) {
            $("header").css({ "background": "none" });
        }


    });

    $("header > ul > li").hover(function () {
        $(this).css({ "background": "rgba(0,0,0,0.6)" });
    }, function () {
        $(this).css({ "background": "none" });
    });

    var metrix = 0;

    setTimeout(function () {
        setInterval(function () {
            if (metrix < $(".welcome > p").length) {
                $(".welcome > p").eq(metrix).css({ "opacity": "1", "transform": "translateY(0vh)" });
                metrix++;
            }
            else if (metrix == $(".welcome > p").length) {
                $(".question > p").css({ "opacity": "1", "transform": "translateY(0vh)" });
                $("#mouse").animate({ "opacity": "1" }, 1500)
            }
        }, 50);
    }, 200);

    $("#mouse").click(function () {
        $("body,html").scrollTop(380);
    });

    var right_num = 0;
    $("#right_btn").click(function () {
        if (right_num == 0) {
            $("#sect3_slide_list_train").css({ "left": "-100%" });
            right_num++;
        }
        else if (right_num == 1) {
            $("#sect3_slide_list_train").css({ "left": "-124%" });
            right_num++;
            right_num < 3;
        }
    });

    $("#left_btn").click(function () {
        if (right_num == 2) {
            $("#sect3_slide_list_train").css({ "left": "-100%" });
            right_num--;
        }
        else if (right_num == 1) {
            $("#sect3_slide_list_train").css({ "left": "0%" });
            right_num--;
        }
    });

    $("#sect3_slide").hover(function () {
        $(this).addClass("effect");
    }, function () {
        $(this).removeClass("effect").animate({ "scrollTop": "0" }, 10);
    });

    $("#sect3_slide > div > a > img").hover(function () {
        $(this).css({ "filter": "grayscale(0)" });
    }, function () {
        $(this).css({ "filter": "grayscale(1)" });
    });


    $("#sect3_slide_list_train > div").click(function () {
        var list = $(this).index();
        $($("#sect3_slide > div")).not($("#sect3_slide > div").eq(list)).animate({ "opacity": "0" }, 500);
        $("#sect3_slide > div").eq(list).animate({ "opacity": "1" }, 500);
        $("#sect3_slide > div").eq(list).css({ "display": "block" });
        $($("#sect3_slide > div")).not($("#sect3_slide > div").eq(list)).css({ "display": "none" });
        $(this).css({ "box-shadow": "0px 0px 8px 0px black", "transform": "scale(1.05)" });
        $("#sect3_slide_list_train > div").not(this).css({ "box-shadow": "none", "transform": "scale(1)" });
    });
    $("#sect3_slide_list_train > div").hover(function () {
        $(this).css({ "box-shadow": "0px 0px 8px 0px black", "transform": "scale(1.05)" });
        $("#sect3_slide_list_train > div").not(this).css({ "box-shadow": "none", "transform": "scale(1)" });
    });

    $("#sect3_slide_list_train > div").eq(0).trigger("click");


    $("#sect3_slide_list_train > div").mousemove(function (e) {

        var cursor_hover = $(this).index();
        $("#cursor> div").eq(cursor_hover).css({ "display": "block", "left": e.pageX + 3, "top": e.pageY - 40 });
        console.log(cursor_hover);
        $("#cursor").css({ "opacity": "1" });
        $("#cursor> div").not($("#cursor> div").eq(cursor_hover)).css({ "display": "none" });
    });
    $("#sect3_slide_list_train > div").mouseout(function () {
        $("#cursor> div").css({ "display": "none" });
    });
    $("ul > li > a#adr").click(function (e) {
        e.preventDefault();
        $("#sect4").css({
            "top": (($(window).height() - $("#sect4").outerHeight()) / 2 + $(window).scrollTop()) + "px",
            "left": (($(window).width() - $("#sect4").outerWidth()) / 2 + $(window).scrollLeft()) + "px"
        });
        $("#sect4").css({
            "opacity":"1" , "pointer-events":"all"
        });

    });
    $("#sect4").click(function(){
        $(this).css({"opacity":"0" ,"pointer-events":"none" });
    });


});