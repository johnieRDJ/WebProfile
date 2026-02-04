//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//Services section - Modal
const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtns, i) => {
    learnmoreBtns.addEventListener("click", () => {
        modal(i);
    });

});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

//Portfolio section - Modal
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modalClick){
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });

});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});


//Our clients - Swiper

//Website dark/light theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//Scroll to top button

//Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");

        }
    });


});

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");


menuBtn.addEventListener("click", () =>{
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () =>{
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});



//Scroll reveal animations
//Common reveal options to create reveal animations
ScrollReveal({ 
    //reset: true, 
    distance: '60px',
    duration: 2500,
    delay: 100
});

//Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02 ',  { delay: 250, origin: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 300, origin: 'right' });
ScrollReveal().reveal('.home .info .btn', { delay: 350, origin: 'bottom' });
ScrollReveal().reveal('.media-icons i, .contact-left li', { delay: 250, origin: 'left', interval: 100 });
ScrollReveal().reveal('.home-img, .about-img', { delay: 250, origin: 'bottom' });
ScrollReveal().reveal('.about .description, .contact-right', { delay: 300, origin: 'right' });
ScrollReveal().reveal('.about .professional-list li', { delay: 250, origin: 'right', interval: 100 });
ScrollReveal().reveal('.skills-description, .services-description, .contact-card, .client-swiper, .contact-left h2', { delay: 350, origin: 'left' });
ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card', { delay: 400, origin: 'bottom', interval: 100 });
ScrollReveal().reveal('footer .group', { delay: 250, origin: 'top', interval: 100 });

//notification
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const popupMessage = document.getElementById('popup-message');

    // GET SUBMIT BUTTON (this is the missing piece)
    const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');

    // Fallback safety check
    if (!submitBtn) {
        console.error("Submit button not found");
        return;
    }

    // Save original button text
    const originalText = submitBtn.innerText || submitBtn.value;

    // Spinner state
    submitBtn.disabled = true;
    if (submitBtn.tagName === "BUTTON") {
        submitBtn.innerText = "Sending...";
    } else {
        submitBtn.value = "Sending...";
    }

    fetch('process-form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        popupMessage.textContent = data.success
            ? "Message sent successfully!"
            : "Error sending message!";
        popupMessage.style.display = 'block';

        if (data.success) {
            form.reset(); // ✅ clears fields
        }

        setTimeout(() => {
            popupMessage.style.display = 'none';
        }, 3000);
    })
    .catch(error => {
        console.error('Error:', error);
        popupMessage.textContent = "Something went wrong!";
        popupMessage.style.display = 'block';
    })
    .finally(() => {
        // Restore button
        submitBtn.disabled = false;
        if (submitBtn.tagName === "BUTTON") {
            submitBtn.innerText = originalText;
        } else {
            submitBtn.value = originalText;
        }
    });
});
