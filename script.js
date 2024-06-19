var tl = gsap.timeline()




tl.from(".details h1",{
    // transform :"translate : -100%",
    transform:"translateX(-200%)",
    duration:0.2,
    delay:0.2


})

tl.from(".nav , .nav .nav-menu p",{
    y:-200,
    // duration:0.5,
    // delay:0.5,
    stagger:0.1,
    scrub:2

})
tl.from(".details span",{
    opacity:0,
    scale:2

})