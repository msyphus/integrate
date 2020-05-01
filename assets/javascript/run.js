// $(document).on("ready", function() {
//     $("#sideNav").hide();
// })

$("#menu").on("click", function() {
    // $("#sideNav").show();
    $("#sideNav").css("width", "200px")
})

$(".closeButton").on("click", function() {
    $("#sideNav").css("width", "0");
})