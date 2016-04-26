(function(){

    
    creerNouvelleListe();
    creerBoutons();
    
 init();
   // ajouterTodo("Autre chose à faire");
   // ajouterTodo("Encore une chose à faire");
   // ajouterTodo("Chose à faire");   
    
  //dataUpdated();
    
    input.onkeydown = function(e)
    {
        if(e.keyCode === 13)
            {
                //alert(input.value.trim());
                ajouterTodo(input.value);                
                input.value="";                
                input.focus();
            }
        
    }
    
    
       
    function creerTodo(todotext)
    {
        var art = 
            '<article>\
                <input type="checkbox">\
                <div class="text" tabindex="0" contenteditable>' + todotext + '</div>\
                <img src="delete64.png" alt="delete" tabindex="0">\
            </article>';
        return art;
    }  
    
    
    function ajouterTodo(todotext)
    {
        var article = document.createElement("article");
        //todolist.appendChild(article);
        todolist.insertBefore(article, todolist.childNodes[0]);
        article.outerHTML = creerTodo(todotext);
        // outerHTML invalide la reference vers le DOM donc il faut aller la rechercher
        article = todolist.firstElementChild;
        article.querySelector('img').onclick = deleteTodo;//deleteTodo juste invoqué, sera appelé plus tard deleteTodo();
        article.querySelector('img').onkeydown = detruire;
        article.querySelector('.text').onkeydown = retourFocus;
        article.querySelector('input').onchange = complete;        
        article.querySelector('input').onkeydown = cocherCase;  
        gererBoutons();
        dataUpdated();
    }       
    
    
    function deleteTodo()
    {
        //console.log("Delete TODO"); 
        this.parentNode.outerHTML = "";
        gererBoutons();
        dataUpdated();
        
    }
    
    /*
    Lorsque le focus est sur l’image, et qu’on appuie sur [entrée], l’article est détruit. */
    
    function detruire(e)
    {
        if (e.keyCode === 13)
           {
                this.parentNode.outerHTML = "";
           }
        gererBoutons();
        dataUpdated();
    }
    
   function retourFocus(e)
    {
         if (e.keyCode === 13)
            {
                input.focus();              
                
            }        
    }    
    
    
    /*
    fonction creerNouvelleListe pour HTML
    */
    function creerNouvelleListe()
    {
        var todolist = document.createElement("div");
        var donelist = document.createElement("div");
        var alltasks = document.createElement("div");
        todolist.id = "todolist";
        donelist.id = "donelist";
        alltasks.id = "alltasks";
        alltasks.appendChild(todolist);
        alltasks.appendChild(donelist);
        conteneur.appendChild(alltasks);
    }
    
    
    /*
    DEUX LISTES
    */
    function complete()
    {
        var checkbox = this;        
        var article = checkbox.parentNode;
        
        if (checkbox.checked)
        {            
            todolist.removeChild(article);
            donelist.appendChild(article); // au debut en fait!!!           
            //checkbox.nextSibling.style.textDecoration = "line-through";
        }
        else 
        {            
            donelist.insertBefore(article, donelist.firstElementChild);
            todolist.appendChild(article);           
        }
        
        article.firstElementChild.focus();
        gererBoutons();
        dataUpdated();
    }
    
    function creerBoutons()
    {
       
       var div = document.createElement("div");
       div.id = "boutons";       
        
       var chkBtn = document.createElement("button");
       chkBtn.id = "btnChk";
       
       var imgChkBtn = document.createElement("img");
       imgChkBtn.src = "./check64.png";
       imgChkBtn.alt="img marquée";
       var spanChkBtn = document.createElement("span");
       spanChkBtn.textContent = "Marquer toutes les tâches  comme complétées";
       chkBtn.appendChild(imgChkBtn);
       chkBtn.appendChild(spanChkBtn);
       div.appendChild(chkBtn);
        
        
       var delBtn = document.createElement("button");
       delBtn.id = "btnDel";
         
       var imgDelBtn = document.createElement("img");
       imgDelBtn.src = "./delete64.png";
       imgDelBtn.alt="img delete";
       var spanDelBtn = document.createElement("span");       
       spanDelBtn.textContent = "Effacer les tâches  completées" ;       
       delBtn.appendChild(imgDelBtn);
       delBtn.appendChild(spanDelBtn);       
       div.appendChild(delBtn);       
       document.body.appendChild(div); 
       
       btnDel.disabled= localStorage.getItem('btnDelete') ;
       btnChk.disabled= localStorage.getItem('btnMark') ;  
                  
    }
        
    
     function gererBoutons()
     {       
       gererBoutonChk();
       gererBoutonDel();
      
     }
    
    
    function gererBoutonChk()
    {
        
        if (todolist.childNodes.length === 0)
            {
                                                
                btnChk.disabled = true;
            }
        else
            {                
                btnChk.disabled = false;
            }   
         localStorage.setItem('btnMark', btnChk.disabled);
    }
    
    
    function gererBoutonDel()
    {
       if (donelist.childNodes.length === 0)
            {
                btnDel.disabled = true;                                
            }
        else
            {                
                btnDel.disabled = false;
            }  
           
            localStorage.setItem('btnDelete',  btnDel.disabled);
        
    }
    
    btnDel.onclick = () =>
    {
        while (donelist.hasChildNodes())
        {
            donelist.removeChild(donelist.lastChild);
        }
        gererBoutons();
        dataUpdated();
    }
    
    btnChk.onclick = () => 
    {
        while (todolist.hasChildNodes())
            {
                todolist.children[0].children[0].click();
            }
        gererBoutons();
        dataUpdated();
    }
    
    /*
    Touche entree pour cocher la case
    */
    
    function cocherCase(e)
    {
      var checkbox = this;

      if (e.keyCode === 13)
         {
            checkbox.click();
         }
        gererBoutons();
        dataUpdated();
    }
    
    function dataUpdated()
    {
        
       var listTodo = [];
       for (let i = 0; i < todolist.childNodes.length; i++)
           {
               listTodo.unshift(todolist.children[i].textContent);  
           }
        localStorage.setItem('listeAfaire', JSON.stringify(listTodo));
        
         var listDone = [];
         for (let i = 0; i < donelist.childNodes.length; i++)
           {
               listDone.push(donelist.children[i].textContent);  
           }
        localStorage.setItem('listcomplete', JSON.stringify(listDone));        
     
    }
    
    function init()
    {
        var dataTodo = JSON.parse(localStorage.getItem('listeAfaire'));
        var dataDone = JSON.parse(localStorage.getItem('listcomplete'));
        
        for (var att in dataTodo)//att utilisé comme index dans 
            {
                 ajouterTodo(dataTodo[att]);   
            }
          
        for (var idx in dataDone)
            {
                 ajouterTodo(dataDone[idx]);  
                 todolist.children[0].children[0].click();
            }    
     }
   
    
})();
   