/* =================================
   MOBILE MENU
================================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("open");

    menuBtn.textContent =
        nav.classList.contains("open")
            ? "✕"
            : "☰";

});


/* Close menu */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        menuBtn.textContent = "☰";

    });

});


/* =================================
   THEME BUTTON
================================= */

const themeBtn =
    document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    themeBtn.textContent =
        document.body.classList.contains("light")
            ? "☾"
            : "☀";

});


/* =================================
   NAV ACTIVE LINK
================================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 200;

        if (window.scrollY >= top) {

            current =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =================================
   CONTACT FORM
================================= */

const form =
    document.getElementById("contactForm");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        `Thanks ${name}! Your message has been received.`
    );

    form.reset();

});


/* =================================
   PROFILE MOUSE EFFECT
================================= */

const profile =
    document.querySelector(".profile-container");

document.addEventListener("mousemove", (event) => {

    if (window.innerWidth < 900) return;

    const x =
        (window.innerWidth / 2 - event.clientX) / 100;

    const y =
        (window.innerHeight / 2 - event.clientY) / 100;

    profile.style.transform =
        `translate(${x}px, ${y}px)`;

});


/* =================================
   SCROLL REVEAL
================================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(
        ".section, .hero-left, .hero-right"
    )
    .forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity .8s ease, transform .8s ease";

        observer.observe(element);

    });