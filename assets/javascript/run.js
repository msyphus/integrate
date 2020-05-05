var menuMinimized = true;
var setSiteMode = "light";

$("#menuIcon").on("click", function() {
    if(menuMinimized === true) {
        $("#menuIcon").css("margin-left", "110px");
        $("#sideNav").css("width", "100px");
        $(".barMiddle").hide();
        $(".barTop").css("transform", "rotate(45deg) translate(-1px, 10px)");
        $(".barBottom").css("transform", "rotate(-45deg) translate(-6px, -6px)");
        menuMinimized = false;
    } else {
        $("#sideNav").css("width", "0");
        $("#menuIcon").css("margin-left", "1%");
        $(".barMiddle").show();
        $(".barTop").css("transform", "rotate(0deg)");
        $(".barBottom").css("transform", "rotate(0deg)");
        menuMinimized = true;
    }
});

$("#modeToggle").on("click", function() {
    if (setSiteMode === "light"){
       $("body").css("background-image", "radial-gradient(#000000, #333333)");
       $(".sideBar a, #mode, .initiative, h1, h2, h3, p, footer").css("color", "white");
       setSiteMode = "dark";
    } else {
        $("body").css("background-image", "radial-gradient(#ffffff, #e6e6e6)");
        $(".sideBar a, #mode, .initiative, h1, h2, h3, p, footer").css("color", "black");
        setSiteMode = "light";
    }
    $("#modeToggle").toggleClass("switchBg");
    $("#modeToggleBtn").toggleClass("btnMove");
});
