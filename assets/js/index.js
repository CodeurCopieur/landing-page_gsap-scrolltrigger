gsap.registerPlugin(ScrollTrigger);

gsap.from("#menu > li", {
  duration: .5,
  opacity: 0,
  y: -20,
  stagger: .2,
  delay: .5
});

gsap.from("#menuSecond > li", {
  duration: .5,
  opacity: 0,
  y: -20,
  stagger: .2,
  delay: .8
});

gsap.from("#imageFirst", {
  duration: .7,
  opacity: 0,
  y: -30,
  delay: .5
});

gsap.from("#imageSecond", {
  duration: .7,
  opacity: 0,
  y: -30,
  delay: .6
});

gsap.from("#firstSection #heading-1", {
  duration: .7,
  opacity: 0,
  y: -30,
  delay: .6
});

gsap.from("#firstSection p", {
  duration: .7,
  opacity: 0,
  y: -30,
  delay: .7
});


gsap.from("#firstSection a", {
  duration: .7,
  opacity: 0,
  y: -30,
  delay: .8 
});

//scrollTrigger

gsap.to("#imageFirst", {
  scrollTrigger: {
    trigger: "#imageFirst",
    scrub: true,
    start: '110% center'
  },
  duration: 1.1,
  scale: 1.2,
  height: 250
});

gsap.to("#imageSecond", {
  scrollTrigger: {
    trigger: "#imageSecond",
    scrub: true,
    start: '80% center'
  },
  duration: 1.1,
  scale: 1.2,
  height: 380
});

gsap.to("#firstSection h1", {
  scrollTrigger: {
    trigger: "#firstSection h1",
    scrub: true,
    start: '150% center'
  },
  color: '#fff',
  duration: 1.5
});

gsap.to("#firstSection p", {
  scrollTrigger: {
    trigger: "#firstSection p",
    scrub: true,
    start: '150% center'
  },
  color: '#fff',
  duration: 1.5
});

gsap.to("#firstSection a", {
  scrollTrigger: {
    trigger: "#firstSection a",
    scrub: true,
    start: '150% center'
  },
  color: '#fff',
  duration: 1.5
});

gsap.to("#secondSection h1", {
  scrollTrigger: {
    trigger: "#secondSection h1",
    scrub: true,
    toggleClass: 'active',
    start: 'top center'
  },
  duration: 1.5,
  y: 40,
  opacity: 0
});


gsap.to("#secondSection .component__box", {
  scrollTrigger: {
    trigger: "#secondSection .component__box",
    scrub: true,
    toggleClass: 'active',
    start: '-10% center'
  },
  duration: 1.5,
  width: 0,
  opacity: 0
});

gsap.to("#secondSection img", {
  scrollTrigger: {
    trigger: "#secondSection img",
    scrub: true,
    toggleClass: 'active',
    start: '-60% bottom'
  },
  duration: 1.5,
  height: 0,
  scale: 1.3,
  opacity: 0
});

gsap.to("#secondSection .component__quote", {
  scrollTrigger: {
    trigger: "#secondSection .component__quote",
    scrub: true,
    toggleClass: 'active',
    start: '-60% bottom'
  },
  duration: 1.5,
  height: 0,
  scale: 1.3,
  opacity: 0
});

gsap.to("#secondSection h2", {
  scrollTrigger: {
    trigger: "#secondSection h2",
    scrub: true,
    toggleClass: 'active',
    start: '-60% bottom'
  },
  duration: 1.5,
  y: 40,
  opacity: 0
});

gsap.to("#secondSection a", {
  scrollTrigger: {
    trigger: "#secondSection a",
    scrub: true,
    toggleClass: 'active',
    start: '-60% bottom'
  },
  duration: 1.5,
  y: 40,
  opacity: 0
});

