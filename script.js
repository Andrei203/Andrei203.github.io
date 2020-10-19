$(document).ready(function()
{
    $('.scroll-up-btn').hide();
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
        if(this.scrollY > 150)
        {
            $('.scroll-up-btn').fadeIn(200);
        } 
        else
        {
            $('.scroll-up-btn').fadeOut(500);
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

  });

  $('.menu li a').click(function(){
      $('.navbar .menu').removeClass('active');
      $('.menu-btn i').toggleClass("active");
  });
    

    $(function(){
        $('form').submit(function(e){
            e.preventDefault();
            fetch('https://pacific-mesa-79068.herokuapp.com/?' + $('form').serialize(), {mode: 'no-cors'});
            $('#submit').prop('disabled', true);
            setTimeout(function(){
                $('#submit').prop('disabled', false);
            }, 10000);
            
        });
    });
});