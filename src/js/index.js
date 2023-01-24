const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;


function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

const botaFecharModal = document.querySelector(".fechar-modal");
botaFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});