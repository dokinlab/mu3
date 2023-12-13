document.addEventListener("DOMContentLoaded", () => {


    let checkScrollTop = function(){
      if ($(document).scrollTop()==0) {
        $('#body').removeClass('begin');
      } else {
        $('#body').addClass('begin');
      }
    }
    checkScrollTop();
    $(document).on('scroll',function(){
      checkScrollTop();
    });


    $('.js-toggle').on('click',function(){
        $(this).toggleClass('active');
    });

    $('.js-parent-toggle').on('click',function(){
        $(this).parent().toggleClass('active');
    });

    let closeAll = function() {
        $('.js-toggle').removeClass('active');
        $('.js-parent-toggle').parent().removeClass('active');
        $('#body').removeClass('nav-actived');
        $('#body').removeClass('search-actived');
        $('#body').removeClass('profile-actived');
        $('#body').removeClass('cities-actived');
        $('.toper__menu').removeClass('active');
        $('#body').removeClass('toper-menu-actived');
    }

    $('.js-close-all').on('click',function(){
        closeAll();
    });

    $(document).keyup(function(e) {
        if (e.key === "Escape") {
            closeAll();
        }
    });


    $('.js-open-nav').on('click',function(){
        $('#body').addClass('nav-actived');
        window.scrollTo(0,0);
    });

    $('.js-close-nav').on('click',function(){
        closeAll();
        $('#body').removeClass('nav-actived');
    });

    $('.js-toggle-nav').on('click',function(){
        $('#body').toggleClass('nav-actived');
    });


    $('.js-toggle-search').on('click',function(){
        $('#body').toggleClass('search-actived');
    });


    $('.js-toggle-profile').on('click',function(){
        $('#body').toggleClass('profile-actived');
    });
    $('.js-toggle-mob-profile').on('click',function(){
        $('#body').toggleClass('nav-actived');
        $('.js-toggle-profile').toggleClass('active');
        $('#body').toggleClass('profile-actived');
    });


    $('.js-open-cities').on('click',function(){
        closeAll();
        $('#body').addClass('cities-actived');
    });


    $('.js-toggle-menu').on('click',function(){
        $('.toper__menu').toggleClass('active');
    });


    $('.js-toper-menu').on('click',function(){
        closeAll();
        $(this).addClass('active');
        $('#body').addClass('toper-menu-actived');
    });


    $('.js-scroll-to').bind('click',function(e){
      let anchor = $(this);
      $('html,body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 300);
      e.preventDefault();
    });


    if ($('[type=tel]').is('[type=tel]')){
        $('[type=tel]').mask('+7 (999) 999-99-99');
    }


    if ($('.js-select2').is('.js-select2')){
        $('.js-select2').select2();
    }


    if ($('.js-slideshow').is('.js-slideshow')){
        let slideshowSwiper = new Swiper ('.js-slideshow', {
            loop: true,
            spaceBetween: 20,
            navigation: {
                prevEl: '.js-slideshow-prev',
                nextEl: '.js-slideshow-next',
            }
        });
    }

    if ($('.js-things').is('.js-things')){
        let thingsSwiper = new Swiper ('.js-things', {
            spaceBetween: 20,
            breakpoints: {
                768: {
                    spaceBetween: 0,
                    slidesPerView: 999999999
                }
            }
        });
    }

    if ($('.js-simple').is('.js-simple')){
        let simpleSwiper = new Swiper ('.js-simple', {
            spaceBetween: 30,
            navigation: {
                prevEl: '.js-simple-prev',
                nextEl: '.js-simple-next',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2
                },
                992: {
                    slidesPerView: 3
                },
                1290: {
                    slidesPerView: 4
                }
            }
        });
    }

    if ($('.js-choose').is('.js-choose')){
        let chooseSwiper = new Swiper ('.js-choose', {
            loop: true,
            navigation: {
                prevEl: '.js-choose-prev',
                nextEl: '.js-choose-next',
            }
        });
    }

    if ($('.js-cases').is('.js-cases')){
        let casesSwiper = new Swiper ('.js-cases', {
            spaceBetween: 20,
            navigation: {
                prevEl: '.js-cases-prev',
                nextEl: '.js-cases-next',
            },
            breakpoints: {
                768: {
                    spaceBetween: 30,
                    slidesPerView: 2
                },
                992: {
                    spaceBetween: 30,
                    slidesPerView: 3
                }
            }
        });
    }

    if ($('.js-team').is('.js-team')){
        let teamSwiper = new Swiper ('.js-team', {
            spaceBetween: 20,
            navigation: {
                prevEl: '.js-team-prev',
                nextEl: '.js-team-next',
            },
            breakpoints: {
                768: {
                    spaceBetween: 30,
                    slidesPerView: 2
                },
                992: {
                    spaceBetween: 30,
                    slidesPerView: 3
                },
                1290: {
                    spaceBetween: 30,
                    slidesPerView: 4
                }
            }
        });
    }

    if ($('.js-reviews').is('.js-reviews')){
        let reviewsSwiper = new Swiper ('.js-reviews', {
            loop: true,
            spaceBetween: 20,
            navigation: {
                prevEl: '.js-reviews-prev',
                nextEl: '.js-reviews-next',
            },
            breakpoints: {
                768: {
                    spaceBetween: 30
                },
                992: {
                    spaceBetween: 30,
                    slidesPerView: 2
                },
                1290: {
                    spaceBetween: 30,
                    slidesPerView: 3
                }
            }
        });
    }

    if ($('.js-clients').is('.js-clients')){
        let clientsSwiper = new Swiper ('.js-clients', {
            loop: true,
            spaceBetween: 20,
            navigation: {
                prevEl: '.js-clients-prev',
                nextEl: '.js-clients-next',
            },
            breakpoints: {
                768: {
                    spaceBetween: 30,
                    slidesPerView: 2
                },
                992: {
                    spaceBetween: 30,
                    slidesPerView: 3
                },
                1290: {
                    spaceBetween: 30,
                    slidesPerView: 4
                }
            }
        });
    }

    if ($('.js-logos').is('.js-logos')){
        let logosSwiper = new Swiper ('.js-logos', {
            loop: true,
            autoplay: true,
            spaceBetween: 20,
            slidesPerView: 3,
            breakpoints: {
                768: {
                    spaceBetween: 50,
                    slidesPerView: 4
                },
                992: {
                    spaceBetween: 50,
                    slidesPerView: 5
                },
                1290: {
                    spaceBetween: 50,
                    slidesPerView: 6
                }
            }
        });
    }

    if ($('.js-b4nn3r').is('.js-b4nn3r')){
        let slideshowSwiper = new Swiper ('.js-b4nn3r', {
            loop: true,
            spaceBetween: 20,
            navigation: {
                prevEl: '.js-b4nn3r-prev',
                nextEl: '.js-b4nn3r-next',
            }
        });
    }

    if ($('.js-consult').is('.js-consult')){
        let consultSwiper = new Swiper ('.js-consult', {
            loop: true,
            spaceBetween: 20,
            navigation: {
                prevEl: '.js-consult-prev',
                nextEl: '.js-consult-next',
            }
        });
    }

    if ($('.js-solutions').is('.js-solutions')){
        let solutionsSwiper = new Swiper ('.js-solutions', {
            loop: true,
            spaceBetween: 20
        });
    }

    if ($('.js-experience').is('.js-experience')){
        let experienceSwiper = new Swiper ('.js-experience', {
            loop: true,
            spaceBetween: 20,
            navigation: {
                prevEl: '.js-experience-prev',
                nextEl: '.js-experience-next',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                1290: {
                    slidesPerView: 4,
                    spaceBetween: 30
                }
            }
        });
    }

    if ($('.js-converse').is('.js-converse')){
        let converseSwiper = new Swiper ('.js-converse', {
            loop: true,
            spaceBetween: 40,
            navigation: {
                prevEl: '.js-converse-prev',
                nextEl: '.js-converse-next',
            }
        });
    }

    if ($('.js-capitalization').is('.js-capitalization')){
        let capitalizationSwiper = new Swiper ('.js-capitalization', {
            loop: true,
            navigation: {
                prevEl: '.js-capitalization-prev',
                nextEl: '.js-capitalization-next',
            }
        });
    }

    if ($('.js-info').is('.js-info')){
        let infoSwiper = new Swiper ('.js-info', {
            loop: true,
            navigation: {
                prevEl: '.js-info-prev',
                nextEl: '.js-info-next',
            }
        });
    }

    if ($('.js-reviews').is('.js-reviews')){
        let reviewsSwiper = new Swiper ('.js-reviews', {
            loop: true,
            spaceBetween: 20,
            breakpoints: {
                992: {
                    slidesPerView: 2,
                    spaceBetween: 30
                }
            }
        });
    }


}); // DOMContentLoaded