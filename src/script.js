const infoFaqs = document.querySelector("#infoFaqs")


// INTERAÇÃO DO FAQ'S
infoFaqs.addEventListener('click', function(e){
    let clique = e.target
    if(clique.classList.contains('icon')){
        clique.classList.toggle("fa-chevron-down")
        const resposta = clique.closest(".faqsP").querySelector("div:nth-of-type(2)")
        resposta.classList.toggle("hidden")
        clique.classList.toggle("fa-chevron-up")
    }
})

// NÚMEROS INTERATIVOS
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter"); // Seleciona todos os elementos com classe "counter"
    
    const animateCounter = (counter) => {
        const target = +counter.getAttribute("data-target"); // Obtém o número final
        const duration = 5000; // Duração da animação em ms
        const increment = target / (duration / 16); // Define o passo baseado no tempo
        
        let current = 0;
        const updateCounter = () => {
            current += increment;
            if (current >= target) {
                counter.innerText = target; // Garante que o número final seja exato
            } else {
                counter.innerText = Math.floor(current);
                requestAnimationFrame(updateCounter); // Chama a função de novo para animação suave
            }
        };
        updateCounter();
    };

    // Cria um observador para ativar a animação quando os números entrarem na tela
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target); // Remove a observação após a animação iniciar
            }
        });
    }, { threshold: 0.5 });

    // Observa todos os contadores na página
    counters.forEach(counter => {
        observer.observe(counter);
    });
});

