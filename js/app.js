$('document').ready(function(){
    $('.mobileBtn').click(function(){
        $(".zigzag-area").css("z-index", -1);
        $('.smartphone img').css("paddingBottom", "50"+"px")
        $('#mobileMenu').slideToggle();
    })
})