(function () {
  let socials = document.querySelectorAll(".social div");

  //   console.log(socials);
  socials.forEach((social, index) => {
    // console.log(social, index);
    social.style.animation = `moveIn 1s cubic-bezier(.51, .92, .24, 1.15) forwards ${
      index / 8 + 0.2
    }s`;
  });
})();
