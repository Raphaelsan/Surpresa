
// Selecione todos os elementos do menu de indicadores
var indicators = document.querySelectorAll('.foto-indicator');

// Adicione um evento de clique a cada elemento
indicators.forEach(function(indicator) {
    indicator.addEventListener('click', function() {
        // Remova a classe "pressed" de todos os indicadores
        indicators.forEach(function(item) {
            item.classList.remove('pressed');
        });

        // Adicione a classe "pressed" apenas ao indicador clicado
        this.classList.add('pressed');
    });
});




document.addEventListener("DOMContentLoaded", function () {
    // Carrossel
    const slides = document.querySelectorAll(".carousel-slide");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const foto1 = document.getElementById("foto1");
    const foto2 = document.getElementById("foto2");
    const foto3 = document.getElementById("foto3");
    const foto4 = document.getElementById("foto4");
    const foto5 = document.getElementById("foto5");
    const foto6 = document.getElementById("foto6");
    const foto7 = document.getElementById("foto7");
    const foto8 = document.getElementById("foto8");


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
    foto4.addEventListener("click", () => {
        showfoto(3); // Define o índice para a quarta foto (índice 3)
    });
    foto5.addEventListener("click", () => {
        showfoto(4); // Define o índice para a primeira foto (índice 4)
    });
    
    foto6.addEventListener("click", () => {
        showfoto(5); // Define o índice para a segunda foto (índice 5)
    });
    
    foto7.addEventListener("click", () => {
        showfoto(6); // Define o índice para a terceira foto (índice 6)
    });
    foto8.addEventListener("click", () => {
        showfoto(7); // Define o índice para a quarta foto (índice 7)
    });


    showSlide(currentIndex);

    // Automação do carrossel (navega automaticamente)
    setInterval(nextSlide, 10000000); // Mude de slide a cada 10000 segundos
});

