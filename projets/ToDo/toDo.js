(function(){

    creerNouvelleListe();
    
    ajouterTodo("Autre chose à faire");
    ajouterTodo("Encore une chose à faire");
    ajouterTodo("Chose à faire");
   
        
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
        article.querySelector('img').onkeydown = destruction;
        article.querySelector('.text').onkeydown = retourFocus;
        article.querySelector('input').onchange = complete;
    }
    
    function deleteTodo()
    {
        //console.log("Delete TODO"); 
        this.parentNode.outerHTML = "";
    }
    
    /*
    Lorsque le focus est sur l’image, et qu’on appuie sur [entrée], l’article est détruit. */
    
    function destruction(e)
    {
        if(e.keyCode === 13)
        {
            this.parentNode.outerHTML = "";
        }
    }
    
   function retourFocus(e)
    {
         if(e.keyCode === 13)
        {
            input.focus();
        }
        
    }    
    
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
  
        if (checkbox.checked)
        {
            var article = checkbox.parentNode;
            todolist.removeChild(article);
            donelist.appendChild(article); // au debut en fait!!!
        }
        else 
        {
            var article = checkbox.parentNode;
            donelist.insertBefore(article, donelist.firstElementChild);
            todolist.appendChild(article);
        }
    }  
    
    
})();
   