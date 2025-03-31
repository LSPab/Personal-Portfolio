document.addEventListener("DOMContentLoaded", function () {
    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");
    const content = document.querySelector(".content");

    if (hamMenu && offScreenMenu && content) {
        hamMenu.addEventListener("click", () => {
            hamMenu.classList.toggle("active");
            offScreenMenu.classList.toggle("active");
            content.classList.toggle("blur");
        });

        // Close menu when clicking outside the menu (on blurred background)
        content.addEventListener("click", (event) => {
            if (offScreenMenu.classList.contains("active")) {
                hamMenu.classList.remove("active");
                offScreenMenu.classList.remove("active");
                content.classList.remove("blur");
            }
        });
    } else {
        console.error("Menu or content not found!");
    }
});