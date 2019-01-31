

var eventMethods = {
    MainBgEvent: function () {
        $(window).on("load", function () {
            var i = 0;
            setInterval(function () {
                i++;
                $(".main_bg li:nth-last-child(" + i + ")").fadeOut(500);
                if (i === 3) {
                    $(".main_bg li").fadeIn(500);
                    return i = 0;
                }
            }, 6000)
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
                }, 700)
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
            var slideIntervar = setInterval(slideFn, 8000)
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
                setInterval(slideFn, 8000);
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
    },
    rotateBoxEvent: function () {

        $(document).ready(function () {
            $(".left_btn").click(function () {
                $(".rotate_boxs").animate({
                    "marginLeft": "41%"
                })
            })
            $(".right_btn").click(function () {
                $(".rotate_boxs").animate({
                    "marginLeft": "-41%"
                })
            })
        })

    },
    headerChangeEvent: function () {
        $(window).scroll(function () {
            if (window.scrollY >= 41) {
                $(".page_header_top").hide();
                $(".page_header").css({
                })
                $(".page_header_bottom").css({
                    "position": "fixed",
                    "top": "0px",
                    "height": "52px",
                    "z-index": "999"

                })
            }
            else if (window.screenY <= 40) {
                $(".page_header_top").show();
                $(".page_header_bottom").css({
                    "position": "inherit",
                })
            }


        })
    },
    pageList: function () {
        $(document).ready(function () {
            //tripcover event
            $(".hot_trip_cover").click(function () {
                $(".hot_trip_cover").not().css({
                    "opacity": "0.0"
                })
                $(this).css({
                    "opacity": "1.0"
                })
            })
        })

        var XmlHttp = new XMLHttpRequest();
        var url = "data/data.json"
        XmlHttp.open("GET", url, true);
        XmlHttp.send();
        //page2 trip list throw
        XmlHttp.onreadystatechange = function () {
            if (XmlHttp.readyState == XMLHttpRequest.DONE) {
                console.log("Ajax_status:" + XmlHttp.status);
                if (XmlHttp.status == 200) {

                    var JsonData = XmlHttp.responseText;
                    var Data = JSON.parse(JsonData);
                    //Json data obj parsing

                    var DataArr = [Data.trip1, Data.trip2, Data.trip3, Data.trip4,
                    Data.trip5, Data.trip6, Data.trip7, Data.trip8, Data.trip9]
                    //Json 객체 배열

                    $(document).ready(function () {
                        $(".hot_trip").click(function () {
                            var ulList = document.querySelector(".hot_trip_ul");
                            ulList.innerHTML = " ";
                            //LIST 초기화 (중복적으로 생성되는것 방지)               

                            var tripId = $(this).attr('id');
                            var ListNo = $(this).index();
                            //요소가 몇번째인지 

                            function ListThrowFn() {
                                test = DataArr[ListNo][i];

                                if (DataArr[ListNo] == Data.trip1) {
                                    test2 = "오사카"
                                    $(".tt").text("dd")
                                }
                                else if (DataArr[ListNo] == Data.trip2) {
                                    test2 = "홍콩"
                                }
                                else if (DataArr[ListNo] == Data.trip3) {
                                    test2 = "타이페이"
                                }
                                else if (DataArr[ListNo] == Data.trip4) {
                                    test2 = "파리"
                                }

                                else if (DataArr[ListNo] == Data.trip5) {
                                    test2 = "여행지5"
                                }
                                else if (DataArr[ListNo] == Data.trip6) {
                                    test2 = "여행지6"
                                }
                                else if (DataArr[ListNo] == Data.trip7) {
                                    test2 = "여행지7"
                                }
                                else if (DataArr[ListNo] == Data.trip8) {
                                    test2 = "여행지8"
                                }
                                else if (DataArr[ListNo] == Data.trip9) {
                                    test2 = "여행지9"
                                }

                                ulList.innerHTML += "<li class='test_class'>" + DataArr[ListNo][i] + "</li>"
                            }
                            //List를 뿌려줌                           
                            for (i = 0; i <= DataArr[ListNo].length - 1; i++) {
                                //몇번째 요소인지에 따라 요소 최대 갯수 설정 반복
                                if (tripId == "trip" + (ListNo + 1)) {
                                    //id값과 몇번째 요소인지 매칭하여 함수 실행
                                    ListThrowFn();
                                }
                            }
                            $(".test_class").click(function () {
                                popupOpen();

                            })
                            function popupOpen() {

                                var url = "/test.html";
                                var winWidth = 700;
                                var winHeight = 600;
                                var popupOption = "width=" + winWidth + ",height=" + winHeight;
                                var popupWindow = window.open(url, "", popupOption);

                                popupWindow.document.write("<link rel='stylesheet' href='css/style.css'>")
                                popupWindow.document.write("<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>")
                                popupWindow.document.write("<script src='js/event.js'></script>")
                                popupWindow.document.write("<h1 class='testcss'>" + test2 + "</h1>")
                                popupWindow.document.write("<h1 class='testcss'>" + test2 + "</h1>")
                                popupWindow.window.location.reload(true);
                            }
                            console.log(test2)
                       
                        })
                    })
                }
            }
        }
    },
    testFn:function(){
        $(document).ready(function(){
            $(".testcss").click(function(){
                $(this).hide();
            })
        })
    },
    page2IconEvent: function () {
        $(document).ready(function () {
            $(".icon").click(function () {

                var ThisId = $(this).attr('id');
                for (i = 1; i <= 3; i++) {
                    if (ThisId == "page2_icon" + i) {
                        $(this).children(".mobile_hide_popup").toggle();
                    }
                }
            })


        })

    },
    page2Uicon: function () {
        $(document).ready(function () {
            $(".page2_ui_con").click(function () {
                $(".page2_ui_con").not().css({
                    "background-color": "lightgray"
                })
                $(this).css({
                    "background-color": "#424242"
                })
            })

            $("#page2_ui_con1").click(function () {
                $(".page2_ui").animate({
                    "marginLeft": "50%"
                })
            })
            $("#page2_ui_con2").click(function () {
                $(".page2_ui").animate({
                    "marginLeft": "0%"
                })
            })
            $("#page2_ui_con3").click(function () {
                $(".page2_ui").animate({
                    "marginLeft": "-50%"
                })
            })
        })

    },
    page2RotateBox: function () {

        $(document).ready(function () {
            var page2ClickNum = 1;

            $(".page2_right_btn").click(function () {
                if (page2ClickNum < 3) {
                    page2ClickNum++;
                    console.log(page2ClickNum);
                    $(".hot_trips").animate({
                        marginLeft: "-=100%"
                    })
                }

            })
            $(".page2_left_btn").click(function () {
                if (page2ClickNum <= 3 & page2ClickNum > 1) {
                    page2ClickNum--;
                    $(".hot_trips").animate({
                        marginLeft: "+=100%"
                    })
                }

            })


        })


    }

}

eventMethods.MainBgEvent();
eventMethods.FavorEvent();
eventMethods.MainPageSlider();
eventMethods.thummoreEvent();
eventMethods.rotateBoxEvent();
eventMethods.headerChangeEvent();
eventMethods.pageList();
eventMethods.page2Uicon();
eventMethods.page2RotateBox();
eventMethods.testFn();






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




var pcMedia = window.matchMedia('(min-width: 1025px)');
var talbetMedia = window.matchMedia('(max-width: 1024px) and (min-width:787px)');
var mobileMedia = window.matchMedia('( max-width: 786px )');


if (pcMedia.matches == true) {


}
else if (talbetMedia.matches == true) {


}
else if (mobileMedia.matches == true) {

    eventMethods.page2IconEvent();

}


