document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // GSAP scroll-triggered animation
  gsap.to("#pdiv2", {
    duration: 3,
    delay: 1,

    scrollTrigger: {
      trigger: "#pdiv2",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });
});


document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // GSAP scroll-triggered animation for zoomImage
  gsap.to("#zoomImage", {
    duration: 3,
    scale: 1.4,
    delay: 3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#zoomImage",
      start: "top 90%", // Adjust as needed based on when you want the animation to start
      end: "top top",
      scrub: true,
    },
  });
});

gsap.registerPlugin(ScrollTrigger);

let section1 = gsap.utils.toArray(".swipersec");

gsap.to(section1, {
  xPercent: -100 * (section1.length - 1),
  ease: "inOut",
  scrollTrigger: {
    trigger: ".container1",
    pin: true,
    scrub: 1,
    snap: 1 / (section1.length - 1),
    end: () => "+=" + document.querySelector(".container1").offsetWidth,
  },
});



function showDiv2() {
  gsap.to("#div1", { y: "-100%", duration: 2, ease: "power2.inOut" });
  gsap.to(document.documentElement, { duration: 1, delay: 2, css: { overflow: 'auto' } ,ease: "power2.inOut"});

  gsap.to("#div2", { y: "0%", duration: 0.5, ease: "power2.inOut", onComplete: scaleDiv3 });
  
}

function scaleDiv3() {
  gsap.to(".roundvideo", { duration: 1, delay: 1, borderRadius: "40px", onComplete: showdivs });
  gsap.to("#textdiv", { opacity: 1, duration: 2, ease: "power2.inOut" ,delay:2 ,y:-50,});
  gsap.to("#nevdots", { opacity: 1, duration: 2, ease: "power2.inOut" ,delay:2 ,});
  gsap.to("#div3", { scale: 0.90, duration: 2, ease: "power2.inOut", delay: 2,});
  gsap.to("#card", { opacity: 1, duration: 2, ease: "power2.inOut" ,delay:2  });
  gsap.to("#header", { opacity: 1, duration: 2, ease: "power2.inOut" ,delay:2 ,y:10, });
  gsap.to(".roundpic", { duration: 2, delay: 2, borderRadius: "40px" });  
}
// Call the function initially
function showtxt() {
gsap.to("#textmain", { opacity: 1, duration: 2, ease: "power2.inOut" ,delay:2 ,y:-50,});

}

function showdivs() {
  document.addEventListener("DOMContentLoaded", function() {
      gsap.to(document.documentElement, { duration: 1, delay: 1, css: { overflow: 'auto' } });
  });
}


gsap.to(".img1", {
  y: 40,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#d1",
    start: "top 100%",
    end: "bottom 90%",
    scrub: true,
    ease: "power2.inOut",
    toggleActions: "play none reverse none", // Reverse the animation when scrolling back up
  },
});

gsap.to(".e1", {
  y: -100,
  rotation: -10, // Rotate 360 degrees during the animation
  duration: 1,

  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#d1",
    start: "top bottom",
    end: "bottom 80%",
    scrub: true,
    ease: "power2.inOut",
    toggleActions: "play none reverse none", // Reverse the animation when scrolling back up
  },
});
gsap.to(".s1", {
  y: 0,
  rotation: -360, // Rotate 360 degrees during the animation
  duration: 1,

  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#d1",
    start: "top 90%",
    end: "bottom 90%",
    scrub: true,
    ease: "power2.inOut",
    toggleActions: "play none reverse none", // Reverse the animation when scrolling back up
  },
});

gsap.to(".e2", {
  y: -80,
  duration: 2,
  delay: 2,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#d1",
    start: "top 10%",
    end: "bottom 90%",
    scrub: true,
    toggleActions: "play none reverse none", // Reverse the animation when scrolling back up
  },
});

gsap.to(".asset-3", {
  y: 10,
  rotation: -10, // Rotate 360 degrees during the animation
  duration: 1,

  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#d1",
    start: "top 80%",
    end: "bottom 80%",
    scrub: true,
    ease: "power2.inOut",
    toggleActions: "play none reverse none", // Reverse the animation when scrolling back up
  },
});
gsap.to(".asset-2", {
  y: 100,
  rotation: -10, // Rotate 360 degrees during the animation
  duration: 1,

  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#d1",
    start: "top 80%",
    end: "bottom 80%",
    scrub: true,
    ease: "power2.inOut",
    toggleActions: "play none reverse none", // Reverse the animation when scrolling back up
  },
});

gsap.to(".c1", {
  y: -50,
  rotation: 8, // Rotate 360 degrees during the animation
  duration: 2,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#d1",
    start: "top 50%",
    end: "bottom 90%",
    scrub: true,
    ease: "power2.inOut",
    toggleActions: "play none reverse none", // Reverse the animation when scrolling back up
  },
});

gsap.to(".c2", {
  y: 20,
  rotation: -10, // Rotate 360 degrees during the animation
  duration: 2,
  delay: 1,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#d1",
    start: "top 50%",
    end: "bottom 90%",
    scrub: true,
    ease: "power2.inOut",
    toggleActions: "play none reverse none", // Reverse the animation when scrolling back up
  },
});

gsap.to(".t1", {
  opacity: 1,
  y: 20,
  duration: 1,
  delay: 0,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#d1",
    start: "top 70%",
    end: "bottom 90%",
    scrub: true,
  },
});

gsap.to("#card", {
  y: 400,
  duration: 2,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#div2",
    start: "bottom 99%",
    scrub: true,
    ease: "power2.inOut",
    toggleActions: "play none reverse none", // Reverse the animation when scrolling back up
  },
});

gsap.to(".updiv", {
  y: 100,
  duration: 1,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#div2",
    start: "top 5%",
    scrub: true,
    ease: "power2.inOut",
    toggleActions: "play none reverse none", // Reverse the animation when scrolling back up
  },
});

gsap.to(".movtextar", {
  x: 650,
  duration: 3,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "horizntlswiper",
    start: "top 5%",
    scrub: true,
    ease: "power2.inOut",
    toggleActions: "play none reverse none", // Reverse the animation when scrolling back up
  },
});

swiper4 = new Swiper(".mySwiperarticle", {
  loop: true,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000, // Delay in milliseconds between slides
    reverseDirection: true, // This is the reverse option
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1232: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },

  speed: 3000, // Adjust the speed (in milliseconds)
  effect: "slide",
});

swiper5 = new Swiper(".mySwiperarticle2", {
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
   autoplay: {
     delay: 2000, // Delay in milliseconds between slide
   },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  // on: {
  //   slideChangeTransitionEnd: function () {
  //       swiper5.autoplay.stop(); // stop autoplay after the first transition
  //       swiper5.params.autoplay.disableOnInteraction = true; // disable autoplay on interaction
  //   },},

  speed: 3000, // Adjust the speed (in milliseconds)
  effect: "slide",
});



   
document.getElementById('x1').addEventListener('mouseover', function() {
  document.getElementById('x1').classList.add('hidden');
  document.getElementById('x2').classList.remove('hidden');
});

document.getElementById('x2').addEventListener('mouseout', function() {
  document.getElementById('x1').classList.remove('hidden');
  document.getElementById('x2').classList.add('hidden');
});


document.getElementById('f1').addEventListener('mouseover', function() {
  document.getElementById('f1').classList.add('hidden');
  document.getElementById('f2').classList.remove('hidden');
});

document.getElementById('f2').addEventListener('mouseout', function() {
  document.getElementById('f1').classList.remove('hidden');
  document.getElementById('f2').classList.add('hidden');
});

document.getElementById('i1').addEventListener('mouseover', function() {
  document.getElementById('i1').classList.add('hidden');
  document.getElementById('i2').classList.remove('hidden');
});

document.getElementById('i2').addEventListener('mouseout', function() {
  document.getElementById('i1').classList.remove('hidden');
  document.getElementById('i2').classList.add('hidden');
});


document.getElementById('l1').addEventListener('mouseover', function() {
  document.getElementById('l1').classList.add('hidden');
  document.getElementById('l2').classList.remove('hidden');
});

document.getElementById('l2').addEventListener('mouseout', function() {
  document.getElementById('l1').classList.remove('hidden');
  document.getElementById('l2').classList.add('hidden');
});


document.getElementById('y1').addEventListener('mouseover', function() {
  document.getElementById('y1').classList.add('hidden');
  document.getElementById('y2').classList.remove('hidden');
});

document.getElementById('y2').addEventListener('mouseout', function() {
  document.getElementById('y1').classList.remove('hidden');
  document.getElementById('y2').classList.add('hidden');
});




document.getElementById('t1').addEventListener('mouseover', function() {
  document.getElementById('t1').classList.add('hidden');
  document.getElementById('t2').classList.remove('hidden');
});

document.getElementById('t2').addEventListener('mouseout', function() {
  document.getElementById('t1').classList.remove('hidden');
  document.getElementById('t2').classList.add('hidden');
});


document.addEventListener("DOMContentLoaded", function() {
  var toggleButton = document.getElementsByClassName('navbar-toggler')[0]; 
  var myDiv = document.getElementById('hedblur');

  toggleButton.addEventListener('click', function() {
      if (myDiv.style.display === 'none') {
          myDiv.style.display = 'block';
      } else {
          myDiv.style.display = 'none';
      }
  });
});
