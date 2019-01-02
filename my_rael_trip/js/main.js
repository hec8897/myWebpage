var eventMethods = {
    headerfavorEvent: function () {

        $(document).ready(function () {
            var num = 0;
            var intervals = setInterval(function () {
                num++
                $("#favor_ul").animate({
                    "bottom": "+=30px"
                })
                if (num == 5) {
                    console.log("reset")
                    $("#favor_ul").animate({
                        "bottom": "-=150px"
                    }, 0);
                    return num = 0;
                }
            }, 3000)

        })

    },
    MainBgEvent: function () {
        $(window).on("load", function () {

            $(".back_bg > li:gt(0)").hide();

            setInterval(function () {
                $('.back_bg > li:first')
                    .fadeOut(1000)
                    .next()
                    .fadeIn(1000)
                    .end()
                    .appendTo('.back_bg');
            }, 6000);

        
        })
    },
    MainToggleEvent: function () {
        var test = $(document).ready(function () {
            $(".large_input, .toggle_close").on("click", function () {
                $(".toggle_box").toggle();
            })
        })
        
    },
    ReloadFn:function(){
        console.log("test");

    }
}
eventMethods.headerfavorEvent();
eventMethods.MainBgEvent();
eventMethods.MainToggleEvent();

//Media Query 관련 전역 변수 선언
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

$(window).resize(function () {

    var $theWindowSize = $(this).width();
    if ($theWindowSize > 1024) {

        eventMethods.headerfavorEvent();
        eventMethods.MainBgEvent();
        eventMethods.MainToggleEvent();
    }
    else if ($theWindowSize < 1024) {       
 


    }
})

