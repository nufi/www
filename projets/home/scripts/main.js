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

    /*
    function initialiserMenu ()
    {
        var projets = [
            {
                nom: "Langues +",
                dir: "../langues/index.html"
            },    
            {
                nom: "Pens +",
                dir: "../pens/index.html"
            },
            {
                nom: "TutorielJS +",
                dir: "../tutorielJS/index.html"
            },
            {
                nom: "ToDo +",
                dir: "../todo/index.html"
            },
            {
                nom: "Youtube +",
                dir: "../youtube/index.html"
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
   
    } */
    
    function initialiserMenu()
    {
         var TemplateScript = document.querySelector("#mon_gabarit").innerHTML;
         var Template = Handlebars.compile(TemplateScript);
        
        var context = 
            {
                project: [ 
                    { nom: "Langues", dir:"langues", description: "Pratique de l'utilisation des sélecteurs et de la mise en page avec CSS3", sujets:["CSS3", "HTML5", "Sélecteurs"] },    
                    { nom: "Pens", dir: "Pens", description: "Exercices que j'ai faits sur CodePen." },                   
                    { nom: "ToDo", dir: "todo", description: "technique de programmation avancée JS." },                    
                    { nom: "ToDo", dir: "todo", skin: "(classique)", loc: "?skin=red-on-black", description: "skin par défaut"},         
                    { nom: "ToDo", dir: "todo", skin: "(orange)", loc: "?skin=blue-on-orange", description: "skin blue on orange"},      
                    { nom: "ToDo", dir: "todo", skin: "(skyBlue)", loc: "?skin=blue-on-sky", description: "skin on blue"},                    
                    { nom: "TutorielJS", dir: "tutorielJS"},
                    { nom: "Youtube", dir: "youtube"},
                ]
            };
        var compileHtml = Template(context);
        document.querySelector("#ulMenu").innerHTML = compileHtml;    
        
    };
    
})();


    
