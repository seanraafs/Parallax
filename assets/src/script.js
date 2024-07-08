
window.onscroll = () => {
  document.querySelector(".mountains").style.marginBottom = -scrollY + "px";

  document.querySelector(".stars").style.marginTop = scrollY + "px";
  document.querySelector(".stars").style.marginRight = scrollY * 1.3 + "px";
  document.querySelector(".stars").style.opacity = (500 - scrollY) / 500;

  document.querySelector(".kanan").style.marginLeft = scrollY * 5 + "px";
  document.querySelector(".kanan").style.opacity = (500 - scrollY) / 500;

  document.querySelector(".kiri").style.marginRight = scrollY * 5 + "px";
  document.querySelector(".kiri").style.opacity = (500 - scrollY) / 500;

  document.querySelector(".awan-kiri").style.marginLeft = scrollY * 1 + "px";
  document.querySelector(".awan-kiri").style.opacity = (500 - scrollY) / 500;

  document.querySelector(".awan-kanan").style.marginRight = scrollY * 1 + "px";
  document.querySelector(".awan-kanan").style.opacity = (500 - scrollY) / 500;

  document.querySelector(".Home h1").style.marginTop = scrollY + "px";
  document.querySelector(".Home h1").style.opacity = (200 - scrollY) / 200;
};

// Smooth Scroll
$(document).ready(function () {
  $('a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });
});
