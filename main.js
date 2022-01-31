// Individuo il container su html e mi ci riferisco con una variabile

const container = document.getElementById("container");

// creo un ciclo per poter aggiungere elementi dentro il container 

const difficoltà = document.getElementById("difficoltà");

const easy = document.getElementById("easy");



if(difficoltà.value  == easy){

    
    for (i=1; i <= 100; i++){
        
        // creo dallo script stesso gli element che voglio aggiungere 
        const node = document.createElement("div");
        node.classList.add("square");
        
        const nodeText = document.createElement("p");
        node.appendChild(nodeText);
        nodeText.innerHTML = i;
        // aggiungo a ogni elemento che è stato creato la classe già pronta del mio css 
        
        
        // Aggiungo all'interno del container gli elementi creati e stilizzati (con il metodo append) 
        container.appendChild(node);
        
        node.addEventListener("click", function(){
            this.classList.add("clicked");
            
        }
        
        )
        
        
        
    }
    
}


