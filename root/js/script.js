toggleNav();

function toggleNav() {
    const linksContainer = document.body.querySelector(".js--links");
    const icon = document.body.querySelector(".js--icon");
    const url = icon.src.slice(0, icon.src.indexOf("icon-"));

    icon.addEventListener("click", () => {        
        linksContainer.classList.toggle("hide");

        icon.src = icon.src.includes("hamburger") ? `${url}icon-close.svg` : `${url}icon-hamburger.svg`;
    });
}