let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')
let body = document.querySelector('body')

menu.onclick = (event) => {
  event.stopPropagation() // Stop the click event from propagating to the body element
  navbar.classList.toggle('active')
  menu.classList.toggle('fa-times')
  if (navbar.classList.contains('active')) {
    body.classList.add('menu-open') // Add a class to the body when the menu is open
  } else {
    body.classList.remove('menu-open') // Remove the class from the body when the menu is closed
  }
}

// Close the mobile menu when clicking anywhere on the screen
body.onclick = (event) => {
  if (!navbar.contains(event.target)) {
    navbar.classList.remove('active')
    menu.classList.remove('fa-times')
    body.classList.remove('menu-open')
  }
}

window.onscroll = () => {
  navbar.classList.remove('active')
  menu.classList.remove('fa-times')

  if (window.scrollY > 100) {
    document.querySelector('.header .container').classList.add('active')
  } else {
    document.querySelector('.header .container').classList.remove('active')
  }
}

var typed = new Typed('.typing', {
  strings: ['Executive Chef', 'Pitmaster', 'Food + Bev Director'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
})

let details = document.querySelector('.content .flex .details-btn')
let skills = document.querySelector('.content .flex .skills-btn')

details.onclick = () => {
  details.classList.add('active')
  skills.classList.remove('active')
  document.querySelector('.content .column .details').classList.add('active')
  document.querySelector('.content .column .skills').classList.remove('active')
}
skills.onclick = () => {
  details.classList.remove('active')
  skills.classList.add('active')
  document.querySelector('.content .column .details').classList.remove('active')
  document.querySelector('.content .column .skills').classList.add('active')
}

var swiper = new Swiper('.testimonials-slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  loop: true,
  grabCursor: true
})


/**
 * Custom cursor
 */

const cursors = document.querySelectorAll("[data-cursor]");
const hoveredElements = [...document.querySelectorAll("button"), ...document.querySelectorAll("a")];



window.addEventListener("mousemove", function (event) {

  const posX = event.clientX;
  const posY = event.clientY;

  /** cursor dot position */
  cursors[0].style.left = `${posX}px`;
  cursors[0].style.top = `${posY}px`;

  /** cursor outline position */
  setTimeout(function () {
    cursors[1].style.left = `${posX}px`;
    cursors[1].style.top = `${posY}px`;
  }, 80);

});

// Define the addEventOnElements function
function addEventOnElements(elements, event, callback) {
  elements.forEach(function (element) {
    element.addEventListener(event, callback);
  });
}

/** add hovered class when mouseover on hoverElements */
addEventOnElements(hoveredElements, "mouseover", function () {
  for (let i = 0, len = cursors.length; i < len; i++) {
    cursors[i].classList.add("hovered");
  }
});

/** remove hovered class when mouseout on hoverElements */
addEventOnElements(hoveredElements, "mouseout", function () {
  for (let i = 0, len = cursors.length; i < len; i++) {
    cursors[i].classList.remove("hovered");
  }
});
