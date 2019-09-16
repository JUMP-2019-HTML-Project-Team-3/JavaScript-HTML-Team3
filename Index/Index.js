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

// Tailors the profile buttons and modal on the Card Deck to each Contributor
// Reusing a single modal
function contributor(){
    // get the source button to tailor to each user
    var source  =    event.currentTarget;
    // grab the elements to be modified
    var mod     =    document.getElementById("modalBox");
    var header  =    document.getElementById("myModalLabel");
    var headerBox =  document.getElementById("headerBox");
    var content =    document.getElementById("modContent");
    var footer  =    document.getElementById("footerBox"); 
    var image   =    document.createElement("img");

    //Fit all images in the modal
    image.classList.add("img-fluid");
    // Greg Button
    if(source.id == "gbutton"){
        image.src = "matthew_images/gregGif.gif";

        // Check the color Unique in Body
        if(mod.classList.length > 1){
            mod.classList.replace(mod.classList[1], "bg-dark");
        }
        else{mod.classList.add("bg-dark");} 

        header.innerHTML = "So about Greg...";
        headerBox.classList.add("bg-secondary");
        footer.classList.add("bg-secondary");
        header.style = "color: whitesmoke";
    }
    // Omran Button
    else if(source.id == "obutton"){
        image.src = "matthew_images/omranGif.gif"; 

        // Check Unique Body color
        if(mod.classList.length > 1){
            mod.classList.replace(mod.classList[1], "bg-primary");
        }
        
        else{mod.classList.add("bg-primary");}
        
        header.innerHTML = "So about Omran...";
        headerBox.classList.add("bg-secondary");
        footer.classList.add("bg-secondary");
        header.style = "color: whitesmoke";
    }
    // Rebecca Button
    else if(source.id == "rbutton"){
        image.src = "matthew_images/rebeccaGif.gif";

        // Check Unique Body color
        if(mod.classList.length > 1){
            mod.classList.replace(mod.classList[1], "bg-success");
        }

        else{mod.classList.add("bg-success");}

        header.innerHTML = "So about Rebecca...";
        headerBox.classList.add("bg-secondary");
        footer.classList.add("bg-secondary");
        header.style = "color: whitesmoke";
    }
    // Matthew Button
    else {
        image.src = "matthew_images/matthewGif.gif"; 

        // Check Unique Body color
        if(mod.classList.length > 1){
            mod.classList.replace(mod.classList[1], "bg-danger");
        }
        
        else{mod.classList.add("bg-danger");}

        header.innerHTML = "So about Matthew...";
        headerBox.classList.add("bg-secondary");
        footer.classList.add("bg-secondary");
        header.style = "color: whitesmoke";
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