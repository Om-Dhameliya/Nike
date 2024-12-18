$('.section3').owlCarousel({
    loop:true,
    dotsEach:true,
    autoplay:true,
    autoplaySpeed:3000,
    smartSpeed:2000,
    responsive:{
        0:{
            items:1,
            margin:10
        },
        600:{
            items:2,
            margin:400
        },
        1024:{
            items:2,
            margin:150,
            center:true,
        },
        1440:{
            items:3,
            center:true,
            margin:500
        }
    }
})

$('.reviewslider').owlCarousel({
    loop:true,
    center:true,
    margin:50,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4,
            margin:150
        }
    }
})
