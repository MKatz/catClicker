(function($, window, document) {
    

    $('#targetFreak').click(function() {
        $('#outputFreak').html(function(i, val) {
            return val * 1 + 1
        });
    });
    $('#targetChill').click(function() {
        $('#outputChill').html(function(i, val) {
            return val * 1 + 1
        });
    });
    $('#targetHappy').click(function() {
        $('#outputHappy').html(function(i, val) {
            return val * 1 + 1
        });
    });
    $('#targetGrumpy').click(function() {
        $('#outputGrumpy').html(function(i, val) {
            return val * 1 + 1
        });
    });
    $('#targetFlying').click(function() {
        $('#outputFlying').html(function(i, val) {
            return val * 1 + 1
        });
    });

    var catId = null;

    $('.buttons .btn').on('click', function(){
        catId = $(this).attr('name');
        $('.cats > div').not('#' + catId).hide('slow');
        $('#' + catId).show('slow');
    });

    // $('#btnFreak').click(function() {
    //     $('#divFreak').show("slow");
    //     $('#divChill').hide('slow');
    //     $('#divHappy').hide('slow');
    //     $('#divGrumpy').hide('slow');
    //     $('#divFlying').hide('slow');
    // });
    // $('#btnChill').click(function() {
    //     $('#divChill').show("slow");
    //     $('#divFreak').hide('slow');
    //     $('#divHappy').hide('slow');
    //     $('#divGrumpy').hide('slow');
    //     $('#divFlying').hide('slow');
    // });
    // $('#btnHappy').click(function() {
    //     $('#divHappy').show("slow");
    //     $('#divChill').hide('slow');
    //     $('#divFreak').hide('slow');
    //     $('#divGrumpy').hide('slow');
    //     $('#divFlying').hide('slow');
    // });
    // $('#btnGrumpy').click(function() {
    //     $('#divGrumpy').show("slow");
    //     $('#divChill').hide('slow');
    //     $('#divHappy').hide('slow');
    //     $('#divFreak').hide('slow');
    //     $('#divFlying').hide('slow');
    // });
    // $('#btnFlying').click(function() {
    //     $('#divFlying').show("slow");
    //     $('#divChill').hide('slow');
    //     $('#divHappy').hide('slow');
    //     $('#divGrumpy').hide('slow');
    //     $('#divFreak').hide('slow');
    // });


})(jQuery, window, document);