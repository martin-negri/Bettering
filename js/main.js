const nav = document.querySelector("#nav");
const toggle = document.querySelector("#abrir");

const toggleMenu = () => {
    const isOpen = nav.classList.toggle("visible");
    toggle.classList.toggle("active", isOpen);
    toggle.setAttribute("aria-expanded", isOpen);
};

toggle.addEventListener("click", toggleMenu);

// Cerrar con ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("visible")) {
        toggleMenu();
    }
});
