import gsap from "gsap";

export const scrollAnimation = (position, target, onUpdate) => {
  const tl = gsap.timeline();

  tl.to(position, {
    x: 10.583887969,
    y: 0.2639599244,
    z: 0.0083473267,
    scrollTrigger: {
      trigger: "#brick",
      start: "top bottom",
      end: "top top",
      scrub: 2,
      immediateRender: false,
    },
    onUpdate,
  })
    .to(target, {
      x: 8.938791103,
      y: -0.3451976648,
      z: -6.7874964804,
      scrollTrigger: {
        trigger: "#recruitment",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    })
   

    .to(".applicationForm", {
      opacity: 1,
      scrollTrigger: {
        trigger: "#recruitment",
        start: "top bottom",
        end: "top top",
        scrub: 2,
        immediateRender: false,
      },
    });
  tl.to(position, {
    x: -7.935627897,
    y:6.3554422400,
    z: -8.7706224121,
    scrollTrigger: {
      trigger: "#recruitment",
      start: "top bottom",
      end: "top top",
      scrub: 5,
      immediateRender: false,
    },
    onUpdate,
  })
   ;
};