var cookie_redirect="redirect";
//---------------------------------cookie操作，开始-----------------------------
var mydomain = '';
/**
 * 获取Cookies方法
 * @param cookieName
 * @returns
 */
function getCookie(cookieName) {
    var cookieString = document.cookie;
    var start = cookieString.indexOf(cookieName + '=');
    // 加上等号的原因是避免在某些 Cookie 的值里有
    // 与 cookieName 一样的字符串。
    if (start == -1) // 找不到
        return null;
    start += cookieName.length + 1;
    var end = cookieString.indexOf(';', start);
    var context = '';
    if (end == -1) {
        context = unescape(cookieString.substring(start));
    } else {
        context = unescape(cookieString.substring(start, end));
    }
    context = context.replace(/"/g,"");
    return context;
}

/**
 * 获取Cookies方法,解决中文乱码
 * @param cookieName
 * @returns
 */
function getCookieFromServer(cookieName) {
    var cookieString = document.cookie;
    var start = cookieString.indexOf(cookieName + '=');
    // 加上等号的原因是避免在某些 Cookie 的值里有
    // 与 cookieName 一样的字符串。
    if (start == -1) // 找不到
        return null;
    start += cookieName.length + 1;
    var end = cookieString.indexOf(';', start);
    if (end == -1) {
        return Url.decode(cookieString.substring(start));
    } else {
        return Url.decode(cookieString.substring(start, end));
    }
}

/**
 * 删除Cookies
 * @param name
 */
function DeleteCookie(name) {
    DeleteCookieDomain(name, mydomain);
}

/**创建Cookies
 * @param name
 * @param value
 */
function SetCookie(name, value) {
    SetCookieDomain(name, value, mydomain);
}
/**
 * 创建Cookies 可设置域名
 * @param name
 * @param value
 * @param domain
 */
function SetCookieDomain(name, value, domain) {
    var Days = 2;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    if (domain!=null && $.trim(domain)!='') {
        document.cookie = name + "=" + escape(value) + ";expires="
            + exp.toUTCString() + ";path=/" + ";domain=" + domain;
    } else {
        document.cookie = name + "=" + escape(value) + ";expires="
            + exp.toUTCString() + ";path=/";
    }
}
//自定义cookies失效时间 s指秒 h指天数 d指天数 如s40代表40秒
function SetCookieOutTime(name, value, outTime) {
    var strsec = getsec(outTime);
    var exp = new Date();
    exp.setTime(exp.getTime() + strsec * 1);
    if (mydomain!=null && $.trim(mydomain)!='') {
        document.cookie = name + "=" + escape(value) + ";expires="
            + exp.toUTCString()+ ";path=/" + ";domain=" + mydomain;
    } else {
        document.cookie = name + "=" + escape(value) + ";expires="
            + exp.toUTCString() + ";path=/";
    }
}

/**
 * 删除所有的cookie
 */
function clearCookie() {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; "); // 将多cookie切割为多个名/值对
    for (var i = 0; i < arrCookie.length; i++) { // 遍历cookie数组，处理每个cookie对
        var arr = arrCookie[i].split("=");
        if (arr.length > 0)
            DeleteCookieDomain(arr[0], mydomain);
    }
}

// 转换cookies时间
function getsec(str) {
    var str1 = str.substring(1, str.length) * 1;
    var str2 = str.substring(0, 1);
    if (str2 == "s") {
        return str1 * 1000;
    } else if (str2 == "h") {
        return str1 * 60 * 60 * 1000;
    } else if (str2 == "d") {
        return str1 * 24 * 60 * 60 * 1000;
    }
}

/**
 * 删除指定域名下的共享cookie.二级域名可用
 * @param name
 * @param domain
 */
function DeleteCookieDomain(name, domain) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (null == domain) {
        document.cookie = name + "=" + escape(cval) + ";expires="
            + exp.toUTCString() + ";path=/" + ";domain=" + domain;
    } else {
        document.cookie = name + "=" + escape(cval) + ";expires="
            + exp.toUTCString()+ ";path=/";
    }
}
//---------------------------------cookie操作，结束-----------------------------