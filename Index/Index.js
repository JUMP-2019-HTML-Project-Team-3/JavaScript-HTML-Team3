// Index Page JavaSript

function loginWindow(){
// Login Pop Up
// Get the modal
    var modal = document.getElementById('id01');

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function contributor(){
    var source  =    event.currentTarget;
    var mod     =    document.getElementById("modalBox");
    var header  =    document.getElementById("myModalLabel");
    var content =    document.getElementById("modContent");
    var footer  =    document.getElementsByClassName("modal-footer"); 
    var image   =    document.createElement("img");

    image.classList.add("img-fluid");
    // Greg Button
    if(source.id == "gbutton"){
        image.src = "matthew_images/gregGif.gif";

        if(mod.classList.length > 1){
            mod.classList.replace(mod.classList[1], "bg-dark");
        }
        else{mod.classList.add("bg-dark");} 

        header.innerHTML = "So about Greg...";
        header.style = "color: whitesmoke";
    }
    // Omran Button
    else if(source.id == "obutton"){
        image.src = "matthew_images/omranGif.gif"; 

        if(mod.classList.length > 1){
            mod.classList.replace(mod.classList[1], "bg-primary");
        }
        
        else{mod.classList.add("bg-primary");}
        
        header.innerHTML = "So about Omran...";
        header.style = "color: whitesmoke";
    }
    // Rebecca Button
    else if(source.id == "rbutton"){
        image.src = "matthew_images/rebeccaGif.gif";

        if(mod.classList.length > 1){
            mod.classList.replace(mod.classList[1], "bg-success");
        }

        else{mod.classList.add("bg-success");}

        header.innerHTML = "So about Rebecca...";
        header.style = "color: whitesmoke"; 
    }
    // Matthew Button
    else {
        image.src = "matthew_images/matthewGif.gif"; 

        if(mod.classList.length > 1){
            mod.classList.replace(mod.classList[1], "bg-danger");
        }
        
        else{mod.classList.add("bg-danger");}

        header.innerHTML = "So about Matthew...";
        header.style = "color: whitesmoke"
    }

    // Check for and replace existing image per profile in modal
    var check = content.querySelector("img");
    if(content.contains(check)){
        console.log("chekcing old content");
        var old = content.querySelector('img');
        content.replaceChild(image, old);
    }
    
    else{
        console.log("content seems new")
        content.appendChild(image);
    }
}