 $("#open_search_bar").on("click", function() {
     $(this).addClass("hidden");
     setTimeout(function() {
        $(".logo").addClass("hidden");
     }, 500);
     setTimeout(function() {
        $(".search_bar").removeClass("hidden");
     }, 750);
 })

 $("#close_search_bar").on("click", function(event) {
    event.preventDefault();
    $(".search_bar").addClass("hidden");
    setTimeout(function() {
        $(".logo").removeClass("hidden");
    }, 500);
    setTimeout(function() {
        $("#open_search_bar").removeClass("hidden");
    }, 750);
})

$("#toggle_sidebar").on("click", function() {
    $("#sidebar").toggleClass("sidebar_active");
    $("#wrapper").toggleClass("wrapper_active");
})