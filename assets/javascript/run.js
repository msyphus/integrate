var menuMinimized = true;
var setSiteMode = localStorage.getItem("userMode");
console.log(setSiteMode);
modeChange();
setButton();

function setButton() {
    if(setSiteMode === "dark") {
    toggleStyle();
    }
};

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

function modeChange() {
    if (setSiteMode === "light"){
        $("body").css("background-image", "radial-gradient(#ffffff, #e6e6e6)");
        $("header").css("background-image", "radial-gradient(#ffffff, #e6e6e6)");
        $(".sideBar a, #mode, .initiative, .restyleList, h1, h2, h3, p, footer").css("color", "black");
     } else {
        $("body").css("background-image", "radial-gradient(#000000, #333333)");
        $("header").css("background-image", "radial-gradient(#000000, #333333)");
        $(".sideBar a, #mode, .initiative, .restyleList, h1, h2, h3, p, footer").css("color", "white");
     }
};

function toggleStyle() {
    $("#modeToggle").toggleClass("switchBg");
    $("#modeToggleBtn").toggleClass("btnMove");
};

$("#modeToggle").on("click", function() { 
    if (setSiteMode === "light"){
        setSiteMode = "dark";
        localStorage.setItem("userMode", setSiteMode);
    } else {
        setSiteMode = "light";
        localStorage.setItem("userMode", setSiteMode);
    }
    modeChange();
    toggleStyle();
});
