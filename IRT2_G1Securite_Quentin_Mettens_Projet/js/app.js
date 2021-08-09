/*Smooth-Scroll*/

$(document).ready(function() {
    $('.nav-bar-lien, #footer-return').click(function(){
        let lien = $(this).attr('href');
        $('html, body').animate({
            scrollTop : $(lien).offset().top 
        }, 'slow');
    });
});

/* Jour/Nuit */

$(document).ready(function() {
    let count = 0;
    $('.header-image-lune').click(function(){
        if(count == 0){
            $('body').css('background-color', '#191919');
            $('body, #main-h2, .main-profil-droite-h3, #section-formation-h2, #section-competence-h2,  .main-profil-droite-a ').css('color', 'white');
            count+=1;
        }
        else {
            $('body').css('background-color', 'white');
            $('body, #main-h2, .main-profil-droite-h3, #section-formation-h2, #section-competence-h2, .main-profil-droite-a').css('color', 'black');
            count=0;
        }
    });
});

/* Menu Burger */

$(document).ready(function(){
    $('.header-burger').click(function(){
        $('.header-volet').toggleClass('active');
        if($('.header-volet').hasClass('active')){
            $('.header-burger').css('background-image', 'url(svg/cross.svg)');
            if($('.nav-bar-lien').click(function(){
                $('.header-volet').removeClass('active');
                $('.header-burger').css('background-image', 'url(svg/menu.svg)');
            }));
        }
        else {
            $('.header-burger').css('background-image', 'url(svg/menu.svg)');
        }
    });
    
});

/* Calcul Age */

$(document).ready(function(){
    let birthday = new Date(2001,08,21);
    let difference = Math.floor((new Date().getTime() - birthday.getTime()) / 31536000000);
    document.getElementById("main-profil-droite-age").innerHTML = difference;
});

/* Apparition */

$(document).ready( function () {
    $('.apparition').addClass('invisible');
      $(window).scroll(function (){
          $('.apparition').each(function () {
              if ($(window).scrollTop() + $(window).height()*0.70 > $(this).offset().top){
                  $(this).removeClass('invisible');
              }
          });
          $('.section-circle-animation').each(function(){
            if ($(window).scrollTop() + $(window).height()*0.80 > $(this).offset().top){
            let numberRecup = parseInt($(this).attr("data-value"));
            $(this).css('stroke-dashoffset', 380 - (380 * numberRecup) / 100);
            $(this).addClass('transition-circle');
            }
          });
      });
  });

