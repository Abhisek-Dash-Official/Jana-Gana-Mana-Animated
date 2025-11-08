window.addEventListener("load", () => {
    const music = new Audio("music/national-anthem.mp3");
    music.loop = true;
    music.volume = 0.6;

    // Try autoplay
    music.play().catch(() => {
        console.log("Autoplay blocked — enabling click to start.");

        // Show custom notification
        const notify = document.getElementById("musicNotify");
        notify.style.opacity = 1;

        document.addEventListener("click", () => {
            music.play();
            notify.style.opacity = 0;
        }, { once: true });
    });
});