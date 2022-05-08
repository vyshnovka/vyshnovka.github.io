function menuItem(item) {
    $(".menu>p.menu-item-chosen").removeClass("menu-item-chosen");
    $(item).addClass("menu-item-chosen");
}

function showPage(element) {
    $(".left-part").hide();
    $("#" + element).show();
    
    if ($(".hamburger").is(":visible")) {
        $(".top").css("background-color", "#d1e5eb");
        $(".hamburger").removeClass("is-active");
        $(".menu").hide();
    }
}

function displayMenu() {
    if ($(".hamburger").hasClass("is-active")) {
        $(".top").css("background-color", "#d1e5eb");
        $(".hamburger").removeClass("is-active");
        $(".menu").hide();

    }
    else {
        $(".top").css("background-color", "#2b2b35");
        $(".hamburger").addClass("is-active");
        $(".menu").show();
    }
}