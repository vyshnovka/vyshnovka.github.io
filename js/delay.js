$(window).scroll(function () {
    inViewport();
});

$(window).resize(function () {
    inViewport();
});

var delay = 0;

function inViewport() {
    $(".to-show-delay").each(function () {
        var div = $(this).offset().top;
        var bottom = $(window).scrollTop();

        var animDelay = " animate__delay-" + delay + "s";

        if (div < (bottom + $(window).height())) {
            $(this).removeClass("to-show-delay hidden");
            $(this).addClass("visible animate__animated animate__fadeIn" + animDelay);
            delay++;
        }
    });
}