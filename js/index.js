//项目展示---------------------------------------------------------------Begin

$(function () {
    $("#product_carousel").tinycarousel({ interval: true });
    var tinycarousel_data = $("#product_carousel").data("plugin_tinycarousel");
    $("#product_carousel").hover(
        function () { tinycarousel_data.stop(); }, function () { tinycarousel_data.start(); }
    )
});

//项目展示---------------------------------------------------------------End