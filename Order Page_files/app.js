/**
 * Author: Nikolay Kovalenko
 * Date: 25.12.2017
 * Email: nikolay.arkadjevi4@gmail.com
 * */

var CarLined = {

    init: function () {

        try {
            this.togglePanelClass();
        } catch (err) {
            console.log(err);
        }

    },

    togglePanelClass: function () {
        $('.panel-heading').click(function (e) {
            $(this).toggleClass('active');
        });
    }

};


/* Document Ready */
$(document).ready(
    function () {
        CarLined.init();

        $('.input-rule input[type=checkbox]').on('change', function () {
            if ($(this).is(':checked')) {
                $(this).parent().addClass('selected');
            } else {
                $(this).parent().removeClass('selected');
            }
        });
    }
);

/* Window on Scroll */
$(window).scroll(
    function () {

    }
);

/* Window Resize */
$(window).resize(function () {

});

