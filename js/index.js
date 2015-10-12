if ($(window).width() == 1024 && $(window).height() == 768) {
    $('.artbig-img').css('overflow', 'hidden');
    $('.art-img').css('overflow', 'hidden');
    $('.image').css('width', '138%');
}
//var urls = ['http://m.alwafd.org/mobilefeed/important', 'http://m.alwafd.org/mobilefeed/9', 'http://m.alwafd.org/mobilefeed/20', 'http://m.alwafd.org/mobilefeed/26', 'http://m.alwafd.org/mobilefeed/44', 'http://m.alwafd.org/mobilefeed/666', 'http://m.alwafd.org/mobilefeed/533', 'http://m.alwafd.org/mobilefeed/29', 'http://m.alwafd.org/mobilefeed/18', 'http://m.alwafd.org/mobilefeed/559', 'http://m.alwafd.org/mobilefeed/16', 'http://m.alwafd.org/mobilefeed/19', 'http://m.alwafd.org/mobilefeed/82', 'http://m.alwafd.org/mobilefeed/7', 'http://m.alwafd.org/mobilefeed/660'];
var urls = ['http://m.alwafd.org/mobilefeed/important', 'http://m.alwafd.org/mobilefeed/9', 'http://m.alwafd.org/mobilefeed/20', 'http://m.alwafd.org/mobilefeed/26', 'http://m.alwafd.org/mobilefeed/44', 'http://m.alwafd.org/mobilefeed/666', 'http://m.alwafd.org/mobilefeed/533', 'http://m.alwafd.org/mobilefeed/29', 'http://m.alwafd.org/mobilefeed/18', 'http://m.alwafd.org/mobilefeed/559', 'http://m.alwafd.org/mobilefeed/16', 'http://m.alwafd.org/mobilefeed/19', 'http://m.alwafd.org/mobilefeed/82', 'http://m.alwafd.org/mobilefeed/660'];
//var sections = ['\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629', '\u0627\u0644\u0623\u062e\u0628\u0627\u0631', '\u0627\u0644\u0631\u064a\u0627\u0636\u0629', '\u062d\u0648\u0627\u062f\u062b', '\u0641\u0646 \u0648\u062b\u0642\u0627\u0641\u0629', '\u0628\u0631\u0644\u0645\u0627\u0646', '\u0627\u0644\u0648\u0641\u062f \u0627\u0644\u064a\u0648\u0645', '\u0627\u0642\u062a\u0635\u0627\u062f', '\u0639\u0627\u0644\u0645\u064a', '\u0645\u0646\u0648\u0639\u0627\u062a', '\u062a\u062d\u0642\u064a\u0642\u0627\u062a \u0648\u062d\u0648\u0627\u0631\u0627\u062a', '\u0627\u0644\u0645\u062d\u0627\u0641\u0638\u0627\u062a', '\u0623\u0633\u0631\u0629', '\u0645\u0642\u0627\u0644\u0627\u062a \u0631\u0623\u064a', '\u0645\u0644\u0641\u0627\u062a \u0633\u064a\u0627\u0633\u064a\u0629'];
var sections = ['\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629', '\u0627\u0644\u0623\u062e\u0628\u0627\u0631', '\u0627\u0644\u0631\u064a\u0627\u0636\u0629', '\u062d\u0648\u0627\u062f\u062b', '\u0641\u0646 \u0648\u062b\u0642\u0627\u0641\u0629', '\u0628\u0631\u0644\u0645\u0627\u0646', '\u0627\u0644\u0648\u0641\u062f \u0627\u0644\u064a\u0648\u0645', '\u0627\u0642\u062a\u0635\u0627\u062f', '\u0639\u0627\u0644\u0645\u064a', '\u0645\u0646\u0648\u0639\u0627\u062a', '\u062a\u062d\u0642\u064a\u0642\u0627\u062a \u0648\u062d\u0648\u0627\u0631\u0627\u062a', '\u0627\u0644\u0645\u062d\u0627\u0641\u0638\u0627\u062a', '\u0623\u0633\u0631\u0629', '\u0645\u0644\u0641\u0627\u062a \u0633\u064a\u0627\u0633\u064a\u0629'];
var urgentURL = "http://m.alwafd.org/mobilefeed/important";
var urgentPopURL = "http://m.alwafd.org/mobilefeed/urgent";
var categories;
var titles = [], dates = [], images = [], details = [], links = [], checked = [], positions = [];
var connected;
var activeCount, position = 0;
var interv, interval, intervalpop;
var timeout;
var ad = '<iframe src="http://alwafd.org/admob.html"></iframe>';
// Change 14 to 15
for (var i = 0; i < 14; i++) {
    titles[i] = [];
    dates[i] = [];
    images[i] = [];
    details[i] = [];
    links[i] = [];
}
if (localStorage.getItem('runned') == null) {
    localStorage.setItem('titles', JSON.stringify(titles));
    localStorage.setItem('dates', JSON.stringify(dates));
    localStorage.setItem('images', JSON.stringify(images));
    localStorage.setItem('details', JSON.stringify(details));
    localStorage.setItem('links', JSON.stringify(links));
    checked[0] = 1;
    // Change 14 to 15
    for (var i = 1; i < 14; i++) {
        if (i < 6) {
            checked[i] = 1;
        } else {
            checked[i] = 0;
        }
    }
    localStorage.setItem('checked', JSON.stringify(checked));
    localStorage.setItem('urgent', 1);
    localStorage.setItem('urgentpop', 0);
    localStorage.setItem('urgentpopid', 0);
    localStorage.setItem('runned', '1');
}
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    if (localStorage.getItem('layoutinstructions') != 1) {
        $('.instructions').show();
    }
    $('.closesettings').click(function() {
        localStorage.setItem('layoutinstructions', 1);
        $('.instructions').hide();
    });
    if (localStorage.getItem('urgent') == 1) {
        $('#urgent').show();
        clearInterval(interval);
        getUrgent();
        interval = setInterval(getUrgent, 180000);
    } else {
        clearInterval(interval);
    }
    if (localStorage.getItem('urgentpop') == 1) {
        clearInterval(intervalpop);
        intervalpop = setInterval(getUrgentPop, 5000);
    } else {
        clearInterval(intervalpop);
    }
	$('#refresh').click(refreshData);
	$('#edit').click(editCategories);
    document.addEventListener("backbutton", onBackKeyDown, false);
    checked = JSON.parse(localStorage.getItem('checked'));
    titles = JSON.parse(localStorage.getItem('titles'));
    images = JSON.parse(localStorage.getItem('images'));
    activeCount = 0;
    // Change 14 to 15
    for (var i = 0; i < 14; i++) {
        if (checked[i] == 1) {
            $('#sec' + i).show();
            activeCount += 1;
            positions.push(i);
        }
    }
    var scrollerWidth = $(window).width() * activeCount;
    var slideWidth = $(window).width();
    $('#scroll').width(scrollerWidth + 'px');
    $('.slide').width(slideWidth + 'px');
    scrollerWidth -= $(window).width();
    $('#scroll').css('right', scrollerWidth + 'px');
    $('.ad-holder').height(($(window).height() - 175 - (($(window).height() - 175) * 0.02)) + 'px');
    if (activeCount > 0) {
        document.getElementById('title').innerHTML = sections[positions[0]];
        loadSliders(positions[0]);
        checkConnection();
        if (connected == 1) {
            categories = document.getElementsByTagName('no tag');
            loadXML(positions[0]);
            $('#sec' + positions[0] + '-ad').html(ad);
        }
        position = 1;
    }
    $("#content").touchwipe({
        wipeLeft: function() {
            if(position > 1 && activeCount > 1) {
                scrollerWidth += $(window).width();
                $("#scroll").animate({right: scrollerWidth});
                position -= 1;
                document.getElementById('title').innerHTML = sections[positions[position - 1]];
                loadSliders(positions[position - 1]);
                checkConnection();
                if (connected == 1) {
                    categories = document.getElementsByTagName('no tag');
                    loadXML(positions[position - 1]);
                    $('.ad-holder').each(function() {
                        $( this ).html('');
                    });
                    $('#sec' + positions[position - 1] + '-ad').html(ad);
                }
            }
        },
        wipeRight: function() {
            if(position < activeCount) {
                scrollerWidth -= $(window).width();
                $("#scroll").animate({right: scrollerWidth});
                position += 1;
                document.getElementById('title').innerHTML = sections[positions[position - 1]];
                loadSliders(positions[position - 1]);
                checkConnection();
                if (connected == 1) {
                    categories = document.getElementsByTagName('no tag');
                    loadXML(positions[position - 1]);
                    $('.ad-holder').each(function() {
                        $( this ).html('');
                    });
                    $('#sec' + positions[position - 1] + '-ad').html(ad);
                }
            }
        },
        min_move_x: 20,
        min_move_y: 20,
        preventDefaultEvents: true
    });
    $('#urgentpopclose').click(function() {
        clearTimeout(timeout);
        $('#urgentpop').width('0px');
        $('#urgentpop').height('0px');
    });
}
function refreshData() {
    checkConnection();
    if (connected == 1) {
        location.reload();
    } else {
        navigator.notification.alert('\u0644\u0627\u0020\u064a\u0648\u062c\u062f\u0020\u0627\u062a\u0635\u0627\u0644\u0020\u0628\u0627\u0644\u0627\u0646\u062a\u0631\u0646\u062a', doNothing, '\u062a\u0646\u0628\u064a\u0647', '\u0645\u0648\u0627\u0641\u0642');
    }
}
function editCategories() {
    window.location = "categories.html";
}
function loadSliders(i) {
    if (titles[i].length > 0) {
        for (var j = 0; j < titles[i].length; j++) {
            if (j < 9) {
                $('#sec' + i + '-image-' + j).attr("src", "img/loading.png");
                document.getElementById('sec' + i + '-title-' + j).innerHTML = '';
                $('#sec' + i + '-image-' + j).attr("src", images[i][j]);
                document.getElementById('sec' + i + '-title-' + j).innerHTML = titles[i][j];
            }
        }
    }
}
function loadXML(i) {
    $('#loading').show();
	$('#refresh').hide();
    var xmlhttp;
    xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET",urls[i],true);
    xmlhttp.onload = function() {
        var doc = this.responseXML.documentElement;
        categories = doc.getElementsByTagName('item');
        if ((categories != null) && (categories.length > 0)) {
            titles[i] = [];
            dates[i] = [];
            images[i] = [];
            details[i] = [];
            links[i] = [];
            try {
                for (var k = 0; k < categories.length; k++) {
                    var title = categories.item(k).getElementsByTagName('title').item(0).textContent;
                    var time = categories.item(k).getElementsByTagName('pubDate').item(0).textContent;
                    time = time.slice(5);
                    time = time.substring(0, time.length - 6);
                    var bigImage = categories.item(k).getElementsByTagName('enclosure').item(0).getAttribute('url');
                    if (bigImage == "http://test.alwafd.org/images/thumbs/513/no_image.png" || bigImage == "http://new.alwafd.org/images/thumbs/513/no_image.png" || bigImage == "http://m.alwafd.org/images/thumbs/513/no_image.png") {
                        bigImage = 'img/loading.png';
                    }
                    var fullDescription = categories.item(k).getElementsByTagName('description').item(0).textContent;
                    var lin = categories.item(k).getElementsByTagName('link').item(0).textContent;
                    titles[i][k] = title;
                    dates[i][k] = time;
                    images[i][k] = bigImage;
                    details[i][k] = fullDescription;
                    links[i][k] = lin;
                    if (k < 9) {
                        $('#sec' + i + '-image-' + k).attr("src", "img/loading.png");
                        document.getElementById('sec' + i + '-title-' + k).innerHTML = '';
                        $('#sec' + i + '-image-' + k).attr("src", bigImage);
                        document.getElementById('sec' + i + '-title-' + k).innerHTML = title;
                    }
                }
                localStorage.setItem('titles', JSON.stringify(titles));
                localStorage.setItem('dates', JSON.stringify(dates));
                localStorage.setItem('images', JSON.stringify(images));
                localStorage.setItem('details', JSON.stringify(details));
                localStorage.setItem('links', JSON.stringify(links));
				$('#loading').hide();
				$('#refresh').show();
            } catch(e) {
                navigator.notification.alert('\u062d\u062f\u062b \u062e\u0637\u0623 \u0641\u064a \u0627\u0644\u0627\u062a\u0635\u0627\u0644\n\u0628\u0631\u062c\u0627\u0621 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0647 \u0645\u0631\u0647 \u0623\u062e\u0631\u0649', doNothing, '\u062a\u0646\u0628\u064a\u0647', '\u0645\u0648\u0627\u0641\u0642');
                $('#loading').hide();
                $('#refresh').show();
            }
        }
    };
    xmlhttp.send();
}
function checkConnection() {
    var networkState = navigator.network.connection.type;
    if (networkState == Connection.NONE) {
        connected = 0;
    } else {
        connected = 1;
    }
}
function doNothing() {}
function onBackKeyDown() {
    navigator.app.exitApp();
}
function getUrgent() {
    clearInterval(interv);
    checkConnection();
    if (connected == 1) {
        var xmlhttp;
        xmlhttp=new XMLHttpRequest();
        xmlhttp.open("GET",urgentURL,true);
        xmlhttp.onload = function() {
            var doc = this.responseXML.documentElement;
            categories = doc.getElementsByTagName('item');
            if((categories != null) && (categories.length > 0)) {
                try {
                    $('#breakingtitle1').html('');
                    for(var i = 0; i < categories.length; i++) {
                        var title = categories.item(i).getElementsByTagName('title').item(0).textContent;
                        $('#breakingtitle1').html($('#breakingtitle1').html() + '&raquo ' + title + '<br>');
                    }
                    $("#breakingtitle1").css('top', 0);
                    var topValue = $("#breakingtitle1").css('top');
                    topValue = topValue.substr(0, topValue.indexOf("px"));
                    interv = setInterval(function() {
                        topValue -= 49;
                        $("#breakingtitle1").animate({top: topValue});
                        if(($("#breakingtitle1").height() + topValue) <= -49) {
                            $("#breakingtitle1").hide();
                            topValue = 0;
                            $("#breakingtitle1").animate({top: topValue}, function() {
                                $("#breakingtitle1").show();
                            });
                        }
                    }, 5000);
                } catch(e) {}
            }
        };
        xmlhttp.send();
    }
}
function getUrgentPop() {
    checkConnection();
    if (connected == 1) {
        var xmlhttp;
        xmlhttp=new XMLHttpRequest();
        xmlhttp.open("GET",urgentPopURL,true);
        xmlhttp.onload = function() {
            var doc = this.responseXML.documentElement;
            categories = doc.getElementsByTagName('item');
            if((categories != null) && (categories.length > 0)) {
                try {
                    var id = parseInt(categories.item(0).getElementsByTagName('id').item(0).textContent);
                    if(localStorage.getItem('urgentpopid') != id) {
                        var title = categories.item(0).getElementsByTagName('title').item(0).textContent;
                        $('#urgentpoptext').html(title);
                        $('#urgentpop').width('350px');
                        $('#urgentpop').height('220px');
                        localStorage.setItem('urgentpopid', id);
                        timeout = setTimeout(function() {
                            $('#urgentpop').width('0px');
                            $('#urgentpop').height('0px');
                        }, 10000);
                    }
                } catch(e) {}
            }
        };
        xmlhttp.send();
    }
}