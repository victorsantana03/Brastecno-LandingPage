const infoFaqs = document.querySelector("#infoFaqs")
const menu = document.querySelector("#menu")
const btnMenu = document.querySelector("#btn-menu")
const btnCloseMenu = document.querySelector("#btn-close-menu")

// INTERAÇÃO DO FAQ'S
infoFaqs.addEventListener('click', function (e) {
    let clique = e.target.closest('.faqsP') // Verifica se o clique foi dentro de .faqsP
    if (clique) {
        const resposta = clique.querySelector("div:nth-of-type(2)")
        const icon = clique.querySelector(".icon")

        resposta.classList.toggle("hidden")
        icon.classList.toggle("fa-chevron-down")
        icon.classList.toggle("fa-chevron-up")
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

//Evitando proteção de email
document.addEventListener("DOMContentLoaded", function(){
    const emailUser = "brastecnoassistencia"
    const emailDomain = "gmail.com"
    const email = `${emailUser}@${emailDomain}`

    const emailLink = document.querySelector("#email-link")
    emailLink.href = `mailto:${email}`
    emailLink.querySelector("span").textContent = email
})

