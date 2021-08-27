 $(".search_toggle_btn").on("click", function() {
     $(this).addClass("hidden");
     setTimeout(function() {
        $(".search_bar").removeClass("hidden");
     }, 750);
 })