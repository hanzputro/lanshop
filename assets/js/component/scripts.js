
$(document).ready(function(){

	//bxslder
	var sliderproduk = $('.bxslider--popup').bxSlider();
    $('.btn-beli').click(function(){
        sliderproduk.reloadSlider();
    });

    //sidebar    
    $('.listmenu--logo').addClass('inactive');
    $('.maininfo-wrap').hide();
    $('.infomargin').show();

    $('.listmenu--logo').click(function(){
        tinfo = $(this).attr('id');
        if($(this).hasClass('inactive')){ //this is the start of our condition //                    
            $('.listmenu--logo').removeClass('inactive');
            $('.listmenu--logo').addClass('active-info');    
            $('.sidebarmenu').animate({'marginRight' : "+=30%"});
            //$('.sidebarmenu').toggle('slide', {direction: 'right'}, 500);
        }
        else{
            $('.listmenu--logo').addClass('inactive');
            $('.listmenu--logo').removeClass('active-info'); 
            //$('.sidebarmenu').toggle('slide', {direction: 'right'}, 500);
            $('.sidebarmenu').animate({'marginRight' : "-=30%"});     
        }
    });

	//tabs 1
	$('#tabs1 li a:not(:first)').addClass('inactive');
    $('.container-tabs1').hide();
    $('.container-tabs1:first').show();
        
    $('#tabs1 li a').click(function(){
        var t1 = $(this).attr('id');
          if($(this).hasClass('inactive')){ //this is the start of our condition 
            $('#tabs1 li a').addClass('inactive');           
            $(this).removeClass('inactive');
            
            $('.container-tabs1').hide();
            $('#'+ t1 + '-tabs1').fadeIn('slow');
        }
    });

    //tabs 2
    $('#tabs2 li a:not(:first)').addClass('inactive');
    $('.container-tabs2').hide();
    $('.container-tabs2:first').show();
        
    $('#tabs2 li a').click(function(){
        var t2 = $(this).attr('id');
          if($(this).hasClass('inactive')){ //this is the start of our condition 
            $('#tabs2 li a').addClass('inactive');           
            $(this).removeClass('inactive');
            
            $('.container-tabs2').hide();
            $('#'+ t2 + '-tabs2').fadeIn('slow');
         }
    });

});


