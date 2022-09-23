function track(detail, event = "click_btn") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: event,
        detail: detail,
    });
}
$("#marlup_website").click(function () {
    track("marlup website");
});
$("#wa-widget-send-button").click(function () {
    track("open popup", "whatsapp");
});
$("#home_btn_info").click(function () {
    track("open popup home", "whatsapp");
});
$(".wa-chat-box-content-send-btn").click(function () {
    track("start chat", "whatsapp");
});
$("#write_review").click(function () {
    track("write review");
});
$("#home_btn_events").click(function () {
    track("home button events");
});
