$(window).scroll(function () {
    var ws = $(this).scrollTop();
    if($("#intro > div > div > h1").offset().top -600 < ws){
        $("#intro h1").css("animation", "fadeIn 1.8s forwards");
        $("#intro p").css("animation", "fadeIn 1.2s .6s forwards");
    }
    if($("#manybook > div > div.text-wrap > h2").offset().top > ws+800){
        $("#manybook h2").css("animation", "fadeOut .1s forwards");
        $("#manybook p").css("animation", "fadeOut .1s forwards");
    }

    if ($("#manybook > div > div.text-wrap > h2").offset().top < ws+600) {
        $("#manybook h2").css("animation", "fadeIn 2s forwards");
        $("#manybook p").css("animation", "fadeIn 2s forwards");
    }
    if ($("#audiodrama > div > div.text-wrap > h2").offset().top < ws+600) {
        $("#audiodrama h2").css("animation", "fadeIn 2s forwards");
        $("#audiodrama p").css("animation", "fadeIn 2s forwards");
        $("#manybook h2").css("animation", "fadeOut .1s forwards");
        $("#manybook p").css("animation", "fadeOut .1s forwards");
        $("#intro h1").css("animation", "fadeOut .1s forwards");
        $("#intro p").css("animation", "fadeOut .1s forwards");
    }
    if ($("#audiodrama > div > div.text-wrap > h2").offset().top > ws+1000) {
        $("#audiodrama h2").css("animation", "fadeOut .1s forwards");
        $("#audiodrama p").css("animation", "fadeOut .1s forwards");}

    if ($("#unlimited > div > div.text-wrap > h2").offset().top < ws+600) {
        $("#unlimited > div > div.text-wrap > h2").css("animation", "fadeIn 2s forwards");
        $("#unlimited > div > div.text-wrap > p").css("animation", "fadeIn 2s forwards");
        $("#audiodrama h2").css("animation", "fadeOut .1s forwards");
        $("#audiodrama p").css("animation", "fadeOut .1s forwards");
    }

    if ($("#unlimited > div > div.text-wrap > h2").offset().top > ws+1000) {
        $("#unlimited > div > div.text-wrap > h2").css("animation", "fadeOut .1s forwards");
        $("#unlimited > div > div.text-wrap > p").css("animation", "fadeOut .1s forwards");
    }

    if ($("#bestseller > div > div.text-wrap > h2").offset().top < ws+600) {
        $("#bestseller > div > div.text-wrap > h2").css("animation", "fadeIn 2s forwards");
        $("#bestseller > div > div.text-wrap > p").css("animation", "fadeIn 2s forwards");
        $("#unlimited > div > div.text-wrap > h2").css("animation", "fadeOut .1s forwards");
        $("#unlimited > div > div.text-wrap > p").css("animation", "fadeOut .1s forwards");
    }
    if ($("#bestseller > div > div.text-wrap > h2").offset().top > ws+1000) {
        $("#bestseller > div > div.text-wrap > h2").css("animation", "fadeOut .1s forwards");
        $("#bestseller > div > div.text-wrap > p").css("animation", "fadeOut .1s forwards");
    }
    if ($("#reading > div > div.text-wrap > h2").offset().top < ws+600) {
        $("#reading > div > div.text-wrap > h2").css("animation", "fadeIn 2s forwards");
        $("#reading > div > div.text-wrap > p").css("animation", "fadeIn 2s forwards");
        $(".card01").css("animation","card .5s ease-in-out forwards");
        $(".card02").css("animation","card .7s ease-in-out forwards");
        $(".card03").css("animation","card 1s ease-in-out forwards");
        $(".card04").css("animation","card 1.1s ease-in-out forwards");
        $("#bestseller > div > div.text-wrap > h2").css("animation", "fadeOut .1s forwards");
        $("#bestseller > div > div.text-wrap > p").css("animation", "fadeOut .1s forwards");
    }
    if ($("#reading > div > div.text-wrap > h2").offset().top > ws+1000) {
        $("#price > div > div.text-wrap > h2").css("animation", "fadeOut .1s forwards");
        $("#price > div > div.text-wrap > p").css("animation", "fadeOut .1s forwards");
        $("#reading > div > div.text-wrap > h2").css("animation", "fadeOut .1s forwards");
        $("#reading > div > div.text-wrap > p").css("animation", "fadeOut .1s forwards");
        $(".card01").css("animation","fadeOut .1s ease-in-out forwards");
        $(".card02").css("animation","fadeOut .1s ease-in-out forwards");
        $(".card03").css("animation","fadeOut .1s ease-in-out forwards");
        $(".card04").css("animation","fadeOut .1s ease-in-out forwards");
    }
    if ($("#price > div > div.text-wrap > h2").offset().top < ws+600) {
        $("#price > div > div.text-wrap > h2").css("animation", "fadeIn 2s forwards");
        $("#price > div > div.text-wrap > p").css("animation", "fadeIn 2s forwards");
        
    }
    if ($("#content > div > div > div.text-wrap > h2").offset().top < ws+600) {
        $("#content > div > div > div.text-wrap > h2").css("animation", "fadeIn 2s forwards");
        $("#content > div > div > div.text-wrap > p").css("animation", "fadeIn 2s forwards");
        $(".phone-wrap").css("animation", "fadeIn 1.5s forwards");
        $("#price > div > div.text-wrap > h2").css("animation", "fadeOut .1s forwards");
        $("#price > div > div.text-wrap > p").css("animation", "fadeOut .1s forwards");
        $("#reading > div > div.text-wrap > h2").css("animation", "fadeOut .1s forwards");
        $("#reading > div > div.text-wrap > p").css("animation", "fadeOut .1s forwards");
        $(".card01").css("animation","fadeOut .1s ease-in-out forwards");
        $(".card02").css("animation","fadeOut .1s ease-in-out forwards");
        $(".card03").css("animation","fadeOut .1s ease-in-out forwards");
        $(".card04").css("animation","fadeOut .1s ease-in-out forwards");
    }
    if ($("#content > div > div > div.text-wrap > h2").offset().top > ws+1000) {
        $("#content > div > div > div.text-wrap > h2").css("animation", "fadeOut .1s forwards");
        $("#content > div > div > div.text-wrap > p").css("animation", "fadeOut .1s forwards");
        $(".phone-wrap").css("animation", "fadeOut .1s forwards");
    }
    if ($("#review > div > div > div.text-wrap > h2").offset().top < ws+600){
        $("#review > div > div > div.text-wrap > h2").css("animation", "fadeIn 2s forwards");
        $("#review > div > div > div.text-wrap > p").css("animation", "fadeIn 2s forwards");
    }
    if ($("#review > div > div > div.text-wrap > h2").offset().top > ws+1000){
        $("#review > div > div > div.text-wrap > h2").css("animation","fadeOut .1s ease-in-out forwards");
        $("#review > div > div > div.text-wrap > p").css("animation","fadeOut .1s ease-in-out forwards");
    }
    if ($("#qna > div > div.text-wrap > h2").offset().top < ws+400){
        $("#review > div > div > div.text-wrap > h2").css("animation","fadeOut .1s ease-in-out forwards");
        $("#review > div > div > div.text-wrap > p").css("animation","fadeOut .1s ease-in-out forwards");
        $("#content > div > div > div.text-wrap > h2").css("animation", "fadeOut .1s forwards");
        $("#content > div > div > div.text-wrap > p").css("animation", "fadeOut .1s forwards");
        $(".phone-wrap").css("animation", "fadeOut .1s forwards");
    }
});

$(function () {
    $("#audiodrama .video-poster").click(function () {
        $(this).css("opacity", "0");
        $("#audiodrama .iframe-video").show();
        $("#audiodrama .youtube-player > iframe").attr("src", "https://www.youtube.com/embed/u1OVbU4EdwI?autoplay=1&mute=1");
    });
    $(".review-video").click(function () {
        $(this).css("opacity", "0");
        $("#review .iframe-video").show();
        $("#review .youtube-player > iframe").attr("src", "https://www.youtube.com/embed/c-XG8k_w1LM?autoplay=1&mute=1");
    });
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "?????? ?????? ????????? ??????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(1) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(1) > div > a.book-data > div").append('<p class="title">' + msg.documents[1].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(1) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(1) > div > a.book-data > div").append('<p class="reading">' + "23%" + '<span class="line"> | ' + "</span>" + "412???" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "???????????? ?????????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(2) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(2) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(2) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "????????? ?????????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(3) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[2].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(3) > div > a.book-data > div").append('<p class="title">' + msg.documents[2].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(3) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(3) > div > a.book-data > div").append('<p class="reading">' + "20%" + '<span class="line"> | ' + "</span>" + "479???" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "??????????????????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(4) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(4) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(4) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(4) > div > a.book-data > div").append('<p class="reading">' + "23%" + '<span class="line"> | ' + "</span>" + "622???" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "?????? ???, ????????????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(5) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(5) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(5) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(5) > div > a.book-data > div").append('<p class="reading">' + "74%" + '<span class="line"> | ' + "</span>" + "216???" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "????????? ?????????2" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(6) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(6) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(6) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(6) > div > a.book-data > div").append('<p class="reading">' + "20%" + '<span class="line"> | ' + "</span>" + "548???" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "?????????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(7) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(7) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(7) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(1) > div > div > ul > li:nth-child(7) > div > a.book-data > div").append('<p class="reading">' + "68%" + '<span class="line"> | ' + "</span>" + "336???" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "12?????? ????????? ??????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(1) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[1].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(1) > div > a.book-data > div").append('<p class="title">' + msg.documents[1].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(1) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(1) > div > a.book-data > div").append('<p class="reading">' + "31%" + '<span class="line"> | ' + "</span>" + "390???" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "??? ????????? ??????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(2) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(2) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(2) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(2) > div > a.book-data > div").append('<p class="reading">' + "56%" + '<span class="line"> | ' + "</span>" + "199???" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "????????????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(3) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(3) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(3) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(3) > div > a.book-data > div").append('<p class="reading">' + "48%" + '<span class="line"> | ' + "</span>" + "60???" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "????????? ????????? ?????????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(4) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(4) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(4) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(4) > div > a.book-data > div").append('<p class="reading">' + "40%" + '<span class="line"> | ' + "</span>" + "170???" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "????????? ????????? ??????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(5) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(5) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(5) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(5) > div > a.book-data > div").append('<p class="reading">' + "78%" + '<span class="line"> | ' + "</span>" + "32???" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "????????? ?????????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(6) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[1].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(6) > div > a.book-data > div").append('<p class="title">' + msg.documents[1].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(6) > div > a.book-data > div").append('<p class="author">' + msg.documents[1].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(6) > div > a.book-data > div").append('<p class="reading">' + "44%" + '<span class="line"> | ' + "</span>" + "149???" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "????????? ?????? ?????? ??? ?????????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(7) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(7) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(7) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(2) > div > div > ul > li:nth-child(7) > div > a.book-data > div").append('<p class="reading">' + "35%" + '<span class="line"> | ' + "</span>" + "123???" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "?????? ?????? ?????? ??????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(1) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[1].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(1) > div > a.book-data > div").append('<p class="title">' + msg.documents[1].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(1) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(1) > div > a.book-data > div").append('<p class="reading">' + "51%" + '<span class="line"> | ' + "</span>" + "41???" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "?????? ?????? ????????? ?????? ?????????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(2) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(2) > div > a.book-data > div").append('<p class="title">' + msg.documents[1].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(2) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(2) > div > a.book-data > div").append('<p class="reading">' + "23%" + '<span class="line"> | ' + "</span>" + "412???" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "????????? ?????????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(3) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[2].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(3) > div > a.book-data > div").append('<p class="title">' + msg.documents[2].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(3) > div > a.book-data > div").append('<p class="author">' + msg.documents[2].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(3) > div > a.book-data > div").append('<p class="reading">' + "20%" + '<span class="line"> | ' + "</span>" + "479???" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "??????????????????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(4) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(4) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(4) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(4) > div > a.book-data > div").append('<p class="reading">' + "23%" + '<span class="line"> | ' + "</span>" + "622???" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "?????? ????????? ?????? ?????????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(5) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(5) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(5) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(5) > div > a.book-data > div").append('<p class="reading">' + "62%" + '<span class="line"> | ' + "</span>" + "23???" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "????????????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(6) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(6) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(6) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(6) > div > a.book-data > div").append('<p class="reading">' + "16%" + '<span class="line"> | ' + "</span>" + "296???" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "???????????? ???????????? ?????????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(7) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(7) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(7) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(3) > div > div > ul > li:nth-child(7) > div > a.book-data > div").append('<p class="reading">' + "23%" + '<span class="line"> | ' + "</span>" + "476???" + "</p>")
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "??????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(1) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(1) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(1) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "???????????? ?????????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(2) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(2) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(2) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "????????? ??????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(3) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(3) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(3) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "????????? ????????? ?????? ?????????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(4) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(4) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(4) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "????????? ??????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(5) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(5) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(5) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "?????? ??????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(6) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(6) > div > a.book-data > div").append('<p class="title">' + msg.documents[0].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(6) > div > a.book-data > div").append('<p class="author">' + msg.documents[0].authors + "</p>");
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "?????? ??????" },
    headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
})
    .done(function (msg) {
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(7) > div > a.book-image > div > div > div > picture").append("<img src='" + msg.documents[1].thumbnail + "'/>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(7) > div > a.book-data > div").append('<p class="title">' + msg.documents[1].title + "</p>");
        $("#unlimited > div > div.unlimited-wrap > div:nth-child(4) > div > div > ul > li:nth-child(7) > div > a.book-data > div").append('<p class="author">' + msg.documents[1].authors + "</p>");
    });

$(document).ready(function () {
    var search;

    search = ["??????", "????????????", "??????", "?????????", "??????"];

    for (i = 0; i < search.length; i++) {

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search[i] },
            async: false,
            headers: { Authorization: "KakaoAK 4e5b4da2542e9d9b07f53f75040d87b3" }
        })
            .done(function (msg) {

                console.log(msg);

                var divs = document.getElementsByClassName('box' + i);

                for (var j = 0; j < divs.length; j++) {
                    $('.box' + i).eq(j).append("<img src='" + msg.documents[j].thumbnail + "'/>");
                    $("#bestseller > div > div.bestSellerList-wrap > div.bestSeller-list > div > div > ul").eq(i).find("li").eq(j).find(".metadata").append('<p class="title">' + msg.documents[j].title + "</p>");
                    $("#bestseller > div > div.bestSellerList-wrap > div.bestSeller-list > div > div > ul").eq(i).find("li").eq(j).find(".metadata").append('<p class="author">' + msg.documents[j].authors + "</p>");
                }
            });
    };
});

$(document).ready(function(){
$(function(){
    $(".slide-item button").click(function(){
        var i=$(this).parent().index();
        $(this).addClass("active");
        $(this).parent().siblings().children().removeClass("active");
        $(".slide-wrapper").eq(i+5).css("display","inline-flex").show().siblings().hide();
    });
});
});

// ????????????

$(document).ready(function(){
var swiper = new Swiper(".swiper-container", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' +"<button>"+ (index + 1)+"</button>" + "</span>";
      },
    },
    on: {
        slideChange: function () {
            var has = $(".swiper-pagination-bullet-active").index();

            $(".slide-data > p").eq(has).show();
            $(".slide-data > p").eq(has).siblings("p").hide();
        },
    }
  });
});

$(document).ready(function(){
    var swiper1 = new Swiper(".swiper-container1", {
        pagination: {
          el: ".swiper-pagination1",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' +"<button>"+ (index + 1)+"</button>" + "</span>";
          },
        },
        on: {
            slideChange: function () {
                var has1 = $(".swiper-pagination1 > .swiper-pagination-bullet-active").index();
    
                $(".slide-data1 > p").eq(has1).show();
                $(".slide-data1 > p").eq(has1).siblings("p").hide();
            },
        }
      });
    });

    $(document).ready(function(){
        $("#content > div.tab-wrap > ul > li.brandContent.active.audiobook").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
            $("#content > div.section-wrap").show();
            $("#content > div.section-wrap1").hide();
        });

        $("#content > div.tab-wrap > ul > li.brandContent.viewer").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
            $("#content > div.section-wrap").hide();
            $("#content > div.section-wrap1").show();
        });
    });

    $(function(){
        $("#qna > div > div.qna-wrap > ul > li").click(function(){
            $(this).toggleClass("active");
        });
    });

    $(function(){
        $(".about-button").click(function(){
            $(this).toggleClass("show");
            $(this).siblings(".question").toggle();
        });
    });

    function moveTo(){
        location.assign("sub.html")
    };