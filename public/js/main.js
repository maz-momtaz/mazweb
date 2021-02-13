gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({ scroller: ".trigger" });

gsap.utils.toArray(".nav-item").forEach(nav => {
  let bigLink = nav.querySelector(".big-link"),
      navLink = nav.querySelector(".nav-link"),
      veil = nav.querySelector(".veil"),
      linkAnim = gsap.timeline({delay: 0, duration: 0, paused: true, ease: "none"});
  
  linkAnim.to(navLink, {x: 5, opacity: 0})
    .to(bigLink, {right: 0})
    .to(veil, {display: "block", opacity: 1, delay: -1});
  
  navLink.addEventListener("mouseenter", () => linkAnim.play() );
  navLink.addEventListener("mouseleave", () => linkAnim.reverse() );
});

// Hire me button
document.getElementById("mybtn").addEventListener("click", function(){
    console.log("clicked");
    var elmnt = document.getElementById("contact");
        elmnt.scrollIntoView({behavior: 'smooth'});

});
// Hire me button mobile
document.getElementById("contact-mobile").addEventListener("click", function(){
    console.log("clicked");
    var elmnt = document.getElementById("contact");
        elmnt.scrollIntoView({behavior: 'smooth'});

});


// let secTwo = gsap.timeline({
//     defaults: {delay: 0.1, ease: "none"},
//     scrollTrigger: {
//         trigger: ".two",
//         start: 'center 55%',
//         toggleActions: 'play none restart reset'
//     }
// });

// secTwo.to(".bullet-one", {background: "var(--green)", width: "100%"})
//       .to(".bullet-two", {background: "var(--green"})
//       .to(".bullet-one", {marginLeft: "100%", width: "12px"});


function binary() {
	var elements = document.getElementsByClassName('binary'); // get all elements
  
	for(var i = 0; i < elements.length; i++){
    var backGround = "images/"+Math.floor(Math.random() * 2) +".svg";
		elements[i].style.background = "url("+backGround+")";
	}
}

window.setInterval(binary, 400);
