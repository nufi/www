(function(){
    "use strict";
    
    initSourdine();
    initialiserMenu();
    
    
    function initSourdine()
    {
        var sourdine = document.querySelector("#audio");
        var checkbox = document.querySelector("#checkbox");
        var lbl = document.querySelector("#lblcheckbox");
        
        if (localStorage.getItem('statut') === "true")
        {
            sourdine.pause(); 
            checkbox.checked = true;
        }
        else
        {
            sourdine.play();
        }
        
        checkbox.onchange = () =>
        {
            localStorage.setItem('statut', checkbox.checked);
             //localStorage.statut = checkbox.checked);
            if(checkbox.checked)
            {
                sourdine.pause();
                lbl.setAttribute("title", "désactiver la sourdine");
            }
            else
            {                
               sourdine.play();
               lbl.setAttribute("title","activer la sourdine");
            }
        }
    }

    
    function initialiserMenu ()
    {
        var projets = [
            {
                nom: "Langues",
                dir: "../langues/index.html"
            },    
            {
                nom: "Pens",
                dir: "../pens/index.html"
            },
            {
                nom: "Youtube",
                dir: "../youtube/index.html"
            },
            {
                nom: "TutorielJS",
                dir: "../tutorielJS/index.html"
            },

        ];
        
        var ul = document.querySelector("#ulMenu");
        
        for (let i = 0; i < projets.length; i++)
            {
                ul.innerHTML += creerMenu(projets[i]);
            }
        
        function creerMenu(liste)
        {
          var menu =
              "<li><a href="+liste.dir+">"+liste.nom+"</a></li>";
            return menu;
        }
   
    }
 
    
})();


    
