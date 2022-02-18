function menuItem(item) {
    $(".menu>p.menu-item-chosen").removeClass("menu-item-chosen");
    $(item).addClass("menu-item-chosen");
}

function showPage(element) {
    $(".container").hide();
    $("#" + element).show();

    // TODO add transition and animations
}

function displayMenu() {
    if ($(".hamburger").hasClass("is-active")) {
        $(".hamburger").removeClass("is-active");
        $(".menu").hide();

    }
    else {
        $(".hamburger").addClass("is-active");
        $(".menu").show();
    }
}