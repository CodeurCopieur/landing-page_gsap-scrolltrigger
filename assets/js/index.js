gsap.registerPlugin(ScrollTrigger);

const secondSection = document.getElementById('secondSection');

const menuSecond = document.getElementById('menuSecond');
const imageFirst = document.getElementById('imageFirst');
const imageSecond = document.getElementById('imageSecond');


gsap.from("#menu > li", {
  duration: .5,
  opacity: 0,
  y: -20,
  stagger: .2,
  delay: .5
});

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
})

gsap.to("#heading-1", {
  scrollTrigger: {
    trigger: "#heading-1",
    scrub: true,
    start: '150% center'
  },
  color: '#fff',
  duration: 1.5
})

