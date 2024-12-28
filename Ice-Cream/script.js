var tl = gsap.timeline(
    {
        scrollTrigger: {
            trigger: "#s1",
            start: "0% 80%",
            end: "50% 50%",
            scrub: true,
        }
    }
)
var tl1 = gsap.timeline(
    {
        scrollTrigger: {
            trigger: "#s2",
            start: "0% 80%",
            end: "50% 50%",
            scrub: true,
        }
    }
)
var tl2 = gsap.timeline(
    {
        scrollTrigger: {
            trigger: "#s3",
            start: "0% 50%",
            end: "50% 50%",
            scrub: true,
        }
    }
)

tl.to(".hero-center-image", {
    top: "129%",
    left: "52.5%",
    width: "17vw",
    rotate: "0",

})

tl1.to(".hero-center-image", {
    top: "200%",
    left: "27.3%",
    width: "11vw",


})

tl2.to(".hero-center-image", {
    top: "245%",
    left: "30%",
    width: "17vw",
    rotate: "-45deg",


})