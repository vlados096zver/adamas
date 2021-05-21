$(document).ready(function() {

  $('.mobile-wrap').on('click', function() {
    $('.line-burger').toggleClass('line-active');
    $('.main-header__list').slideToggle();
  });

  function showSubmenu(point) {
    $(point).on('click', function(e) {
      e.preventDefault();
      if ($(window).width() <= 960) {
        $(this).next().slideToggle();
      }
    });
  }

  showSubmenu('.main-header__link--add');
  showSubmenu('.main-footer__link--add');

  $(window).resize(function() {
    if ($(window).width() > 960) {
      $('.main-header__list').attr('style', '');
      $('.main-footer__list').attr('style', '');
      $('.submenu').attr('style', '');
      $('.line-burger').removeClass('line-active');
    }
  })

  let block = $('.block__item');
  let elems;
  block.on('click', function(e) {
    console.log(e.target);
    elems = $('.block__btn.active');
    elems.each(function(index, elem) {
      $(elem).removeClass('active');
      $(elem).parent().find('.block__submenu').hide();
    })
    $(this).find('.block__submenu').show();
    $(this).find('.block__btn').addClass('active');
  })


  let elem = $('.block__box--add');
  elem.on('click', function(e) {
    e.preventDefault();
    $(this).next().show();
    $(this).addClass('active');
  })

  $('.main-header__button button').on('click', function(e) {
    $('.main-header__input').trigger('focus');
    $('.main-header__search').addClass('main-header__search-active');
  });

  $('html').on('click', function(e) {
    if (!$(e.target).is('.block__item, .block__submenu, .block__submenu li, .block__submenu li a, .block__btn, .block__box, .block__box--add, .main-header__button button, .main-header__input, main-header__search-wrap, .main-header__search-btn')) {
      $('.main-header__search').removeClass('main-header__search-active');
      $('.block__submenu').each(function(index, elem) {
        $(elem).hide();
      })
    }
  });

  function CreateIframeVideo() {
    let elems = $('.video__item');
    elems.each(function(index, elem) {
      var video = $(elem).find('.video__block').attr('data-video');
      $(elem).find('.video__block').append($('<iframe>', {
        src: video,
        frameborder: 0,
      }))
    })

  }
  CreateIframeVideo();

  const equipmentText = $('.equipment__content');
  let arrowsBtns = $('.equipment__btns');
  equipmentText.slick({
    infinite: true,
    slidesToShow: 1,
    draggable: true,
    fade: false,
    arrows: false,
    dots: false,
    arrows: true,
    appendArrows: arrowsBtns,
    prevArrow: '<button class="equipment__btn equipment__btn--dir_left"></button>',
    nextArrow: '<button class="equipment__btn equipment__btn--dir_right"></button>',
    asNavFor: '.equipment__wrap',
  });

  const equipmentDesc = $('.equipment__wrap:not(.equipment__wrap--single');
  // console.log(equipmentDesc);
  let arrowsEquipment = $('.equipment__arrows');
  equipmentDesc.slick({
    infinite: true,
    slidesToShow: 1,
    draggable: true,
    fade: false,
    dots: false,
    arrows: true,
    appendArrows: arrowsEquipment,
    prevArrow: '<button class="equipment__arrow equipment__arrow--dir_left"></button>',
    nextArrow: '<button class="equipment__arrow equipment__arrow--dir_right"></button>',
    asNavFor: '.equipment__content',
  });

  const news = $('.news__wrap');
  let arrowsNews = $('.news').find('.news__arrows');
  news.slick({
    infinite: true,
    // speed: 600,
    slidesToShow: 3,
    // autoplay: true,
    //autoplaySpeed:5000,
    draggable: true,
    fade: false,
    arrows: true,
    appendArrows: arrowsNews,
    prevArrow: '<button class="news__arrow news__arrow--dir_left"></button>',
    nextArrow: '<button class="news__arrow news__arrow--dir_right"></button>',
    dots: false,
    responsive: [{
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          prevArrow: null,
        }
      },
      {
        breakpoint: 964,
        settings: {
          slidesToShow: 2,
          prevArrow: null,
        }
      },
      {
        breakpoint: 654,
        settings: {
          slidesToShow: 1,
          prevArrow: '<button class="news__arrow news__arrow--dir_left"></button>',
        }
      }
    ]
  });

  const gallery = $('.gallery__wrap');
  let arrowsGallery = $('.gallery').find('.gallery__arrows');
  gallery.slick({
    infinite: true,
    // speed: 600,
    slidesToShow: 4,
    // autoplay: true,
    //autoplaySpeed:5000,
    draggable: true,
    fade: false,
    arrows: true,
    appendArrows: arrowsGallery,
    prevArrow: '<button class="gallery__arrow gallery__arrow--dir_left"></button>',
    nextArrow: '<button class="gallery__arrow gallery__arrow--dir_right"></button>',
    dots: false,
    responsive: [{
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 964,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 654,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  const video = $('.video__wrap');
  video.on('beforeChange init reInit', function(event, slick, currentSlide, nextSlide) {

    if (!nextSlide) {
      nextSlide = 0
    }

    const heightElem = slick.$slides[nextSlide].querySelector('.video__subtitle').offsetHeight;

    $('.video__arrow').css("height", heightElem);

    function func() {
      $('.video__arrow').addClass('hide');
      $(".video__arrow").removeClass("hide", 300);
    }

    setTimeout(func, 1000);
  });

  let arrowsVideo = $('.video').find('.video__arrows');
  video.slick({
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    // autoplay: true,
    //autoplaySpeed:5000,
    draggable: true,
    fade: true,
    arrows: true,
    appendArrows: arrowsVideo,
    prevArrow: '<button class="video__arrow video__arrow--dir_left"></button>',
    nextArrow: '<button class="video__arrow video__arrow--dir_right"></button>',
    dots: false,
  });


  const clients = $('.clients__wrap');
  clients.slick({
    infinite: true,
    // speed: 600,
    slidesToShow: 4,
    // autoplay: true,
    //autoplaySpeed:5000,
    draggable: true,
    fade: false,
    arrows: false,
    dots: true,
    dotsClass: 'clients__dots-list',
    responsive: [{
        breakpoint: 1161,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 961,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 491,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  let widthScreen = $(window).width();

  function CorrectSlider() {
    let elems = $('.clients__item').length;
    let blockDots = $('.clients__dots-list');

    if (elems <= 4 && widthScreen > 1150 || elems <= 3 && widthScreen > 960 || elems <= 2 && widthScreen > 480 || elems <= 1 && widthScreen > 300) {
      blockDots.hide();
    }
  }


  CorrectSlider();

  $(window).resize(function() {
    CorrectSlider();
  });

  var select_obj = {};

  (function() {

    $('.select__wrap').each(function() {
      var id = $(this).attr('id');
      checkActive(this);
      var placeholder = $(this).find('.select__placeholder').html();
      select_obj[id] = placeholder;

    });

    $('.select__wrap').on('click', '.select__placeholder', function() {
      $('.select__list').removeClass('select__list--active');
      $('.select__placeholder').removeClass('changed');
      $(this).next().toggleClass('select__list--active');
      $(this).toggleClass('changed');

    });

    $('.select__wrap').on('click', '.select__item', function(e) {
      if ($(e.target).is('.select__item--disabled')) {

        return false;
      } else {

        if ($(e.target).is('.select__input')) return false;
        var container = $(this).parents('.select__wrap').attr('id');
        if ($('#' + container + ' .select__item--active').length == 1) {

          if (!$(this).hasClass('select__item--active')) {
            $('#' + container + ' .select__item').removeClass('select__item--active');
            $(this).addClass('select__item--active');
            setPlaceholder(this);
          }

        } else {
          setPlaceholder(this);
          $(this).toggleClass('select__item--active');
        }
        $(this).parent().removeClass('select__list--active');
        $(this).parents('.select__wrap').find('.select__placeholder').removeClass('changed');
      }
    });

    $('.select__input').on('input', function(e) {
      $(e.target).parent().siblings('li').each((i, el) => {
        $(el).css("display", $(el).data("value").toLowerCase().indexOf(e.target.value.toLowerCase()) != -1 ? "block" : "none");
      });
    })

    $('body').on('click', function(e) {
      if (!$(e.target).is('.changed, .select__list, .select__item')) {
        $('.select__list').removeClass('select__list--active');
      }
    });

    function setPlaceholder(self) {
      var value = $(self).data('value');
      var value_pl = $(self).html();
      $(self).parents('.select__wrap').find('.select__placeholder').html(value_pl);
    }

    function checkActive(self) {
      var text = $(self).find('.select__item--active').text();
      if (text === undefined || text === '') {
        text = $(self).find('.select__item:not(.select__item--disabled):eq(0)').addClass('select__item--active').text();
      }
      $(self).find('.select__placeholder').html(text);
    }

  })();

  function validate(input, length, regExp, error, phone) {

    $(input).on('blur keyup', function() {
      var value = $(this).val();
      var that = $(this);

      regExp = regExp == '' ? /./ : regExp;

      if (phone === true) {
        bool_reg = !regExp.test(value);
      } else {
        bool_reg = regExp.test(value);
      }

      if (value.length > length && value !== '' && bool_reg) {
        that.removeClass('form-fail').addClass('form-done');
        $(error).slideUp();
      } else {
        that.removeClass('form-done').addClass('form-fail');
        $(error).slideDown();
      }
    });

  }

  // деакцивация кнопки если есть поле с ошибкой

  function disBtn(input, btn, bool) {
    var input = $(input);
    input.on('blur keyup', function() {

      if (input.hasClass('form-fail') || bool == true) {
        $(btn).attr('disabled', 'disabled');
      } else {
        $(btn).removeAttr('disabled');
      }

    });

  }

  // для проверки при нажатии

  function valClick(input, length, regExp, error, btn, phone) {
    var value = $(input).val();

    regExp = regExp == '' ? /./ : regExp;

    if (phone === true) {
      bool_reg = regExp.test(value);
    } else {
      bool_reg = !regExp.test(value);
    }

    if (value.length < length && value === '' && bool_reg) {
      $(input).addClass('form-fail');
      $(error).slideDown();
    }
  }

  //  деакцивация кнопки при нажатии

  function disBtnClick(input, btn) {
    var input = $(input);

    if (input.hasClass('form-fail')) {
      $(btn).attr('disabled', 'disabled');
      return false;
    } else {
      return true;
    }

  }

  function validateCheck(input) {
    $(input).on('change', function() {
      var check = $(this).prop('checked');
      var that = $(this);

      if (check) {
        that.removeClass('input-fail').addClass('input-done');
      } else {
        that.removeClass('input-done').addClass('input-fail');
      }
    });
  }

  $('input[type="tel"]').mask("+38 (999) 999-99-99");

  var regName = /^[a-zA-Zа-яА-ЯёЁ]+/;
  var regPhone = /[_]/i;
  var regEmail = /.+@.+\..+/i;
  var regNumber = /^\d{1,}$/;

  validate('#o_name', 1, regName, '.order__fail--name');

  validate('#o_phone', 1, regPhone, '.order__fail--phone', true);

  validate('#o_email', 1, regEmail, '.order__fail--email');

  disBtn('#o_name, #o_phone, #o_email', '#o_btn');

  validate('#w_name', 1, regName, '.write__fail--name');

  validate('#w_phone', 1, regPhone, '.write__fail--phone', true);

  validate('#w_email', 1, regEmail, '.write__fail--email');

  disBtn('#w_name, #w_phone, #w_email', '#w_btn');

});
