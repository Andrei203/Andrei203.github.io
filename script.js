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
            $('.scroll-up-btn').addClass("scroll-up-btn.show");
        } 
        else
        {
            $('.scroll-up-btn').removeClass("scroll-up-btn.show");
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
    $(function(){
        $('form').submit(function(e){
            e.preventDefault();
            fetch('https://immense-thicket-97671.herokuapp.com?' + $('form').serialize(), {mode: 'no-cors'});
        });
    });
});