
$(function () {
    /*主要导航菜单*/
    $("#nav .li01").hover(function () {
        $(this).find(".ul02").stop().slideDown(400);
    }, function () {
        $(this).find(".ul02").stop().slideUp(0);
    });

    $("#nav .li02").hover(function () {
        $(this).find(".ul03").stop().slideDown(400);
        $(this).addClass("link02_hover");
    }, function () {
        $(this).find(".ul03").stop().slideUp(0);
        $(this).removeClass("link02_hover");
    });

    /*底部友情链接*/
    $(".footerLink").hover(function () {
        $(this).children(".footerLinkCon").show()
    }, function () {
        $(this).children(".footerLinkCon").hide()
    })

})

$(function () {
    $("#slider").nivoSlider({ pauseTime: 3000, controlNav: false, controlNavThumbs: true });
});
