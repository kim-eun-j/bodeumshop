$(function () {
    //fullpage*********************************
    var myFull = new fullpage("#fullpage", {
        sectionsColor: ["", "white", "#d8edfc", "white", "#d8edfc"],
        navigation: true,
        navigationTooltips: ["BANNER", "NEW", "BEST", "VIDEO", "INFO", "FOOTER"],
        showActiveTooltip: true,
    })

    //배너**********************************************
    var showBanner = 0;

    function moveBanner() {
        $(".banner>li").eq(showBanner).fadeIn(500).siblings().fadeOut();
        $(".pager>li").eq(showBanner).addClass("active").siblings().removeClass("active");
    }

    $(".pager>li").click(function () {
        showBanner = $(this).index();
        moveBanner();
    })

    var timer = setInterval(autoBanner,5000);

    function autoBanner(){
        if(showBanner<=3){
            showBanner++;
        }
        else{
            showBanner=0;
        }
        moveBanner();
    }

    //new***********************************************
    $(function () {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 4,
            spaceBetween: 10,
            // freeMode: true,
            scrollbar: {
                el: '.js-swiper-scrollbar',
                draggable: true,
                snapOnRelease: true,
            },
            breakpoints: {
                767: {
                    slidesPerView: 3
                },
                480: {
                    slidesPerView: 2
                }
            }
        });
    })

    //best seller*******************************************
    $(".tabs>li").click(function () {
        //li의 순서찾기
        var sNum = $(this).index();
        console.log(sNum);
        $(this).addClass("active").siblings().removeClass("active");

        $(".proList>li").eq(sNum).fadeIn(500).siblings().fadeOut();
    })


    //video************************************************
    var vBanner = 0;

    function moveVideo() {
        $(".uVideo>li").eq(vBanner).fadeIn(500).siblings().fadeOut();
        $(".thumb>li").eq(vBanner).addClass("active").siblings().removeClass("active");
    }

    $(".thumb>li").click(function () {
        vBanner = $(this).index();
        moveVideo();
    })

    $(function () {
        var swiper = new Swiper('.thumbSwiper', {
            slidesPerView: 5.5,
            spaceBetween: 10,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                767: {
                    slidesPerView: 3.5
                },
                480: {
                    slidesPerView: 2.5,
                    spaceBetween: 20
                }
            }
        });
    })
})
