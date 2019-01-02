var eventMethods = {
    MainBgEvent: function () {
        $(window).on("load", function () {
            $(".main_bg > li:gt(0)").hide();
            setInterval(function () {
                $('.main_bg > li:first')
                    .fadeOut(1000)
                    .next()
                    .fadeIn(1000)
                    .end()
                    .appendTo('.main_bg');
            }, 8000);
        })
    },
    FavorEvent: function () {
        $(document).ready(function () {
            var num = 0;
            setInterval(function () {
                num++;
                $(".favor_ul").animate({
                    "bottom": "+=20px"
                })

                if (num == 5) {
                    $(".favor_ul").animate({
                        "bottom": "-=100px"
                    }, 0)
                    return num = 0;
                }
            }, 4000)
        })
    },
    //Main Page1 Slider
    MainPageSlider: function () {
        $(window).on("load", function () {
            var num = 1;

            //Interval 5s 
            //num 변수 선언
            //Interval 할때마다 num + 1 , slider right +100% , slider_nav css 변경
            //num > 3 일때 num = 1 로 return
            slideFn = function () {

                num++;
                $("#sliders").animate({
                    "right": "+=100%"
                }, 500)
                if (num == 1) {
                    $("#slider_nav li:nth-child(" + num + ")").css({
                        "background-color": "#81DAF5"
                    })
                    $("#slider_nav li").not("#slider_nav li:nth-child(" + num + ")").css({
                        "background-color": "white"
                    })
                }
                else if (num == 2) {
                    $("#slider_nav li:nth-child(" + num + ")").css({
                        "background-color": "#81DAF5"
                    })
                    $("#slider_nav li").not("#slider_nav li:nth-child(" + num + ")").css({
                        "background-color": "white"
                    })
                }
                else if (num == 3) {
                    $("#slider_nav li:nth-child(" + num + ")").css({
                        "background-color": "#81DAF5"
                    })
                    $("#slider_nav li").not("#slider_nav li:nth-child(" + num + ")").css({
                        "background-color": "white"
                    })
                }
                else {
                    $("#slider_nav li").css({
                        "background-color": "white"
                    })
                    $("#slider_nav li:nth-child(1)").css({
                        "background-color": "#81DAF5"
                    })

                    $("#sliders").animate({
                        "right": "-=300%"
                    }, 0)
                    return num = 1;
                    //num > 3 일때 num = 1 로 return                        
                }
            }
            var slideIntervar = setInterval(slideFn, 5000)
            $("#slider_nav li:nth-child(4)").click(function () {
                clearInterval(slideIntervar)
                $(this).css({
                    "display": "none"
                })
                $("#slider_nav li:nth-child(5)").css({
                    "display": "block"
                })
            })
            $("#slider_nav li:nth-child(5)").click(function () {
                setInterval(slideFn, 5000);
                $(this).css({
                    "display": "none"
                })
                $("#slider_nav li:nth-child(4)").css({
                    "display": "block"
                })
            })

            //nav click event 
            //click 한 순번의 슬라이더로 이동, css 변경, num return

            $("#slider_nav li:nth-child(1)").click(function () {
                $(this).css({
                    "background-color": "#81DAF5"
                })
                $("#slider_nav li").not(this).css({
                    "background-color": "white"
                })
                $("#sliders").animate({
                    "right": "0%"
                }, 500)
                return num = 1;
            })

            $("#slider_nav li:nth-child(2)").click(function () {
                $(this).css({
                    "background-color": "#81DAF5"
                })
                $("#slider_nav li").not(this).css({
                    "background-color": "white"
                })
                $("#sliders").animate({
                    "right": "100%"
                }, 500)
                return num = 2;
            })

            $("#slider_nav li:nth-child(3)").click(function () {
                $(this).css({
                    "background-color": "#81DAF5"
                })
                $("#slider_nav li").not(this).css({
                    "background-color": "white"
                })
                $("#sliders").animate({
                    "right": "200%"
                }, 500)
                return num = 3;
            })

            $("#slider_nav li:nth-child(4)").click(function () {

            })
        })
    },
    thummoreEvent: function () {

        $(document).ready(function () {

            $(".more_thum").click(function () {
                $(this).hide();
                $(".hide_thum").show();
                $(".thum").show();
            })

            $(".hide_thum").click(function () {
                $(this).hide();
                $(".thum:nth-child(2),.thum:nth-child(3)").hide();
                $(".more_thum").show();

            });


        })


    }
}
eventMethods.MainBgEvent();
eventMethods.FavorEvent();
eventMethods.MainPageSlider();
eventMethods.thummoreEvent();

$(window).resize(function () {

    var theWindowSize = $(this).width();
    if (theWindowSize > 777) {
        $(".thum").show();
        $(".hide_thum").hide();
        $(".more_thum").hide();
    }
    else {
        $(".thum:nth-child(2),.thum:nth-child(3)").hide();
        $(".more_thum").show();
        $(".hide_thum").hide();

    }
})



// var matchScreen = window.matchMedia;
// var maxWidth = 1024;
// var meidumWidth = 787;
// var LargeScreen = '(min-width: 1025px)';
// var MediumScreen = '(max-width: 1024px) and (min-width:787px)';
// var smallScreen = '(max-width:786px)';
// var LagreQuery = matchScreen(LargeScreen).matches;
// var MediumQuery = matchScreen(MediumQuery).matches;
// var smallQuery = matchScreen(smallQuery).matches;

// //LagerSize MediaQuery
// if (LagreQuery) {
  
// }

// else if (MediumQuery) {


// }
// else if (smallQuery) {
  
// }