var outBox = document.querySelector("#hot_trips");

outBox.addEventListener("touchstart", eventHandle1, false)
outBox.addEventListener("touchend", eventHandle2, false)

var touchStart = 0;
var touchEnd = 0;
var page2ClickNum = 1;



function eventHandle1(ev) {
    ev.preventDefault();
    touchStart = event.touches[0].clientX
    console.log("??");
    event.stopPropagation();

    return touchStart;

}

function eventHandle2(ev) {
    ev.preventDefault();
    touchEnd = event.changedTouches[0].clientX
    var gep = touchStart - touchEnd;
    if (page2ClickNum < 3) {
        if (gep >= 150) {
            page2ClickNum++
            console.log("left");
            $(".hot_trips").animate({
                marginLeft: "-=100%"
            })
        }

    }
    if (page2ClickNum <= 3 & page2ClickNum > 1) {
        if (gep < 150) {
            page2ClickNum--;
            console.log("right");
            $(".hot_trips").animate({
                marginLeft: "+=100%"
            })
        }
    }
    event.stopPropagation();

    return touchEnd;
}