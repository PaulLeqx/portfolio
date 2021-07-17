//INTRODUCTION

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
}

gsap.from('.animated-span', 
  {
    display: 'none',
    duration: 1,
    y: '100%',
    opacity: 0,
    delay: 3.1,
    stagger: {
      amount: .8
    }
  },
);

gsap.from('.whiteline__intro', 
  {
    display: 'none',
    duration: 1,
    width: 0,
    delay: 5.1,    
  }
);

gsap.from('.introduction__technos--techno', {
  duration: 1,
  opacity: 0,
  delay: 5.1,
});

gsap.from('.learn', {
  duration: 1,
  opacity: 0,
  delay: 5.1
});

//PROJECTS

gsap.fromTo('.projects', {
  opacity: 0,
  y:"100%"
}, {
  opacity: 1,
  y: "0%",
  duration: 1,
  delay: 5,
  scrollTrigger: {
    trigger: '.projects',
    start: 'center bottom'
  }
})

// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.projects',
//     start: 'center bottom'
//   }
// });

// gsap.from('.words-alone__work', {
//   display: 'none',
//   opacity: 0,
//   duration: 1,
//   delay: 1,
//   scrollTrigger: {
//     trigger: '.projects',
//     start: 'center bottom'
//   }
// });

// tl.from(".projects__animated--span", {
//   y: "100%",
//   opacity: 0,
//   duration: .8,
//   stagger: {
//     amount: .8
//   }
// })
// .from('.whiteline__projects', {
//   width: 0,
//   duration: .8,
// })
// .from('.projects__content', {
//   duration: .8,
//   y: "100%",
//   opacity: 0
// })
// .from('.projects__container--project', {
//   duration: .8,
//   y: "100%",
//   opacity: 0
// })

//ME
let tlMe = gsap.timeline({
  scrollTrigger: {
    trigger: '.myself',
    start: 'center bottom'
  }
});

tlMe.from(".me__animated--span", {
  y: "100%",
  opacity: 0,
  duration: .8
})
.from('.whiteline__me', {
  width: 0,
  duration: .8
})
.from('.me__content', {
  y: "100%",
  duration: .8,
  opacity: 0
})

//Loader

let loaderEl = document.querySelector('.loader');
let htmlEl = document.querySelector('html');
let mainEl = document.querySelector("main");
let headerLoadingEl = document.querySelector("header");
console.log(htmlEl);
setTimeout(() => {
  loaderEl.style.display = "none";
  htmlEl.style.overflowY = "scroll";
  mainEl.style.display = "block";
  headerLoadingEl.classList.remove('header__loading');
  console.log("done");
}, 3000);