function changeColor(color) {
    document.body.style.backgroundColor = color;
    document.getElementById("header-text").textContent = `You chose ${color.charAt(0).toUpperCase() + color.slice(1)}!`;
}
