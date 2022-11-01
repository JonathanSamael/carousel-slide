/* ---------- PASSO A PASSO -------------- 
1 - Pegar a seta de avançar;

2 - Identificar quando o usuário clicar no botão;

3 - Quando o usuário clicar, passar para a próxima imagem;

4 - Colocar a classe selected no cartão novo e retirar do outro para que seja escondido 

5 - Repetir os passos para a seta de voltar;
*/

const pages = document.querySelectorAll(".page");
const btnGo = document.getElementById("btn-go");
const btnBack = document.getElementById("btn-back");
let currentPage = 0;

function hiddenSelectedPage() {
    const selectedPage = document.querySelector(".selected");
    selectedPage.classList.remove("selected");
}

btnGo.addEventListener("click", () => {
    if (currentPage === pages.length - 1) {
        return;
    }
    currentPage++;
    hiddenSelectedPage();
    showPage();
    arrowOpacity();
})

btnBack.addEventListener("click", () => {
    if (currentPage === 0) {
        return;
    }
    currentPage--;
    hiddenSelectedPage();
    showPage();
    arrowOpacity();
})

function showPage() {
    pages[currentPage].classList.add("selected");
}

function arrowOpacity() {
    const notIsFirstPage = currentPage !== 0;
    if (notIsFirstPage) {
        btnBack.classList.remove("arrow-efect")
    } else {
        btnBack.classList.add("arrow-efect")
    }

    const isLastPage = currentPage !== 0 && currentPage === pages.length - 1;
    if (isLastPage) {
        btnGo.classList.add("arrow-efect");
    } else {
        btnGo.classList.remove("arrow-efect");
    }
}
