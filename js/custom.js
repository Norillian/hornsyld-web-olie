$(document).ready(function(){

    //Change default value
    if($('.product-info-container > div.product-info .etBasket select').length > 0) {
        //$('.product-info-container > div.product-info .etBasket select').val('1000').change();
    }

    //Change pointer position in the yellow bar
    if($('#ddMenu').length > 0) {
        var pathname = window.location.pathname;
        pathname = pathname.replace('%C3%A5', 'å').replace('%C3%B8', 'ø').replace('%C3%A6', 'æ');
        faIcon = $('<i class="fa fa-caret-up menu-pointer"></i>');

        $( "#ddMenu a" ).each(function( index ) {
            if($(this).attr('href') === pathname && $(this).attr('href')) {
                var iconPos = $(this).width() / 2;
                iconPos = iconPos - 5;
                $(this).append(faIcon);
                $('.menu-pointer').css('left', iconPos + 'px');
            }
        });
    }

    // Toggle Navigation (Off-Canvas)
    $('.toggle-nav').on('click',function(e){

        e.preventDefault();
        $('.content-wrapper').toggleClass('show-nav');

    });

    //Change item amount in basket detailed
    if($('#BasketdetailedBoxbdy .c1').length > 0) {
        currentTxt = $('#BasketdetailedBoxbdy .c1').text();
        currentTxt = currentTxt.replace('Antal varer:', '').replace(/\s/g, '');
        $('#BasketdetailedBoxbdy').prepend('<span class="item-amount">'+currentTxt+'</span>');
    }

    //Create the menus in Off-Canvas
    if($('#ddMenu').length > 0) {

        offcanvasMenu = $('<ul></ul>');
        offcanvasMenu.addClass('info-menu-left');

        $( "#ddMenu span" ).each(function( index ) {
            offcanvasMenuList = $('<li></li>');
            offcanvasMenuList.append($(this).html());
            offcanvasMenu.append(offcanvasMenuList);
        });

        $('.off-canvas-menu').append(offcanvasMenu);

    }

    //Move frontpage-content to #precontentContainer
    if($('.frontpage-content').length > 0) {
        newPlace = $('.frontpage-content').remove().clone();
        $('#precontentContainer').prepend(newPlace);
    }

});
