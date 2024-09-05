function shiftToDarkMode() {
    document.documentElement.setAttribute("data-bs-theme", "dark")
    document.getElementById("contact").style.backgroundColor = "rgb(43, 48, 53)"
}
function shiftToLightMode() {
    document.documentElement.removeAttribute("data-bs-theme")
    document.getElementById("contact").style.backgroundColor = "#f8f9fa"
}