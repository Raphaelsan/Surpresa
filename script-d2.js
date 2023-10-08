

document.addEventListener("DOMContentLoaded", function () {
    // Carrossel
    const slides = document.querySelectorAll(".carousel-slide");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const foto1 = document.getElementById("foto1");
    const foto2 = document.getElementById("foto2");
    const foto3 = document.getElementById("foto3");

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }
    
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    function showfoto(index) {
        currentIndex = index; // Define o índice com base no argumento recebido
        showSlide(currentIndex);
    
        // Adicione uma classe para indicar que o indicador está ativo
        indicators[currentIndex].classList.add("active-indicator");
    
        // Remova a classe "active-indicator" dos outros indicadores
        indicators.forEach((indicator, i) => {
            if (i !== currentIndex) {
                indicator.classList.remove("active-indicator");
            }
        });
    }

    
    foto1.addEventListener("click", () => {
        showfoto(0); // Define o índice para a primeira foto (índice 0)
    });
    
    foto2.addEventListener("click", () => {
        showfoto(1); // Define o índice para a segunda foto (índice 1)
    });
    
    foto3.addEventListener("click", () => {
        showfoto(2); // Define o índice para a terceira foto (índice 2)
    });


    showSlide(currentIndex);

    // Automação do carrossel (navega automaticamente)
    setInterval(nextSlide, 10000); // Mude de slide a cada 10 segundos
});
