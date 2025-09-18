
const hero = document.querySelector(".hero");
const tiltDeg = 40;

hero.addEventListener("mousemove", (event) => {
    const rect = hero.getBoundingClientRect();
    const left = event.clientX - rect.left;
    const top  = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rx = (left / centerX - 1) * tiltDeg;
    const ry = (top / centerY - 1) * tiltDeg;

    if (hero instanceof HTMLElement) {
        hero.style.transform = `rotateX(${-ry}deg) rotateY(${rx}deg)`;
    }
});

hero.addEventListener("mouseleave", () => {
    hero.style.transform = `rotateX(0deg) rotateY(0deg)`;
});


