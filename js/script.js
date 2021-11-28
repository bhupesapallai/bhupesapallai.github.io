$(document).ready(function () {
var silder = $(".owl-carousel");
silder.owlCarousel({
autoplay: true,
autoplayTimeout: 3500,
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
480: { items: 2 },
575: { items: 2 },
768: { items: 2 },
991: { items: 2 },
1200: { items: 3 }
}
});
});