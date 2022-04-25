// JavaScript Document
jQuery('#custom-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


//home page experience gallery carousel
jQuery('#custo_experience_owl').owlCarousel({
    loop:true,
    margin:19,
    nav:true,
    navText : ["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        900:{
            items:3
        },
        1100:{
            items:4
        }
    }
});


//military page content carousel

//desktop version
jQuery('#custom_military_slider1_owl').owlCarousel({
    loop:true,
    margin:19,
    nav:true,
    rows: true,
    navText : ["<img src='images/prev_icn.png' >","<img src='images/nxt_icn.png' >"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        900:{
            items:1
        },
        1100:{
            items:1
        }
    }
});

//mobile version

jQuery('#custom_military_slider2_owl').owlCarousel({
    loop:true,
    margin:19,
    nav:true,
    rows: true,
    navText : ["<img src='images/prev_icn.png' >","<img src='images/nxt_icn.png' >"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        900:{
            items:1
        },
        1100:{
            items:1
        }
    }
});