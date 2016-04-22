(function () 
{
    
    "use strict";

   
    var monBouton = document.querySelector('button');
    var monTitre = document.querySelector('h1');
    var monImage = document.querySelector('img');      
    
     
    monBouton.onclick = function() { definirNomUtilisateur();}
    // ou monBouton.onclick = definirNomUtilisateur;

    initialiser();
    
    
    function initialiser() 
    {
        var monNom = localStorage.getItem('nom');
        if(monNom) 
        {
            monTitre.textContent = 'Mozilla est cool, ' + monNom; 
        }
        else
        {
            if (!definirNomUtilisateur()) 
            {
                monTitre.textContent = 'Mozilla est cool, ' + 'Inconnu'; 
            }
        }
    }

    function definirNomUtilisateur() 
    {
        
        var monNom = prompt('Veuillez saisir votre nom.');
       
        if (monNom === null || monNom === undefined || monNom.trim() === "")
        {
            return false;
        }
        else
        {
            localStorage.setItem('nom', monNom);
            monTitre.textContent = 'Mozilla est cool, ' + monNom;
            return true;
        }
    }
       
             
    monImage.onclick = function ()
    {
            var maSrc = monImage.getAttribute('src');
            
            if (maSrc === 'images/firefox.png')
            {
                monImage.setAttribute('src', 'images/TheWorld.png');                
            }
            else
            {
                monImage.setAttribute('src', 'images/firefox.png');
            }        
    }

})();

