
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-39151976-4','zuimeia.com');
ga('send', 'pageview');

// GA 统计的变量
var source = "direct",
    url_search_value = window.location.search,
    structured_url_path = location.protocol + '//' + location.host + location.pathname,
    device,
    platform,
    event_info;

// 判断source
if (url_search_value.length > 0) {
    source = url_search_value;
}

// 判断是否是手机
function mobilecheck() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    }
}

if (mobilecheck()) {
    device = "Mobile"
} else {
    device = "Web"
}

// 检测设备系统

function detect_mobile_platform() {

    if (navigator.userAgent.match(/iPhone/i)) {
        return 'iPhone';
    } else if (navigator.userAgent.match(/iPod/i)) {
        return 'iPod';
    } else if (navigator.userAgent.match(/iPad/i)) {
        return 'iPad';
    } else if (navigator.userAgent.match(/Android/i)) {
        return 'Android';
    } else if (navigator.userAgent.match(/webOS/i)) {
        return 'webOS';
    } else if (navigator.userAgent.match(/Windows Phone/i)) {
        return 'WindowsPhone';
    } else {
        return 'Others'
    }

}
platform = detect_mobile_platform();
if (platform == 'iPhone' || platform == 'iPod'){
    var category_id = 2;
}else{
    var category_id = 1;
}


function event_tracker(name, source, wallpaper_id) {
    event_info = name + '-' + device + '-' + platform;
    ga('send', 'event', event_info, source, wallpaper_id);
}