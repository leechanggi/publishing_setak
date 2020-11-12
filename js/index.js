//GNB 메뉴//
$(function () {
    var $firstMenu = $('.gnb > ul > li'),
        $header = $('header'),
        $headerHeight = $header.outerHeight();
    $firstMenu.mouseenter(function () {
            var currentMenu = $(this);
            var subHeight = currentMenu.find('ul').outerHeight();
            $header.stop().animate({
                height: $headerHeight + subHeight + 'px'
            }, 400);
            setTimeout(function () {
                currentMenu.find('ul').show();
            }, 0);
        })
        .mouseleave(function () {
            $header.stop().animate({
                height: $headerHeight + 'px'
            }, 400);
            $(this).find('ul').hide();
        })
});
// 전체 메뉴 //
windeowResizeHandler()
$(window).on('resize', windeowResizeHandler);
function windeowResizeHandler(){
    var winWidth = $(this).innerWidth();
    if (winWidth >= 1200) {
        $('html').removeClass('tab_mob')
        $('html').addClass('pc')
    } else {
        $('html').removeClass('pc')
        $('html').addClass('tab_mob')
    }
}

function openmenu() {
    const menu = document.getElementById("all_menu");
    menu.style.top = "0";
    menu.style.left = "0";
}

function closemenu() {
    const menu = document.getElementById("all_menu");
    if ($('html').hasClass('pc') == true) {
        menu.style.top = "-300vh";
        menu.style.left = "0";
    } else {
        menu.style.left = "-300vw";
        menu.style.top = "0";
    }
}
if ($('html').hasClass('tab_mob') == true){
    $('.all-menu-active').click(function () {
        $(this).children('.all-menu-respon').slideToggle()
        $(this).siblings().children('.all-menu-respon').slideUp();
        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            $(this).siblings().removeClass('on');
        } else {
            $(this).addClass('on').siblings().removeClass('on');
        }
    });
}else{}

// 서브 슬라이드 //
$(function () {
    $('.row2_slide_wrap').bxSlider({
        moveSlides: 1,
        maxSlides : 2,
        auto: true,
        pager: true,
        useCSS: true,
        slideWidth: 600,
        shrinkItems: true
    });
});
// 숫자증가 - row3 //
$(function () {
    var executed = false;
    $('.row3-threshold').waypoint(function () {
        var targetNumber = $('.animate1').attr('data-rate')
        if (!executed) {
            $('.animate1').animateNumber({
                number: targetNumber
            }, {
                duration: 2000
            });
            executed = true;
        }
    }, {
        offset: '80%'
    });
})
$(function () {
    var executed = false;
    $('.row3-threshold').waypoint(function () {
        var targetNumber = $('.animate2').attr('data-rate')
        if (!executed) {
            $('.animate2').animateNumber({
                number: targetNumber
            }, {
                duration: 2000
            });
            executed = true;
        }
    }, {
        offset: '80%'
    });
})
$(function () {
    var executed = false;
    $('.row3-threshold').waypoint(function () {
        var targetNumber = $('.animate3').attr('data-rate')
        if (!executed) {
            $('.animate3').animateNumber({
                number: targetNumber
            }, {
                duration: 2000
            });
            executed = true;
        }
    }, {
        offset: '80%'
    });
})
$(function () {
    var executed = false;
    $('.row3-threshold').waypoint(function () {
        var targetNumber = $('.animate4').attr('data-rate')
        if (!executed) {
            $('.animate4').animateNumber({
                number: targetNumber
            }, {
                duration: 2000
            });
            executed = true;
        }
    }, {
        offset: '80%'
    });
})
// 숫자증가 - footer //
$(function () {
    var executed = false;
    $('.sec-2-visit-num').waypoint(function () {
        var targetNumber = $('.animate5').attr('data-rate')
        if (!executed) {
            $('.animate5').animateNumber({
                number: targetNumber
            }, {
                duration: 2000
            });
            executed = true;
        }
    }, {
        offset: '100%'
    });
})
$(function () {
    var executed = false;
    $('.sec-2-visit-num').waypoint(function () {
        var targetNumber = $('.animate6').attr('data-rate')
        if (!executed) {
            $('.animate6').animateNumber({
                number: targetNumber
            }, {
                duration: 2000
            });
            executed = true;
        }
    }, {
        offset: '100%'
    });
})
//로그인 경고창//
var id = $('#id');
var pw = $('#pw');
var btn = $('#btn');
$(btn).on('click', function () {
    if ($(id).val() == "") {
        $(id).next('label').addClass('warning');
        setTimeout(function () {
            $('label').removeClass('warning');
        }, 1500);
    } else if ($(pw).val() == "") {
        $(pw).next('label').addClass('warning');
        setTimeout(function () {
            $('label').removeClass('warning');
        }, 1500);
    }
});
//로그인 버튼 //
var menu_login = document.getElementById("login-form");

function closemenu_login() {
    menu_login.style.right = "-100vw";
}

function openmenu_login() {
    menu_login.style.right = "0";
}
// 질문과 답변 아코디언 //
$('.question').click(function () {
    $(this).next().slideToggle().siblings('.answer').slideUp();
    if ($(this).hasClass('on')) {
        $('.question.on').removeClass('on');
    } else {
        $(this).addClass('on').siblings('.question.on').removeClass('on');
    }
});
// Page-numbering //
$(document).ready(function () {
    $('.next').click(function () {
        $('.pagerList').find('.pageNumber.active').next().addClass('active');
        $('.pagerList').find('.pageNumber.active').prev().removeClass('active');
    })
})
$(document).ready(function () {
    $('.last').click(function () {
        $('.pagerList').find('.pageNumber.active').removeClass('active');
        $('.pagerList').find('.pageNumber').last().addClass('active');
    })
})
$(document).ready(function () {
    $('.prev').click(function () {
        $('.pagerList').find('.pageNumber.active').prev().addClass('active');
        $('.pagerList').find('.pageNumber.active').next().removeClass('active');
    })
})
$(document).ready(function () {
    $('.first').click(function () {
        $('.pagerList').find('.pageNumber.active').removeClass('active');
        $('.pagerList').find('.pageNumber').first().addClass('active');
    })
})
$(document).ready(function () {
    $('.pageNumber').click(function () {
        $('.pagerList').find('.pageNumber.active').removeClass('active');
        $(this).addClass('active');
    })
})
// containerMenu //
$(document).ready(function () {
    $('.list').click(function () {
        $('.containerMenu__ul').find('.list.on').removeClass('on');
        $(this).addClass('on');
    })
})