const nav = document.querySelector('.nav');
const nav_btn = document.querySelector(".navbar_right");
const nav_bd = document.querySelector(".navbar_backdrop");
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

function toogle_nav() {
    
    if(nav_btn.classList.contains("display_mob_nav")){
        nav_btn.classList.remove("display_mob_nav");
        nav_bd.classList.add("navbar_backdrop");
    }else{
        nav_btn.classList.add("display_mob_nav");
        nav_bd.classList.remove("navbar_backdrop");
    }
}

///////////////////////////////////////
// BUTON SCROLL

btnScrollTo.addEventListener('click', function (e) {
    const s1coords = section1.getBoundingClientRect();
  
  
    section1.scrollIntoView({ behavior: 'smooth' });
  });
  
  


///////////////////////////////////////
// MANU FADE ANIMATION

// Refactored
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    // const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    // logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));



const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header)
// type writer effect
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }

// INJECT CSS
var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
document.body.appendChild(css);
};

































