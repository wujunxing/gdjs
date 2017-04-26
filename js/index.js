
$(function () {
    $("#slider").nivoSlider({ pauseTime: 3000, controlNav: false, controlNavThumbs:true });
});

//项目展示---------------------------------------------------------------Begin

$(function () {
    $("#flash_slider").tinycarousel({ interval: true, bullets: true });

    $("#product_carousel").tinycarousel({ interval: true });
    var tinycarousel_data = $("#product_carousel").data("plugin_tinycarousel");
    $("#product_carousel").hover(
        function () { tinycarousel_data.stop(); }, function () { tinycarousel_data.start(); }
    )
});

//项目展示---------------------------------------------------------------End