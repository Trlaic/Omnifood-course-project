$(document).ready(function(){
    /* For the sticky navigation*/
    $('.js--section-features').waypoint(function(direction){/*selektujem klasu js-s-f primenim waypoint metod u okviru kog je funkcija
                                                                sa argumentom direction koji prepoznaje da li skrolujem gore ili dole*/ 
        if(direction=="down"){
            $('nav').addClass('sticky');/*addClass je jquery metod, nema veze sa waypoints pluginom  */
        }else{
            $('nav').removeClass('sticky');
       }
    }, { 
        offset: '60px'/*mogu i negativne vrednosti ako hocu da pomerim nav nadole od granice sekcije */ 
      });

    /*Scroll on buttons */
    /*ovo ne moram sve da razumem kako se radi, osnovna poenta je da klikom na dugme pomocu ovih jquery funkcija, idem do odredjenog
    dela stranice */
    $('.js--scroll-to-plans').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000);/*vremenski za 1000 ms */
    });
    $('.js--scroll-to-start').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);/*vremenski za 1000 ms */
    });
    
    /*Animations on scroll*/ 
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');/* dodajem klasu animate__animated i efekat animate__fadeIn */
    }, {
        offset:"50%"
    });
    
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    }, {
        offset:"50%"
    });

    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    }, {
        offset:"50%"
    });

    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    }, {
        offset:"50%"
    });


    /*Mobile navigation*/
    $('.js--nav-icon').click(function(){
        var nav=$('.js--main-nav');
        var icon=$('.js--nav-icon i');
        nav.slideToggle(200);/*slideToggle jquery metod koji otvara i zatvara prozor(box tacnije, u konkretnom primeru u kom su navedene stavke liste)
                              200 milisekundi navedeno kao vreme trajanja animacije otvaranja/zatvaranja */
        if(icon.hasClass('ion-navicon-round')){/*ako je klasa datog elementa (klasa predstavlja ikonicu) ta i ta, zameni je drugom klasom*/ 
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });


});