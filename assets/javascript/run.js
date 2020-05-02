var menuMinimized = true;

$("#menuIcon").on("click", function() {
    if(menuMinimized === true) {
        $("#menuIcon").css("margin-left", "210px");
        $("#sideNav").css("width", "200px");
        $(".barMiddle").hide();
        $(".barTop").css("transform", "rotate(45deg) translate(-1px, 10px)");
        $(".barBottom").css("transform", "rotate(-45deg) translate(-6px, -6px)");
        menuMinimized = false;
    } else {
        $("#sideNav").css("width", "0");
        $("#menuIcon").css("margin-left", "0");
        $(".barMiddle").show();
        $(".barTop").css("transform", "rotate(0deg)");
        $(".barBottom").css("transform", "rotate(0deg)");
        menuMinimized = true;
    }
});
