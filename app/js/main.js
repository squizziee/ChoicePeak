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

var count = new Date("september 1, 2021 08:30:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
        var d = count - now;

        var days = Math.floor(d/(1000*60*60*24));
        var hours = Math.floor((d%(1000*60*60*24))/(1000*60*60));
        var minutes = Math.floor((d%(1000*60*60))/(1000*60));
        var seconds = Math.floor((d%(1000*60))/1000);

        document.getElementById("days").innerHTML = days + " days";
        document.getElementById("hours").innerHTML = hours + " hours";
        document.getElementById("minutes").innerHTML = minutes + " minutes";
        document.getElementById("seconds").innerHTML = seconds + " seconds";

        if (d <= 0) {
            clearInterval(x);
        }
    },1000);