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
  gsap.to("#div2", {
    y: "0%",
    duration: 0.5,
    ease: "power2.inOut",
    onComplete: scaleDiv3,
  });
}

function scaleDiv3() {
  gsap.to("#textdiv", {
    opacity: 1,
    duration: 2,
    ease: "power2.inOut",
    delay: 2,
    y: -50,
  });
  gsap.to("#div3", { scale: 0.9, duration: 2, ease: "power2.inOut", delay: 2 });
  gsap.to("#card", { opacity: 1, duration: 2, ease: "power2.inOut", delay: 2 });
  gsap.to("#header", {
    opacity: 1,
    duration: 2,
    ease: "power2.inOut",
    delay: 2,
    y: 10,
  });

  gsap.to(".roundpic", { duration: 2, delay: 2, borderRadius: "100px" });
  gsap.to(".roundvideo", { duration: 2, delay: 2, borderRadius: "100px" });
}

function showtxt() {
  gsap.to("#textmain", {
    opacity: 1,
    duration: 2,
    ease: "power2.inOut",
    delay: 2,
    y: -50,
  });
}

gsap.to(".img1", {
  y: 0,
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
    500: {
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
      spaceBetween: 50,
    },
  },

  speed: 3000, // Adjust the speed (in milliseconds)
  effect: "slide",
});
