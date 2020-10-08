toggleNav();

function toggleNav() {
    const linksContainer = document.body.querySelector(".js--links");
    const icon = document.body.querySelector(".js--icon");
    const urlRoot = `${document.location.origin}/root/images/icon`;
    const urlImg = `${document.location.origin}/images/icon`;

    icon.addEventListener("click", () => {        
        linksContainer.classList.toggle("hide");

        if (icon.src.includes("root")) {
            icon.src = icon.src.includes("hamburger") ? `${urlRoot}-close.svg` : `${urlRoot}-hamburger.svg`;
        } else {
            icon.src = icon.src.includes("hamburger") ? `${urlImg}-close.svg` : `${urlImg}-hamburger.svg`;
        }
    });
}