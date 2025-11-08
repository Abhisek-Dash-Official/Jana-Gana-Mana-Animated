
const snow = document.getElementById("snow");

window.addEventListener("mousemove", (e) => {
    // Update the CSS variable for mask position
    snow.style.setProperty("--x", `${e.clientX}px`);
    snow.style.setProperty("--y", `${e.clientY}px`);
});