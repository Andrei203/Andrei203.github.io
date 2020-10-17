$(document).ready(function()
{
    $(window).scroll(function()
    {
        if(this.scrollY > 20)
        {
            $('.navbar').addClass("sticky");
        } 
        else
        {
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 150)
        {
            $('.scroll-up-btn').addClass("show");
        } 
        else
        {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    //slide up scrip
    $('.scroll-up-btn').click(function()
    {
        $('html').animate({scrollTop: 0});
    });
    //menu toggle / navbar
    $('.menu-btn').click(function()
    {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
});