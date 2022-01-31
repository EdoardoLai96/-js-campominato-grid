// Individuo il container su html e mi ci riferisco con una variabile

const container = document.getElementById("container");

// creo un ciclo per poter aggiungere elementi dentro il container 

const difficoltà = document.getElementById("difficoltà");

difficoltà.value = "";

const play = document.getElementById("play");

const reset = document.getElementById("reset");

play.addEventListener("click", function(){

    
    
    
    if(difficoltà.value == "easy"){
        
        container.innerHTML= "";
        
        for (i=1; i <= 100; i++){
            
            // creo dallo script stesso gli element che voglio aggiungere 
            const node = document.createElement("div");
            node.classList.add("square-10");
            
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
        
    } else if (difficoltà.value == "hard"){
        
        container.innerHTML= "";
        for (i=1; i <= 81; i++){
            
            // creo dallo script stesso gli element che voglio aggiungere 
            const node = document.createElement("div");
            node.classList.add("square-9");
            
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
        
    } else if (difficoltà.value == "crazy"){
        
        container.innerHTML= "";
        for (i=1; i <= 49; i++){
            
            // creo dallo script stesso gli element che voglio aggiungere 
            const node = document.createElement("div");
            node.classList.add("square-7");
            
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
    
})


reset.addEventListener("click", function () {
    container.innerHTML= "";
})

