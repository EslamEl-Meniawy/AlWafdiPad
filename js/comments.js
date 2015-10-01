var slider = parseInt(GetDataValue('slider'));
var slide = parseInt(GetDataValue('id'));
var titles = JSON.parse(localStorage.getItem('titles')), links = JSON.parse(localStorage.getItem('links'));
var connected;
document.addEventListener("deviceready", onDeviceReady, false);
document.getElementById('frame').onload= function() {
    $("#loading").hide();
};
function onDeviceReady() {
	$('#back').click(onBackKeyDown);
	document.addEventListener("backbutton", onBackKeyDown, false);
    checkConnection();
    if (connected == 1) {
        $("#loading").show();
        try {
            document.getElementById('title').innerHTML = titles[slider][slide];
            var url = "http://alwafd.org/comments.html?url=" + links[slider][slide];
            $("#frame").attr('src', url);
        } catch(e) {
            navigator.notification.alert('\u062d\u062f\u062b \u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u0627\u062a\u0635\u0627\u0644\n\u0628\u0631\u062c\u0627\u0621 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0647 \u0645\u0631\u0647 \u0623\u062e\u0631\u0649', doNothing, '\u062a\u0646\u0628\u064a\u0647', '\u0645\u0648\u0627\u0641\u0642');
            $("#loading").hide();
        }
    } else {
        $('#showcomments').hide();
        $('#title').hide();
        $('#frame').hide();
        $('#noconnection').show();
    }
}
function checkConnection() {
    var networkState = navigator.network.connection.type;
    if (networkState == Connection.NONE) {
        connected = 0;
    } else {
        connected = 1;
    }
}
function onBackKeyDown() {
	window.history.back();
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