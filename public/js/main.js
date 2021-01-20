gsap.registerPlugin(ScrollTrigger);

const menuIconOpen = document.getElementById('menu-icon-open');
const menuIconClose = document.getElementById('menu-icon-close');
gsap.to(".test",{
    scrollTrigger: {
        trigger: ".test",
        markers: true
    },
    x: 400,
    duration: 2
});
menuIconOpen.addEventListener('click', function (event) {
    event.preventDefault;
    gsap.to(menuIconOpen, {display: 'none', delay: 0, duration: 0});
    gsap.to(".nav", {left: '0', delay: 0, duration: 1, ease: 'expo'});
    gsap.from(".nav-links a", {x:-100, opacity: 0, stagger: 0.1, delay: 0.7, ease:'back'});
    gsap.from(".social", {opacity: 0, delay: 1.2, duration: 1});
    gsap.to(menuIconClose, {display: 'block', delay: 0.5, duration: 0});
    
});
menuIconClose.addEventListener('click', function (event) {
    event.preventDefault;
    gsap.to(".nav", {left: '-100vw', delay: 0, duration: 1, ease: 'none'});
    gsap.to(menuIconClose, {display:'none', delay: 0, duration: 0});
    gsap.to(menuIconOpen, {display: 'block', delay: 0.5, duration: 0});
    
    
});

gsap.to(".obj-01", {rotate: 360, repeat: -1, duration: 20, ease: 'none'});
gsap.to(".obj-02", {rotate: 360, repeat: -1, duration: 14, ease: 'none'});
gsap.to(".obj-03", {rotate: -360, repeat: -1, duration: 20, ease: 'none'});
gsap.to(".obj-04", {rotate: 360, repeat: -1, duration: 20, ease: 'none'});
gsap.to(".obj-05", {rotate: 360, repeat: -1, duration: 40, ease: 'none'});
gsap.to(".obj-06", {rotate: -360, repeat: -1, duration: 30, ease: 'none'});
gsap.to(".obj-07", {rotate: 360, repeat: -1, duration: 30, ease: 'none'});
gsap.to(".obj-08", {rotate: -360, repeat: -1, duration: 60, ease: 'none'});




