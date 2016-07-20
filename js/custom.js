$(document).ready(function(){

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

});
