let pietro = document.getElementById("pietro");
let gameContainer = document.getElementById("gameContainer");
let isJumping = false;

// Aggiungi il listener per la tastiera (barra spaziatrice)
document.addEventListener("keydown", function(event) {
    if (event.code === "Space" && !isJumping) {
        jump();
    }
});

// Aggiungi il listener per il click e il tocco (mobile)
gameContainer.addEventListener("click", function() {
    if (!isJumping) {
        jump();
    }
});

// Funzione che gestisce il salto
function jump() {
    let position = 0;
    isJumping = true;
    let jumpInterval = setInterval(function() {
        if (position >= 150) {
            clearInterval(jumpInterval);
            let fallInterval = setInterval(function() {
                if (position <= 0) {
                    clearInterval(fallInterval);
                    isJumping = false;
                } else {
                    position -= 5;
                    pietro.style.bottom = position + "px";
                }
            }, 20);
        } else {
            position += 5;
            pietro.style.bottom = position + "px";
        }
    }, 20);
}

// Controllo delle collisioni
let obstacle = document.getElementById("obstacle");
let checkCollision = setInterval(function() {
    let pietroRect = pietro.getBoundingClientRect();
    let obstacleRect = obstacle.getBoundingClientRect();

    if (
        pietroRect.left < obstacleRect.right &&
        pietroRect.right > obstacleRect.left &&
        pietroRect.bottom > obstacleRect.top
    ) {
        alert("Hai perso!");
        obstacle.style.animation = "none";
    }
}, 10);
