// $(document).on("ready", function() {
//     $("#sideNav").hide();
// })

$("#menuIcon").on("click", function() {
    // $("#sideNav").show();
    $("#menuIcon").css("margin-left", "210px")
    $("#sideNav").css("width", "200px")
})

$(".closeButton").on("click", function() {
    $("#sideNav").css("width", "0");
})