function menuItem(item) {
    $(".menu>p.menu-item-chosen").removeClass("menu-item-chosen");
    $(item).addClass("menu-item-chosen");
}