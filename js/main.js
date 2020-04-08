$(function() {
    var date = new Date();
    $("#year").text(date.getFullYear());

    for (var i = 0; i < 5; i++) {
        setTimeout(deleteSignage, 1000);
    }
    setInterval(deleteSignage, 5000);
});

function deleteSignage() {
    $("#banner").remove();
    $("#extag").remove();
    $(".adlantis_sp_sticky_container").remove();
    $(".adlantis_banner_image").remove();
    $("#nend_adspace_946_1279").remove();
    $("#ad_cloud_overlay_space").remove();
    $("img:not(.myImages)").remove();
    $("#NINCtImageSection").remove();
    // $("iframe:not(.originalVideo)").remove();
    $('#ninja-hp-inactive-footer').remove();
    $('#ninja-hp-inactive').remove();
    $('[id^=asumi-frame]').remove();
    $('#ub_SpLink').remove();
    $('[id^=zp]').remove();
    $('iframe').remove();
    $('#sbmarwbthv5').remove();
}
