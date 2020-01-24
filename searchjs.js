$(document).ready(function () {
    $(function () {
        $('.volunteer').dropkick({
        });



    });
  
    $(document).ready(function () {
        if ($(window).width() >= 768 && $(window).width() <= 1023) {
            $("#filter").html("...");

        }

        $(document).ready(function () {
            $('.owl-lorem').owlCarousel({
                dots: false,
                margin: 10,
                nav: true,
                navText: ['<img class="arrow-left" src="images/angle-left-arrow.svg" >', '<img class="arrow-right" src="images/angle-right-arrow.svg" />'],
                responsiveClass: false,
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 1,
                    },
                    1000: {
                        items: 1,
                    }
                }
            });
            $('.abc').pagination({
                items: 3,
                itemOnPage: 2,
                currentPage: 1,
                cssStyle: '',
                onInit: function () {
                    // fire first page loading
                },
                onPageClick: function (page, evt) {
                    // some code
                }
            });
        });

    });

});