(function(){

"use strict";    
 
//onload = "this.style.height=this.contentDocument.body.scrollHeight + 200 +'px';
//    
iframe.onload = function()
{   
      iframe.style.height = "initial";
      iframe.style.height = iframe.contentDocument.body.scrollHeight + 200 +"px";
    var $article = $(iframe.contentDocument.querySelectorAll('article'));
    $article.prepend('<button>Basculer affichage</button>');
    $('article', iframe.contentDocument).find('button').toggle();
//      $('article', iframe.contentDocument).find('button').hide();
    var $btnAffichage = $('article', iframe.contentDocument).find('button');
    $btnAffichage.css({ position: "relative", float: "right", width: "70px", fontWeight: "bold", marginRight: "5px", borderRadius: "5px"});
           
$btnAffichage.hover
           (
            function(){ $(this).animate({opacity:1},1000); $(this).css("color", "red");},
            function() { $(this).animate({opacity:0.5},1000); $(this).css("color", "black");}
           );
    
$btnAffichage.click
           (
            function()
                    {
                        /*$(this).parent().children('p').fadeToggle(2000);
                        $(this).parent().children('ol').fadeToggle(2000);*/
                        $(this).parent().find('p, ol').fadeToggle(2000);
                    }
            
           );
}

window.onresize = function() 
    {   
      iframe.style.height = "initial";
      iframe.style.height = iframe.contentDocument.body.scrollHeight+ 200 +"px";   
    }

$('#btn').click(function()
        {    
            $('#iframe').fadeToggle('slow');
        });
    
$('#btn2').click(function()
                {     
                    var iframeRoot =  iframe.contentDocument;

                    //var $p = $('p', iframeRoot);
                    //var $p = $(iframeRoot).find('p');
                    var $p = $(iframeRoot.querySelectorAll('p')); 
    
                    $p.slideToggle(2000);
                    //$p.slideUp(2000, () => $p.slideDown(2000));
                    
                });
    
$('#btn3').click(function()
{                
    $('article', iframe.contentDocument).find('button').fadeToggle();

});
  
        
})();