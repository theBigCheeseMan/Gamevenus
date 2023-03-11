var scl = 16
var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
var width = Math.max( body.scrollWidth, body.offsetWidth, 
                        html.clientWidth, html.scrollWidth, html.offsetWidth );


var player = document.createElement("DIV")
player.position = [0, 0]
player.velocity = [0, 0]
player.speed = 1
player.style.width = scl.toString()+'px'
player.style.height = scl.toString()+'px'
player.style.backgroundColor = 'rgb(0, 0, 0)'
document.body.appendChild(player)

document.addEventListener('keydown', function(event) {
    const key = event.key; // "a", "1", "Shift", etc.
    if (key == 's') {
        player.velocity = [0, 1]
    }
    if (key == 'w') {
        player.velocity = [0, -1]
    }
    if (key == 'a') {
        player.velocity = [-1, 0]
    }
    if (key == 'd') {
        player.velocity = [1, 0]
    }
    player.position[0] += (player.velocity[0] * player.speed)
    player.position[1] += (player.velocity[1] * player.speed)

    player.style.transform = 'translate('+player.position[0]*scl+'px, '+player.position[1]*scl+'px)'
});
