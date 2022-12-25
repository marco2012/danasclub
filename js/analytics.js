function track(detail, event = "click_btn") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: event,
        detail: detail,
    });
}
$(".marlup_website").click(function () {
    track("marlup website");
});
$("#write_review").click(function () {
    track("write review");
});
$("#home_btn_events").click(function () {
    track("home button events");
});
$("#home_btn_info").click(function () {
    track("open popup home", "whatsapp");
});
$("#wa-widget-send-button").click(function () {
    track("open popup", "whatsapp");
});
$(".wa-chat-box-content-send-btn").click(function () {
    track(window.location.pathname, "whatsapp_lead");
});
$(".wa-chat-box-send").click(function () {
    track(window.location.pathname, "whatsapp_lead");
});
$(".btn-prenota-ora").click(function () {
    track(window.location.pathname, "whatsapp_lead");
});
$(".btn-prenota-ora-balli-di-gruppo").click(function () {
    track("balli di gruppo", "whatsapp_lead");
});
$(".btn-prenota-ora-tango").click(function () {
    track("tango", "whatsapp_lead");
});
$(".btn-prenota-ora-standard").click(function () {
    track("standard, latino americano", "whatsapp_lead");
});