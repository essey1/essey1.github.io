// Navigation bar
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// Scroll sections active link
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
window.addEventListener('DOMContentLoaded', scrollActive)


// Contact me form
const inputs = document.querySelectorAll(".input");
function addFocus() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function removeFocus() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addFocus);
  input.addEventListener("blur", removeFocus);
});

// Clear all the input values after the user submits the form
const formToReset = document.getElementById('contactForm');
formToReset.addEventListener('submit', (e) => {
   setTimeout(function() { 
    e.preventDefault();
    formToReset.reset();
   }, 1);
});

// On scroll animations
document.addEventListener("DOMContentLoaded", () => {
  const options = {
    threshold: 0.2,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, options);
  
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
})

// About me typewriter
const text = document.querySelector(".typewriter");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Hands-on";
  }, 0);
  setTimeout(() => {
    text.textContent = "Fast Learner";
  }, 3000);
  setTimeout(() => {
    text.textContent = "Detail Oriented";
  }, 6000);
}

textLoad();
setInterval(textLoad, 9000);