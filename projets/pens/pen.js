(function(){
    
    "use strict"  
   
    inSitu();
    
    function inSitu()
    {
        
        var pens = [
       
           { data:"jqajvX",           
             titre:"JS stylage direct (exercice)"
           },                 
           { data:"LNeRKr",             
             titre:"JS DOM innerHTML (exercice)"
           },
           { data:"pydXKG",      
             titre:"JS stylage direct"
           },
           { data:"groLNM",
             titre:"JS Objets Passifs (Exercice)"
           },
           { data:"XdRzLq",
             titre:"Flexbox Exercice"
           },
           { data:"aNWLeW",            
             titre:"Texte CSS Exercice"
           }
              
        ]
        
        
        var template = flex.firstElementChild;
        flex.innerHTML ="";
        
       
        for (let i = 0; i < pens.length; i++)
            {
                var clone = template.cloneNode(true);
                clone.setAttribute("data-slug-hash", pens[i].data);         
                var lien=clone.querySelector("a:first-child");
                var source="http://codepen.io/nufi/pen/"+pens[i].data+"/"; 
                lien.setAttribute("href", source);
                lien.textContent = pens[i].titre;                flex.appendChild(clone);
            }
        
    }
    
    /*var Template = new Array();
 var p = 0;
 for (var i = flex.childNodes.length - 1; i >= 0; i--)
    {
        if(flex.childNodes[i].tagName)
            {
                Template[p] = flex.childNodes[i];
                p++;
            }
        flex.removeChild(flex.childNodes[i]);
    }
    
Template.forEach( function (objPens)
    {
        flex.appendChild(objPens);
    }
    );   */
   

  //initialiserTemplate();
    
   /* function initialiserTemplate()
    {
         var TemplateScript = document.querySelector("#template").innerHTML;
         var gabarit = Handlebars.compile(TemplateScript);
        
    var context = 
    {
    
        Pens: [
            { data:"jqajvX", version:"2", href:"http://codepen.io/nufi/pen/", titre:"JS stylage direct (exercice)"},
            { data:"LNeRKr", href:"http://codepen.io/nufi/pen/", titre:"JS DOM innerHTML (exercice)"},
            { data:"pydXKG", version:"2", href:"http://codepen.io/nufi/pen/", titre:"JS stylage direct"},
            { data:"groLNM", href:"http://codepen.io/nufi/pen/", titre:"JS Objets Passifs (Exercice)"},
            { data:"XdRzLq", href:"http://codepen.io/nufi/pen/", titre:"Flexbox Exercice"},
            { data:"aNWLeW", version:"2", href:"http://codepen.io/nufi/pen/", titre:"Texte CSS Exercice"},
              
            ]
         };
       var compileHtml = gabarit(context);
    document.querySelector("#flex").innerHTML = compileHtml;
    };*/
    
    
})();