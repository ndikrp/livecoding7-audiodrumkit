
function handleClick() {
    alert("Minta dijemput")
}

var buttons = document.querySelectorAll(".drum")
console.log(buttons)

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let btnInnerHTML = this.innerHTML

        switch (btnInnerHTML) {
            case "w" :
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case "a" :
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;
            case "s" :
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            case "d" :
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
            case "j" :
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;
            case "k" :
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;
            case "l" :
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
            default:
                alert("Gaada buttonnya")
        }
        this.style.color = "White"
    })
}

document.addEventListener("keydown", function (event) {
    if (event.key === "w") {
        let audio = new Audio();
        audio.src = 'sounds/tom-1.mp3'; 
        audio.play();
    }
});

// var audio = new Audio('sounds/crash.mp3')
//         audio.play()

// let audio = new Audio()
//         if (i === 0)
//             audio.src = 'sounds/crash.mp3'
//             audio.play()