var kit_number = document.querySelectorAll(".kit-button").length;

for (var i=0; i<kit_number; i++){
    document.querySelectorAll(".kit-button")[i].addEventListener("click", function(){
        var text_in_kit = this.innerHTML

        makeSound(text_in_kit)


    })
}

document.addEventListener("keypress", function(event){
    makeSound(event.key)
})

function makeSound(key){
    switch (key){
        case "E":
            var sound1 = new Audio('sounds/e1.mp3');
            sound1.play();
            break;
        case "B":
            var sounde1 = new Audio('sounds/b2.mp3');
            sounde1.play();
            break;
        case "G":
            var sounde1 = new Audio('sounds/g2.mp3');
            sounde1.play();
            break;
        case "D":
            var sounde1 = new Audio('sounds/d2.mp3');
            sounde1.play();
            break;
        case "A":
            var sounde1 = new Audio('sounds/a1.mp3');
            sounde1.play();
            break;
        case "F":
            var sounde1 = new Audio('sounds/e3.mp3');
            sounde1.play();
            break;
            
    }


}