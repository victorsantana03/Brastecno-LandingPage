const infoFaqs = document.querySelector("#infoFaqs")
const menu = document.querySelector("#menu")
const btnMenu = document.querySelector("#btn-menu")
const btnCloseMenu = document.querySelector("#btn-close-menu")


// INTERAÇÃO DO FAQ'S
infoFaqs.addEventListener('click', function (e) {
    let clique = e.target
    if (clique.classList.contains('icon')) {
        clique.classList.toggle("fa-chevron-down")
        const resposta = clique.closest(".faqsP").querySelector("div:nth-of-type(2)")
        resposta.classList.toggle("hidden")
        clique.classList.toggle("fa-chevron-up")
    }
})

// NÚMEROS INTERATIVOS
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter"); 

    const animateCounter = (counter) => {
        const target = +counter.getAttribute("data-target"); 
        const duration = 5000; 
        const increment = target / (duration / 16); 

        let current = 0;
        const updateCounter = () => {
            current += increment;
            if (current >= target) {
                counter.innerText = target; 
            } else {
                counter.innerText = Math.floor(current);
                requestAnimationFrame(updateCounter); 
            }
        };
        updateCounter();
    };

    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.5 });

    
    counters.forEach(counter => {
        observer.observe(counter);
    });
});


//INTERAÇÃO MENU

//abrir
btnMenu.addEventListener('click', function () {
    menu.classList.toggle("hidden")

    setTimeout(() => {
        menu.classList.toggle("opacity-0")
        document.querySelector("#menu-content").classList.toggle("translate-x-full")
    }, 10)
})

//fechar
btnCloseMenu.addEventListener('click', function () {
    menu.classList.toggle("opacity-0")
    document.getElementById("menu-content").classList.toggle("translate-x-full")

    setTimeout(() => {
        menu.classList.toggle("hidden")
    }, 300)
})

//fechar ao clicar fora
menu.addEventListener("click", function (event) {
    clique = event.target
    if (clique.classList.contains("menu")) {
        menu.classList.toggle("hidden")
        menu.classList.toggle("flex")
    }
})

