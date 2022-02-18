function menuItem(item) {
    $(".menu>p.menu-item-chosen").removeClass("menu-item-chosen");
    $(item).addClass("menu-item-chosen");
}

function displayMenu() {
    if ($(".hamburger").hasClass("is-active")) {
        $(".hamburger").removeClass("is-active");
    }
    else {
        $(".hamburger").addClass("is-active");
    }
}