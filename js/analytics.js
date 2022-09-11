function track(detail) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: "click_btn",
        detail: detail,
    });
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
