document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt)
})

const input = document.querySelector('input')
input.addEventListener('keyup', function (evt) {
    console.log(evt.key)
    console.log(evt.code)
})

input.addEventListener('keydown', function () {
    console.log("KEYDOWN")
})

window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break;
    }
})