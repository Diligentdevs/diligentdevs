function gotoFunction(url) {
  window.location = url;
}
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
function alertSuccess() {
  alert("Thank You for your visit");
}
