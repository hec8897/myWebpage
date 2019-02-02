var XmlHttp = new XMLHttpRequest();

function Ajax(a,b) {
    //a:JsonUrl
    //b:사용할함수
    var urlData = a;
    XmlHttp.open("GET", urlData, true);
    XmlHttp.send();
    XmlHttp.onreadystatechange = function () {
        if (XmlHttp.readyState == XMLHttpRequest.DONE) {
            if (XmlHttp.status == 200) {       
                b();
            }
        }
    }
}

$(window).on("load",function(){
    Ajax("data/data.json",ListHtmlEvent);

})
Ajax("data/Oska.json",subDataFn);

var testVar;
console.log(testVar);

function subDataFn(){
    $(document).ready(function(){
            var JsonData2 = XmlHttp.responseText;
            var Data2 = JSON.parse(JsonData2);
            return testVar = {
                test1:Data2.Osaka1[0]
            }
    })
}

function ListHtmlEvent() {
    $(document).ready(function () {
        $(".hot_trip").click(function () {

            var JsonData = XmlHttp.responseText;
            var Data = JSON.parse(JsonData);

            var DataArr = [Data.Osaka, Data.trip2, Data.trip3, Data.trip4,
            Data.trip5, Data.trip6, Data.trip7, Data.trip8, Data.trip9];

            // // console.log(Data.Osaka[0]);
            var tripId = $(this).attr('id');
            var ListNo = $(this).index();


            var ulList = document.querySelector(".hot_trip_ul");
            ulList.innerHTML = " ";

            for (i = 0; i <= DataArr[ListNo].length - 1; i++) {
                ulList.innerHTML += "<li class='test_class'>" + DataArr[ListNo][i] + "</li>"
            }
            $(".test_class").click(function () {
                windowPopUp(DataArr[0][0], String(testVar.test1));
            })
        })
    })
}

function windowPopUp(a, b) {

    var url = "/test.html";
    var winWidth = 700;
    var winHeight = 600;
    var popupOption = "width=" + winWidth + ",height=" + winHeight;
    var popupWindow = window.open(url, "", popupOption);

    popupWindow.document.write("<link rel='stylesheet' href='css/style.css'>")
    popupWindow.document.write("<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>")
    popupWindow.document.write("<script src='js/event.js'></script>")
    popupWindow.document.write("<h1 class='testcss'>" + a + "</h1>")
    popupWindow.document.write("<h1 class='testcss'>" + b + "</h1>")
    popupWindow.document.write("<h1 class='testcss'>" + String(testVar.test1) + "</h1>")

    popupWindow.window.location.reload(true);

}