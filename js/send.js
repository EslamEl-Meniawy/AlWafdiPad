var imageName = '';
var uri = '';
var connected;
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	$('#back').click(onBackKeyDown);
	document.addEventListener("backbutton", onBackKeyDown, false);
    checkConnection();
    if (connected == 1) {
        $('#attach').click(function() {
            navigator.camera.getPicture(
                successFunction,
                function(message) {
                    navigator.notification.alert('\u0644\u0645 \u064a\u062a\u0645 \u0627\u062e\u062a\u064a\u0627\u0631 \u0635\u0648\u0631\u0647', doNothing, '\u062a\u0646\u0628\u064a\u0647', '\u0645\u0648\u0627\u0641\u0642');
                },
                {
                    quality : 100,
                    destinationType : navigator.camera.DestinationType.FILE_URI,
                    sourceType : navigator.camera.PictureSourceType.PHOTOLIBRARY
                }
            );
        });
        $('#send').click(function() {
            if(document.getElementById('newstitle').value == '' && document.getElementById('newsdetails').value == '' && imageName == '' && uri == ''){
                navigator.notification.alert('\u0628\u0631\u062c\u0627\u0621 \u0625\u062f\u062e\u0627\u0644 \u0643\u0644\u0627\u064b \u0645\u0646\n\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062e\u0628\u0631\u060c \u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u062e\u0628\u0631\u060c \u0648 \u0627\u062e\u064a\u0627\u0631 \u0635\u0648\u0631\u0647', doNothing, '\u062a\u0646\u0628\u064a\u0647', '\u0645\u0648\u0627\u0641\u0642');
            } else if(document.getElementById('newstitle').value == '' && document.getElementById('newsdetails').value == '') {
                navigator.notification.alert('\u0628\u0631\u062c\u0627\u0621 \u0625\u062f\u062e\u0627\u0644 \u0643\u0644\u0627\u064b \u0645\u0646\n\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062e\u0628\u0631\u060c \u0648 \u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u062e\u0628\u0631', doNothing, '\u062a\u0646\u0628\u064a\u0647', '\u0645\u0648\u0627\u0641\u0642');
            } else if(document.getElementById('newstitle').value == '' && imageName == '' && uri == '') {
                navigator.notification.alert('\u0628\u0631\u062c\u0627\u0621 \u0625\u062f\u062e\u0627\u0644 \u0643\u0644\u0627\u064b \u0645\u0646\n\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062e\u0628\u0631\u060c \u0648 \u0627\u062e\u064a\u0627\u0631 \u0635\u0648\u0631\u0647', doNothing, '\u062a\u0646\u0628\u064a\u0647', '\u0645\u0648\u0627\u0641\u0642');
            } else if(document.getElementById('newsdetails').value == '' && imageName == '' && uri == '') {
                navigator.notification.alert('\u0628\u0631\u062c\u0627\u0621 \u0625\u062f\u062e\u0627\u0644 \u0643\u0644\u0627\u064b \u0645\u0646\n\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u062e\u0628\u0631\u060c \u0648 \u0627\u062e\u064a\u0627\u0631 \u0635\u0648\u0631\u0647', doNothing, '\u062a\u0646\u0628\u064a\u0647', '\u0645\u0648\u0627\u0641\u0642');
            } else if(document.getElementById('newstitle').value == '') {
                navigator.notification.alert('\u0628\u0631\u062c\u0627\u0621 \u0625\u062f\u062e\u0627\u0644 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062e\u0628\u0631', doNothing, '\u062a\u0646\u0628\u064a\u0647', '\u0645\u0648\u0627\u0641\u0642');
            } else if(document.getElementById('newsdetails').value == '') {
                navigator.notification.alert('\u0628\u0631\u062c\u0627\u0621 \u0625\u062f\u062e\u0627\u0644 \u062a\u0641\u0627\u0635\u0628\u0644 \u0627\u0644\u062e\u0628\u0631', doNothing, '\u062a\u0646\u0628\u064a\u0647', '\u0645\u0648\u0627\u0641\u0642');
            } else if(imageName == '' && uri == '') {
                navigator.notification.alert('\u0628\u0631\u062c\u0627\u0621 \u0627\u062e\u064a\u0627\u0631 \u0635\u0648\u0631\u0647', doNothing, '\u062a\u0646\u0628\u064a\u0647', '\u0645\u0648\u0627\u0641\u0642');
            } else {
                if(document.getElementById('newstitle').value.length > 100) {
                    navigator.notification.alert('\u0627\u0642\u0635\u0649 \u0639\u062f\u062f \u062d\u0631\u0648\u0641 \u0645\u0633\u0645\u0648\u062d \u0628\u0647 \u0644\u0644\u0639\u0646\u0648\u0627\u0646 \u0647\u0648 \u0031\u0030\u0030 \u062d\u0631\u0641', doNothing, '\u062a\u0646\u0628\u064a\u0647', '\u0645\u0648\u0627\u0641\u0642');
                } else if(document.getElementById('newsdetails').value.length > 4294967295) {
                    navigator.notification.alert('\u0627\u0642\u0635\u0649 \u0639\u062f\u062f \u062d\u0631\u0648\u0641 \u0645\u0633\u0645\u0648\u062d \u0628\u0647 \u0644\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0647\u0648 \u0034\u0032\u0039\u0034\u0039\u0036\u0037\u0032\u0039\u0035 \u062d\u0631\u0641', doNothing, '\u062a\u0646\u0628\u064a\u0647', '\u0645\u0648\u0627\u0641\u0642');
                } else if(document.getElementById('newsimage').value.length > 16777215) {
                    navigator.notification.alert('\u0627\u0642\u0635\u0649 \u0639\u062f\u062f \u062d\u0631\u0648\u0641 \u0645\u0633\u0645\u0648\u062d \u0628\u0647 \u0644\u0644\u0631\u0627\u0628\u0637 \u0647\u0648 \u0031\u0036\u0037\u0037\u0037\u0032\u0031\u0035 \u062d\u0631\u0641', doNothing, '\u062a\u0646\u0628\u064a\u0647', '\u0645\u0648\u0627\u0641\u0642');
                } else if(document.getElementById('newsvideo').value.length > 16777215) {
                    navigator.notification.alert('\u0627\u0642\u0635\u0649 \u0639\u062f\u062f \u062d\u0631\u0648\u0641 \u0645\u0633\u0645\u0648\u062d \u0628\u0647 \u0644\u0644\u0631\u0627\u0628\u0637 \u0647\u0648 \u0031\u0036\u0037\u0037\u0037\u0032\u0031\u0035 \u062d\u0631\u0641', doNothing, '\u062a\u0646\u0628\u064a\u0647', '\u0645\u0648\u0627\u0641\u0642');
                } else {
                    var patt = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
                    if(document.getElementById('newsimage').value != '' && patt.test(document.getElementById('newsimage').value) == false) {
                        navigator.notification.alert('\u0631\u0627\u0628\u0637 \u0627\u0644\u0635\u0648\u0631\u0647 \u063a\u064a\u0631 \u0635\u062d\u064a\u062d', doNothing, '\u062a\u0646\u0628\u064a\u0647', '\u0645\u0648\u0627\u0641\u0642');
                    } else if(document.getElementById('newsvideo').value != '' && patt.test(document.getElementById('newsvideo').value) == false) {
                        navigator.notification.alert('\u0631\u0627\u0628\u0637 \u0627\u0644\u0641\u064a\u062f\u064a\u0648 \u063a\u064a\u0631 \u0635\u062d\u064a\u062d', doNothing, '\u062a\u0646\u0628\u064a\u0647', '\u0645\u0648\u0627\u0641\u0642');
                    } else {
                        $("#send").hide();
                        $("#loading").show();
                        uploadPhoto();
                    }
                }
            }
        });
    } else {
        $('#content').hide();
        $('#noconnection').show();
    }
}
function successFunction(imageURI) {
    uri = imageURI;
    imageName = imageURI.substr(imageURI.lastIndexOf('/')+1);
    document.getElementById('imagetitle').innerHTML = imageName;
    document.getElementById('attach').innerHTML = '\u0625\u0633\u062a\u0628\u062f\u0627\u0644 \u0627\u0644\u0635\u0648\u0631\u0647';
}
function uploadPhoto() {
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = imageName;
    options.mimeType = "image/jpeg";
    var params = {};
    params.titletext = document.getElementById('newstitle').value;
    params.detailstext = document.getElementById('newsdetails').value;
    params.imageurl = document.getElementById('newsimage').value;
    params.videourl = document.getElementById('newsvideo').value;
    options.params = params;
    var ft = new FileTransfer();
    ft.upload(uri, encodeURI("http://192.168.1.117/upload/upload.php"), win, fail, options);
}
function win(r) {
    navigator.notification.alert('\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u062e\u0628\u0631 \u0628\u0646\u062c\u0627\u062d', doNothing, '\u062a\u0646\u0628\u064a\u0647', '\u0645\u0648\u0627\u0641\u0642');
    onBackKeyDown();
}
function fail(error) {
    navigator.notification.alert('\u062d\u062f\u062b \u062e\u0637\u0623 \u0627\u062b\u0646\u0627\u0621 \u0627\u0644\u0625\u0631\u0633\u0627\u0644\n\u0628\u0631\u062c\u0627\u0621 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0647 \u0645\u0631\u0647 \u0623\u062e\u0631\u0649', doNothing, '\u062a\u0646\u0628\u064a\u0647', '\u0645\u0648\u0627\u0641\u0642');
    $("#send").show();
    $("#loading").hide();
}
function doNothing() {}
function checkConnection() {
    var networkState = navigator.network.connection.type;
    if (networkState == Connection.NONE) {
        connected = 0;
    } else {
        connected = 1;
    }
}
function onBackKeyDown() {
	window.location = "index.html";
}