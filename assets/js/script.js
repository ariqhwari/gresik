// Tampilkan Menu ketika Menggunakan Media Handphone
const nav = document.querySelector("ul");
document.querySelector("#about").onclick = () => {
    nav.classList.toggle("active");
};

// Tampilkan Warna saat Scroll Navbar
window.addEventListener("scroll", function () {
    var navbar = document.querySelector("header");
    if (window.scrollY > 100) {
        navbar.classList.add("scroll-navbar");
    } else {
        navbar.classList.remove("scroll-navbar");
    }
});

// Menambahkan Efek Smooth Scrolling
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        smoothScroll(targetId);
    });
});

function smoothScroll(target) {
    const element = document.querySelector(target);
    window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
    });
}