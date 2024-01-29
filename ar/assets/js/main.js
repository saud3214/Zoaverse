

// document.getElementById('animateButton').addEventListener('click', function () {
//     gsap.to('.main_div', { duration: 1, y: '-100%', ease: 'power2.out', onComplete: revealP2 });
//   });

//   function revealP2() {
//     gsap.to('.p2', { duration: 1, display: 'block', opacity: 1, ease: 'power2.out' });
//   }


document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP scroll-triggered animation
    gsap.to("#pdiv2", {
        duration: 3,
        delay:1,

        scrollTrigger: {
          trigger: "#pdiv2",
          start: 'top center',
          end: 'bottom center',
          scrub: true
        }
      });
    });
  
    document.addEventListener('DOMContentLoaded', function() {
        gsap.registerPlugin(ScrollTrigger);
    
        // GSAP scroll-triggered animation for zoomImage
        gsap.to('#zoomImage', {
          duration: 3,
          scale: 1.4,
          delay:3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#zoomImage',
            start: 'top 90%', // Adjust as needed based on when you want the animation to start
            end: 'top top',
            scrub: true
          }
        });
      });


// const header = document.querySelector('.header');
//   const sections = document.querySelectorAll('.triganimation');

//   // GSAP scroll-triggered animation
//   gsap.timeline({
//     opacity:1,
//     scrollTrigger: {
//       trigger: sections[1],
//       start: 'top end',
//       end: 'bottom end',
//       y:100,
//       toggleActions: 'play none none reverse'
      
//     }
//   })
//   .to(header, { duration: 2, opacity: 1, display: 'block',ease: 'power2.out' });

//   // GSAP initial fade in animation
//   gsap.to(header, { duration: 2, opacity: 1, ease: 'power2.out' });


  // document.addEventListener('DOMContentLoaded', function() {
  //   gsap.registerPlugin(ScrollTrigger);

  //   // GSAP scroll-triggered animation for the card
  //   gsap.from(".card", {
  //     y: 300, // Start from a lower position (off-screen)
  //     opacity: 0, // Start with 0 opacity
  //     duration: 2, // Animation duration
  //     ease: "power2.out", // Easing function
  //     scrollTrigger: {
  //       trigger: ".card",
  //       start: 'top 100%', // Adjust as needed based on when you want the animation to start
  //       end: 'top center',
  //       scrub: true
  //     }
  //   });
  // });



//   const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)




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
    
  }
});


function showDiv2() {
  gsap.to("#div1", { y: "-100%", duration: 2, ease: "power2.inOut" });
  gsap.to("#div2", { y: "0%", duration: 0.5, ease: "power2.inOut", onComplete: scaleDiv3 });
}

function scaleDiv3() {
  gsap.to("#textdiv", { opacity: 1, duration: 2, ease: "power2.inOut" ,delay:2 ,y:-50,});
  gsap.to("#div3", { scale: 0.90, duration: 2, ease: "power2.inOut", delay: 2,
  // css: {
  //   clipPath: "polygon(50% 0, 58% 12%, 100% 12%, 100% 100%, 0 100%, 0 0)" // Only provide the styles, not the property name
  // } 
  
 });
  gsap.to("#card", { opacity: 1, duration: 2, ease: "power2.inOut" ,delay:2  });
  gsap.to("#header", { opacity: 1, duration: 2, ease: "power2.inOut" ,delay:2 ,y:10, });

  gsap.to(".roundpic", { duration: 2, delay: 2, borderRadius: "100px" });
  gsap.to(".roundvideo", { duration: 2, delay: 2, borderRadius: "100px" });

}

function showtxt() {
  gsap.to("#textmain", { opacity: 1, duration: 2, ease: "power2.inOut" ,delay:2 ,y:-50,});

}

gsap.to(".img1", {
  y: 0,
  ease: "power2.inOut",
  scrollTrigger: {
      trigger: "#d1",
      start: "top 90%",
      end: "bottom 90%",
      scrub: true,
      ease:"power2.inOut",
      duration:1,
      toggleActions: "play none reverse none", // Reverse the animation when scrolling back up
  },
});

gsap.to(".e1", {
  y: -150,
  rotation: -10, // Rotate 360 degrees during the animation
  duration:1,

  ease: "power2.inOut",
  scrollTrigger: {
      trigger: "#d1",
      start: "top bottom",
      end: "bottom 80%",
      scrub: true,
      ease:"power2.inOut",
      toggleActions: "play none reverse none", // Reverse the animation when scrolling back up
  },
});
gsap.to(".s1", {
  y: 0,
  rotation: -360, // Rotate 360 degrees during the animation
  duration:1,

  ease: "power2.inOut",
  scrollTrigger: {
      trigger: "#d1",
      start: "top 90%",
      end: "bottom 90%",
      scrub: true,
      ease:"power2.inOut",
      toggleActions: "play none reverse none", // Reverse the animation when scrolling back up
  },
});


gsap.to(".e2", {
  y: -80,
  duration:2,
  delay:2,
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
  duration:1,

  ease: "power2.inOut",
  scrollTrigger: {
      trigger: "#d1",
      start: "top 80%",
      end: "bottom 80%",
      scrub: true,
      ease:"power2.inOut",
      toggleActions: "play none reverse none", // Reverse the animation when scrolling back up
  },
});
gsap.to(".asset-2", {
  y: 80,
  rotation: -10, // Rotate 360 degrees during the animation
  duration:1,

  ease: "power2.inOut",
  scrollTrigger: {
      trigger: "#d1",
      start: "top 80%",
      end: "bottom 80%",
      scrub: true,
      ease:"power2.inOut",
      toggleActions: "play none reverse none", // Reverse the animation when scrolling back up
  },
});

gsap.to(".c1", {
  y: -50,
  rotation: 8, // Rotate 360 degrees during the animation
  duration:2,
  ease: "power2.inOut",
  scrollTrigger: {
      trigger: "#d1",
      start: "top 50%",
      end: "bottom 90%",
      scrub: true,
      ease:"power2.inOut",
      toggleActions: "play none reverse none", // Reverse the animation when scrolling back up
  },
});

gsap.to(".c2", {
  y: 20,
  rotation: -10, // Rotate 360 degrees during the animation
  duration:2,
  delay:1,
  ease: "power2.inOut",
  scrollTrigger: {
      trigger: "#d1",
      start: "top 50%",
      end: "bottom 90%",
      scrub: true,
      ease:"power2.inOut",
      toggleActions: "play none reverse none", // Reverse the animation when scrolling back up
  },
});



gsap.to(".t1", {
  opacity: 1,
  y:  0,
  duration: 2,
  delay:2,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#d1",
    start: "top 40%",
    end: "bottom 90%",
    scrub: true,
  },
});


gsap.to("#card", {
  y: 400,
  duration:2,
  ease: "power2.inOut",
  scrollTrigger: {
      trigger: "#div2",
      start: "bottom 99%",
      scrub: true,
      ease:"power2.inOut",
      toggleActions: "play none reverse none", // Reverse the animation when scrolling back up
  },
});

gsap.to(".updiv", {
  y: 100,
  duration:1,
  ease: "power2.inOut",
  scrollTrigger: {
      trigger: "#div2",
      start: "top 5%",
      scrub: true,
      ease:"power2.inOut",
      toggleActions: "play none reverse none", // Reverse the animation when scrolling back up
  },
});
// gsap.to(".movtext", {
//   x: -800,
//   duration:3,
//   ease: "power2.inOut",
//   scrollTrigger: {
//     trigger: "horizntlswiper",
//     start: "top 5%",
//     scrub: true,
//     ease:"power2.inOut",
//     toggleActions: "play none reverse none", // Reverse the animation when scrolling back up
// },
// });


gsap.to(".movtextar", {
    x: 650,
    duration:3,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: "horizntlswiper",
      start: "top 5%",
      scrub: true,
      ease:"power2.inOut",
      toggleActions: "play none reverse none", // Reverse the animation when scrolling back up
  },
  });