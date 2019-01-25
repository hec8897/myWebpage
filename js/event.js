var XmlHttp = new XMLHttpRequest();
var url = "data/data.json"
XmlHttp.open("GET", url, true);
XmlHttp.send();

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
        $(document).ready(function(){
            //tripcover event
            $(".hot_trip_cover").click(function(){
                $(".hot_trip_cover").not().css({
                    "opacity":"0.0"
                })                
                $(this).css({
                    "opacity":"1.0"
                })
            })
        })
        //page2 trip list throw
        XmlHttp.onreadystatechange = function () {
            if (XmlHttp.readyState == XMLHttpRequest.DONE) {
                console.log(XmlHttp.status);
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
                                ulList.innerHTML += "<li><a href=''>" + DataArr[ListNo][i] + "</a></li>"
                            }
                            //List를 뿌려줌                           
                            for (i = 0; i <= DataArr[ListNo].length - 1; i++) {
                                //몇번째 요소인지에 따라 요소 최대 갯수 설정 반복
                                if (tripId == "trip"+(ListNo+1)) {
                                    //id값과 몇번째 요소인지 매칭하여 함수 실행
                                    ListThrowFn();
                                }                             
                            }

                        })
                    })


                }
            }
        }


    }

}
eventMethods.MainBgEvent();
eventMethods.FavorEvent();
eventMethods.MainPageSlider();
eventMethods.thummoreEvent();
eventMethods.rotateBoxEvent();
eventMethods.headerChangeEvent();
eventMethods.pageList();




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



var matchScreen = window.matchMedia;
var maxWidth = 1024;
var meidumWidth = 787;
var LargeScreen = '(min-width: 1025px)';
var MediumScreen = '(max-width: 1024px) and (min-width:787px)';
var smallScreen = '(max-width:786px)';
var LagreQuery = matchScreen(LargeScreen).matches;
var MediumQuery = matchScreen(MediumQuery).matches;
var smallQuery = matchScreen(smallQuery).matches;

//LagerSize MediaQuery
if (LagreQuery) {

}

else if (MediumQuery) {


}
else if (smallQuery) {

}

