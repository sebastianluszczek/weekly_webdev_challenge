import '../scss/main.scss';
// import '../favicon.ico';

const hamburger = document.querySelector('.hamburger');
const nav_container = document.querySelector('.mobile-nav');

document.addEventListener("DOMContentLoaded", () => {

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav_container.classList.toggle('active');

        if (hamburger.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    nav_container.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav_container.classList.toggle('active');

        document.body.style.overflow = 'auto';
    });


    // Add smooth scrolling to all links
    $(".nav_a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: ($(hash).offset().top - 60) + 'px'
            }, 700, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                // window.location.hash = hash;
            });
        }
    });
})