const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function locogo(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locogo();


gsap.to(document.querySelector("#photo"), {
    scrollTrigger: {
        trigger: "#page2",
        start: "top top",
        // markers: true,
        scrub: 1,
        scroller: "#main"
    },
    rotate: 1,
    y: 4,
    duration: 0.5
});

gsap.to(document.querySelector("#content"), {
    scrollTrigger: {
        trigger: "#page2",
        start: "top 50%",
        end: "bottom bottom",
        // markers: true,
        scrub: 1,
        scroller: "#main"
    },
    rotate: -8,
    y: -150,
    duration:0.2,
    
    // ease: "expo-out"
});

gsap.to(document.querySelector("#rock"), {
    scrollTrigger: {
        trigger: "#page3",
        start: "top 50%",
        end: "bottom bottom",
        // markers: true,
        scrub: 5,
        scroller: "#main"
    },
    x:500,
    duration:2,
    delay:0.2,
    ease: "power3"
    

});
gsap.to(document.querySelector("#and"), {
    scrollTrigger: {
        trigger: "#page3",
        start: "top 50%",
        end: "bottom bottom",
        // markers: true,
        scrub: 5,
        scroller: "#main"
    },
    x:-500,
    duration:2,
    // delay:0.2,
    ease: "power3"
    
    
    // ease: "expo-out"
});
gsap.to(document.querySelector("#roll"), {
    scrollTrigger: {
        trigger: "#page3",
        start: "top 50%",
        end: "bottom bottom",
        // markers: true,
        scrub: 5,
        scroller: "#main"
    },
    x:500,
    duration:2,
    // delay:0.2,
    ease: "power3"
    
});
var page1 =document.querySelectorAll("#page1 h1 span")
var tl = gsap.timeline();

tl.from("#page1  ",{
    y:700,
    duration:0.5,
    ease:"slow(0.7,0.7,false)"

   },pony)

   tl.to("#main ",{
    backgroundColor:"#FFC1CE",
    duration:0.1,
      })

   tl.from(page1,{
     y:500,
    stagger:0.2,
    delay:0.6,
    duration:0.4,
ease:"back.inout",
   },pony)


   document.querySelector("nav h1").addEventListener("click", function() {
  
    gsap.to("menu",{
        top:"0%",
        duration:0.5,
        ease:"slow(0.7,0.7,false)"
    })
  });

  document.querySelector("nav h1").addEventListener("click", function() {
    document.querySelector("#yo").style.transform = `translateY(-100%)`;
    document.querySelector("#hi").style.transform = `translateY(-100%)`;  
});
  
document.querySelector("nav h2").addEventListener("click", function() {
    document.querySelector("#yo").style.transform = `translateY(0%)`;
    document.querySelector("#hi").style.transform = `translateY(100%)`;  
});
  
document.querySelector("nav h2").addEventListener("click", function() {
  
    gsap.to("menu",{
        top:"100%",
        duration:0.5,
        ease:"slow(0.7,0.7,false)"
    })
  });
