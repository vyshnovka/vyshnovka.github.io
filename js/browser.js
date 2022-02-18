document.addEventListener("DOMContentLoaded", function () {
    var userAgent = navigator.userAgent;

    if (userAgent.match(/chrome|chromium|crios/i)) {
        //
    } else if (userAgent.match(/firefox|fxios/i)) {
        //
    } else if (userAgent.match(/safari/i)) {
        $(".big-text").addClass("letter-space-Safari");
        $("b").addClass("letter-space-Safari-b");
    }
});