if(localStorage.getItem('urgent') == 1){
    $('#urgent').attr('checked', true);
} else {
    $('#urgent').checked=false;
}
if(localStorage.getItem('urgentpop') == 1){
    $('#urgentpop').attr('checked', true);
} else {
    $('#urgentpop').checked=false;
}
var checked = JSON.parse(localStorage.getItem('checked'));
// Change 14 to 15
for (var i = 1; i < 14; i++) {
	if (checked[i] == 1) {
		$('#sec' + i).attr('checked', true);
	} else {
		$('#sec' + i).checked=false;
	}
}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	$('#save').click(function() {
	    var count = 0;
	    if ($('#urgent').is(':checked')) {
	        localStorage.setItem('urgent', 1);
	    } else {
	        localStorage.setItem('urgent', 0);
	    }
	    if ($('#urgentpop').is(':checked')) {
	        localStorage.setItem('urgentpop', 1);
	    } else {
	        localStorage.setItem('urgentpop', 0);
	    }
	    // Change 14 to 15
	    for (var i = 1; i < 14; i++) {
	    	if ($('#sec' + i).is(':checked')) {
	    		checked[i] = 1;
	    	} else {
	    		checked[i] = 0;
	    	}
	    }
	    localStorage.setItem('checked', JSON.stringify(checked));
	    onBackKeyDown();
	});
	$('#back').click(onBackKeyDown);
	$('#cancel').click(onBackKeyDown);
	document.addEventListener("backbutton", onBackKeyDown, false);
}
function onBackKeyDown() {
	window.location = "index.html";
}