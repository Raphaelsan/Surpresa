// Lista de URLs das páginas para os 30 dias
const pageURLs = [
    "pagina1.html",
    "pagina2.html",
    // Adicione URLs para os próximos 28 dias aqui
];

// Função para exibir a página do dia atual
function exibirPaginaDoDia() {
    const hoje = new Date();
    const diaAtual = hoje.getDate();
    
    if (diaAtual != 0 ) {//>=1 deploy && diaAtual <= 30
        const paginaURL = pageURLs[1]; 
        const contentDiv = document.getElementById("content");
        contentDiv.innerHTML = `<iframe src="${paginaURL}" frameborder="1" width="100%" height="2000px"></iframe>`;
    } else {
        const paginaURL = "index.html";
        const contentDiv = document.getElementById("content");
        contentDiv.innerHTML = `<iframe src="${paginaURL}" frameborder="0" width="100%" height="100%"></iframe>`;
    }
}

// Chame a função para exibir a página do dia atual
exibirPaginaDoDia();
