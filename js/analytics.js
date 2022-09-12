function track(detail, event = "click_btn") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: event,
        detail: detail,
    });
}
function openUrl(url) {
    window.open(url, "_blank").focus();
}

$("#marlup_website").click(function (event) {
    track("marlup website");
});
$("#btn_show_all_videos").click(function (event) {
    track("show all videos");
});
$("#btn_show_all_photos").click(function (event) {
    track("show all photos");
});
$("#btn_show_photos_2022").click(function (event) {
    openUrl("https://www.facebook.com/media/set/?set=a.489594019747847&type=3");
    track("show photos 2022");
});
$("#btn_show_photos_2019a").click(function (event) {
    openUrl(
        "https://www.facebook.com/media/set/?set=a.2469574986486701&type=3"
    );
    track("show photos 2019 a");
});
$("#btn_show_photos_2019b").click(function (event) {
    openUrl(
        "https://www.facebook.com/media/set/?set=a.1997567607020777&type=3"
    );
    track("show photos 2019 b");
});
$("#btn_show_photos_2016").click(function (event) {
    openUrl("https://www.facebook.com/media/set/?set=a.938714779572737&type=3");
    track("show photos 2016");
});
$("#btn_show_all_events").click(function (event) {
    track("show all events");
});
$("#btn_show_all_events_header").click(function (event) {
    track("show all events");
});
$("#volantino_img").click(function (event) {
    track("show all events");
});
$("#nostri_corsi_btn").click(function (event) {
    track("i nostri corsi");
});
$("#tel_number").click(function (event) {
    track("call number");
});
$("#email").click(function (event) {
    track("email");
});
$("#wa-widget-send-button").click(function (event) {
    track("open popup", "whatsapp");
});
$(".wa-chat-box-content-send-btn").click(function (event) {
    track("start chat", "whatsapp");
});
