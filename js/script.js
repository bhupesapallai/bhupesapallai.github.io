$(document).ready(function () {
var silder = $(".owl-carousel");
silder.owlCarousel({
autoplay: true,
autoplayTimeout: 5000,
autoplayHoverPause: false,
items: 1,
stagePadding: 20,
center: true,
nav: false,
margin: 50,
dots: true,
loop: true,
responsive: {
0: { items: 1 },
480: { items: 1 },
575: { items: 1 },
768: { items: 1 },
991: { items: 1 },
1200: { items: 1 }
}
});
});

var loader;

function myFunction() {
  loader = setTimeout(showPage, 500);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("body").style.display = "flex";
}