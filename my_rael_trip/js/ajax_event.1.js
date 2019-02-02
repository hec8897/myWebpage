var XmlHttp = new XMLHttpRequest();

function Ajax(a, b) {
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

$(window).on("load", function () {
    Ajax("data/data.json", ListHtmlEvent);

})
Ajax("data/Oska.json", subDataFn);


var dataArr = new Array();
var dataArr2 = new Array();



console.log(dataVar);

function subDataFn() {
    $(document).ready(function () {
        var JsonData2 = XmlHttp.responseText;
        var Data2 = JSON.parse(JsonData2);
        dataArr = Data2.Osaka1;
        dataArr2 = Data2.Osaka2;

        console.log(dataArr);
        console.log(dataArr2);


        return dataArr, dataArr2;

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
                Datas = String(Data.Osaka);
                console.log(Data);        
                windowPopUp(dataArr[0],dataArr[1],dataArr[2],dataArr[3],dataArr[4],DataArr[0]);
       

            })
        })
    })
}

function windowPopUp(a, b, c, d, e, f) {

    var url = "/test.html";
    var winWidth = 700;
    var winHeight = 500;
    var popupOption = "width=" + winWidth + ",height=" + winHeight;
    var popupWindow = window.open(url, "", popupOption);

    popupWindow.document.write("<!DOCTYPE html>",
        "<html lang='en'>",
        "<head>",
        "<meta charset='UTF-8'>",
        "<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
        "<meta http-equiv='X-UA-Compatible' content='ie=edge'>",
        "<link href='https://fonts.googleapis.com/css?family=Nanum+Gothic|Roboto' rel='stylesheet'>",
        "<link rel='stylesheet' href='css/style.css'>",
        "<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>",
        "<script src='js/event.js'></script>",
        "<script src='js/ajax_event.1.js'></script>",
        "<title>마이 리얼 트립</title>",
        "</head>",
        "<body>",
        "<div id='popup_demo'>",
        "<div class='picture_area'>",
        "<div class='main_picture'></div>",
        "<div class='sub_pictures'></div>",
        " </div>",
        "<div class='text_area'>",
        "<h1>" + a + "</h1>",
        "<p>" + b + "</p>",
        "<p>주소:" + c + "</p>",
        "<p>" + d + "</p>",
        "<p>입장시간:" + e + "</p>",
        " <div class='other_trip'>" + f + "</div>",

        "</div>",



        "</div>",
        " </body>",
        "</html>"
    )


    popupWindow.window.location.reload(true);

}