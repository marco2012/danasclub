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
$(".wa-chat-box-content-send-btn").click(function () {
    track("start chat", "whatsapp");
});
