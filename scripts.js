// This is where the javascript will live.
// Using Chrome developer tools, if you look at the console, you can see the message appearing on the console.

console.log('Is the scripts file working?');



document.addEventListener("mousemove", function (event) {

    const x = event.pageX
    const y = event.pageY

    const target = document.querySelector(".firstwindow")
    const targetCoords = target.getBoundingClientRect()

    const targetX = targetCoords.left + (target.offsetWidth / 4)
    const targetY = targetCoords.top + (target.offsetHeight / 2)

    const angleX = (targetY - y) / 25
    const angleY = (targetX - x) / -25

    target.style.transform = "rotateX(" + angleX + "deg) rotateY(" + angleY + "deg)"
})

document.addEventListener("mousemove", function (event) {

    const x = event.pageX
    const y = event.pageY

    const target = document.querySelector(".secondwindow")
    const targetCoords = target.getBoundingClientRect()

    const targetX = targetCoords.left + (target.offsetWidth / 4)
    const targetY = targetCoords.top + (target.offsetHeight / 2)

    const angleX = (targetY - y) / -25
    const angleY = (targetX - x) / 25

    target.style.transform = "rotateX(" + angleX + "deg) rotateY(" + angleY + "deg)"
})