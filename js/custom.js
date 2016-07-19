$(document).ready(function(){

    // Toggle Navigation (Off-Canvas)
    $('.toggle-nav').on('click',function(e){

        e.preventDefault();
        $('.content-wrapper').toggleClass('show-nav');
    
    });

});
