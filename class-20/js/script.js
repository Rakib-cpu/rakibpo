let faness = document.getElementById('fname');
let fnamess_err = document.getElementById('faname_err');

let lnamess = document.getElementById('lname');
let lnamess_err = document.getElementById('lname_err');

let emails = document.getElementById('email');
let emails_err = document.getElementById('email_err');
let email_rgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


function validation() {

    if (faness.value == '') {
        fnamess_err.innerHTML = 'please enter your name';
        fnamess_err.style = 'color: red;';
        faness.style = 'border: 1px solid red;';
        faness.focus();

        return false;
    } 
    else if (lnamess.value == '') {
        lnamess_err.innerHTML = 'please enter your last name';
        lnamess_err.style = 'color: red;';
        lnamess.style = 'border: 1px solid red;';
        lnamess.focus();


        return false;
    } 
    else if (emails.value == '') {
        emails_err.innerHTML = 'please enter your E-mail adress';
        emails_err.style = 'color: red;';
        emails.style = 'border: 1px solid red;';
        emails.focus();


        return false;
    }
    
    else if(!email_rgx.test(emails.value)){
            emails_err.innerHTML = 'E-mail format did not match ';
            emails_err.focus(); 
           
        return  false;
     }
}


function remove() {
    if (faness.value != '') {
        fnamess_err.innerHTML = '';
        fnamess_err.style = 'color: inherit;';
        faness.style = 'border: 1px solid inherit;';
        
        return  false;
    }
}



faness.addEventListener('blur', remove);






































$(function(){
   
    
    
$('.banner_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: '<i class="fas fa-chevron-right nxt_arw"></i>',
    prevArrow: '<i class="fas fa-chevron-left prv_arw"></i>',
    dots: true,
});
    
    
  $('.banner_text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
    prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
    dots: true,
});
    
    
    $('.venobox').venobox({
        spinner: 'three-bounce',
        spinColor: 'rgb(90, 109, 8)',
         framewidth: '700px',
    });
    
    
    
     $('#getting-started').countdown('2020/05/20', function (event) {
        $(this).html(event.strftime('%Y Month'));
    });
    $('#getting-started2').countdown('2020/05/20', function (event) {
        $(this).html(event.strftime('%D Days'));
    });
    $('#getting-started3').countdown('2020/05/20', function (event) {
        $(this).html(event.strftime('%M Min'));
    });
    $('#getting-started4').countdown('2020/05/20', function (event) {
        $(this).html(event.strftime('%S Sec'));
    });
      
    
    
});









var navoff = $('.main_menu').offset().top;

$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    
    if(scrolling > navoff){
       $('.main_menu').addClass('menu_fix');
    }
    
    else{
        $('.main_menu').removeClass('menu_fix');
    }
    
});
































