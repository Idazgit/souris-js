const cercle = document.createElement("div")
cercle.classList.add("cercle")
document.body.appendChild(cercle)

document.addEventListener("mousemove", (e) => {
    cercle.style.display = "block"
    cercle.style.transform = `translateX(${e.clientX}px) translateY(${e.clientY}px)`
})