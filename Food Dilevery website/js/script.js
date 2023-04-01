
var swiper = new Swiper(".featured-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    // autoplay: {
    //     delay: 9500,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
    },
});




var swiper = new Swiper(".brand-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 6,
        },
    },
});



var swiper = new Swiper('.home-slider', {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }

})

let navbar = document.querySelector('.first-header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


window.onscroll = () => {
    navbar.classList.remove('active');

}

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));




// ============== toggle accordion =================//
let header = document.querySelectorAll(".accordion-header");

// ============= get all accoridon header =============//
header.forEach(
    (header) => {
        header.addEventListener("click", function (e) {
            let accordion = document.querySelectorAll(".accordion");
            let parentElm = header.parentElement;
            let siblings = this.nextElementSibling;

            // ============= remove accordion body height ==========//
            accordion.forEach((element) => {
                element.children[1].style.maxHeight = null;
            });

            // =========== toggle active class ==============//
            parentElm.classList.toggle("active");
            if (parentElm.classList.contains("active")) {
                // ============== remove active class from all the accordions ===//
                accordion.forEach((element) => {
                    element.classList.remove("active");
                });
                // ============== toggle active class where we clicked ========//

                parentElm.classList.toggle("active");
                // ============= set max height ============//
                if (siblings.style.maxHeight) {
                    siblings.style.maxHeight = null;
                } else {
                    siblings.style.maxHeight = siblings.scrollHeight + "px";
                }
            }
        });
    }
);


window.onload = function () {
    header[0].click();
}