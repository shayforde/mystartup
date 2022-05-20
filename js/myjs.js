/* a new javascript file */
function deleteCookie (name, path, domain) {
     if (getCookie(name)) {
          document.cookie = name + "=" +
                                         ((path) ? "; path=" + path : "") +
                                         ((domain) ? "; domain=" + domain : "") +
                                         "; expires=Thu, 01-Jan-70 00:00:01 GMT";
     }
}
function getCookie(name) {
     var prefix = name + "=";
     var begin = document.cookie.indexOf(prefix);

     if (begin == -1) return null;

     var end = document.cookie.indexOf(";", begin);

     if (end == -1) end = document.cookie.length;

     return unescape(document.cookie.substring(begin + prefix.length, end));
}

function setCookie(name, value, expires, path, domain, secure) {
     document.cookie = name + "=" + escape(value) +
                                    ((expires) ? "; expires=" + expires.toGMTString() : "") +
                                    ((path) ? "; path=" + path : "") +
                                    ((domain) ? "; domain=" + domain : "") +
                                    ((secure) ? "; secure" : "");
}

function go(){
	// alert("go is working!");
}