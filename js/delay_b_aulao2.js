const params = new URLSearchParams(window.location.search);
const pular = params.get("skipvideo") || "1";
if (pular == "true") {
    $(".vnda_show").show();
    window.dataLayer.push({
        'event': 'show_pagescroll'
    });
} else {
    const res = tempo_mostrar_aulao2 * 1000;
    console.log('----> 1')
    setTimeout(function () {
        console.log('----> 2')
        $(".vnda_show").show();
        window.dataLayer.push({
            'event': 'show_pagescroll'
        });
    }, res);
}
jQuery(document).ready(function (e) {
    $('.counter').text(qtd_alunos);
    e(".whatsapp_link").attr("href", "https://api.whatsapp.com/send?phone=" +
        wp_num +
        "&text=Ol%C3%A1%2C%20assisti%20o%20aul%C3%A3o%20do%20MVO%2C%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas."), e(".main-cta").attr("href", checkout_link + url_param);
});
const button = document.getElementById("whatsapp-lead");

function setCookie(e, t, i) {
    var r = new Date();
    r.setTime(r.getTime() + 864e5 * i), (i = "expires=" + r.toUTCString()), (document.cookie = e + "=" + t + ";" + i + ";path=/");
}

function getCookie(e) {
    e += "=";
    var t = decodeURIComponent(document.cookie);
    t = t.split(";");
    for (var i = 0; i < t.length; i++) {
        for (var r = t[i];
            " " == r.charAt(0);) r = r.substring(1);
        if (0 == r.indexOf(e)) return r.substring(e.length, r.length);
    }
    return "";
}
var timer_min = parseInt(document.getElementById("es_timer-min").innerHTML),
    timer_sec = parseInt(document.getElementById("es_timer-sec").innerHTML),
    timer_min_txt = "",
    timer_sec_txt = "";
null != getCookie("timer_min") && "" != getCookie("timer_min") && (timer_min = parseInt(getCookie("timer_min"))), null != getCookie("timer_sec") && "" != getCookie("timer_sec") && (timer_sec = parseInt(getCookie("timer_sec")));
var timer = setInterval(function () {
    0 >= timer_sec ? 0 >= timer_min ? clearInterval(timer) : (timer_min--, (timer_sec = 59)) : timer_sec--, (timer_min_txt = 10 > timer_min ? "0" + timer_min : timer_min), (timer_sec_txt = 10 > timer_sec ? "0" + timer_sec : timer_sec), (document.getElementById("es_timer-min").textContent = timer_min_txt), (document.getElementById("es_timer-sec").textContent = timer_sec_txt), (document.getElementById("es_timer").style.visibility = "visible"), setCookie("timer_min", timer_min, 365), setCookie("timer_sec", timer_sec, 365);
}, 1e3);
const lozad_loader = lozad();
lozad_loader.observe();
var swiperReviews = new Swiper("#slider-reviews", {
    slidesPerView: 4,
    slidesPerGroup: 1,
    grabCursor: !0,
    a11y: !1,
    spaceBetween: 28,
    loop: !0,
    centeredSlides: !0,
    allowTouchMove: !0,
    navigation: {
        nextEl: ".next-reviews",
        prevEl: ".previous-reviews"
    },
    breakpoints: {
        0: {
            slidesPerView: 1.3,
            slidesPerGroup: 1,
            spaceBetween: 28
        },
        480: {
            slidesPerView: 1.2,
            slidesPerGroup: 1,
            spaceBetween: 28
        },
        767: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 28
        },
        992: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 28
        },
    },
});