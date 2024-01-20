const wrapper document.querySelector(".wrapper"); const question document.querySelector(".question");

const gif document.querySelector(".gif");

const yesBtn = document.querySelector(".yes-btn");

const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () {

question. InnerHTML = "Aaaaa, I like you too";

gif.src =

"https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp"; });

noBtn.addEventListener("mouseover", () {

const noBtnRect = noßtn.getBoundingClientRect();

const maxX = window.innerWidth noßtnRect.width;

const maxy= window.innerHeight noßtnRect.height;

const randomX = Math.floor(Math.random() maxX);

const randomy = Math.floor(Math.random() maxY);

noßtn.style.left = randomX + "px";

noßtn.style.top randomy + "px";

});

