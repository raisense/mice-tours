let tl = new TimelineLite({
  paused: true
});

tl.fromTo(
  "header",
  2,
  {
    scale: 1.1,
    blur: 20
  },
  {
    scale: 1,
    blur: 0
  }
)
  .fromTo(
    ".logo",
    {
      y: "-30%",
      opacity: 0
    },
    {
      y: 0,
      opacity: 1
    },
    "-=0.4"
  )
  .fromTo(
    ".language",
    {
      y: "-30%",
      opacity: 0
    },
    {
      y: 0,
      opacity: 1
    },
    "-=0.3"
  )
  .staggerTo(
    ".hidetext",
    1.5,
    {
      y: "0%",
      ease: Power4.easeOut
    },
    0.15
  )
  .staggerFromTo(
    ".card",
    1,
    {
      opacity: 0,
      y: 40
    },
    {
      opacity: 1,
      y: 0,
      ease: Power4.easeOut
    },
    0.1,
    "-=0.5"
  )
  .fromTo(
    ".hero-section img",
    3,
    {
      scale: 0,
      rotate: 0
    },
    {
      scale: 1,
      opacity: 1,
      rotate: 360,
      onComplete: () => {
        document.body.style = "overflow-y: scroll";
        console.log("hi");
      }
    },

    "-=1.5"
  )
  .fromTo(
    ".hero-section img",
    100,
    {
      rotate: 0
    },
    {
      scale: 1,
      ease: Linear.easeNone,
      rotate: 360,
      repeat: -1
    },
    "-=0"
  );

tl.play();
