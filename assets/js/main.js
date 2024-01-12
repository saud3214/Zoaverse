

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
        scale: 0.8,
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

let section1 = gsap.utils.toArray(".panel");

gsap.to(section1, {
  xPercent: -100 * (section1.length - 1),
  ease: "inOut",
  scrollTrigger: {
    trigger: ".container1",
    pin: true,
    scrub: 1,
    snap: 1 / (section1.length - 1),
    end: () => "+=" + document.querySelector(".container1").offsetWidth
  }
});


function showDiv2() {
  gsap.to("#div1", { y: "-100%", duration: 2, ease: "power2.inOut" });
  gsap.to("#div2", { y: "0%", duration: 0.5, ease: "power2.inOut", onComplete: scaleDiv3 });
}

function scaleDiv3() {
  gsap.to("#textdiv", { opacity: 1, duration: 2, ease: "power2.inOut" ,delay:2 ,y:-50,});
  gsap.to("#div3", { scale: 0.85, duration: 2, ease: "power2.inOut", delay: 2,
  // css: {
  //   clipPath: "polygon(50% 0, 58% 12%, 100% 12%, 100% 100%, 0 100%, 0 0)" // Only provide the styles, not the property name
  // } 
  
 });
  gsap.to("#card", { opacity: 1, duration: 2, ease: "power2.inOut" ,delay:2 ,y:-50, });
  gsap.to("#header", { opacity: 1, duration: 2, ease: "power2.inOut" ,delay:2 ,y:40, });

  gsap.to(".roundpic", { duration: 2, delay: 2, borderRadius: "100px" });
  gsap.to(".roundvideo", { duration: 2, delay: 2, borderRadius: "100px" });

}

function showhed() {
  gsap.to(".roundvideo", { duration: 2, delay: 5, borderRadius: "100px" });

}

