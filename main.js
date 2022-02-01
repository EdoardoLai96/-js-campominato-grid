

// Identifico il bottone che attiverà la funzione che fa funzionare il mio gioco

const play = document.getElementById("play");






// costruisco la funzione di gioco 

function gioca(){
    
    // inizializzo le  variabili che identificano il valore della difficoltà selezionatoa e il contenitore dovre andranno aggiunte le caselle 

    const difficoltà = document.getElementById("difficoltà").value;
    const container = document.getElementById("container");

    // Setto il valore iniziale del container a vuoto nel momento in cui l'evento inizia 

    container.innerHTML = "";
    
    // inizializzo le variabili del numero di caselle totali del grid e delle caselle per ogni lato in base alla difficoltà,
    //  impostandole a zero quando nessuna difficoltà è stata scelta 

    let numeroCaselle = 0;
    let casellePerLato = 0;



    // inizializzo uno switch che cambia il valore delle mie variabili  (già inizializzate ) a seconda delle difficoltà scelte
    
    switch(difficoltà){
        case "easy":
            numeroCaselle = 100;
            casellePerLato = 10;
            console.log(casellePerLato);
            console.log(numeroCaselle);
            break;
        case "hard":
            numeroCaselle = 81;
            casellePerLato = 9;
            console.log(casellePerLato);
            console.log(numeroCaselle);
            break;
        case "crazy":
            numeroCaselle = 49;
            casellePerLato = 7;
            console.log(casellePerLato);
            console.log(numeroCaselle);
            break;
            
        }
                

        // Costruisco un ciclo for che funzioni che sia uno solo e con una variabile
        // (numero di caselle) unica che cambia il numero di caselle della griglia in base all'uscita dello switch


        

        for (i=1; i <= numeroCaselle; i++){
            
        //  Ad ogni azione il ciclo deve: 
        
        // 1) creare un nuovo nodo (la casella )            
        const node = document.createElement("div");

            // 2) aggiungere al nodo creato la classe per stilizzarlo già pronta nel css 
        node.classList.add("square");
        
        // Aggiungere una larghezza e altezza che siano funzionali ai valori dell'uscita dello switch presa prima 

        node.style.width = `calc(100% / ${casellePerLato})`
        node.style.height = `calc(100% / ${casellePerLato})`
        
        // creare un nodo di testo che andrà  nella casella che conterrà il suo numero in successione 

        const nodeText = document.createElement("p");

        node.appendChild(nodeText);

        nodeText.innerHTML = i;
        
        // Inserire la nuova casella creata e il suo testo nel container (senza cancellare e sovrascrivere la casella creata alla ripetizione precendente )
        container.appendChild(node);
        
        // Per la nuova casella creata metterla in ascolto dell'evento "click" e cambiare il background al click

        node.addEventListener("click", function(){
            this.classList.add("clicked");
            
        }
        
        )
        
        
    }
        
        
    }
            
            
            play.addEventListener("click", gioca)
            
            
            
            
            
            
