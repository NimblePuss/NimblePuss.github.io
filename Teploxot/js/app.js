$(document).ready(function() {
    $(".u_choice_discount").hide();

    $(".drop").hover(function(e) {
        e.preventDefault();
        $(this).find('.menu_orange').show(400);
    }, function() {
        $(this).find('.menu_orange').hide(400);
    });
    $(".menu_orange_li").hover(function(e) {
        e.preventDefault();
        $(this).find('.menu_orange_accordion').show(400);
    }, function() {
        $(this).find('.menu_orange_accordion').hide(400);
    });


    $('.slider_novelty').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    unslick: true,

                    slidesToShow: 4,
                    slidesToScroll: 1

                }

            },
            {
                breakpoint: 992,
                settings: {
                    unslick: true,
                    slidesToShow: 3,
                    slidesToScroll: 1

                }

            },
            {
                breakpoint: 767,
                settings: {
                    unslick: true,
                    slidesToShow: 1,
                    slidesToScroll: 1

                }

            }
        ]
    });

    $(function() {
        $(window).scroll(function() {
            if($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
            if($(this).scrollTop() > 150) {
                $('#menu_fixed').fadeIn();
            } else {
                $('#menu_fixed').fadeOut();
            }
        });
        $('#toTop').click(function() {
            $('body,html').animate({scrollTop:0},800);
        });
    });

    $('.sl_1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.sl_2'
    });
    $('.sl_2').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.sl_1',
        focusOnSelect: true,
        infinite: true,
        variableWidth: true
    });
// $(document).ready(function() {
    // ---------------------------------- Range slider jq ui
    $('.filter__slider-element').each(function() {
        var $this = $(this),
            container = $this.closest('.filter__slider'),
            min = parseInt($this.data('min')),
            max = parseInt($this.data('max')),
            from = container.find('.filter__slider-input-from'),
            to = container.find('.filter__slider-input-to');

        from.change(function() {
            $this.slider('values', 0, from.val());
        });

        to.change(function() {
            $this.slider('values', 1, to.val());
        });

        $this.slider({
            range: true,
            min: min,
            max: max,
            values: [min, max],
            slide: function(event, ui) { // При каждом перемещении
                var values = $(this).slider('option', 'values');
                from.val(ui.values[0]);
                to.val(ui.values[1]);
                getValues(ui.values);
            },
            change: function(event, ui) { // В конце перетаскивания
                console.log('change');
                getValues(ui.values);
            },
            create: function() { // При создании виджета
                var values = $(this).slider('option', 'values');
                from.val(values[0]);
                to.val(values[1]);

                //getValues();
            },
            stop: function(event, ui) { // При завершении перетаскивания
                getValues(ui.values);
            }
        });
    });

    function getValues(values) {
        var total = 0;
        $('.filter__slider-element').each(function() {
            var values = $(this).slider("option", "values");
            var dif = values[1] - values[0];
            total += dif;
        });

        $("#totals").text(total);
    }

//user page block
    $(".u_name").hover(function(e) {
        e.preventDefault();
        $(this).find(".u_edit_a").css('display','block');
    }, function() {
        $(this).find(".u_edit_a").css('display','none');
    });
    $(".u_phone").hover(function(e) {
        e.preventDefault();
        $(this).find(".u_edit_a").css('display','block');
    }, function() {
        $(this).find(".u_edit_a").css('display','none');
    });
    $(".u_email").hover(function(e) {
        e.preventDefault();
        $(this).find(".u_edit_a").css('display','block');
    }, function() {
        $(this).find(".u_edit_a").css('display','none');
    });
    $(".u_adress").hover(function(e) {
        e.preventDefault();
        $(this).find(".u_edit_a").css('display','block');
    }, function() {
        $(this).find(".u_edit_a").css('display','none');
    });

    $(".u_discount").hover(function(e) {
        e.preventDefault();
        $(this).find(".u_edit_a").css('display','block');
        $(".u_choice_discount").show("slow");

    }, function() {
        $(this).find(".u_edit_a").css('display','none');
    });
    $(function(){
        $(document).click(function(event) {
            if ($(event.target).closest(".u_discount").length) return;
            $(".u_choice_discount").hide("slow");
            event.stopPropagation();
        });
    });

    $(".u_p_summ").hover(function(e) {
        e.preventDefault();
        $(".u_recomend").slideDown().css('display','block');
    }, function() {
        $(".u_recomend").css('display','none');

    });

});









