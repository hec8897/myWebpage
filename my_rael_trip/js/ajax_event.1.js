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
Ajax("data/trip.json", subDataFn);

// var OsakaData1 = new Array();
// var OsakaData2 = new Array();
// var OsakaData3 = new Array();
// var OsakaData4 = new Array();
// var OsakaData5 = new Array();

var trip

console.log(dataVar);

function subDataFn() {
    $(document).ready(function () {
        var JsonData2 = XmlHttp.responseText;
        var Data2 = JSON.parse(JsonData2);

        return tripData = {
            OsakaData: [Data2.Osaka1, Data2.Osaka2, Data2.Osaka3, Data2.Osaka4, Data2.Osaka5],
            HonkongData: [Data2.Honkong1, Data2.Honkong2, Data2.Honkong3, Data2.Honkong4, Data2.Honkong5],
            TywanData: [Data2.Tywan1, Data2.Tywan2, Data2.Tywan3, Data2.Tywan4, Data2.Tywan5],
            ParisData: [Data2.paris1, Data2.paris2, Data2.paris3, Data2.paris4, Data2.paris5],
            dummyData: [Data2.dummy]

        }



        // return OsakaData1, OsakaData2, OsakaData3, OsakaData4, OsakaData5;

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
                ulList.innerHTML += "<li class='ajax_class'>" + DataArr[ListNo][i] + "</li>"
            }
            $(".ajax_class").click(function () {

                Datas = String(Data.Osaka);
                thisIndex = $(this).index();

                function popupDataFn(a) {
                    var travleData = a
                    console.log(travleData[0][0]);
                    for (j = 0; j <= travleData.length; j++) {
                        if (thisIndex == j) {
                            var travleData = a[j]
                            windowPopUp(travleData[0], travleData[1], travleData[2], travleData[3], travleData[4], DataArr[0]);
                        }
                    }
                }

                if (tripId == "trip1") {
                    popupDataFn(tripData.OsakaData);
                }
                else if (tripId == "trip2") {
                    popupDataFn(tripData.HonkongData);
                }
                else if (tripId == "trip3") {
                    popupDataFn(tripData.TywanData);
                }
                else if (tripId == "trip4") {
                    popupDataFn(tripData.ParisData);
                }
                else{
                    popupDataFn(tripData.dummyData);
                }


            })
        })
    })
}

function windowPopUp(a, b, c, d, e, f, img0, imga, imgb, imgc) {

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
        "<div class='main_picture' style='background-image:url(img/" + img0 + ".jpg)'></div>",
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