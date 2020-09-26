const hamburguesa = document.querySelector(".menu-hamburguesa");
const menu = document.querySelector(".menu-responsive");
const links = document.querySelectorAll(".menu-responsive li");

hamburguesa.onclick = () => {
    menu.classList.toggle("show-menu");
};

for (let link of links) {
    link.onclick = () => {
        menu.classList.add("show-menu")
    };
}