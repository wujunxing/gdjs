
$(function () {
    $("#flash_slider").tinycarousel({ interval: true, bullets: true });
});

$(function () {
    $("#product_carousel").tinycarousel({ interval: true });
    var tinycarousel_data = $("#product_carousel").data("plugin_tinycarousel");
    $("#product_carousel").hover(
        function () { tinycarousel_data.stop(); }, function () { tinycarousel_data.start(); }
    )
});

$(function () {
    $("#floatimg").adFloat({ width: 252, height: 172, top: 0, left: 0, step: 2 });
    $("#closead").click(function () {
        $("#floatimg").remove();
    });
});