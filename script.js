// Створюємо екран переходу
const transition = document.createElement("div");

transition.className = "cube-transition";

document.body.appendChild(transition);

// Створюємо 63 куби
for (let i = 0; i < 63; i++) {
    const cube = document.createElement("div");

    cube.className = "red-cube";

    cube.style.setProperty(
        "--delay",
        `${Math.random() * 0.5}s`
    );

    transition.appendChild(cube);
}

// Знаходимо кнопку Грішники
const sinnersLink = document.querySelector(
    'a[href="#grishniki"]'
);

// Анімація натискання
sinnersLink.addEventListener("click", function(event) {

    event.preventDefault();

    // Поява червоних кубів
    transition.classList.add("active");

    // Переходимо до розділу
    setTimeout(() => {

        document.querySelector("#grishniki")
            .scrollIntoView({
                behavior: "instant"
            });

        // Прибираємо куби
        setTimeout(() => {
            transition.classList.remove("active");
        }, 300);

    }, 1100);

});