document.addEventListener("DOMContentLoaded", function () {
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollTopBtn.style.opacity = "1";
    } else {
      scrollTopBtn.style.opacity = "0";
    }
  };

  scrollTopBtn.onclick = function () {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };
});
