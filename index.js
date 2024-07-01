document.addEventListener("DOMContentLoaded", function() {
    var kitButtons = document.querySelectorAll(".kit-button");

    kitButtons.forEach(button => {
        button.addEventListener("click", function() {
            var textInKit = this.innerHTML;
            console.log("Button clicked: " + textInKit);
            makeSound(textInKit);
        });
    });

    document.addEventListener("keypress", function(event) {
        console.log("Key pressed: " + event.key);
        makeSound(event.key.toUpperCase());
    });

    function makeSound(key) {
        switch (key) {
            case "E":
                var sound1 = new Audio('sounds/e1.mp3');
                sound1.play();
                break;
            case "B":
                var sound2 = new Audio('sounds/b2.mp3');
                sound2.play();
                break;
            case "G":
                var sound3 = new Audio('sounds/g2.mp3');
                sound3.play();
                break;
            case "D":
                var sound4 = new Audio('sounds/d2.mp3');
                sound4.play();
                break;
            case "A":
                var sound5 = new Audio('sounds/a1.mp3');
                sound5.play();
                break;
            case "F":
                var sound6 = new Audio('sounds/e3.mp3');
                sound6.play();
                break;
            default:
                console.log("No sound for key: " + key);
        }
    }
});
