$('.content').height(($(window).height() - 72) + 'px');
var slider = parseInt(GetDataValue('slider'));
var slide = parseInt(GetDataValue('id'));
//var sections = ['\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629', '\u0627\u0644\u0623\u062e\u0628\u0627\u0631', '\u0627\u0644\u0631\u064a\u0627\u0636\u0629', '\u062d\u0648\u0627\u062f\u062b', '\u0641\u0646 \u0648\u062b\u0642\u0627\u0641\u0629', '\u0628\u0631\u0644\u0645\u0627\u0646', '\u0627\u0644\u0648\u0641\u062f \u0627\u0644\u064a\u0648\u0645', '\u0627\u0642\u062a\u0635\u0627\u062f', '\u0639\u0627\u0644\u0645\u064a', '\u0645\u0646\u0648\u0639\u0627\u062a', '\u062a\u062d\u0642\u064a\u0642\u0627\u062a \u0648\u062d\u0648\u0627\u0631\u0627\u062a', '\u0627\u0644\u0645\u062d\u0627\u0641\u0638\u0627\u062a', '\u0623\u0633\u0631\u0629', '\u0645\u0642\u0627\u0644\u0627\u062a \u0631\u0623\u064a', '\u0645\u0644\u0641\u0627\u062a \u0633\u064a\u0627\u0633\u064a\u0629'];
var sections = ['\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629', '\u0627\u0644\u0623\u062e\u0628\u0627\u0631', '\u0627\u0644\u0631\u064a\u0627\u0636\u0629', '\u062d\u0648\u0627\u062f\u062b', '\u0641\u0646 \u0648\u062b\u0642\u0627\u0641\u0629', '\u0628\u0631\u0644\u0645\u0627\u0646', '\u0627\u0644\u0648\u0641\u062f \u0627\u0644\u064a\u0648\u0645', '\u0627\u0642\u062a\u0635\u0627\u062f', '\u0639\u0627\u0644\u0645\u064a', '\u0645\u0646\u0648\u0639\u0627\u062a', '\u062a\u062d\u0642\u064a\u0642\u0627\u062a \u0648\u062d\u0648\u0627\u0631\u0627\u062a', '\u0627\u0644\u0645\u062d\u0627\u0641\u0638\u0627\u062a', '\u0623\u0633\u0631\u0629', '\u0645\u0644\u0641\u0627\u062a \u0633\u064a\u0627\u0633\u064a\u0629'];
var titles = JSON.parse(localStorage.getItem('titles')), dates = JSON.parse(localStorage.getItem('dates')), images = JSON.parse(localStorage.getItem('images')), details = JSON.parse(localStorage.getItem('details')), links = JSON.parse(localStorage.getItem('links')), swipers = [];
var linktoopen = '';
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);
    $('#back').click(onBackKeyDown);
    $('#share').click(function() {
        window.plugins.socialsharing.share(null, null, null, links[slider][slide]);
    });
    $('#comment').click(function() {
        window.location = "comments.html?slider=" + slider + "&id=" + slide;
    });
    document.getElementById('sectitle').innerHTML = sections[slider];
    for (var i = 0; i < titles[slider].length; i++) {
        if(i < 9) {
            $("#news-" + i).attr("href", "details.html?slider=" + slider + "&id=" + i);
            $("#image-" + i).attr("src", images[slider][i]);
            document.getElementById("title-" + i).innerHTML = titles[slider][i];
            if(i == slide) {
                $('#newslistitem' + i).addClass("active");
                if (i > 0) {
                    $('#wrapper').animate({
                        scrollTop: $('#newslistitem' + (i - 1)).offset().top
                    }, 200);
                }
                document.getElementById("date").innerHTML = dates[slider][i];
                document.getElementById("title").innerHTML = titles[slider][i];
                $("#image").attr("src", images[slider][i]);
                var description = details[slider][i];
                var ytre = /*/(\b(https?|ftp|file):\/\/[\-A-Z0-9+&@#\/%?=~_|!:,.;]*[\-A-Z0-9+&@#\/%=~_|])/ig *//((https?:\/\/)?(www\.)?youtube\S+)/g;
                var resultArray = description.match(ytre);
                if (resultArray != null) {
                    for (var j = 0; j < resultArray.length; j++) {
                            description = description.replace(resultArray[j], '<div class="video-container"><div class="vendor"><iframe width="420" height="315" src="' + resultArray[j] + '" frameborder="0" allowfullscreen></iframe></div></div>');
                    }
                    document.getElementById('details').innerHTML = description;
                    $(".video-container").fitVids();
                } else {
                    document.getElementById('details').innerHTML = details[slider][i];
                }
                linktoopen = links[slider][i];
            }
        }
    }
}
window.onload = function() {
    $("#loading").hide();
};
function onBackKeyDown() {
    window.location = "index.html";
}
function GetDataValue(VarSearch) {
    var SearchString = window.location.search.substring(1);
    var VariableArray = SearchString.split('&');
    for (var i = 0; i < VariableArray.length; i++) {
        var KeyValuePair = VariableArray[i].split('=');
        if (KeyValuePair[0] == VarSearch) {
            return KeyValuePair[1];
        }
    }
}
function OpenLink() {
    window.open(linktoopen, '_system');
}