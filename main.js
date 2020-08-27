jQuery(function(){
    jQuery(window).scroll(function (){
        jQuery('.fadein').each(function(){
            var elemPos = jQuery(this).offset().top;
            var scroll = jQuery(window).scrollTop();
            var windowHeight = jQuery(window).height();
            if (scroll > elemPos - windowHeight + 150){
                jQuery(this).addClass('scrollin');
            }
        });
    });
  });
  jQuery(function(){
      jQuery(window).scroll(function (){
          jQuery('.fadein_2').each(function(){
              var elemPos = jQuery(this).offset().top;
              var scroll = jQuery(window).scrollTop();
              var windowHeight = jQuery(window).height();
              if (scroll > elemPos - windowHeight + 280){
                  jQuery(this).addClass('scrollin');
              }
          });
      });
    });