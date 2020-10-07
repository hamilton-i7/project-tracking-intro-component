toggleNav();

function toggleNav() {
    const linksContainer = document.body.querySelector(".js--links");
    const icon = document.body.querySelector(".js--icon");
    const currentSrc = "/root/images/icon";

    icon.addEventListener("click", () => {        
        linksContainer.classList.toggle("hide");
        icon.src = icon.src.includes("hamburger") ? `${currentSrc}-close.svg` : `${currentSrc}-hamburger.svg`
    });
}